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
  const [visitDetails, setVisitDetails] = useState();
  const [fileLink, setFileLink] = useState();
  const axios = useAxios();

  const navigate = useNavigate();

  useEffect(() => {
    const getRefs = async () => {
      const refs = await axios.get('refers/');
      const visitDetail = [];
      for (let i = 0; i < refs.data.results.length; i++) {
        const urlList = refs.data.results[i].visit.split('/').splice(-2);
        const visitResult = await axios.get(`visits/${urlList[0]}`);
        visitDetail.push(visitResult.data);
      }
      setRefers(refs.data);
      setVisitDetails(visitDetail);
    };

    getRefs();
  }, []);

  useEffect(() => {
    const getNewPage = async () => {
      const fileUrl = fileLink.split('/').splice(-1);
      const newPageRefers = await axios.get(`refers/${fileUrl}`);
      const visitDetail = [];
      for (let i = 0; i < newPageRefers.data.results.length; i++) {
        const urlList = newPageRefers.data.results[i].visit
          .split('/')
          .splice(-2);
        const visitResult = await axios.get(`visits/${urlList[0]}`);
        visitDetail.push(visitResult.data);
      }
      setRefers(newPageRefers.data);
      setVisitDetails(visitDetail);
    };

    if (fileLink) {
      getNewPage();
    }
  }, [fileLink]);

  const pageChangeHandler = (link) => {
    setFileLink(link);
    setVisitDetails([]);
    setRefers();
  };

  if (!(visitDetails && refers)) return <Loading />;

  return (
    <div className={Style.container}>
      <div
        className="col-md-8 col-sm-12 mt-5 m-auto p-0"
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
              <th className={Style.th}>تاریخ و ساعت ثبت</th>
            </tr>
          </thead>
          <tbody>
            {refers &&
              visitDetails &&
              refers.results.map((item, index) => (
                <tr key={index} className={Style.tr}>
                  <td
                    onClick={() =>
                      navigate(
                        `/app/answerRef/${formToUrl(item.form)}/${item.id}`
                      )
                    }
                    className={Style.td}
                  >
                    {visitDetails[index].patient_summary.first_name +
                      ' ' +
                      visitDetails[index].patient_summary.last_name}
                  </td>
                  <td
                    onClick={() =>
                      navigate(
                        `/app/answerRef/${formToUrl(item.form)}/${item.id}`
                      )
                    }
                    className={Style.td}
                  >
                    {item.form}
                  </td>
                  <td
                    onClick={() =>
                      navigate(
                        `/app/answerRef/${formToUrl(item.form)}/${item.id}`
                      )
                    }
                    className={Style.td}
                  >
                    {item.creation_date}
                  </td>
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
