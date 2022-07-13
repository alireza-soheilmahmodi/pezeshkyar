import * as Yup from 'yup';

const retinaConsultValidator = Yup.object().shape({
  visit: Yup.string('این فیلد باید رشته باشد')
    .required('این فیلد لازم است')
    .nullable(),
  congenitalCataract: Yup.string('این فیلد باید رشته باشد').nullable(),
  redReflex: Yup.string('این فیلد باید رشته باشد').nullable(),
  fixation: Yup.string('این فیلد باید رشته باشد').nullable(),
  cylinder: Yup.number('این فیلد باید عدد باشد')
    .negative('این فیلد باید منفی باشد')
    .nullable(),
  axis: Yup.number('این فیلد باید عدد باشد')
    .min(0, 'این فیلد باید بیشتر از صفر باشد')
    .max(180, 'این فیلد باید کمتر از 180 باشد')
    .nullable(),
  sphere: Yup.number('این فیلد باید عدد باشد')
    .positive('این فیلد باید مثبت باشد')
    .nullable(),
  deviation: Yup.string('این فیلد باید رشته باشد').nullable(),
  visibilityFundus: Yup.string('این فیلد باید رشته باشد').nullable(),
  coloboma: Yup.string('این فیلد باید رشته باشد').nullable(),
  pfv: Yup.string('این فیلد باید رشته باشد').nullable(),
  bScan: Yup.string('این فیلد باید رشته باشد').nullable(),
  rentinalDetachment: Yup.string('این فیلد باید رشته باشد').nullable(),
  pfvType: Yup.string('این فیلد باید رشته باشد').nullable(),
  activeVessels: Yup.string('این فیلد باید رشته باشد').nullable(),
  microphthalmia: Yup.string('این فیلد باید رشته باشد').nullable(),
  longCiliaryProcess: Yup.string('این فیلد باید رشته باشد').nullable(),
  hyaloidArtery: Yup.string('این فیلد باید رشته باشد').nullable(),
  draggingVessels: Yup.string('این فیلد باید رشته باشد').nullable(),
  rop: Yup.string('این فیلد باید رشته باشد').nullable(),
  stage: Yup.string('این فیلد باید رشته باشد').nullable(),
  zone: Yup.string('این فیلد باید رشته باشد').nullable(),
  historyLaser: Yup.string('این فیلد باید رشته باشد').nullable(),
  historyIVB: Yup.string('این فیلد باید رشته باشد').nullable(),
  plan: Yup.string('این فیلد باید رشته باشد').nullable(),
});

export default retinaConsultValidator;
