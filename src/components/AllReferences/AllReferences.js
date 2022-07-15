import { useState, useEffect } from 'react';
import Style from './AllReferences.module.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading/Loading';
import Pagination from '../common/Pagination/Pagination';
import useAxios from '../../hooks/useAxios';

const formToUrl = (form) => {
  switch (form) {
    case 'Retina Consult':
      return 'retina_consult';
    case 'استرابیسم':
      return 'strabism';
    case 'Genetics':
      return 'genetics';
    case 'Glaucoma':
      return 'glaucoma';
    default:
      return '';
  }
};

const AllReferences = () => {
  const [refers, setRefers] = useState();
  const [fileLink, setFileLink] = useState();
  const axios = useAxios();

  const navigate = useNavigate();

  useEffect(() => {
    const getRefs = async () => {
      try {
        const refs = await axios.get('refers/');
        setRefers(refs.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRefs();
  }, []);

  useEffect(() => {
    const getNewPage = async () => {
      const fileUrl = fileLink.split('/').splice(-1);
      const newPageRefers = await axios.get(`refers/${fileUrl}`);
      setRefers(newPageRefers.data);
    };

    if (fileLink) {
      getNewPage();
    }
  }, [fileLink]);

  const pageChangeHandler = (link) => {
    setFileLink(link);
    setRefers();
  };

  if (!refers) return <Loading />;

  return (
    <div className={Style.container}>
      <div
        className="col-12 col-md-9 mt-4 m-auto"
        style={{
          boxShadow: '0 0 10px 1px #ccc',
          background: '#f2f2f2',
        }}
      >
        <table>
          <thead className={Style.thead}>
            <tr>
              <th className={Style.th}>نام و نام خانوادگی</th>
              <th className={Style.th}>فرم ارجاع داده شده</th>
              <th className={Style.th}>وضعیت</th>
              <th className={Style.th}>تاریخ و ساعت ثبت</th>
            </tr>
          </thead>
          <tbody>
            {refers &&
              refers.results.map((item, index) => (
                <tr
                  key={index}
                  className={Style.tr}
                  onClick={() => {
                    item.status !== 'پاسخ داده شده' &&
                      navigate(
                        `/app/answerRef/${formToUrl(item.form)}/${item.id}`
                      );
                  }}
                >
                  <td className={Style.td}>
                    {item.patient_summary.first_name +
                      ' ' +
                      item.patient_summary.last_name}
                  </td>

                  <td className={Style.td}>{item.form}</td>
                  <td
                    className={Style.td}
                    style={{
                      color: `${
                        item.status !== 'پاسخ داده شده' ? 'red' : 'green'
                      }`,
                    }}
                  >
                    {item.status}
                  </td>
                  <td className={Style.td}>{item.creation_date}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {refers && (
          <Pagination
            next={refers.next}
            prev={refers.previous}
            pageChangeHandler={pageChangeHandler}
          />
        )}
      </div>
    </div>
  );
};

export default AllReferences;
