import { useState, useContext, useEffect } from 'react';
import { Channel, Push } from 'phoenix';
import { SocketContext } from '../context/SocketContext';

export const useChannel = (channelName: string, params?: object) => {
  const [channel, setChannel] = useState<Channel | null>(null);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    const chan = socket?.channel(channelName, params);

    chan?.join().receive('ok', (resp) => {
      console.log('Joined successfully', resp);
      setChannel(chan);
    });

    return () => {
      chan?.leave();
      setChannel(null);
    };
  }, [socket, channelName, params]);

  return channel;
};

function pushPromise(push: Push | null): Promise<any> {
  return new Promise((resolve, reject) => {
    if (!push) {
      reject(new Error('Push failed: push is null'));
    }

    push?.receive('ok', resolve)?.receive('error', reject);
  });
}

interface SendMessagePayload {
  name: string | null;
  body: string;
  avatar: string | null;
  uid: string | null;
}

export function sendMessage(
  channel: Channel | null,
  event: string,
  payload: SendMessagePayload,
): Promise<any> {
  if (!channel) {
    return Promise.reject(new Error('Channel is null'));
  }
  return pushPromise(channel.push(event, payload));
}
