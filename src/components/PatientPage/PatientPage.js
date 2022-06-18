import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormWrapper from '../common/formGetters/FormWapper/FormWrapper';
import FormField from '../common/formGetters/FormField/FormField';
import useAxios from '../../hooks/useAxios';
import Style from './PatientPage.module.css';
import patientDataLabels from '../../utils/patientDataLabels';
import patientFormsLabel from '../../utils/patientFormsLabel';
import Loading from '../common/Loading/Loading';

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
        console.log(response2.data);
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
          <FormWrapper label={label} borderColor="#20b534">
            {patientForms[key].map((item) => {
              return (
                <FormField
                  label={item?.register_date}
                  value={item?.url}
                  width="100%"
                />
              );
            }) || 'اطلاعاتی وجود ندارد'}
          </FormWrapper>
        ))}
      </div>
    </div>
  );
};

export default PatientPage;
