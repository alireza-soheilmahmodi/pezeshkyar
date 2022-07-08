import Style from './Header.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const utlToTitle = {
  home: 'خانه',
  patients: 'بیمار',
  createFile: 'تشکیل پرونده',
  addVisit: 'افزودن ویزیت',
  form: 'فرم ها',
  set: 'ثبت فرم',
  edit: 'ویرایش فرم',
  get: 'مشاهده فرم',
  before_surgery: 'اطلاعات قبل عمل',
  after_surgery: 'اطلاعات بعد از عمل',
  epa: 'اطلاعات زیر بیهوشی کودکان',
  surgery: 'اطلاعات معاینات جراحی ',
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const Url = location.pathname.split('/').slice(2);

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
        <button onClick={() => navigate(-1)}>
          <BsChevronRight />
        </button>
        <button onClick={() => navigate(1)}>
          <BsChevronLeft />
        </button>
      </div>
      <div className={Style.title}>{title}</div>
    </div>
  );
};

export default Header;
