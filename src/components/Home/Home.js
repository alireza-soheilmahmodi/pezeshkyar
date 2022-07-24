import img from '../../assets/img/home.png';
import Style from './Home.module.css';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaFileMedical,
  FaMarker,
  FaSignOutAlt,
} from 'react-icons/fa';
const Home = () => {
  return (
    <div className="card bg-dark w-75">
      <img src={img} className="card-img-top"></img>
      <div className={`${Style.container} card-img-overlay`}>
        <h3 className={Style.title}>به سامانه پزشک یار خوش آمدید!</h3>
        <div className={Style.body}>
          <Link className={Style.Button} to={`/app/patients`}>
            <button className="btn btn-lg btn-block text-white">
              <FaSearch className={Style.icons} />
              جستجوی بیمار
            </button>
          </Link>

          <Link className={Style.Button} to={`/app/createFile`}>
            <button className="btn btn-lg btn-block text-white">
              <FaFileMedical className={Style.icons} />
              تشکیل پرونده
            </button>
          </Link>

          <Link className={Style.Button} to={`/app/addVisit`}>
            <button className="btn btn-lg btn-block text-white">
              <FaMarker className={Style.icons} />
              افزودن ویزیت
            </button>
          </Link>

          <Link className={Style.Button} to={`/app/logout`}>
            <button className="btn btn-lg btn-block text-white">
              <FaSignOutAlt className={Style.icons} />
              خروج
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
