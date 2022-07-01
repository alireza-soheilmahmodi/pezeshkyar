import * as Yup from 'yup';

const CreateFileFormValidator = Yup.object().shape({
  firstName: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است.')
    .nullable(),
  lastName: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است.')
    .nullable(),
  fatherName: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است.')
    .nullable(),
  motherName: Yup.string('این فیلد باید رشته باشد').nullable(),
  sex: Yup.string().required('این فیلد لازم است.').nullable(),
  nationaleId: Yup.number('کد ملی باید عدد باشد')
    .positive('کد ملی باید مثبت باشد')
    .required('این فیلد لازم است.')
    .nullable(),
  birthDate: Yup.string().required('این فیلد لازم است.').nullable(),
  provinceBirth: Yup.object().required('این فیلد لازم است.').nullable(),
  cityBirth: Yup.object().required('این فیلد لازم است.').nullable(),
  provinceLife: Yup.object().required('این فیلد لازم است.').nullable(),
  cityLife: Yup.object().required('این فیلد لازم است.').nullable(),
  typeDelivery: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است.')
    .nullable(),
  nonMedicalDelivery: Yup.string('این فیلد باید رشته باشد').nullable(),
  ageChildbirth: Yup.number('این فیلد باید عدد باشد')
    .positive('این فیلد باید مثبت باشد')
    .min(0, 'این فیلد باید مثبت باشد')
    .nullable(),
  birthWeight: Yup.number('این فیلد باید عدد باشد')
    .min(0, 'این فیلد باید مثبت باشد')
    .nullable(),

  numberChildren: Yup.number('این فیلد باید عدد باشد')
    .min(0, 'این فیلد باید مثبت باشد')
    .nullable(),
  hospitalizationSystem: Yup.bool().nullable(),
  historySystemicDisease: Yup.bool().nullable(),
  familyHistoryCataracts: Yup.string('این فیلد باید رشته باشد').nullable(),
  historyOtherEyeDiseases: Yup.string('این فیلد باید رشته باشد').nullable(),
  ageDiagnosisYear: Yup.number('این فیلد باید عدد باشد')
    .positive('این فیلد نباید منفی باشد')
    .min(0, 'این فیلد نمیتواند منفی باشد')
    .required('این فیلد لازم است.')
    .nullable(),
  ageDiagnosisMonth: Yup.number('این فیلد باید عدد باشد')
    .min(1, 'عدد ماه باید بین 1 و 12 باشد')
    .max(12, 'عدد ماه باید بین 1 و 12 باشد')
    .required('این فیلد لازم است.')
    .nullable(),
  diagnosisDiseaseBy: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است.')
    .nullable(),
  phoneNumber: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است.')
    .nullable(),
});
export default CreateFileFormValidator;
