import { useParams } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import { useEffect, useState } from 'react';
import Style from './FormGetter.module.css';
import FormWrapper from '../../common/formGetters/FormWapper/FormWrapper';
import FormField from '../../common/formGetters/FormField/FormField';
import Loading from '../../common/Loading/Loading';

const FormGetter = () => {
  const { formType, id } = useParams();
  const axios = useAxios();
  const [fields, setFields] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPatientInfo = async () => {
      try {
        const response = await axios.get(`/forms/${formType}/${id}/`);
        const response2 = await axios.options(`/forms/${formType}/${id}/`);
        const fieldsLabel = response2.data.map((item) => {
          return { key: item.key, label: item.ui.label };
        });
        setData(response.data);
        setFields(fieldsLabel);
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

  if (data.length == 0 || fields.length == 0) {
    return <Loading />;
  }

  return (
    <div className={Style.container}>
      <FormWrapper label={`فرم ${formType}`}>
        {fields.map((item) => (
          <FormField key={item.key} label={item.label} value={data[item.key]} />
        ))}
      </FormWrapper>
    </div>
  );
};
export default FormGetter;
