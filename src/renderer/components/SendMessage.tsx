import React, { useState } from 'react';
import { Channel } from 'phoenix';
import { auth } from '../services/firebase';
import { sendMessage } from '../hooks/useChannel';

interface SendMessageProps {
  channel: Channel | null;
}

function SendMessage({ channel }: SendMessageProps) {
  const [message, setMessage] = useState('');

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim() === '') {
      // alert("Enter valid message");
      return;
    }

    const { currentUser } = auth;
    if (!currentUser) {
      // alert("User not authenticated");
      return;
    }
    // const createdAt = serverTimestamp();
    const { uid, displayName, photoURL } = currentUser;
    await sendMessage(channel, 'new_msg', {
      name: displayName,
      body: message,
      avatar: photoURL,
      uid,
    });
    // await addDoc(collection(db, 'messages'), {
    //   text: message,
    //   name: displayName,
    //   avatar: photoURL,
    //   createdAt,
    //   uid,
    // });
    setMessage('');
    // scroll.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form
      className="bottom-0 left-0 right-0 bg-slate-800"
      onSubmit={(e) => send(e)}
    >
      <div className="flex -mt-2 mb-6 px-4 py-1 bg-gray-500 items-center justify-between rounded-md text-gray-600">
        <input
          className="flex-auto border-transparent bg-transparent outline-none text-sm font-semibold m-0 text-white"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">
          <svg
            data-testid="send"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Send</title>
            <path d="M4.00952 22L24 12L4.00952 2L4 9.77778L18.2857 12L4 14.2222L4.00952 22Z" />
          </svg>
        </button>
      </div>
    </form>
    // <form className="send-message" onSubmit={(e) => sendMessage(e)}>
    //     <label htmlFor="messageInput" hidden>
    //         Enter Message
    //     </label>
    //     <input
    //         id="messageInput"
    //         name="messageInput"
    //         type="text"
    //         className="form-input__input"
    //         placeholder="type message..."
    //         value={message}
    //         onChange={(e) => setMessage(e.target.value)}
    //     />
    //     <button type="submit">Send</button>
    // </form>
  );
}

export default SendMessage;
