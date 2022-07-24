import { Form, Formik } from 'formik';
import { InputMaker } from '../../../common/form/InputMaker';
import { useRetinaConsult } from '../../../../data/useRetinaConsult';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './RetinaConsult.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const initialValues = {
  visit: '',
  congenitalCataract: 0,
  redReflex: 'خیر',
  fixation: 'خیر',
  cylinder: 0,
  sphere: 0,
  axis: 0,
  visibilityFundus: 'خیر',
  coloboma: 'خیر',
  bScan: 'خیر',
  pfv: 'خیر',
  pfvType: 0,
  rentinalDetachment: 'خیر',
  activeVessels: 'خیر',
  longCiliaryProcess: 'خیر',
  hyaloidArtery: 'خیر',
  draggingVessels: 'خیر',
  rop: 'خیر',
  historyLaser: 'خیر',
  stage: 0,
  zone: 0,
  historyIVB: 'خیر',
  plan: 0,
  microphthalmia: 'خیر',
  otherDiagnoses: '',
};
const RetinaConsult = () => {
  const axios = useAxios();
  const { national_id } = useParams();
  const data = useRetinaConsult(national_id);

  const doSubmit = async (value) => {
    const model = {
      congenital_cataract: value.congenitalCataract,
      red_reflex: value.redReflex,
      fixation: value.fixation,
      deviation: value.deviation,
      fundus: value.visibilityFundus,
      coloboma: value.coloboma,
      pfv: value.pfv,
      pfv_b_scan: value.bScan,
      pfv_retinal_detachment: value.rentinalDetachment,
      pfv_type: value.pfvType,
      pfv_active_vessels: value.activeVessels,
      pfv_microphthalmia: value.microphthalmia,
      pfv_long_ciliary_process: value.longCiliaryProcess,
      pfv_hyaloid_artery: value.hyaloidArtery,
      pfv_dragging_vessels: value.draggingVessels,
      rop: value.rop,
      rop_stage: value.stage,
      rop_zone: value.zone,
      rop_laser_history: value.historyLaser,
      rop_ivb_injection: value.historyIVB,
      plan: value.plan,
      refraction_sphere: value.sphere,
      refraction_cylinder: value.cylinder,
      refraction_axis: value.axis,
      other_diagnosis: value.otherDiagnoses,
      visit: value.visit || data[0].defaultOption.value,
    };

    try {
      await axios.post('forms/retina_consult/', model);
      toast.success('اطلاعات با موفقیت ثبت شد');
    } catch (err) {
      toast.error('اطلاعات فرم کامل نیست');
      console.log(err);
    }
  };

  if (!data) return <Loading />;
  return (
    <div className={Style.container}>
      <div
        className="col-12 col-md-9 m-auto row"
        style={{
          boxShadow: '0 0 10px 1px #ccc',
          background: '#f2f2f2',
        }}
      >
        <Formik initialValues={initialValues} onSubmit={doSubmit}>
          <Form>
            <div
              className="row px-2"
              style={{
                boxShadow: '0 0 10px 1px #ccc',
                background: '#f2f2f2',
              }}
            >
              <InputMaker data={data} />

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
  );
};

export default RetinaConsult;
