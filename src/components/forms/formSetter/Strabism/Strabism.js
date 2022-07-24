import { Form, Formik } from 'formik';
import { InputMaker } from '../../../common/form/InputMaker';
import { useStrabism } from '../../../../data/useStrabism';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './Strabism.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';

const R_initialValues = {
  visit: '',
  OD_VA: 0,
  OD_fixation: 'ندارد',
  OD_following: 'ندارد',
  OD_glass: '',
  OD_ET: 0,
  OD_XT: 0,
  OD_HT: 0,
  OD_Hot: 0,
  mainEye: null,
  pattern: null,
  postures: null,
  OD_oblique_dysfunction: 'خیر',
  OD_IOOA: 0,
  OD_IOUA: 0,
  OD_SOOA: 0,
  OD_SOUA: 0,
  nystagmuses: null,
  nulls: null,
  OD_eyeLimit: 'خیر',
  OD_abduction: 0,
  OD_adduction: 0,
  OD_elevation: 0,
  OD_depression: 0,
  plans: null,
  planDetail: '',
};

const L_initialValues = {
  visit: '',
  OS_VA: 0,
  OS_fixation: 'ندارد',
  OS_following: 'ندارد',
  OS_glass: '',
  OS_ET: 0,
  OS_XT: 0,
  OS_HT: 0,
  OS_Hot: 0,
  mainEye: null,
  pattern: null,
  postures: null,
  OS_oblique_dysfunction: 'خیر',
  OS_IOOA: 0,
  OS_IOUA: 0,
  OS_SOOA: 0,
  OS_SOUA: 0,
  nystagmuses: null,
  nulls: null,
  OS_eyeLimit: 'خیر',
  OS_abduction: 0,
  OS_adduction: 0,
  OS_elevation: 0,
  OS_depression: 0,
  plans: null,
  planDetail: '',
};

const Strabism = () => {
  const axios = useAxios();
  const { national_id } = useParams();
  const data = useStrabism(national_id);

  const R_doSubmit = async (value) => {
    const Model = {
      visit: value.visit || data.rightModel[0].defaultOption.value,
      fixation: value.OD_fixation,
      following: value.OD_following,
      glass: value.OD_glass,
      dominant_eye: value.mainEye,
      pattern: value.pattern,
      abnormal_head_posture: value.postures,
      oblique_dysfunction: value.OD_oblique_dysfunction,
      nystagmus: value.nystagmuses,
      null_point: value.nulls,
      eye_movement_restrictions: value.OD_eyeLimit,
      plan: value.plans,
      eye_side: 'راست',
      va: value.OD_VA,
      glass_const_et: value.OD_ET,
      glass_const_xt: value.OD_XT,
      glass_const_ht: value.OD_HT,
      glass_const_hot: value.OD_Hot,
      oblique_IOOA: value.OD_IOOA,
      oblique_IOUA: value.OD_IOUA,
      oblique_SOOA: value.OD_SOOA,
      oblique_SOUA: value.OD_SOUA,
      restriction_Abduction: value.OD_abduction,
      restriction_Adduction: value.OD_adduction,
      restriction_Elevation: value.OD_elevation,
      restriction_Depression: value.OD_depression,
      plan_details: value.planDetail,
    };

    try {
      await axios.post('forms/strabism/', Model);
      toast.success('اطلاعات چشم راست با موفقیت ثبت شد');
    } catch (err) {
      toast.error('اطلاعات فرم کامل نیست');
      console.log(err);
    }
  };

  const L_doSubmit = async (value) => {
    const Model = {
      visit: value.visit || data.rightModel[0].defaultOption.value,
      fixation: value.OS_fixation,
      following: value.OS_following,
      glass: value.OS_glass,
      dominant_eye: value.mainEye,
      pattern: value.pattern,
      abnormal_head_posture: value.postures,
      oblique_dysfunction: value.OS_oblique_dysfunction,
      nystagmus: value.nystagmuses,
      null_point: value.nulls,
      eye_movement_restrictions: value.OS_eyeLimit,
      plan: value.plans,
      eye_side: 'چپ',
      va: value.OS_VA,
      glass_const_et: value.OS_ET,
      glass_const_xt: value.OS_XT,
      glass_const_ht: value.OS_HT,
      glass_const_hot: value.OS_Hot,
      oblique_IOOA: value.OS_IOOA,
      oblique_IOUA: value.OS_IOUA,
      oblique_SOOA: value.OS_SOOA,
      oblique_SOUA: value.OS_SOUA,
      restriction_Abduction: value.OS_abduction,
      restriction_Adduction: value.OS_adduction,
      restriction_Elevation: value.OS_elevation,
      restriction_Depression: value.OS_depression,
      plan_details: value.planDetail,
    };

    try {
      await axios.post('forms/strabism/', Model);
      toast.success('اطلاعات چشم چپ با موفقیت ثبت شد');
    } catch (err) {
      toast.error('اطلاعات فرم کامل نیست');
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
          <Formik initialValues={R_initialValues} onSubmit={R_doSubmit}>
            <Form>
              <div
                className="row px-2"
                style={{
                  boxShadow: '0 0 10px 1px #ccc',
                  background: '#f2f2f2',
                }}
              >
                <br />
                <h2 className="mt-5">چشم راست OD</h2>
                <br />
                <InputMaker data={data.rightModel} />

                <br />

                <br />
                <button type="submit" className="m-auto  mt-4 mb-2 jfButton">
                  ثبت
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="col-md-6">
          <Formik initialValues={L_initialValues} onSubmit={L_doSubmit}>
            <Form>
              <div
                className="row px-2"
                style={{
                  boxShadow: '0 0 10px 1px #ccc',
                  background: '#f2f2f2',
                }}
              >
                <br />
                <h2 className="mt-5">چشم چپ OS</h2>
                <br />
                <InputMaker data={data.leftModel} />

                <br />

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

export default Strabism;
