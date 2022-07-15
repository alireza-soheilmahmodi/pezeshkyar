import { Form, Formik } from 'formik';

import { InputMaker } from '../../../common/form/InputMaker';
import {
  R_AfterSurgeryValidator,
  L_AfterSurgeryValidator,
} from '../../../../utils/validation/AfterSurgery.validation';
import { useAfterSurgery } from '../../../../data/useAfterSurgery';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './AfterSurgery.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';

const R_initialDefaultValues = {
  visit: '',
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
};
const L_initialDefaultValues = {
  visit: '',
  L_cylinder: 0,
  L_sphere: 0,
  L_axis: 0,
  L_followTarget: 'خیر',
  L_strabismus: 'خیر',
  L_eye_side: '',
  L_visual_acuity: 0,
  L_IOP: 0,
  L_IOP_measurementMethod: '',
  L_timeCloseEye: 0,
  L_realTimeCloseEye: 0,
  L_examinationAnteriorSegment: '',
  L_examinationPosteriorSegment: '',
  L_complications_common: '',
  L_complications: '',
  L_EUA: 'خیر',
  L_next_visit_date: '',
  L_surgery_date: '',
  L_examination_date: '',
};

const AfterSurgery = () => {
  const axios = useAxios();
  const { national_id } = useParams();
  const data = useAfterSurgery(national_id);

  const R_doSubmit = async (value) => {
    const RightModel = {
      visit: value.visit || data.RightModel[0].defaultOption.value,
      refraction_cylinder: value.R_cylinder,
      refraction_sphere: value.R_sphere,
      refraction_axis: value.R_axis,
      asmr: value.R_followTarget,
      strabismus: value.R_strabismus,
      eye_side: 'راست',
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
      await axios.post('forms/after_surgery/', RightModel);
      toast.success('اطلاعات چشم راست با موفقیت ثبت شد');
    } catch (err) {
      console.log(err);
    }
  };

  const L_doSubmit = async (value) => {
    const LeftModel = {
      visit: value.visit || data.RightModel[0].defaultOption.value,
      refraction_cylinder: value.L_cylinder,
      refraction_sphere: value.L_sphere,
      refraction_axis: value.L_axis,
      asmr: value.L_followTarget,
      strabismus: value.L_strabismus,
      eye_side: 'چپ',
      visual_acuity: value.L_visual_acuity / 10,
      iop: value.L_IOP,
      iop_method: value.L_IOP_measurementMethod,
      recommended_blink_time: value.L_timeCloseEye,
      actual_blink_time: value.L_realTimeCloseEye,
      anterior_segment_examination: value.L_examinationAnteriorSegment,
      posterior_segment_examination: value.L_examinationPosteriorSegment,
      complications_common: value.L_complications_common,
      complications: value.L_complications,
      eua: value.L_EUA,
      next_visit_date: value.L_next_visit_date,
      surgery_date: value.L_surgery_date,
      examination_date: value.L_examination_date,
    };

    try {
      await axios.post('forms/after_surgery/', LeftModel);
      toast.success('اطلاعات چشم چپ با موفقیت ثبت شد');
    } catch (err) {
      console.log(err);
    }
  };

  if (!data) return <Loading />;

  return (
    <>
      <div className={Style.container}>
        <div
          className="col-12 m-auto form-max-width row"
          style={{
            boxShadow: '0 0 10px 1px #ccc',
            background: '#f2f2f2',
          }}
        >
          <div className="col-md-6">
            <Formik
              initialValues={R_initialDefaultValues}
              onSubmit={R_doSubmit}
              validationSchema={R_AfterSurgeryValidator}
              validateOnBlur={false}
              validateOnChange={false}
              validate={async (values) => {
                const valid = await R_AfterSurgeryValidator.isValid(values);
                if (!valid) toast.error('اطلاعات فرم چشم راست کامل نیست');
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
                  <InputMaker data={data.RightModel} />
                  <br />
                  <br />
                </div>
                <button
                  type="submit"
                  className={`${Style.jfButton} m-auto mb-2`}
                >
                  ثبت
                </button>
              </Form>
            </Formik>
          </div>
          <br />
          <div className="col-md-6">
            <Formik
              initialValues={L_initialDefaultValues}
              onSubmit={L_doSubmit}
              validationSchema={L_AfterSurgeryValidator}
              validateOnBlur={false}
              validateOnChange={false}
              validate={async (values) => {
                const valid = await L_AfterSurgeryValidator.isValid(values);
                if (!valid) toast.error('اطلاعات فرم چشم چپ کامل نیست');
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
                  <InputMaker data={data.LeftModel} />
                  <br />
                  <br />
                </div>
                <button
                  type="submit"
                  className={`${Style.jfButton} m-auto mb-2`}
                >
                  ثبت
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterSurgery;
