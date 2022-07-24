import { Form, Formik } from 'formik';
import { useState, useEffect } from 'react';
import { InputMaker } from '../../../common/form/InputMaker';
import { useRetinaConsult } from '../../../../data/useRetinaConsult';
import useAxios from '../../../../hooks/useAxios';
import Style from './RetinaConsult.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const RetinaConsult = () => {
  const axios = useAxios();
  const data = useRetinaConsult();
  const navigate = useNavigate();

  // remove visit property
  const editData = data.slice(1);

  const [formValues, setFormValues] = useState({
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
          congenitalCataract: values.congenital_cataract,
          redReflex: values.red_reflex,
          fixation: values.fixation,
          deviation: values.deviation,
          visibilityFundus: values.fundus,
          coloboma: values.coloboma,
          pfv: values.pfv,
          bScan: values.pfv_b_scan,
          rentinalDetachment: values.pfv_retinal_detachment,
          pfvType: values.pfv_type,
          activeVessels: values.pfv_active_vessels,
          microphthalmia: values.pfv_microphthalmia,
          longCiliaryProcess: values.pfv_long_ciliary_process,
          hyaloidArtery: values.pfv_hyaloid_artery,
          draggingVessels: values.pfv_dragging_vessels,
          rop: values.rop,
          stage: values.rop_stage,
          zone: values.rop_zone,
          historyLaser: values.rop_laser_history,
          historyIVB: values.rop_ivb_injection,
          plan: values.plan,
          sphere: values.refraction_sphere,
          cylinder: values.refraction_cylinder,
          axis: values.refraction_axis,
          otherDiagnoses: values.other_diagnosis,
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

export default RetinaConsult;
