import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormWrapper from '../common/formGetters/FormWapper/FormWrapper';
import FormField from '../common/formGetters/FormField/FormField';
import useAxios from '../../hooks/useAxios';
import Style from './PatientPage.module.css';
import patientDataLabels from '../../utils/patientDataLabels';
import patientFormsLabel from '../../utils/patientFormsLabel';
import Loading from '../common/Loading/Loading';
import { Link } from 'react-router-dom';

const PatientPage = () => {
  const { id } = useParams();
  const [patientInfo, setPatientInfo] = useState({});
  const [patientForms, setPatientForms] = useState({});

  const axios = useAxios();
  const [isLoading, setIsLoading] = useState(true);
  const [patientInfoExpand, setPatientInfoExpand] = useState(false);

  useEffect(() => {
    const getPatientInfo = async () => {
      try {
        const response = await axios.get(`/patients/${id}`);
        const response2 = await axios.get(`/forms/${id}`);
        setPatientInfo(response.data);
        setPatientForms(response2.data);
        setIsLoading(false);
        console.log(response2);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getPatientInfo();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={Style.container}>
      <FormWrapper label="اطلاعات بیمار" borderColor="#4351ff">
        <div
          className={Style.InfoWrapper}
          style={{ maxHeight: patientInfoExpand ? '1000px' : '370px' }}
        >
          {Object.entries(patientDataLabels).map(([key, label]) => (
            <FormField
              key={key}
              label={label}
              value={patientInfo[key]?.name || patientInfo[key]}
            />
          ))}
        </div>

        {/* dropdown button */}
        <div className={`${patientInfoExpand ? 'dropup' : 'dropdown'}`}>
          <button
            className="btn btn-outline-dark dropdown-toggle mx-auto d-block"
            onClick={() => setPatientInfoExpand((prev) => !prev)}
          ></button>
        </div>
      </FormWrapper>

      <div className={Style.form}>
        <h2>فرم های بیمار</h2>
        {Object.entries(patientFormsLabel).map(([key, label]) => (
          <FormWrapper label={label} key={key} borderColor="#20b534">
            <ul className={Style.formRow}>
              <li>تاریخ و ساعت</li>
              <li>چشم</li>
              <li>مشخصات دکتر</li>
              <li>جزئیات بیشتر</li>
            </ul>
            {patientForms[key].map((item, index) => {
              const urlArray = item?.url.split('/').slice(-3);
              let url = '';
              urlArray.forEach((element) => {
                url = url + `/${element}`;
              });
              return (
                <ul className={Style.formRow} key={index}>
                  <li>{item?.register_date}</li>
                  <li>{item?.eye_side || '----'}</li>
                  <li>
                    {item?.doctor?.user?.first_name +
                      ' ' +
                      item?.doctor?.user?.last_name}
                  </li>
                  <li>
                    <Link to={`/app/form/get${url}`}>مشاهده</Link>
                  </li>
                </ul>
              );
            })}
          </FormWrapper>
        ))}
      </div>
    </div>
  );
};

export default PatientPage;
