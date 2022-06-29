import { Form, Formik } from 'formik';
import { InputMaker } from '../../../common/form/InputMaker';
import strabismData from '../../../../data/useStrabism';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './strabism.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';

const initialValues = {
  OD_VA: 0,
  OD_fixation: 'ندارد',
  OD_following: 'ندارد',
  OS_VA: 0,
  OS_fixation: 'ندارد',
  OS_following: 'ندارد',
  OD: null,
  OD_ET: 0,
  OD_XT: 0,
  OD_HT: 0,
  OD_Hot: 0,
  OS: null,
  OS_ET: 0,
  OS_XT: 0,
  OS_HT: 0,
  OS_Hot: 0,
  mainEye: null,
  pattern: null,
  postures: null,
  OD_oblique_dysfunction: 'خیر',
  OD_IOOA: 0,
  OD_IOUA: 0,
  OD_SOOA: 0,
  OD_SOUA: 0,
  OS_oblique_dysfunction: 'خیر',
  OS_IOOA: 0,
  OS_IOUA: 0,
  OS_SOOA: 0,
  OS_SOUA: 0,
  nystagmuses: null,
  nulls: null,
  OD_eyeLimit: 'خیر',
  OD_abduction: 0,
  OD_adduction: 0,
  OD_elevation: 0,
  OD_depression: 0,
  OS_eyeLimit: 'خیر',
  OS_abduction: 0,
  OS_adduction: 0,
  OS_elevation: 0,
  OS_depression: 0,
  plans: null,
};

const Strabism = () => {
  if (!data) return <Loading />;
  return (
    <div className={Style.container}>
      <div className="row">
        <div
          className="col-8 m-auto form-max-width"
          style={{
            boxShadow: '0 0 10px 1px #ccc',
            background: '#f2f2f2',
          }}
        >
          <Formik initialValues={initialValues}>
            <Form>
              <div className="row">
                <InputMaker data={strabismData} />

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
    </div>
  );
};

export default Strabism;
