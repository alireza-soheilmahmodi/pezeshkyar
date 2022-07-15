import { Form, Formik } from 'formik';
import { useState, useEffect } from 'react';
import { InputMaker } from '../../../common/form/InputMaker';
import { useStrabism } from '../../../../data/useStrabism';
import useAxios from '../../../../hooks/useAxios';
import Style from './Strabism.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const Strabism = () => {
  const axios = useAxios();
  const data = useStrabism();
  const navigate = useNavigate();

  // remove visit property
  const editData = data.rightModel.slice(1);

  const [formValues, setFormValues] = useState({
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
          OD_fixation: values.fixation,
          OD_following: values.following,
          OD_glass: values.glass,
          mainEye: values.dominant_eye,
          pattern: values.pattern,
          postures: values.abnormal_head_posture,
          OD_oblique_dysfunction: values.oblique_dysfunction,
          nystagmuses: values.nystagmus,
          nulls: values.null_point,
          OD_eyeLimit: values.eye_movement_restrictions,
          plans: values.plan,
          OD_VA: values.va,
          OD_ET: values.glass_const_et,
          OD_XT: values.glass_const_xt,
          OD_HT: values.glass_const_ht,
          OD_Hot: values.glass_const_hot,
          OD_IOOA: values.oblique_IOOA,
          OD_IOUA: values.oblique_IOUA,
          OD_SOOA: values.oblique_SOOA,
          OD_SOUA: values.oblique_SOUA,
          OD_abduction: values.restriction_Abduction,
          OD_adduction: values.restriction_Adduction,
          OD_elevation: values.restriction_Elevation,
          OD_depression: values.restriction_Depression,
          planDetail: values.plan_details,
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

                <button
                  type="submit"
                  className={`${Style.jfButton} m-auto mb-2`}
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

export default Strabism;
