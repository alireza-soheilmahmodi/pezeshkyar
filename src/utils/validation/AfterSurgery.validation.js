import * as Yup from 'yup';

const R_AfterSurgeryValidator = Yup.object().shape({
  visit: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
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
  R_followTarget: Yup.string().required('این فیلد باید پر شود').nullable(),
  R_strabismus: Yup.string().required('این فیلد باید پر شود').nullable(),
  R_visual_acuity: Yup.number().nullable(),
  R_visual_acuity_choice: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_IOP: Yup.number()
    .positive('این فیلد باید مثبت باشد')
    .required('این فیلد باید پر شود')
    .nullable(),
  R_IOP_measurementMethod: Yup.string()
    .required('این فیلد باید پر شود')
    .nullable(),
  R_timeCloseEye: Yup.number().positive('این فیلد باید مثبت باشد').nullable(),
  R_realTimeCloseEye: Yup.number()
    .positive('این فیلد باید مثبت باشد')
    .nullable(),
  R_examinationAnteriorSegment: Yup.string().nullable(),
  R_examinationPosteriorSegment: Yup.string().nullable(),
  R_complications_common: Yup.string().nullable(),
  R_complications: Yup.string().nullable(),
  R_EUA: Yup.string().required('این فیلد باید پر شود'),
  R_next_visit_date: Yup.string().required('این فیلد باید پر شود'),
  R_surgery_date: Yup.string().required('این فیلد باید پر شود'),
  R_examination_date: Yup.string().required('این فیلد باید پر شود'),
});
const L_AfterSurgeryValidator = Yup.object().shape({
  visit: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
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
  L_followTarget: Yup.string().required('این فیلد باید پر شود').nullable(),
  L_strabismus: Yup.string().required('این فیلد باید پر شود').nullable(),
  L_visual_acuity: Yup.number().nullable(),
  L_visual_acuity_choice: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_IOP: Yup.number()
    .positive('این فیلد باید مثبت باشد')
    .required('این فیلد باید پر شود')
    .nullable(),
  L_IOP_measurementMethod: Yup.string()
    .required('این فیلد باید پر شود')
    .nullable(),
  L_timeCloseEye: Yup.number().positive('این فیلد باید مثبت باشد').nullable(),
  L_realTimeCloseEye: Yup.number()
    .positive('این فیلد باید مثبت باشد')
    .nullable(),
  L_examinationAnteriorSegment: Yup.string().nullable(),
  L_examinationPosteriorSegment: Yup.string().nullable(),
  L_complications_common: Yup.string().nullable(),
  L_complications: Yup.string().nullable(),
  L_EUA: Yup.string().required('این فیلد باید پر شود'),
  L_next_visit_date: Yup.string().required('این فیلد باید پر شود'),
  L_surgery_date: Yup.string().required('این فیلد باید پر شود'),
  L_examination_date: Yup.string().required('این فیلد باید پر شود'),
});
export { R_AfterSurgeryValidator, L_AfterSurgeryValidator };
