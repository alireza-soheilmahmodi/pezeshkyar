import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark d-block d-md-none">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">
          <span>سامانه پزشک یار</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/app/home'} className="nav-link">
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/app/patients'} className="nav-link">
                جستجوی بیمار
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/app/createFile'} className="nav-link">
                تشکیل پرونده
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/app/addVisit'} className="nav-link">
                افزودن ویزیت
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/app/logout'} className="nav-link">
                خروج
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
