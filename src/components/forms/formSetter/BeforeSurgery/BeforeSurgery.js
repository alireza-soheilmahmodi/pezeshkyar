import { Form, Formik } from 'formik';

import { InputMaker } from '../../../common/form/InputMaker';
import {
  R_BeforSurgeryValidator,
  L_BeforSurgeryValidator,
} from '../../../../utils/validation/BeforeSurgery.validation';

import { useBeforeSurgery } from '../../../../data/useBeforeSurgery';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './BeforeSurgery.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';

const R_initialDefaultValues = {
  //right eye
  visit: '',
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
};
//left eye
const L_initialDefaultValues = {
  visit: '',
  L_visualAcuity: 0,
  L_followLight: 'خیر',
  L_strabismus: 'خیر',
  L_nystagmus: 'خیر',
  L_redEyeReflex: null,
  L_cylinder: 0,
  L_sphere: 0,
  L_axis: 0,
  L_cataract: 'خیر',
  L_cataractType: null,
  L_anteriorSegment: null,
  L_anteriorSegmentDescription: null,
  L_retin: null,
  L_retinDescription: null,
  L_visual_acuity_choice: null,
};
const BeforeSurgery = () => {
  const axios = useAxios();
  const { national_id } = useParams();

  const data = useBeforeSurgery(national_id);

  const R_doSubmit = async (value) => {
    const RightModel = {
      strabismus: value.R_strabismus,
      nystagmus: value.R_nystagmus,
      visual_acuity: value.R_visualAcuity / 10,
      red_reflex: value.R_redEyeReflex,
      cataracte: value.R_cataract,
      cataracte_type: value.R_cataractType,
      anterior_segment: value.R_anteriorSegment,
      retin: value.R_retin,
      visit: value.visit || data.RightEye[0].defaultOption.value,
      eye_side: 'راست',
      id: 4,
      asmr: value.R_followLight, // follow light
      visual_acuity_choice: value.R_visual_acuity_choice,
      anterior_segment_detail: value.R_anteriorSegmentDescription,
      refraction_cylinder: value.R_cylinder,
      refraction_sphere: value.R_sphere,
      refraction_axis: value.R_axis,
      retin_detail: value.R_retinDescription,
    };

    try {
      await axios.post('forms/before_surgery/', RightModel);
      toast.success('اطلاعات چشم راست با موفقیت ثبت شد');
    } catch (err) {
      console.log(err);
    }
  };
  const L_doSubmit = async (value) => {
    const LeftModel = {
      strabismus: value.L_strabismus,
      nystagmus: value.L_nystagmus,
      visual_acuity: value.L_visualAcuity / 10,
      red_reflex: value.L_redEyeReflex,
      cataracte: value.L_cataract,
      cataracte_type: value.L_cataractType,
      anterior_segment: value.L_anteriorSegment,
      retin: value.L_retin,
      visit: value.visit || data.RightEye[0].defaultOption.value,
      eye_side: 'چپ',
      id: 4,
      asmr: value.L_followLight,
      visual_acuity_choice: value.L_visual_acuity_choice,
      retin_detail: value.L_retinDescription,
      refraction_cylinder: value.L_cylinder,
      refraction_sphere: value.L_sphere,
      refraction_axis: value.L_axis,
      anterior_segment_detail: value.L_anteriorSegmentDescription,
      L_dateFileRegistration: value.L_dateFileRegistration,
    };

    try {
      await axios.post('forms/before_surgery/', LeftModel);
      toast.success('اطلاعات چشم چپ با موفقیت ثبت شد');
    } catch (err) {
      console.log(err);
    }
  };

  if (!data) return <Loading />;

  return (
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
            validationSchema={R_BeforSurgeryValidator}
            validateOnBlur={false}
            validateOnChange={false}
            validate={async (values) => {
              const valid = await R_BeforSurgeryValidator.isValid(values);
              if (!valid) toast.error('اطلاعات فرم چشم راست کامل نیست');
            }}
          >
            <Form>
              <div
                className="row px-2"
                style={{
                  boxShadow: '0 0 10px 1px #ccc',
                  background: '#f2f2f2',
                }}
              >
                <br />
                <h2 className="mt-5">چشم راست</h2>
                <br />
                <InputMaker data={data.RightEye} />

                <br />
                <button type="submit" className="m-auto  mt-4 mb-2 jfButton">
                  ثبت
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <br />
        <div className="col-md-6">
          <Formik
            initialValues={L_initialDefaultValues}
            onSubmit={L_doSubmit}
            validationSchema={L_BeforSurgeryValidator}
            validateOnBlur={false}
            validateOnChange={false}
            validate={async (values) => {
              const valid = await L_BeforSurgeryValidator.isValid(values);
              if (!valid) toast.error('اطلاعات فرم چشم چپ کامل نیست');
            }}
          >
            <Form>
              <div
                className="row px-2"
                style={{
                  boxShadow: '0 0 10px 1px #ccc',
                  background: '#f2f2f2',
                }}
              >
                <br />
                <h2 className="mt-5">چشم چپ</h2>
                <br />
                <InputMaker data={data.LeftEye} />

                <br />
                <button type="submit" className="m-auto  mt-4 mb-2 jfButton">
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

export default BeforeSurgery;
