import { Form, Formik } from 'formik';
import { useState, useEffect } from 'react';
import { InputMaker } from '../../../common/form/InputMaker';
import { R_ExaminationsSurgeryValidator } from '../../../../utils/validation/ExaminationsSurgery.validation';
import { useExaminationsSurgery } from '../../../../data/useExaminationsSurgery';
import useAxios from '../../../../hooks/useAxios';
import Style from './ExaminationsSurgery.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { WoundRim } from '../../../common/WoundRim/WoundRim';

//deleting visit field from from validator
delete R_ExaminationsSurgeryValidator.fields.visit;

const ExaminationsSurgery = () => {
  const axios = useAxios();
  const data = useExaminationsSurgery();
  const navigate = useNavigate();

  // remove visit property
  const editData = data.RightModel.slice(1);

  const [formValues, setFormValues] = useState({
    R_dataSource: '',
    R_timeSurgery: '',
    R_dateSurgery: '',
    R_surgeon: '',
    R_surgeonFullName: '',
    R_assistantSurgeonFullName: '',
    R_biometricMethod: '',
    R_axialLenght: 0,
    R_k1: 0,
    R_k2: 0,
    R_typeSurgery: '',
    R_typeSurgeryDescription: '',
    R_type_IOL: '',
    R_berand_IOL: '',
    R_wound: '',
    R_complicationsDuringSurgeryDescription: '',
    R_dateFileRegistration: '',
    R_surgical_complications_common: '',
  });
  const location = useLocation();
  const formUrl = location.pathname.split('/').slice(-3);
  const [loading, setLoading] = useState(true);

  const [woundRimR, setWoundRimR] = useState();

  useEffect(() => {
    const getFormValues = async () => {
      try {
        const result = await axios.get(`/forms/${formUrl[0]}/${formUrl[1]}/`);
        const values = result.data;

        console.log(values);

        const model = {
          R_timeSurgery: values.date, // fix this later
          R_dateSurgery: values.date, // fix this later
          R_surgeon: values.surgeon_hierarchy,
          R_surgeonFullName: values.surgeon_name,
          R_assistantSurgeonFullName: values.assistant_name,
          R_biometricMethod: values.biometric,
          R_axialLenght: values.axis_length,
          R_k1: values.k1,
          R_k2: values.k2,
          R_typeSurgery: values.surgery_type,
          R_typeSurgeryDescription: values.typeSurgeryDescription,
          R_type_IOL: values.iol_type,
          R_berand_IOL: values.iol_brand,
          R_complicationsDuringSurgeryDescription:
            values.surgical_complications, // qeire ejbari
          R_surgical_complications_common: values.surgical_complications_common,
          R_wound: values.wound,
          // to be done, // ejbari
        };

        setFormValues(model);
        setWoundRimR(values.wound_rim);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getFormValues();
  }, []);

  const doSubmit = async (value) => {
    const model = {
      wound_rim: woundRimR,
      date: value.R_dateSurgery + ' ' + value.R_timeSurgery,
      surgeon_hierarchy: value.R_surgeon,
      surgeon_name: value.R_surgeonFullName,
      assistant_name: value.R_assistantSurgeonFullName,
      biometric: value.R_biometricMethod,
      axis_length: value.R_axialLenght,
      k1: value.R_k1,
      k2: value.R_k2,
      surgery_type: value.R_typeSurgery,
      typeSurgeryDescription: value.R_typeSurgeryDescription,
      iol_type: value.R_type_IOL,
      iol_brand: value.R_berand_IOL,
      wound: value.R_wound,
      surgical_complications: value.R_complicationsDuringSurgeryDescription, // qeire ejbari
      surgical_complications_common: value.R_surgical_complications_common, // to be done, // ejbari
    };

    try {
      await axios.patch(`/forms/${formUrl[0]}/${formUrl[1]}/`, model);
      toast.success('ویرایش فرم با موفقیت انجام شد');
      navigate(-1);
    } catch (err) {
      toast.error('ویرایش فرم انجام نشد');
      console.log(err);
    }
  };

  if (loading) return <Loading />;
  return (
    <div className={Style.container}>
      <div
        className="col-12 col-md-9 m-auto form-max-width row"
        style={{
          boxShadow: '0 0 10px 1px #ccc',
          background: '#f2f2f2',
        }}
      >
        <div className="col-12 m-auto">
          <Formik
            initialValues={formValues}
            enableReinitialize={true}
            onSubmit={doSubmit}
            validationSchema={R_ExaminationsSurgeryValidator}
            validateOnBlur={false}
            validateOnChange={false}
            validate={async (values) => {
              const valid = await R_ExaminationsSurgeryValidator.isValid(
                values
              );
              if (!valid) toast.error('اطلاعات فرم کامل نیست');
            }}
          >
            <Form>
              <div
                className="row p-2"
                style={{
                  boxShadow: '0 0 10px 1px #ccc',
                  background: '#f2f2f2',
                }}
              >
                <InputMaker data={editData} />
                <br />

                <WoundRim
                  clickHandler={(state) => {
                    setWoundRimR(state);
                    toast.success('مقدار ریم چشم راست ثبت شد');
                  }}
                  wound={woundRimR}
                />

                <br />

                <button
                  type="submit"
                  className={`${Style.jfButton} m-auto mt-4 mb-2`}
                >
                  ثبت
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ExaminationsSurgery;
