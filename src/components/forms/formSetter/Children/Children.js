import { Form, Formik } from 'formik';

import { InputMaker } from '../../../common/form/InputMaker';
import {
  R_ChildrenValidator,
  L_ChildrenValidator,
} from '../../../../utils/validation/Children.validation';

import { useChildren } from '../../../../data/useChildren';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './Children.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';

const R_initialDefaultValues = {
  visit: '',
  R_quarantineStatus: '',
  R_cornealDiameter: 0,
  R_anteriorRoom: '',
  R_intraocularPressure: 0,
  R_methodMeasuringIntraocularPressure: '',
  R_lens_Capsule_IOL_Status: '',
  R_retinalExamination: '',
  R_diskExamination: '',
  R_cylinder: 0,
  R_anteriorRoomDescription: null,
  R_sphere: 0,
  R_axis: 0,
};
const L_initialDefaultValues = {
  visit: '',
  L_quarantineStatus: '',
  L_cornealDiameter: 0,
  L_anteriorRoom: '',
  L_intraocularPressure: 0,
  L_methodMeasuringIntraocularPressure: '',
  L_lens_Capsule_IOL_Status: '',
  L_retinalExamination: '',
  L_diskExamination: '',
  L_cylinder: 0,
  L_anteriorRoomDescription: null,
  L_sphere: 0,
  L_axis: 0,
};

const Children = () => {
  const axios = useAxios();
  const { national_id } = useParams();

  const data = useChildren(national_id);

  const R_doSubmit = async (value) => {
    const model = {
      visit: value.visit || data.RightModel[0].defaultOption.value,
      cornea_status: value.R_quarantineStatus,
      cornea_diameter: value.R_cornealDiameter,
      anterior_chamber: value.R_anteriorRoom,
      intraocular_pressure: value.R_intraocularPressure,
      intraocular_pressure_method: value.R_methodMeasuringIntraocularPressure,
      disk_examination: value.R_diskExamination,
      retinal_examination: value.R_retinalExamination,
      lens_condition: value.R_lens_Capsule_IOL_Status,
      refraction_axis: value.R_axis,
      eye_side: 'راست',
      refraction_cylinder: value.R_cylinder,
      refraction_sphere: value.R_sphere,
      anterior_room_description: value.R_anteriorRoomDescription,
    };

    try {
      await axios.post('forms/epa/', model);
      toast.success('اطلاعات چشم راست با موفقیت ثبت شد');
    } catch (err) {
      console.log(err);
    }
  };

  const L_doSubmit = async (value) => {
    const model = {
      visit: value.visit || data.RightModel[0].defaultOption.value,
      cornea_status: value.L_quarantineStatus,
      cornea_diameter: value.L_cornealDiameter,
      anterior_chamber: value.L_anteriorRoom,
      intraocular_pressure: value.L_intraocularPressure,
      intraocular_pressure_method: value.L_methodMeasuringIntraocularPressure,
      disk_examination: value.L_diskExamination,
      retinal_examination: value.L_retinalExamination,
      lens_condition: value.L_lens_Capsule_IOL_Status,
      refraction_axis: value.L_axis,
      refraction_cylinder: value.L_cylinder,
      refraction_sphere: value.L_sphere,
      eye_side: 'چپ',
      anterior_room_description: value.L_anteriorRoomDescription,
    };

    try {
      await axios.post('forms/epa/', model);
      toast.success('اطلاعات چشم چپ با موفقیت ثبت شد');
    } catch (err) {
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
              validationSchema={R_ChildrenValidator}
              validateOnBlur={false}
              validateOnChange={false}
              validate={async (values) => {
                const error = await R_ChildrenValidator.isValid(values);
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
          <br />
          <div className="col-md-6">
            <Formik
              initialValues={L_initialDefaultValues}
              onSubmit={L_doSubmit}
              validationSchema={L_ChildrenValidator}
              validateOnBlur={false}
              validateOnChange={false}
              validate={async (values) => {
                const error = await L_ChildrenValidator.isValid(values);
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

export default Children;
