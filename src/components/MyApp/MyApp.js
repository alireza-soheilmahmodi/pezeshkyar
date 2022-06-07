import { Link } from 'react-router-dom';

const MyApp = () => {
  return (
    <article>
      <h1>خوش آمدید</h1>
      <p>صفحه اصلی سامانه</p>
      <Link to="/">login</Link>
    </article>
  );
};

export default MyApp;
