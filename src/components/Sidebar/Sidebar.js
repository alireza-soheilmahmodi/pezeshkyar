import { NavLink } from 'react-router-dom';
import Style from './Sidebar.module.css';
import { BsVectorPen } from 'react-icons/bs';

import {
  FaSearch,
  FaFileMedical,
  FaMarker,
  FaSignOutAlt,
  FaHome,
} from 'react-icons/fa';

const Sidebar = () => {
  let activeStyle = {
    color: '#dde2ff',
    borderRight: '8px solid white',
    backgroundColor: '#3e4049',
  };

  return (
    <div className={`col-md-3 col-lg-2 d-none d-md-block ${Style.right}`}>
      <div className={Style.logo}>
        <BsVectorPen />
        <span>سامانه پزشک یار</span>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            end
            className={Style.navLink}
            to="/app/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaHome className={Style.icons} />
            خانه
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="patients"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaSearch className={Style.icons} />
            جستجوی بیمار
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="createFile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaFileMedical className={Style.icons} />
            تشکیل پرونده
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="addVisit"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaMarker className={Style.icons} />
            افزودن ویزیت
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="logout"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaSignOutAlt className={Style.icons} />
            خروج
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
