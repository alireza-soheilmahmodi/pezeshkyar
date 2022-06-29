import * as Yup from 'yup';

const R_ExaminationsSurgeryValidator = Yup.object().shape({
  visit: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_dateSurgery: Yup.string().required('این فیلد لازم است').nullable(),
  R_timeSurgery: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_surgeon: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_surgeonFullName: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_assistantSurgeonFullName: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_biometricMethod: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_axialLenght: Yup.number().nullable(),
  R_k1: Yup.number().nullable(),
  R_k2: Yup.number().nullable(),
  R_typeSurgery: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  R_typeSurgeryDescription: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_type_IOL: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_berand_IOL: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_wound: Yup.string('این فیلد باید رشته باشد').nullable(),
  R_complicationsDuringSurgeryDescription: Yup.string(
    'این فیلد باید رشته باشد'
  ).nullable(),
  R_surgical_complications_common: Yup.string(
    'این فیلد باید رشته باشد'
  ).nullable(),
});

const L_ExaminationsSurgeryValidator = Yup.object().shape({
  visit: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_dateSurgery: Yup.string().required('این فیلد لازم است').nullable(),
  L_timeSurgery: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_surgeon: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_surgeonFullName: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_assistantSurgeonFullName: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_biometricMethod: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_axialLenght: Yup.number().nullable(),
  L_k1: Yup.number().nullable(),
  L_k2: Yup.number().nullable(),
  L_typeSurgery: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  L_typeSurgeryDescription: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_type_IOL: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_berand_IOL: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_wound: Yup.string('این فیلد باید رشته باشد').nullable(),
  L_complicationsDuringSurgeryDescription: Yup.string(
    'این فیلد باید رشته باشد'
  ).nullable(),
  L_surgical_complications_common: Yup.string(
    'این فیلد باید رشته باشد'
  ).nullable(),
});
export { L_ExaminationsSurgeryValidator, R_ExaminationsSurgeryValidator };
