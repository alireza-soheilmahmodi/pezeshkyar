import { useParams } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import { useState, useEffect } from 'react';

const FormGetter = () => {
  const { formType, id } = useParams();

  const axios = useAxios();

  useEffect(() => {
    const getPatientInfo = async () => {
      try {
        const response = await axios.get(`/forms/${formType}/${id}/`);
        const response2 = await axios.options(`/forms/${formType}/${id}/`);
        const response3 = await axios.get('getoptions');
        console.log(response);
        console.log(response2);
        console.log(response3);
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
    <div>
      {formType}
      {id}
    </div>
  );
};

export default FormGetter;
