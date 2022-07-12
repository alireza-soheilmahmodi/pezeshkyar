import * as Yup from 'yup';

const AddReferenceValidator = Yup.object().shape({
  visit: Yup.number().required('این فیلد لازم است').nullable(),
  strabismusDoctor: Yup.number().nullable(true),
  retinaConsultDoctor: Yup.number().nullable(true),
  geneticsDoctor: Yup.number().nullable(true),
  glaucomaDoctor: Yup.number().nullable(true),
  description: Yup.string().required('این فیلد لازم است'),
});

export default AddReferenceValidator;
