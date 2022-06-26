import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <article style={{ padding: '100px' }}>
      <h1>404</h1>
      <p>صفحه مورد نظر یافت نشد</p>
      <div className="flexGrow">
        <Link to="/app">برو به صفحه اصلی</Link>
      </div>
    </article>
  );
};

export default Missing;
