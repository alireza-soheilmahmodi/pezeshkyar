import * as Yup from 'yup';

const glaucomaValidator = Yup.object().shape({
  age: Yup.number('این فیلد باید عدد باشد').nullable(),
  operationAge: Yup.number('این فیلد باید عدد باشد').nullable(),
  glaucomaHistoryOperation: Yup.string('این فیلد باید رشته باشد').nullable(),
  shant: Yup.string('این فیلد باید رشته باشد').nullable(),
  shantLocation: Yup.string('این فیلد باید رشته باشد').nullable(),
  tubeLocation: Yup.string('این فیلد باید رشته باشد').nullable(),
  examinationType: Yup.string('این فیلد باید رشته باشد').nullable(),
  bihooshiType: Yup.string('این فیلد باید رشته باشد').nullable(),
  bihooshiDuration: Yup.number('این فیلد باید عدد باشد').nullable(),
  iopTool: Yup.string('این فیلد باید رشته باشد').nullable(),
  treatmentMethod: Yup.string('این فیلد باید رشته باشد').nullable(),
  axialLength: Yup.string('این فیلد باید رشته باشد').nullable(),
  cct: Yup.number('این فیلد باید عدد باشد').nullable(),
  cornealEdemas: Yup.string('این فیلد باید رشته باشد').nullable(),
  cornealOpacitys: Yup.string('این فیلد باید رشته باشد').nullable(),
  haabsStriae: Yup.string('این فیلد باید رشته باشد').nullable(),
  cornealDiameterVertical: Yup.number('این فیلد باید عدد باشد').nullable(),
  cornealDiameterHorizontal: Yup.number('این فیلد باید عدد باشد').nullable(),
  pas: Yup.string('این فیلد باید رشته باشد').nullable(),
  PASDuraction: Yup.number('این فیلد باید عدد باشد').nullable(),
  pupils: Yup.string('این فیلد باید رشته باشد').nullable(),
  vitre: Yup.string('این فیلد باید رشته باشد').nullable(),
  retainedCorticalMaterial: Yup.string('این فیلد باید رشته باشد').nullable(),
  iols: Yup.string('این فیلد باید رشته باشد').nullable(),
  CDRatio: Yup.number('این فیلد باید عدد باشد').nullable(),
  plan: Yup.string('این فیلد باید رشته باشد').nullable(),
  operationNeeded: Yup.string('این فیلد باید رشته باشد').nullable(),
});

export default glaucomaValidator;
