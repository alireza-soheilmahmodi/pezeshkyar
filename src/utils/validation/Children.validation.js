import * as Yup from 'yup';

const R_ChildrenValidator = Yup.object().shape({
  visit: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_quarantineStatus: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_cornealDiameter: Yup.number()
    .positive('این فیلد باید مثبت باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_anteriorRoom: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_intraocularPressure: Yup.number().required('این فیلد لازم است').nullable(),
  R_methodMeasuringIntraocularPressure: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_lens_Capsule_IOL_Status: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_retinalExamination: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_diskExamination: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_cylinder: Yup.number('این فیلد باید پر شود')
    .negative('این فیلد باید منفی باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_sphere: Yup.number('این فیلد باید پر شود')
    .positive('این فیلد باید مثبت باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_axis: Yup.number('این فیلد باید پر شود')
    .min(0, 'این فیلد باید بیشتر از صفر باشد')
    .max(180, 'این فیلد باید کمتر از 180 باشد')
    .required('این فیلد لازم است')
    .nullable(),
  // dateFileRegistration: Yup.date().required("این فیلد لازم است").nullable(),
});
const L_ChildrenValidator = Yup.object().shape({
  visit: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_quarantineStatus: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_cornealDiameter: Yup.number()
    .positive('این فیلد باید مثبت باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_anteriorRoom: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_intraocularPressure: Yup.number().required('این فیلد لازم است').nullable(),
  L_methodMeasuringIntraocularPressure: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_lens_Capsule_IOL_Status: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_retinalExamination: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_diskExamination: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_cylinder: Yup.number('این فیلد باید پر شود')
    .negative('این فیلد باید منفی باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_sphere: Yup.number('این فیلد باید پر شود')
    .positive('این فیلد باید مثبت باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_axis: Yup.number('این فیلد باید پر شود')
    .min(0, 'این فیلد باید بیشتر از صفر باشد')
    .max(180, 'این فیلد باید کمتر از 180 باشد')
    .required('این فیلد لازم است')
    .nullable(),
  // dateFileRegistration: Yup.date().required("این فیلد لازم است").nullable(),
});
export { R_ChildrenValidator, L_ChildrenValidator };
