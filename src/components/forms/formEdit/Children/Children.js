import { Form, Formik } from 'formik';
import { useState, useEffect } from 'react';
import { InputMaker } from '../../../common/form/InputMaker';
import { R_ChildrenValidator } from '../../../../utils/validation/Children.validation';
import { useChildren } from '../../../../data/useChildren';
import useAxios from '../../../../hooks/useAxios';
import Style from './Children.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

//deleting visit field from from validator
delete R_ChildrenValidator.fields.visit;

const Children = () => {
  const axios = useAxios();
  const data = useChildren();
  const navigate = useNavigate();

  // remove visit property
  const editData = data.RightModel.slice(1);

  const [formValues, setFormValues] = useState({
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
          R_quarantineStatus: values.cornea_status,
          R_cornealDiameter: values.cornea_diameter,
          R_anteriorRoom: values.anterior_chamber,
          R_intraocularPressure: values.intraocular_pressure,
          R_methodMeasuringIntraocularPressure:
            values.intraocular_pressure_method,
          R_diskExamination: values.disk_examination,
          R_retinalExamination: values.retinal_examination,
          R_lens_Capsule_IOL_Status: values.lens_condition,
          R_axis: values.refraction_axis,
          R_cylinder: values.refraction_cylinder,
          R_sphere: values.refraction_sphere,
          R_anteriorRoomDescription: values.anterior_room_description,
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
      cornea_status: value.R_quarantineStatus,
      cornea_diameter: value.R_cornealDiameter,
      anterior_chamber: value.R_anteriorRoom,
      intraocular_pressure: value.R_intraocularPressure,
      intraocular_pressure_method: value.R_methodMeasuringIntraocularPressure,
      disk_examination: value.R_diskExamination,
      retinal_examination: value.R_retinalExamination,
      lens_condition: value.R_lens_Capsule_IOL_Status,
      refraction_axis: value.R_axis,
      refraction_cylinder: value.R_cylinder,
      refraction_sphere: value.R_sphere,
      anterior_room_description: value.R_anteriorRoomDescription,
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
            validationSchema={R_ChildrenValidator}
            validateOnBlur={false}
            validateOnChange={false}
            validate={async (values) => {
              const valid = await R_ChildrenValidator.isValid(values);
              if (!valid) toast.error('اطلاعات فرم کامل نیست');
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
                <InputMaker data={editData} />
                <br />
                <br />

                <button
                  type="submit"
                  className={`${Style.jfButton} m-auto mt-4 mb-2`}
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

export default Children;
