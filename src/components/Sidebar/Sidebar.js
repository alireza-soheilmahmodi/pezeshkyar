import { NavLink } from 'react-router-dom';
import Style from './Sidebar.module.css';
import { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';

const Sidebar = () => {
  let activeStyle = {
    color: '#dde2ff',
    borderRight: '4px solid white',
    backgroundColor: '#3e4049',
  };

  const axios = useAxios();
  const [name, setName] = useState('');

  useEffect(() => {
    const getName = async () => {
      try {
        const doctor = await axios.get('auth/users/me/');
        const doctorDetail = await axios.get(`doctors/${doctor.data.id}`);

        setName(
          `${doctorDetail?.data?.user?.first_name} ${doctorDetail?.data?.user?.last_name}`
        );
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getName();
  }, []);

  return (
    <div className={`col-md-3 col-lg-2 d-none d-md-block ${Style.right}`}>
      <label>{name}</label>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            end
            className={Style.navLink}
            to="/app"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            خانه
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="patients"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            جستجوی بیمار
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="createFile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            تشکیل پرونده
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="addVisit"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            افزودن ویزیت
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="logout"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            خروج
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
