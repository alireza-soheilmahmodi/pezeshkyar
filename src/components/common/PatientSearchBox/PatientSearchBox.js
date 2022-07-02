import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Style from './PatientSearchBox.module.css';
import { usePatientSearch } from '../../../hooks/usePatientSearch';

const PatientSearchBox = () => {
  const [name, setName] = useState('');
  const result = usePatientSearch(name);

  const location = useLocation();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className={Style.container}>
      <label> جستجوی بیمار</label>

      <form>
        <input
          type="text"
          required
          onChange={(e) => handleChange(e)}
          value={name}
        />
      </form>

      <ul className={`list-group ${Style.resultContainer}`}>
        {result.map((item) => (
          <li className="list-group-item" key={item.id}>
            <Link to={`${location.pathname}/${item.id}`} className={Style.link}>
              {`${item.first_name} ${item.last_name}, ${item.national_id}`}
            </Link>
          </li>
        ))}
        {result.length > 0 && (
          <li className="list-group-item bg-info ">
            <Link
              to={'/app/createFile'}
              className={`${Style.link} ${Style.createFileB}`}
            >
              تشکیل پرونده
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
};

export default PatientSearchBox;
