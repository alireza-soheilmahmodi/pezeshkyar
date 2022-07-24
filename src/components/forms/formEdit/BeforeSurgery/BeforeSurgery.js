import { Form, Formik } from 'formik';
import { useState, useEffect } from 'react';
import { InputMaker } from '../../../common/form/InputMaker';
import { R_BeforSurgeryValidator } from '../../../../utils/validation/BeforeSurgery.validation';
import { useBeforeSurgery } from '../../../../data/useBeforeSurgery';
import useAxios from '../../../../hooks/useAxios';
import Style from './BeforeSurgery.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

//deleting visit field from from validator
delete R_BeforSurgeryValidator.fields.visit;

const AfterSurgery = () => {
  const axios = useAxios();
  const data = useBeforeSurgery();
  const navigate = useNavigate();

  // remove visit property
  const editData = data.RightEye.slice(1);

  const [formValues, setFormValues] = useState({
    R_visualAcuity: 0,
    R_followLight: 'خیر',
    R_strabismus: 'خیر',
    R_nystagmus: 'خیر',
    R_redEyeReflex: null,
    R_cylinder: 0,
    R_sphere: 0,
    R_axis: 0,
    R_cataract: 'خیر',
    R_cataractType: null,
    R_anteriorSegment: null,
    R_anteriorSegmentDescription: null,
    R_retin: null,
    R_retinDescription: null,
    R_visual_acuity_choice: null,
  });
  const location = useLocation();
  const formUrl = location.pathname.split('/').slice(-3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFormValues = async () => {
      try {
        const result = await axios.get(`/forms/${formUrl[0]}/${formUrl[1]}/`);
        const values = result.data;

        const model = {
          R_strabismus: values.strabismus,
          R_nystagmus: values.nystagmus,
          R_visualAcuity: values.visual_acuity * 10,
          R_redEyeReflex: values.red_reflex,
          R_cataract: values.cataracte,
          R_cataractType: values.cataracte_type,
          R_anteriorSegment: values.anterior_segment,
          R_retin: values.retin,
          R_followLight: values.asmr, // follow light
          R_visual_acuity_choice: values.visual_acuity_choice,
          R_anteriorSegmentDescription: values.anterior_segment_detail,
          R_cylinder: values.refraction_cylinder,
          R_sphere: values.refraction_sphere,
          R_axis: values.refraction_axis,
          R_retinDescription: values.retin_detail,
        };

        setFormValues(model);
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
      strabismus: value.R_strabismus,
      nystagmus: value.R_nystagmus,
      visual_acuity: value.R_visualAcuity / 10,
      red_reflex: value.R_redEyeReflex,
      cataracte: value.R_cataract,
      cataracte_type: value.R_cataractType,
      anterior_segment: value.R_anteriorSegment,
      retin: value.R_retin,
      asmr: value.R_followLight, // follow light
      visual_acuity_choice: value.R_visual_acuity_choice,
      anterior_segment_detail: value.R_anteriorSegmentDescription,
      refraction_cylinder: value.R_cylinder,
      refraction_sphere: value.R_sphere,
      refraction_axis: value.R_axis,
      retin_detail: value.R_retinDescription,
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
        className="col-12 col-md-9 m-auto row"
        style={{
          boxShadow: '0 0 10px 1px #ccc',
          background: '#f2f2f2',
        }}
      >
        <div className="col-md-12">
          <Formik
            initialValues={formValues}
            enableReinitialize={true}
            onSubmit={doSubmit}
            validationSchema={R_BeforSurgeryValidator}
            validateOnBlur={false}
            validateOnChange={false}
            validate={async (values) => {
              const valid = await R_BeforSurgeryValidator.isValid(values);
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
                <br />

                <button type="submit" className="m-auto mb-2 jfButton">
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

export default AfterSurgery;
