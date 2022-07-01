import { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import ostans from '../data/ostan.json';

const useCreateFile = (birthProvince, livingProvince) => {
  const axios = useAxios();

  const [birthCities, setBirthCities] = useState([]);
  const [livingCities, setLivingCities] = useState([]);

  useEffect(() => {
    const getBirthCities = async () => {
      const cities = await axios.get(`shahrestans/${birthProvince.amar_code}`);
      const birthCities = cities.data.map((city) => ({
        label: city.name,
        value: JSON.stringify(city),
      }));

      setBirthCities(birthCities);
    };

    if (JSON.stringify(birthProvince) !== '{}') {
      getBirthCities();
    }
  }, [birthProvince]);

  useEffect(() => {
    const getLivingCities = async () => {
      const cities = await axios.get(`shahrestans/${livingProvince.amar_code}`);
      const livingCities = cities.data.map((city) => ({
        label: city.name,
        value: JSON.stringify(city),
      }));

      setLivingCities(livingCities);
    };

    if (JSON.stringify(livingProvince) !== '{}') {
      getLivingCities();
    }
  }, [livingProvince]);

  return [
    {
      name: 'firstName',
      type: 'text',
      title: 'نام* :',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-5',
      wrapperStyle: { marginTop: '10px' },
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '150px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'lastName',
      type: 'text',
      title: 'نام خانوادگی* :',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-5',
      wrapperStyle: { marginTop: '10px' },
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '150px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'fatherName',
      type: 'text',
      title: 'نام پدر* :',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-5',
      wrapperStyle: { marginTop: '10px' },
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '150px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'motherName',
      type: 'text',
      title: 'نام مادر :',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-5',
      wrapperStyle: { marginTop: '10px' },
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '150px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      type: 'radio',
      name: 'sex',
      title: 'جنسیت* : ',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '20px' },
      radioItems: [
        {
          style: { display: 'inline' },
          class: 'ms-1 me-2',
          id: 'y2',
          value: 'مرد',
          label: 'مرد  | ',
          labelClass: 'input-help text-right',
          labelStyle: { marginBottom: '12px' },
        },
        {
          style: { display: 'inline' },
          class: 'ms-1 me-2',
          id: 'n2',
          value: 'زن',
          label: 'زن',
          labelClass: 'input-help text-right',
          labelStyle: { marginBottom: '12px' },
        },
      ],
    },
    {
      name: 'nationaleId',
      type: 'text',
      title: ' کد ملی* : ',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '20px' },
      inputClass: '',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '150px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'birthDate',
      type: 'date',
      title: ' تاریخ تولد*  :',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '20px' },
      inputClass: '',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '150px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'provinceBirth',
      type: 'selectOption',
      title: 'استان محل تولد* :',
      titleClass: 'input-help text-right',
      titleStyle: { color: 'rgb(81, 84, 252)', marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      defaultOption: '----',
      options: ostans.data,
      id: 'birthProvince',
    },
    {
      name: 'cityBirth',
      type: 'selectOption',
      title: 'شهر محل تولد* :',
      titleClass: 'input-help text-right',
      titleStyle: { color: 'rgb(81, 84, 252)', marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      defaultOption: '----',
      options: birthCities,
    },
    {
      name: 'provinceLife',
      type: 'selectOption',
      title: 'استان محل زندگی* :',
      titleClass: 'input-help text-right',
      titleStyle: { color: 'rgb(81, 84, 252)', marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      defaultOption: '----',
      options: ostans.data,
      id: 'livingProvince',
    },
    {
      name: 'cityLife',
      type: 'selectOption',
      title: 'شهر محل زندگی* :',
      titleClass: 'input-help text-right',
      titleStyle: { color: 'rgb(81, 84, 252)', marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      defaultOption: '----',
      options: livingCities,
    },
    {
      type: 'radio',
      name: 'typeDelivery',
      title: 'نوع زایمان* : ',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '20px' },
      radioItems: [
        {
          style: { display: 'inline' },
          class: 'ms-1 me-2',
          id: 'y3',
          value: 'طبیعی',
          label: 'طبیعی  | ',
          labelClass: 'input-help text-right',
          labelStyle: { marginBottom: '12px' },
        },
        {
          style: { display: 'inline' },
          class: 'ms-1 me-2',
          id: 'n3',
          value: 'سزارین',
          label: 'سزارین',
          labelClass: 'input-help text-right',
          labelStyle: { marginBottom: '12px' },
        },
      ],
    },
    {
      name: 'nonMedicalDelivery',
      type: 'textarea',
      title: 'عوامل غیر پزشکی درباره زایمان  ',
      titleClass: 'input-help text-right',
      titleStyle: { color: 'rgb(81, 84, 252)', marginBottom: '12px' },
      wrapperClass: 'input-block col-12 mt-4',
      wrapperStyle: { marginTop: '2px' },
      inputClass: 'textarea text',
      placeholder: 'مختصری درباره عوامل غیر پزشکی دخیل در زایمان :',
    },
    {
      name: 'ageChildbirth',
      type: 'number',
      title: ' سن زایمان : ',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-4',
      wrapperStyle: { marginTop: '20px' },
      inputClass: '',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '50px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'birthWeight',
      type: 'number',
      title: ' وزن هنگام تولد : ',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-4',
      wrapperStyle: { marginTop: '20px' },
      inputClass: '',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '50px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'numberChildren',
      type: 'number',
      title: ' تعداد فرزندان : ',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-4',
      wrapperStyle: { marginTop: '20px' },
      inputClass: '',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '50px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'parentalRelationship',
      type: 'checkbox',
      id: 'stra',
      inputLabel: 'نسبت فامیلی والدین :',
      labelClass: 'input-help text-right ml-2',
      labelStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '10px' },
      inputStyle: {
        direction: 'ltr',
        display: 'inline',
      },
    },
    {
      name: 'hospitalizationSystem',
      type: 'checkbox',
      id: 'stra2',
      inputLabel: 'سابقه بستری در بیمارستان :',
      labelClass: 'input-help text-right ml-2',
      labelStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '10px' },
      inputStyle: {
        direction: 'ltr',
        display: 'inline',
      },
    },
    {
      name: 'historySystemicDisease',
      type: 'checkbox',
      id: 'stra3',
      inputLabel: 'سابقه بیماری سیستمیک :',
      labelClass: 'input-help text-right ml-2',
      labelStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '10px' },
      inputStyle: {
        direction: 'ltr',
        display: 'inline',
      },
    },
    {
      name: 'familyHistoryCataracts',
      type: 'selectOption',
      title: 'سابقه کاتاراکت در خانواده :',
      titleClass: 'input-help text-right',
      titleStyle: { color: 'rgb(81, 84, 252)', marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      defaultOption: '----',
      options: [
        { value: 'خیر', label: 'خیر' },
        { value: 'بله/ والدین', label: 'بله/ والدین' },
        { value: 'بله/ سایر فرزندان', label: 'بله/ سایر فرزندان' },
        { value: 'بله/ سایر افراد فامیل', label: 'بله/ سایر افراد فامیل' },
      ],
    },
    {
      name: 'historyOtherEyeDiseases',
      type: 'textarea',
      title: 'سابقه سایر بیماری های چشمی* ',
      titleClass: 'input-help text-right',
      titleStyle: { color: 'rgb(81, 84, 252)', marginBottom: '12px' },
      wrapperClass: 'input-block col-12 mt-4',
      wrapperStyle: { marginTop: '2px' },
      inputClass: 'textarea text',
      placeholder: 'سایر بیماری های چشمی را نام ببرید :',
    },
    {
      name: 'ageDiagnosisYear',
      type: 'number',
      title: ' سن هنگام تشخیص بیماری (سال)* : ',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '20px' },
      inputClass: '',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '50px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'ageDiagnosisMonth',
      type: 'number',
      title: ' سن هنگام تشخیص بیماری (ماه)* : ',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '20px' },
      inputClass: '',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '50px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
    {
      name: 'diagnosisDiseaseBy',
      type: 'selectOption',
      title: 'تشخیص بیماری توسط* :',
      titleClass: 'input-help text-right me-1',
      titleStyle: { color: 'rgb(81, 84, 252)', marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '10px' },
      defaultOption: '----',
      options: [
        { value: 'والدین', label: 'والدین' },
        { value: 'متخصص اطفال', label: 'متخصص اطفال' },
        { value: 'چشم پزشک', label: 'چشم پزشک' },
        { value: 'سایر', label: 'سایر' },
      ],
    },
    {
      name: 'phoneNumber',
      type: 'text',
      title: ' شماره تماس* : ',
      titleClass: 'input-help text-right ms-1',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '20px' },
      placeholder: ' 09*********',
      inputClass: 'phonenumber',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '200px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
    },
  ];
};

export default useCreateFile;
