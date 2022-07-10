import useAxios from '../hooks/useAxios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const useExaminationsSurgery = (patient_national_id) => {
  const axios = useAxios();
  const [visitData, setVisitData] = useState([]);
  useEffect(() => {
    const getVisits = async () => {
      try {
        const visits = await axios.get(`visits/?search=${patient_national_id}`);
        const visitObjs = visits.data.results.map((item) => {
          return {
            label: item?.register_date,
            value: `${API_URL}visits/${item.id}/`,
          };
        });
        setVisitData(visitObjs);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };
    if (patient_national_id) {
      getVisits();
    }
  }, []);

  if (visitData.length == 0 && patient_national_id) return null;

  return {
    RightModel: [
      {
        name: 'visit',
        title: 'ویزیت* : ',
        type: 'selectOption',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
        },
        wrapperClass: 'input-block col-12 ',
        inputStyle: {
          width: '50%',
        },
        options: visitData,
        inputClass: 'mt-1',
        optionItemClass: '',
        readOnly: false,
      },
      {
        dateName: 'R_dateSurgery',
        timeName: 'R_timeSurgery',
        type: 'dateTime',
        title: ' تاریخ و ساعت عمل جراحی* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 d-inline-block',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: 'me-1',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '130px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_surgeon',
        type: 'selectOption',
        title: 'جراح* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: ['Attend', 'Fellow', 'Resident'],
        readOnly: false,
      },
      {
        name: 'R_surgeonFullName',
        type: 'text',
        title: 'نام و نام خانواگی جراح* :',
        titleClass: 'input-help text-right col-12',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80%',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_assistantSurgeonFullName',
        type: 'text',
        title: 'نام و نام خانواگی دستیار جراح* :',
        titleClass: 'input-help text-right col-12',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80%',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_biometricMethod',
        type: 'selectOption',
        title: 'روش بیومتری :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
          marginBottom: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: ['IOL master', 'A-scan', 'others'],
        readOnly: false,
      },
      {
        name: 'R_axialLenght',
        type: 'number',
        title: 'Axial length :',
        titleClass: 'input-help text-right',
        titleStyle: {
          display: 'block',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_k1',
        type: 'number',
        title: 'K1 : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          display: 'block',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_k2',
        type: 'number',
        title: 'K2 : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          display: 'block',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_typeSurgery',
        type: 'selectOption',
        title: 'نوع عمل* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: [
          'lensx',
          'lensx + Ant vitx',
          'lensx + Ant vitx + IOL',
          'lensx + IOL',
          'others',
        ],
        readOnly: false,
      },
      {
        name: 'R_surgical_complications_common',
        type: 'selectOption',
        title: 'عوارض عمل :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: [
          'Phimosis',
          'VAO',
          'Captured IOL',
          'Tilted IOL',
          'Decentred IOL',
          'Cornea Edema',
          'Others',
        ],
        readOnly: false,
      },
      {
        name: 'R_typeSurgeryDescription',
        type: 'textarea',
        title: ' نوع عمل (توضیحات)  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'R_complicationsDuringSurgeryDescription',
        type: 'textarea',
        title: ' عوارض حین عمل (توضیحات)  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'R_type_IOL',
        type: 'selectOption',
        title: 'نوع IOL* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: [
          'foldable IOL in bag',
          '3-piece IOL in sulcus',
          'scleral fixation of IOL',
          'Artisan',
          'others',
        ],
        readOnly: false,
      },
      {
        name: 'R_berand_IOL',
        type: 'selectOption',
        title: 'برند IOL :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: [
          {
            value: 1,
            label: 'برند 1',
          },
          {
            value: 2,
            label: 'برند 2',
          },
          {
            value: 3,
            label: 'برند 3',
          },
          {
            value: 4,
            label: 'برند 4',
          },
          {
            value: 5,
            label: 'برند 5',
          },
        ],
        readOnly: false,
      },
      {
        name: 'R_wound',
        type: 'selectOption',
        title: 'Wound :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: ['superior', 'temporal - corneal', 'scleral'],
        readOnly: false,
      },
      {
        type: 'headTitle',
        title: 'ریم(نواحی که ریم وجود ندارد را مارک کنید)* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
          fontSize: '1.15rem',
          color: 'rgb(81, 84, 252)',
        },
        wrapperClass: 'col-6',
        wrapperStyle: {
          marginTop: '10px',
        },
        readOnly: false,
      },
    ],
    LeftModel: [
      {
        name: 'visit',
        title: 'ویزیت* : ',
        type: 'selectOption',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
        },
        wrapperClass: 'input-block col-12 ',
        inputStyle: {
          width: '50%',
        },
        options: visitData,
        inputClass: 'mt-1',
        optionItemClass: '',
        readOnly: false,
      },
      {
        dateName: 'L_dateSurgery',
        timeName: 'L_timeSurgery',
        type: 'dateTime',
        title: ' تاریخ و ساعت عمل جراحی* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 d-inline-block',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: 'me-1',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '130px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_surgeon',
        type: 'selectOption',
        title: 'جراح* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: ['Attend', 'Fellow', 'Resident'],
        readOnly: false,
      },
      {
        name: 'L_surgeonFullName',
        type: 'text',
        title: 'نام و نام خانواگی جراح* :',
        titleClass: 'input-help text-right col-12',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80%',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_assistantSurgeonFullName',
        type: 'text',
        title: 'نام و نام خانواگی دستیار جراح* :',
        titleClass: 'input-help text-right col-12',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80%',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_biometricMethod',
        type: 'selectOption',
        title: 'روش بیومتری :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
          marginBottom: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: ['IOL master', 'A-scan', 'others'],
        readOnly: false,
      },
      {
        name: 'L_axialLenght',
        type: 'number',
        title: 'Axial length :',
        titleClass: 'input-help text-right',
        titleStyle: {
          display: 'block',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_k1',
        type: 'number',
        title: 'K1 : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          display: 'block',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_k2',
        type: 'number',
        title: 'K2 : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          display: 'block',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '80px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_typeSurgery',
        type: 'selectOption',
        title: 'نوع عمل* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },

        options: [
          'lensx',
          'lensx + Ant vitx',
          'lensx + Ant vitx + IOL',
          'lensx + IOL',
          'others',
        ],
        readOnly: false,
      },
      {
        name: 'L_surgical_complications_common',
        type: 'selectOption',
        title: 'عوارض عمل :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },

        options: [
          'Phimosis',
          'VAO',
          'Captured IOL',
          'Tilted IOL',
          'Decentred IOL',
          'Cornea Edema',
          'Others',
        ],
        readOnly: false,
      },
      {
        name: 'L_typeSurgeryDescription',
        type: 'textarea',
        title: ' نوع عمل (توضیحات)  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'L_complicationsDuringSurgeryDescription',
        type: 'textarea',
        title: ' عوارض حین عمل (توضیحات)  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'L_type_IOL',
        type: 'selectOption',
        title: 'نوع IOL* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },

        options: [
          'foldable IOL in bag',
          '3-piece IOL in sulcus',
          'scleral fixation of IOL',
          'Artisan',
          'others',
        ],
        readOnly: false,
      },
      {
        name: 'L_berand_IOL',
        type: 'selectOption',
        title: 'برند IOL :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },

        options: [
          {
            value: 1,
            label: 'برند 1',
          },
          {
            value: 2,
            label: 'برند 2',
          },
          {
            value: 3,
            label: 'برند 3',
          },
          {
            value: 4,
            label: 'برند 4',
          },
          {
            value: 5,
            label: 'برند 5',
          },
        ],
        readOnly: false,
      },
      {
        name: 'L_wound',
        type: 'selectOption',
        title: 'Wound :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },

        options: ['superior', 'temporal - corneal', 'scleral'],
        readOnly: false,
      },
      {
        type: 'headTitle',
        title: 'ریم(نواحی که ریم وجود ندارد را مارک کنید)* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
          fontSize: '1.15rem',
          color: 'rgb(81, 84, 252)',
        },
        wrapperClass: 'col-6',
        wrapperStyle: {
          marginTop: '10px',
        },
        readOnly: false,
      },
    ],
  };
};
