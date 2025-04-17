import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Socket } from 'phoenix';

const SocketContext = createContext<{ socket: Socket | null }>({
  socket: null,
});

interface SocketProviderProps {
  children: React.ReactNode;
  options?: object; // Define the socket options, if needed
  url: string;
}

function SocketProvider({ children, options, url }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = new Socket(url, options);
    newSocket.connect();
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
      setSocket(null);
    };
  }, [options, url]);

  const contextValue = React.useMemo(() => ({ socket }), [socket]);

  if (!socket) return null;

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
}

SocketProvider.propTypes = {
  children: PropTypes.node,
};

SocketProvider.defaultProps = {
  children: null,
  options: {}, // Default value for options
};

export { SocketContext, SocketProvider };
