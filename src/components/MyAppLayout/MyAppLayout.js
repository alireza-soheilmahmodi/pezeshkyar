import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Style from './MyAppLayout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyAppLayout = () => {
  return (
    <>
      <Navbar />
      <div className={`${Style.row} row g-0`}>
        <Sidebar />
        <main className={`${Style.main} col-md-9 col-lg-10 col-sm-12 g-0`}>
          <Outlet />
        </main>
        <ToastContainer
          theme="dark"
          rtl
          style={{ fontSize: '1rem' }}
          position="top-center"
        />
      </div>
    </>
  );
};

export default MyAppLayout;
