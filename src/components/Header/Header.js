import Style from './Header.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  BsChevronRight,
  BsChevronLeft,
  BsPerson,
  BsJustify,
} from 'react-icons/bs';
import { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';

const utlToTitle = {
  home: 'خانه',
  patients: 'صفحه‌ی بیمار',
  createFile: 'تشکیل پرونده',
  addVisit: 'افزودن ویزیت',
  addReference: 'افزودن ارجاع',
  References: 'ارجاعات',
  answerRef: 'پاسخ ارجاع',
  form: 'فرم ها',
  set: 'ثبت فرم',
  edit: 'ویرایش فرم',
  get: 'مشاهده فرم',
  strabism: 'strabism',
  retina_consult: 'retina consult',
  genetics: 'ژنتیک',
  glaucoma: 'glaucoma',
  before_surgery: 'اطلاعات قبل عمل',
  after_surgery: 'اطلاعات بعد از عمل',
  epa: 'اطلاعات زیر بیهوشی کودکان',
  surgery: 'اطلاعات معاینات جراحی ',
};

const Header = ({ setExpandSidebar }) => {
  const axios = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const Url = location.pathname.split('/').slice(2);

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

  let title = '';
  Url.forEach((item) => {
    if (utlToTitle[item]) {
      title += utlToTitle[item] + ' / ';
    }
  });
  title = title.slice(0, -2);

  return (
    <div className={Style.header}>
      <div className={Style.navigations}>
        <button
          className={`${Style.hamburger} d-none d-md-flex`}
          onClick={() => setExpandSidebar((prev) => !prev)}
        >
          <BsJustify />
        </button>
        <button onClick={() => navigate(-1)}>
          <BsChevronRight />
        </button>
        <button onClick={() => navigate(1)}>
          <BsChevronLeft />
        </button>
      </div>
      <div className={Style.title}>{title}</div>
      <div className={Style.space}></div>
      <div className={Style.userContainer}>
        <div className={Style.user}>
          <span className={Style.userName}>{name}</span>
          <span className={Style.icon}>
            <BsPerson />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
