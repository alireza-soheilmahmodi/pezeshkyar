import * as Yup from 'yup';

const R_BeforSurgeryValidator = Yup.object().shape({
  //right eye

  R_visualAcuity: Yup.number('این فیلد باید پر شود')
    .min(0, 'این فیلد نمیتواند منفی باشد')
    .max(10, 'این فیلد نباید بیشتر از 10 باشد')
    .nullable(),
  R_followLight: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),

  R_strabismus: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),

  R_nystagmus: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),

  R_redEyeReflex: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),

  R_cylinder: Yup.number('این فیلد باید پر شود')
    .negative('این فیلد باید منفی باشد')
    .nullable(),
  R_sphere: Yup.number('این فیلد باید پر شود')
    .positive('این فیلد باید مثبت باشد')
    .nullable(),
  R_axis: Yup.number('این فیلد باید پر شود')
    .min(0, 'این فیلد باید بیشتر از صفر باشد')
    .max(180, 'این فیلد باید کمتر از 180 باشد')
    .nullable(),
  R_cataract: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_cataractType: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_anteriorSegment: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_anteriorSegmentDescription: Yup.string(
    'این فیلد باید رشته باشد'
  ).nullable(),
  R_retin: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_retinDescription: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_visual_acuity_choice: Yup.string('این فیلد باید رشته باشد').nullable(),
});
const L_BeforSurgeryValidator = Yup.object().shape({
  // left eye
  L_visualAcuity: Yup.number('این فیلد باید پر شود')
    .min(0, 'این فیلد نمیتواند منفی باشد')
    .max(10, 'این فیلد نباید بیشتر از 10 باشد')
    .nullable(),
  L_followLight: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_strabismus: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_nystagmus: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_redEyeReflex: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_cylinder: Yup.number('این فیلد باید پر شود')
    .negative('این فیلد باید منفی باشد')
    .nullable(),
  L_sphere: Yup.number('این فیلد باید پر شود')
    .positive('این فیلد باید مثبت باشد')
    .nullable(),
  L_axis: Yup.number('این فیلد باید پر شود')
    .min(0, 'این فیلد باید بیشتر از صفر باشد')
    .max(180, 'این فیلد باید کمتر از 180 باشد')
    .nullable(),
  L_cataract: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_cataractType: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_anteriorSegment: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_anteriorSegmentDescription: Yup.string(
    'این فیلد باید رشته باشد'
  ).nullable(),
  L_retin: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_retinDescription: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_visual_acuity_choice: Yup.string('این فیلد باید رشته باشد').nullable(),
});
export { R_BeforSurgeryValidator, L_BeforSurgeryValidator };
