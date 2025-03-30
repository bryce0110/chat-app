import React from 'react';
import { Link } from 'react-router-dom';

type CategoryItemProps = {
  category: string;
  serverName: string;
  channels: string[];
};

function ChannelItem({ category, serverName, channels }: CategoryItemProps) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="mb-5">
      <div className="flex items-center text-gray-500 p-2">
        <button
          type="button"
          className="flex w-full items-center justify-start"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Collapse category' : 'Expand category'}
        >
          <div
            className={`${isOpen ? '' : '-rotate-90'} transition-all ease-in-out duration-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <span className="inline-block uppercase text-sm font-bold px-2">
            {category}
          </span>
        </button>
        <Link
          className="inline-block create-button"
          to={`/?createChannel=true&serverName=${serverName}&category=${category}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Link>
      </div>
      {isOpen && (
        <div>
          {channels.map((channel) => (
            <div className="w-full flex items-center mx-2" key={channel}>
              <button
                type="button"
                className="w-full flex items-center px-2 hover:bg-gray-200 rounded-md"
              >
                <span className="italic text-xl mr-2 text-gray-500">#</span>
                <span className="text-sm text-gray-500">{channel}</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChannelItem;
