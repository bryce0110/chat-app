import React from 'react';

import ChannelItem from './ChannelItem';

function ChannelList() {
  return (
    <div className="w-72 bg-medium-gray h-full flex flex-col items-start">
      <div className="w-full">
        <ChannelItem
          category="Category 1"
          serverName="Server 1"
          channels={['general', 'bideo-gane', 'memes']}
        />
      </div>
    </div>
  );
}

export default ChannelList;
