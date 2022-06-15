import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormWrapper from '../common/formGetters/FormWapper/FormWrapper';
import FormField from '../common/formGetters/FormField/FormField';
import useAxios from '../../hooks/useAxios';

const PatientPage = () => {
  const { id } = useParams();
  const [patientInfo, setPatientInfo] = useState({});
  const axios = useAxios();

  useEffect(() => {
    const getPatientInfo = async () => {
      try {
        const response = await axios.get(`/patients/${id}`);
        console.log(response);
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

  return (
    <FormWrapper label="اطلاعات بیمار" borderColor="#4351ff">
      <FormField label="نام و نام خانوادگی" value="علیرضا سهیل محمودی" />
      <FormField label="کد ملی" value="علیرضا سهیل محمودی" />
    </FormWrapper>
  );
};

export default PatientPage;
