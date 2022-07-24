import { Form, Formik } from 'formik';
import { useState } from 'react';
import { InputMaker } from '../../../common/form/InputMaker';
import { R_AfterSurgeryValidator } from '../../../../utils/validation/AfterSurgery.validation';
import { useAfterSurgery } from '../../../../data/useAfterSurgery';
import useAxios from '../../../../hooks/useAxios';
import Style from './AfterSurgery.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//deleting visit field from from validator
delete R_AfterSurgeryValidator.fields.visit;

const AfterSurgery = () => {
  const axios = useAxios();
  const data = useAfterSurgery();
  const navigate = useNavigate();

  // remove visit property
  const editData = data.RightModel.slice(1);

  const [formValues, setFormValues] = useState({
    R_cylinder: 0,
    R_sphere: 0,
    R_axis: 0,
    R_followTarget: 'خیر',
    R_strabismus: 'خیر',
    R_eye_side: '',
    R_visual_acuity: 0,
    R_IOP: 0,
    R_IOP_measurementMethod: '',
    R_timeCloseEye: 0,
    R_realTimeCloseEye: 0,
    R_examinationAnteriorSegment: '',
    R_examinationPosteriorSegment: '',
    R_complications_common: '',
    R_complications: '',
    R_EUA: 'خیر',
    R_next_visit_date: '',
    R_surgery_date: '',
    R_examination_date: '',
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
          R_cylinder: values.refraction_cylinder,
          R_sphere: values.refraction_sphere,
          R_axis: values.refraction_axis,
          R_followTarget: values.asmr,
          R_strabismus: values.strabismus,
          R_visual_acuity: values.visual_acuity * 10,
          R_IOP: values.iop,
          R_IOP_measurementMethod: values.iop_method,
          R_timeCloseEye: values.recommended_blink_time,
          R_realTimeCloseEye: values.actual_blink_time,
          R_examinationAnteriorSegment: values.anterior_segment_examination,
          R_examinationPosteriorSegment: values.posterior_segment_examination,
          R_complications_common: values.complications_common,
          R_complications: values.complications,
          R_EUA: values.eua,
          R_next_visit_date: values.next_visit_date,
          R_surgery_date: values.surgery_date,
          R_examination_date: values.examination_date,
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
    const Model = {
      refraction_cylinder: value.R_cylinder,
      refraction_sphere: value.R_sphere,
      refraction_axis: value.R_axis,
      asmr: value.R_followTarget,
      strabismus: value.R_strabismus,
      visual_acuity: value.R_visual_acuity / 10,
      iop: value.R_IOP,
      iop_method: value.R_IOP_measurementMethod,
      recommended_blink_time: value.R_timeCloseEye,
      actual_blink_time: value.R_realTimeCloseEye,
      anterior_segment_examination: value.R_examinationAnteriorSegment,
      posterior_segment_examination: value.R_examinationPosteriorSegment,
      complications_common: value.R_complications_common,
      complications: value.R_complications,
      eua: value.R_EUA,
      next_visit_date: value.R_next_visit_date,
      surgery_date: value.R_surgery_date,
      examination_date: value.R_examination_date,
    };

    try {
      await axios.patch(`/forms/${formUrl[0]}/${formUrl[1]}/`, Model);
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
            validationSchema={R_AfterSurgeryValidator}
            validateOnBlur={false}
            validateOnChange={false}
            validate={async (values) => {
              const valid = await R_AfterSurgeryValidator.isValid(values);
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
