import { Form, Formik } from 'formik';
import { useState } from 'react';
import { InputMaker } from '../../../common/form/InputMaker';
import {
  L_ExaminationsSurgeryValidator,
  R_ExaminationsSurgeryValidator,
} from '../../../../utils/validation/ExaminationsSurgery.validation';
import { WoundRim } from '../../../common/WoundRim/WoundRim';
import { useExaminationsSurgery } from '../../../../data/useExaminationsSurgery';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './ExaminationsSurgery.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';

const R_initialDefaultValues = {
  visit: '',
  R_dataSource: '',
  R_timeSurgery: '',
  R_dateSurgery: '',
  R_surgeon: '',
  R_surgeonFullName: '',
  R_assistantSurgeonFullName: '',
  R_biometricMethod: '',
  R_axialLenght: 0,
  R_k1: 0,
  R_k2: 0,
  R_typeSurgery: '',
  R_typeSurgeryDescription: '',
  R_type_IOL: '',
  R_berand_IOL: '',
  R_wound: '',
  R_complicationsDuringSurgeryDescription: '',
  R_dateFileRegistration: '',
  R_surgical_complications_common: '',
};

const L_initialDefaultValues = {
  visit: '',
  L_dataSource: '',
  L_timeSurgery: '',
  L_dateSurgery: '',
  L_surgeon: '',
  L_surgeonFullName: '',
  L_assistantSurgeonFullName: '',
  L_biometricMethod: '',
  L_axialLenght: 0,
  L_k1: 0,
  L_k2: 0,
  L_typeSurgery: '',
  L_typeSurgeryDescription: '',
  L_type_IOL: '',
  L_berand_IOL: '',
  L_wound: '',
  L_complicationsDuringSurgeryDescription: '',
  L_dateFileRegistration: '',
  L_surgical_complications_common: '',
};

const ExaminationsSurgery = () => {
  const axios = useAxios();
  const { national_id } = useParams();

  const [woundRimR, setWoundRimR] = useState();
  const [woundRimL, setWoundRimL] = useState();
  const data = useExaminationsSurgery(national_id);

  const R_doSubmit = async (value) => {
    const model = {
      visit: value.visit || data.RightModel[0].defaultOption.value,
      wound_rim: woundRimR,
      date: value.R_dateSurgery + ' ' + value.R_timeSurgery,
      surgeon_hierarchy: value.R_surgeon,
      surgeon_name: value.R_surgeonFullName,
      assistant_name: value.R_assistantSurgeonFullName,
      biometric: value.R_biometricMethod,
      axis_length: value.R_axialLenght,
      k1: value.R_k1,
      eye_side: 'راست',
      k2: value.R_k2,
      surgery_type: value.R_typeSurgery,
      typeSurgeryDescription: value.R_typeSurgeryDescription,
      iol_type: value.R_type_IOL,
      iol_brand: value.R_berand_IOL,
      wound: value.R_wound,
      surgical_complications: value.R_complicationsDuringSurgeryDescription, // qeire ejbari
      surgical_complications_common: value.R_surgical_complications_common, // to be done, // ejbari
    };

    try {
      await axios.post('forms/surgery/', model);
      toast.success('اطلاعات چشم راست با موفقیت ثبت شد');
    } catch (err) {
      toast.error('اطلاعات فرم چشم راست کامل نیست');
      console.log(err);
    }
  };
  const L_doSubmit = async (value) => {
    const model = {
      visit: value.visit || data.RightModel[0].defaultOption.value,
      wound_rim: woundRimL,
      date: value.L_dateSurgery + ' ' + value.L_timeSurgery,
      surgeon_hierarchy: value.L_surgeon,
      surgeon_name: value.L_surgeonFullName,
      assistant_name: value.L_assistantSurgeonFullName,
      biometric: value.L_biometricMethod,
      axis_length: value.L_axialLenght,
      k1: value.L_k1,
      eye_side: 'چپ',
      k2: value.L_k2,
      surgery_type: value.L_typeSurgery,
      typeSurgeryDescription: value.L_typeSurgeryDescription,
      iol_type: value.L_type_IOL,
      iol_brand: value.L_berand_IOL,
      wound: value.L_wound,
      surgical_complications_common: value.L_surgical_complications_common, // to be done,
      surgical_complications: value.L_complicationsDuringSurgeryDescription,
    };
    try {
      await axios.post('forms/surgery/', model);
      toast.success('اطلاعات چشم چپ با موفقیت ثبت شد');
    } catch (err) {
      toast.error('اطلاعات فرم چشم چپ کامل نیست');
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
          <div className="col-md-6">
            <Formik
              initialValues={R_initialDefaultValues}
              onSubmit={R_doSubmit}
              validationSchema={R_ExaminationsSurgeryValidator}
              validateOnBlur={false}
              validateOnChange={false}
              validate={async (values) => {
                const error = await R_ExaminationsSurgeryValidator.isValid(
                  values
                );

                if (!error) toast.error('اطلاعات فرم چشم راست کامل نیست');
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
                  <h2 className="mt-5"> چشم راست OD</h2>
                  <br />
                  <InputMaker data={data.RightModel} />
                  <WoundRim
                    clickHandler={(state) => {
                      setWoundRimR(state);
                      toast.success('مقدار ریم چشم راست ثبت شد');
                    }}
                  />
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
              validationSchema={L_ExaminationsSurgeryValidator}
              validateOnBlur={false}
              validateOnChange={false}
              validate={async (values) => {
                const error = await L_ExaminationsSurgeryValidator.isValid(
                  values
                );
                if (!error) toast.error('اطلاعات فرم چشم چپ کامل نیست');
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
                  <h2 className="mt-5"> چشم چپ OS</h2>
                  <br />
                  <InputMaker data={data.LeftModel} />
                  <WoundRim
                    clickHandler={(state) => {
                      setWoundRimL(state);
                      toast.success('مقدار ریم چشم چپ ثبت شد');
                    }}
                  />
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
    </>
  );
};

export default ExaminationsSurgery;
