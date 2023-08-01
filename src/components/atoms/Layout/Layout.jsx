import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div id="wrap">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
