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
import DeleteFormModal from '../forms/formSetter/DeleteFormModal/DeleteFormModal';

import { FaEye, FaTrash } from 'react-icons/fa';
const PatientPage = () => {
  const { id } = useParams();

  const [patientInfo, setPatientInfo] = useState({});
  const [patientForms, setPatientForms] = useState({});

  const axios = useAxios();
  const [isLoading, setIsLoading] = useState(true);
  const [patientInfoExpand, setPatientInfoExpand] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteFormUrl, setDeleteFormUrl] = useState('');

  useEffect(() => {
    const getPatientInfo = async () => {
      try {
        const response = await axios.get(`/patients/${id}`);
        const response2 = await axios.get(`/forms/${id}`);

        setPatientInfo(response.data);
        setPatientForms(response2.data);
        setIsLoading(false);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getPatientInfo();
  }, [modalIsOpen]);

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
            <ul className={`${Style.formRow} ${Style.header}`}>
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
                  <li className={Style.details}>
                    <Link to={`/app/form/get${url}`}>
                      <FaEye className={Style.deleteButton} />
                    </Link>

                    <FaTrash
                      className={Style.deleteButton}
                      onClick={() => {
                        setModalIsOpen(true);
                        setDeleteFormUrl(url);
                      }}
                    />
                  </li>
                </ul>
              );
            })}

            <Link
              className={Style.addFormButton}
              to={`/app/form/set/${key}/${patientInfo.national_id}`}
            >
              <button className="btn btn-success btn-lg btn-block">
                افزودن فرم
              </button>
            </Link>
          </FormWrapper>
        ))}
      </div>

      {modalIsOpen && (
        <DeleteFormModal setIsOpen={setModalIsOpen} formUrl={deleteFormUrl} />
      )}
    </div>
  );
};

export default PatientPage;
