import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Style from './MyAppLayout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';
import { useState } from 'react';

const MyAppLayout = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  return (
    <>
      <Navbar />
      <div className={`${Style.row} row g-0`}>
        <Sidebar expandSidebar={expandSidebar} />
        <main
          className={`${Style.main} ${
            expandSidebar ? 'col-md-9 col-lg-10' : Style.fullWidth
          } g-0`}
        >
          <Header setExpandSidebar={setExpandSidebar} />
          <section className={Style.mainContent}>
            <Outlet />
          </section>
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
