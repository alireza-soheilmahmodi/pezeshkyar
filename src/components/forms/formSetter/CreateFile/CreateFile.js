import { Form, Formik } from 'formik';
import { InputMaker } from '../../../common/form/InputMaker';
import { useState } from 'react';
import CreateFileValidator from '../../../../utils/validation/CreateFile.validation';
import useCreateFile from '../../../../data/useCreateFile';
import useAxios from '../../../../hooks/useAxios';
import Style from './CreateFile.module.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialDefaultValues = {
  firstName: '', // check
  lastName: '',
  fatherName: '',
  motherName: '',
  sex: null,
  nationaleId: '',
  birthDate: '',
  provinceBirth: '',
  cityBirth: '',
  provinceLife: '',
  cityLife: '',
  typeDelivery: null,
  nonMedicalDelivery: '',
  ageChildbirth: null,
  birthWeight: null,
  numberChildren: null,
  parentalRelationship: false,
  hospitalizationSystem: false,
  historySystemicDisease: false,
  familyHistoryCataracts: '',
  historyOtherEyeDiseases: null,
  ageDiagnosisYear: null,
  ageDiagnosisMonth: null,
  diagnosisDiseaseBy: '',
  phoneNumber: null,
};

const CreateFile = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const [birthProvince, setBirthProvince] = useState({});
  const [livingProvince, setLivingProvince] = useState({});
  const data = useCreateFile(birthProvince, livingProvince);
  const [showError, setShowError] = useState(false);

  const doSubmit = async (value) => {
    const model = {
      birthday_province: JSON.parse(value.provinceBirth),
      living_province: JSON.parse(value.provinceLife),
      birthday_city: JSON.parse(value.cityBirth),
      living_city: JSON.parse(value.cityLife),
      gender: value.sex,
      delivery_type: value.typeDelivery,
      diagnosed_by: value.diagnosisDiseaseBy,
      birthday: value.birthDate,
      first_name: value.firstName,
      last_name: value.lastName,
      fathers_name: value.fatherName,
      mothers_name: value.motherName,
      national_id: value.nationaleId,
      delivery_age: value.ageChildbirth,
      birthday_weight: value.birthWeight,
      parent_family: value.parentalRelationship,
      number_of_children: value.numberChildren,
      nonMedicalDelivery: value.nonMedicalDelivery,
      hospital_history: value.hospitalizationSystem,
      systemic_disease_history: value.historySystemicDisease,
      historyOtherEyeDiseases: value.historyOtherEyeDiseases,
      age_at_diagnosis_year: value.ageDiagnosisYear,
      age_at_diagnosis_month: value.ageDiagnosisMonth,
      phoneNumber: value.phoneNumber,
      cataracte_history: value.familyHistoryCataracts,
    };

    try {
      await axios.post('patients/', model);
      toast.success('اطلاعات با موفقیت ثبت شد');
      navigate('/app/addVisit');
    } catch (err) {
      toast.error('ثبت اطلاعات انجام نشد');
      console.log(err);
    }
  };
  return (
    <div className={Style.container}>
      <div
        className="col-12 col-md-9 m-auto form-max-width p-3 "
        style={{
          boxShadow: '0 0 10px 1px #ccc',
          background: '#f2f2f2',
        }}
      >
        <br />
        <h2> </h2>
        <br />
        <Formik
          initialValues={initialDefaultValues}
          onSubmit={doSubmit}
          validationSchema={CreateFileValidator}
          validate={async (values) => {
            if (values.provinceBirth) {
              setBirthProvince(JSON.parse(values.provinceBirth));
            }
            if (values.provinceLife) {
              setLivingProvince(JSON.parse(values.provinceLife));
            }
            const valid = await CreateFileValidator.isValid(values);
            if (!valid && showError) {
              toast.error('اطلاعات فرم کامل نیست');
              setShowError(false);
            }
          }}
          validateOnBlur={false}
        >
          <Form>
            <div className="row">
              <InputMaker data={data} />
              <br />
              <br />
            </div>
            <button
              onClick={() => setShowError(true)}
              type="submit"
              className={`${Style.jfButton} m-auto mt-4 mb-2`}
            >
              ثبت
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateFile;
