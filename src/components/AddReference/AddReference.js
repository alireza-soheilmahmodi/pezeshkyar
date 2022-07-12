import { Form, Formik } from 'formik';
import { InputMaker } from '../common/form/InputMaker';
import AddReferenceValidator from '../../utils/validation/AddReference.validation';
import { useAddReference } from '../../data/useAddReference';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './AddReference.module.css';
import Loading from '../common/Loading/Loading';
import { toast } from 'react-toastify';

const initialDefaultValues = {
  visit: null,
  strabismusDoctor: null,
  retinaConsultDoctor: null,
  geneticsDoctor: null,
  glaucomaDoctor: null,
  description: '',
};

const AddReference = () => {
  const axios = useAxios();
  const { national_id } = useParams();
  const data = useAddReference(national_id);

  const doSubmit = async (value) => {
    const bool =
      value.strabismusDoctor ||
      value.geneticsDoctor ||
      value.glaucomaDoctor ||
      value.retinaConsultDoctor;
    if (!bool) {
      toast.error('لطفا یکی از فرم ها را انتخاب و پزشک مربوطه را انتخاب کنید');
      return;
    }
    const strabismusModel = {
      doctor: value.strabismusDoctor,
      visit: value.visit,
      form: 'استرابیسم',
      details: value.description,
    };
    const geneticsModel = {
      doctor: value.geneticsDoctor,
      visit: value.visit,
      form: 'Genetics',
      details: value.description,
    };
    const glaucomaModel = {
      doctor: value.glaucomaDoctor,
      visit: value.visit,
      form: 'Glaucoma',
      details: value.description,
    };
    const retinaConsultModel = {
      doctor: value.retinaConsultDoctor,
      visit: value.visit,
      form: 'Retina Consult',
      details: value.description,
    };

    try {
      if (value.strabismusDoctor) {
        const strabismusResult = await axios.post('refers/', strabismusModel);
        const strabismusStatus = strabismusResult.status;
        if (Math.floor(strabismusStatus / 100) == 2)
          toast.success('ارجاع فرم استرابیسم ثبت شد');
      }
      if (value.geneticsDoctor) {
        const geneticsResult = await axios.post('refers/', geneticsModel);
        const geneticsStatus = geneticsResult.status;
        if (Math.floor(geneticsStatus / 100) == 2)
          toast.success('ارجاع فرم Genetics ثبت شد');
      }
      if (value.glaucomaDoctor) {
        const glaucomaResult = await axios.post('refers/', glaucomaModel);
        const glaucomaStatus = glaucomaResult.status;
        if (Math.floor(glaucomaStatus / 100) == 2)
          toast.success('ارجاع فرم Glaucoma ثبت شد');
      }
      if (value.retinaConsultDoctor) {
        const retinaConsultResult = await axios.post(
          'refers/',
          retinaConsultModel
        );
        const retinaConsultStatus = retinaConsultResult.status;
        if (Math.floor(retinaConsultStatus / 100) == 2)
          toast.success('ارجاع فرم Retina Consult ثبت شد');
      }
    } catch (err) {
      toast.success('فرم ارجاع ثبت نشد');
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
          <div className="col-md-12">
            <Formik
              initialValues={initialDefaultValues}
              onSubmit={doSubmit}
              validationSchema={AddReferenceValidator}
              validateOnBlur={false}
              validateOnChange={false}
              validate={async (values) => {
                const valid = await AddReferenceValidator.isValid(values);
                if (!valid) toast.error('اطلاعات فرم ارجاع کامل نیست');
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
                  <InputMaker data={data} />
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

export default AddReference;
