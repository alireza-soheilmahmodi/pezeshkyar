import { Form, Formik } from 'formik';
import { InputMaker } from '../../../common/form/InputMaker';
import { useGlaucoma } from '../../../../data/useGlaucoma';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './Glaucoma.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import GlaucomaValidator from '../../../../utils/validation/Glaucoma.validation';

const initialValues = {
  visit: '',
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
  const { national_id } = useParams();
  const data = useGlaucoma(national_id);

  const doSubmit = async (value) => {
    const model = {
      visit: value.visit || data[0].defaultOption.value,
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
      toast.success('اطلاعات موفقیت ثبت شد');
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
              <button type="submit" className={`${Style.jfButton} m-auto mb-2`}>
                ثبت
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Glaucoma;
