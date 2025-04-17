import React from 'react';
import { DocumentData } from 'firebase/firestore';

function Message({ message }: DocumentData) {
  function formatDate(date: Date | string): string {
    return new Date(date).toLocaleString();
  }

  return (
    <div className="flex relative space-x-2 p-2 rounded-md transition-colors ease-in-out duration-200 hover:bg-gray-700">
      <img
        className="rounded-full aspect-square object-cover w-10 h-10"
        width={40}
        height={40}
        src={message?.avatar || 'https://getstream.io/random_png/'}
        alt="User avatar"
      />
      <div>
        <div className="space-x-2">
          <span className="font-semibold text-sm text-white">
            {message?.name || 'Unknown User'}
          </span>
          {message.inserted_at && (
            <span className="text-xs text-gray-600">
              {formatDate(message.inserted_at)}
            </span>
          )}
        </div>
        <p className="text-sm text-white">{message.body}</p>
      </div>
    </div>
    // <div className={`chat-bubble`}>
    //     <img className="chat-bubble__avatar" src={message.avatar} alt="avatar" />
    //     <div className="chat-bubble__content">
    //         <p className="user-name">{message.name}</p>
    //         <p className="user-message">{message.text}</p>
    //     </div>
    // </div>
  );
}

export default Message;
