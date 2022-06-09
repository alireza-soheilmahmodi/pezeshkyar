import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const MyAppLayout = () => {
  const { width } = useWindowSize();

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-9 col-lg-10 col-sm-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppLayout;
