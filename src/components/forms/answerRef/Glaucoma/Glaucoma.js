import { Form, Formik } from 'formik';
import { InputMaker } from '../../../common/form/InputMaker';
import { useGlaucoma } from '../../../../data/useGlaucoma';
import GlaucomaValidator from '../../../../utils/validation/Glaucoma.validation';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './Glaucoma.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

//deleting visit field from from validator
delete GlaucomaValidator.fields.visit;

const initialValues = {
  age: 0,
  operationAge: 0,
  glaucomaHistoryOperation: 'ندارد',
  shant: null,
  shantLocation: null,
  tubeLocation: null,
  examinationType: null,
  bihooshiType: null,
  bihooshiDuration: 0,
  iopTool: null,
  cct: 0,
  cornealEdemas: null,
  cornealOpacitys: null,
  haabsStriae: 'ندارد',
  cornealDiameterVertical: 0,
  cornealDiameterHorizontal: 0,
  pas: 'ندارد',
  PASDuraction: 0,
  pupils: null,
  vitre: 'ندارد',
  retainedCorticalMaterial: 'ندارد',
  iols: null,
  CDRatio: 0,
  plan: null,
  operationNeeded: 'ندارد',
  type_surgery: '',
};

const Glaucoma = () => {
  const axios = useAxios();
  const { id } = useParams();
  const data = useGlaucoma();
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
      visit: visit,
      history_glaucoma_surgery: value.glaucomaHistoryOperation,
      shunt: value.shant,
      shunt_location: value.shantLocation,
      tube_location: value.tubeLocation,
      examination_type: value.examinationType,
      anesthesia_type: value.bihooshiType,
      iop_device: value.iopTool,
      corneal_edema: value.cornealEdemas,
      corneal_opacity: value.cornealOpacitys,
      striae_haabs: value.haabsStriae,
      pas: value.pas,
      pupil: value.pupils,
      vitreous_anterrior_chamber: value.vitre,
      material_retained_cortical: value.retainedCorticalMaterial,
      iol: value.iols,
      plan: value.plan,
      need_surgery: value.operationNeeded,
      age: value.age,
      surgery_age: value.operationAge,
      iop: value.bihooshiDuration,
      cct: value.cct,
      vertical_diameter: value.cornealDiameterVertical,
      horizontal_diameter: value.cornealDiameterHorizontal,
      pas_time: value.PASDuraction,
      ratio_cd: value.CDRatio,
      type_surgery: value.type_surgery,
    };

    try {
      await axios.post('forms/glaucoma/', model);
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
        <div className="col-6 fs-4 ">
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
        <hr />
        <Formik
          initialValues={initialValues}
          onSubmit={doSubmit}
          validationSchema={GlaucomaValidator}
          validateOnBlur={false}
          validateOnChange={false}
          validate={async (values) => {
            const valid = await GlaucomaValidator.isValid(values);
            if (!valid) toast.error('اطلاعات فرم کامل نیست');
          }}
        >
          <Form>
            <div className="row px-2">
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

export default Glaucoma;
