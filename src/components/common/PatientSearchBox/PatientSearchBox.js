import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Style from './PatientSearchBox.module.css';
import { usePatientSearch } from '../../../hooks/usePatientSearch';
import Loading from '../Loading/Loading';
import { FaSearch } from 'react-icons/fa';

const PatientSearchBox = () => {
  const [name, setName] = useState('');
  const [result, loadingResult] = usePatientSearch(name);
  const inputRef = useRef();
  const location = useLocation();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className={Style.container}>
      <form className={Style.searchField} onSubmit={(e) => e.preventDefault()}>
        <div className={Style.searchInput}>
          <span>
            <FaSearch />
          </span>
          <input
            className={
              inputRef.current?.value?.length > 0 && !loadingResult
                ? Style.removeBorder
                : ''
            }
            ref={inputRef}
            type="text"
            required
            onChange={(e) => handleChange(e)}
            value={name}
            placeholder="جستجوی بیمار..."
          />
        </div>
      </form>

      <ul className={`list-group ${Style.resultContainer}`}>
        {loadingResult && inputRef.current?.value?.length > 0 ? (
          <div className="d-flex justify-content-center p-3">
            <Loading />
          </div>
        ) : (
          <>
            {result.map((item) => (
              <li className="list-group-item" key={item.id}>
                <Link
                  to={`${location.pathname}/${item.id}`}
                  className={Style.link}
                >
                  {`${item.first_name} ${item.last_name}, ${item.national_id}`}
                </Link>
              </li>
            ))}

            {((inputRef.current?.value?.length > 0 && !loadingResult) ||
              result.length > 0) && (
              <li className={`${Style.lastLi} list-group-item bg-primary`}>
                <Link
                  to={'/app/createFile'}
                  className={`${Style.link} ${Style.createFileB}`}
                >
                  تشکیل پرونده
                </Link>
              </li>
            )}
          </>
        )}
      </ul>
    </section>
  );
};

export default PatientSearchBox;
