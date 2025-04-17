import { Channel } from 'phoenix';
import { useEffect, useRef } from 'react';

function useEventHandler(
  channel: Channel | null,
  event: string,
  handler: Function,
) {
  const handlerRef = useRef(handler);
  // handlerRef.current = handler;

  useEffect(() => {
    if (!channel) {
      return () => {};
    }

    const ref = channel.on(event, (payload) => {
      handlerRef.current(payload);
    });

    return () => {
      channel.off(event, ref);
    };
  }, [channel, event]);
}

export default useEventHandler;
