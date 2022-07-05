import useAxios from '../hooks/useAxios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const useChildren = (patient_national_id) => {
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
        wrapperClass: 'input-block col-6 ',
        options: visitData,
        inputClass: 'mt-1',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'R_quarantineStatus',
        type: 'selectOption',
        title: 'وضعیت قرنیه* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: ['طبیعی', 'اپاسیته پریفرال', 'اپاسیته سنترال', 'ادم ', 'سایر'],
        readOnly: false,
      },
      {
        name: 'R_cornealDiameter',
        type: 'number',
        title: 'دیامتر قرنیه* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_anteriorRoom',
        type: 'selectOption',
        title: 'اتاق قدامی* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: ['طبیعی', 'دیسژنزی'],
        readOnly: false,
      },
      {
        name: 'R_anteriorRoomDescription',
        type: 'textarea',
        title: 'توضیحات اتاق قدامی : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'R_intraocularPressure',
        type: 'number',
        title: 'فشار داخل چشمی* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_methodMeasuringIntraocularPressure',
        type: 'selectOption',
        title: 'روش اندازه گیری فشار داخل چشمی* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: [
          {
            value: 1,
            label: 'روش اول',
          },
          {
            value: 2,
            label: 'روش دوم',
          },
        ],
        readOnly: false,
      },
      {
        name: 'R_lens_Capsule_IOL_Status',
        type: 'selectOption',
        title: 'وضعیت لنز/کپسول/IOL* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: [
          {
            value: 1,
            label: 'روش اول',
          },
          {
            value: 2,
            label: 'روش دوم',
          },
        ],
        readOnly: false,
      },
      {
        name: 'R_retinalExamination',
        type: 'textarea',
        title: ' معاینه رتین :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'R_diskExamination',
        type: 'textarea',
        title: ' معاینه دیسک :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        type: 'headTitle',
        title: 'رفراکشن* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
      },
      {
        name: 'R_axis',
        type: 'number',
        title: 'Axis* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_cylinder',
        type: 'number',
        title: 'Cylinder* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_sphere',
        type: 'number',
        title: 'Sphere* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
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
        wrapperClass: 'input-block col-6 ',
        options: visitData,
        inputClass: 'mt-1',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'L_quarantineStatus',
        type: 'selectOption',
        title: 'وضعیت قرنیه* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: ['طبیعی', 'اپاسیته پریفرال', 'اپاسیته سنترال', 'ادم ', 'سایر'],
        readOnly: false,
      },
      {
        name: 'L_cornealDiameter',
        type: 'number',
        title: 'دیامتر قرنیه* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_anteriorRoom',
        type: 'selectOption',
        title: 'اتاق قدامی* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: ['طبیعی', 'دیسژنزی'],
        readOnly: false,
      },
      {
        name: 'L_anteriorRoomDescription',
        type: 'textarea',
        title: 'توضیحات اتاق قدامی : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'L_intraocularPressure',
        type: 'number',
        title: 'فشار داخل چشمی* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_methodMeasuringIntraocularPressure',
        type: 'selectOption',
        title: 'روش اندازه گیری فشار داخل چشمی* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: [
          {
            value: 1,
            label: 'روش اول',
          },
          {
            value: 2,
            label: 'روش دوم',
          },
        ],
        readOnly: false,
      },
      {
        name: 'L_lens_Capsule_IOL_Status',
        type: 'selectOption',
        title: 'وضعیت لنز/کپسول/IOL* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: [
          {
            value: 1,
            label: 'روش اول',
          },
          {
            value: 2,
            label: 'روش دوم',
          },
        ],
        readOnly: false,
      },
      {
        name: 'L_retinalExamination',
        type: 'textarea',
        title: ' معاینه رتین :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'L_diskExamination',
        type: 'textarea',
        title: ' معاینه دیسک :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        type: 'headTitle',
        title: 'رفراکشن* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
      },
      {
        name: 'L_axis',
        type: 'number',
        title: 'Axis* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_cylinder',
        type: 'number',
        title: 'Cylinder* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_sphere',
        type: 'number',
        title: 'Sphere* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-4',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
    ],
  };
};
