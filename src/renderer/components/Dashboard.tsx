import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChannelList from './ChannelList';
import Chat from './Chat';
import { SocketProvider } from '../context/SocketContext';

function Dashboard() {
  const socketUrl = 'ws://localhost:4000/api';

  return (
    <div className="flex h-screen w-screen layout">
      <SocketProvider url={socketUrl}>
        <Sidebar />
        <ChannelList />
        <Chat />
        <Outlet />
      </SocketProvider>
    </div>
  );
}

export default Dashboard;
