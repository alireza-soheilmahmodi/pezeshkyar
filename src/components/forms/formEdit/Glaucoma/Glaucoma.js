import { Form, Formik } from 'formik';
import { useState, useEffect } from 'react';
import { InputMaker } from '../../../common/form/InputMaker';
import { useGlaucoma } from '../../../../data/useGlaucoma';
import useAxios from '../../../../hooks/useAxios';
import Style from './Glaucoma.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const Glaucoma = () => {
  const axios = useAxios();
  const data = useGlaucoma();
  const navigate = useNavigate();

  // remove visit property
  const editData = data.slice(1);

  const [formValues, setFormValues] = useState({
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
          glaucomaHistoryOperation: values.history_glaucoma_surgery,
          shant: values.shunt,
          shantLocation: values.shunt_location,
          tubeLocation: values.tube_location,
          examinationType: values.examination_type,
          bihooshiType: values.anesthesia_type,
          iopTool: values.iop_device,
          cornealEdemas: values.corneal_edema,
          cornealOpacitys: values.corneal_opacity,
          haabsStriae: values.striae_haabs,
          pas: values.pas,
          pupils: values.pupil,
          vitre: values.vitreous_anterrior_chamber,
          retainedCorticalMaterial: values.material_retained_cortical,
          iols: values.iol,
          plan: values.plan,
          operationNeeded: values.need_surgery,
          age: values.age,
          operationAge: values.surgery_age,
          bihooshiDuration: values.iop,
          cct: values.cct,
          cornealDiameterVertical: values.vertical_diameter,
          cornealDiameterHorizontal: values.horizontal_diameter,
          PASDuraction: values.pas_time,
          CDRatio: values.ratio_cd,
          type_surgery: values.type_surgery,
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
        className="col-12 m-auto form-max-width row"
        style={{
          boxShadow: '0 0 10px 1px #ccc',
          background: '#f2f2f2',
        }}
      >
        <div className="col-md-8 m-auto">
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
              </div>
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

export default Glaucoma;
