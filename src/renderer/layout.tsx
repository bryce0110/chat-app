import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
