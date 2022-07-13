import { Form, Formik } from 'formik';
import { InputMaker } from '../../../common/form/InputMaker';
import { useRetinaConsult } from '../../../../data/useRetinaConsult';
import retinaConsultValidator from '../../../../utils/validation/RetinaConsult.validation';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './RetinaConsult.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

//deleting visit field from from validator
delete retinaConsultValidator.fields.visit;

const initialValues = {
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
  const { id } = useParams();
  const data = useRetinaConsult();
  const [refDetail, setRefDetail] = useState();
  // remove visit property
  const ansData = data.slice(1);

  useEffect(() => {
    const getRefDetail = async () => {
      try {
        const res = await axios.get(`refers/${id}`);
        setRefDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRefDetail();
  }, []);

  const doSubmit = async (value) => {
    const answerModel = {
      id: parseInt(id),
      status: 'پاسخ داده شده',
      answer: 'answer',
    };

    let visit;

    try {
      const res = await axios.patch('refers/', answerModel);
      visit = res.data.visit;
    } catch (err) {
      console.log(err);
      return;
    }

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
      visit: visit,
    };

    try {
      await axios.post('forms/retina_consult/', model);
      toast.success('اطلاعات با موفقیت ثبت شد');
    } catch (err) {
      toast.error('اطلاعات فرم کامل نیست');
      console.log(err);
    }
  };

  if (!data || !refDetail) return <Loading />;
  return (
    <div className={Style.container}>
      <div
        className="col-12 col-md-10 m-auto form-max-width row"
        style={{
          boxShadow: '0 0 10px 1px #ccc',
          background: '#f2f2f2',
        }}
      >
        <div className="mt-5 row ">
          <div className="col-6 fs-4">
            <span>{`فرم : ${refDetail?.form}`}</span>
          </div>
          <div className="col-6 fs-4">
            <span>
              {`ارجاع شده از طرف دکتر: ${
                refDetail?.from_doctor?.user?.first_name +
                ' ' +
                refDetail?.from_doctor?.user?.last_name
              }`}
            </span>
          </div>
          <div className="col-10 mt-3">
            <p>توضیحات : </p>
            <p>{refDetail?.details}</p>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={doSubmit}
          validationSchema={retinaConsultValidator}
          validateOnBlur={false}
          validateOnChange={false}
          validate={async (values) => {
            const valid = await retinaConsultValidator.isValid(values);
            if (!valid) toast.error('اطلاعات فرم کامل نیست');
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
              <InputMaker data={ansData} />

              <br />
            </div>
            <br />
            <button type="submit" className={`${Style.jfButton} m-auto mb-2`}>
              ثبت
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RetinaConsult;
