import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChannelList from './ChannelList';

function Dashboard() {
  return (
    <div className="flex h-screen w-screen layout">
      <Sidebar />
      <ChannelList />
      <Outlet />
    </div>
  );
}

export default Dashboard;
