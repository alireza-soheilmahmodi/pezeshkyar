import { NavLink } from 'react-router-dom';
import Style from './Sidebar.module.css';
import { BsVectorPen } from 'react-icons/bs';

import {
  FaSearch,
  FaFileMedical,
  FaMarker,
  FaSignOutAlt,
  FaHome,
  FaFileAlt,
  FaCloudDownloadAlt,
} from 'react-icons/fa';

const Sidebar = ({ expandSidebar }) => {
  let activeStyle = {
    color: '#dde2ff',
    borderRight: '4px solid white',
    backgroundColor: '#3e4049',
  };

  return (
    <div
      className={`d-none d-md-block ${
        expandSidebar ? 'col-md-3 col-lg-2' : Style.shrink
      } ${Style.right}`}
    >
      <div className={Style.logo}>
        <BsVectorPen />
        <span className={!expandSidebar ? 'd-none' : undefined}>
          سامانه پزشک یار
        </span>
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
            <span className={!expandSidebar ? 'd-none' : undefined}> خانه</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="patients"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaSearch className={Style.icons} />
            <span className={!expandSidebar ? 'd-none' : undefined}>
              جستجوی بیمار
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="createFile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaFileMedical className={Style.icons} />
            <span className={!expandSidebar ? 'd-none' : undefined}>
              تشکیل پرونده
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="addVisit"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaMarker className={Style.icons} />
            <span className={!expandSidebar ? 'd-none' : undefined}>
              {' '}
              افزودن ویزیت
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="References"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaFileAlt className={Style.icons} />
            <span className={!expandSidebar ? 'd-none' : undefined}>
              {' '}
              ارجاعات
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <a className={Style.navLink} href="http://185.110.191.72:8080/export">
            <FaCloudDownloadAlt className={Style.icons} />
            <span className={!expandSidebar ? 'd-none' : undefined}>
              دانلود داده ها
            </span>
          </a>
        </li>
        <li className="nav-item">
          <NavLink
            className={Style.navLink}
            to="logout"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaSignOutAlt className={Style.icons} />
            <span className={!expandSidebar ? 'd-none' : undefined}>خروج</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
