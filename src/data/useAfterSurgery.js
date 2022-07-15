import useAxios from '../hooks/useAxios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const useAfterSurgery = (patient_national_id) => {
  const axios = useAxios();
  const [visitData, setVisitData] = useState([]);
  const [defaultVisit, setDefaultVisit] = useState();
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
        setDefaultVisit(visitObjs[0]);
        setVisitData(visitObjs.splice(1, visitObjs.length - 1));
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
        defaultOption: defaultVisit,
        inputClass: 'mt-1',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'R_next_visit_date',
        type: 'date',
        title: ' تاریخ ویزیت بعدی*  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          display: 'block',
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '140px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
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
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        type: 'radio',
        name: 'R_followTarget',
        title: 'دنبال کردن نور* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        radioItems: [
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'y1',
            value: 'بله',
            label: 'بله  | ',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'n1',
            value: 'خیر',
            label: 'خیر',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
        ],
        readOnly: false,
      },
      {
        type: 'radio',
        name: 'R_strabismus',
        title: 'استرابیسم* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        radioItems: [
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'y2',
            value: 'بله',
            label: 'بله  | ',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'n2',
            value: 'خیر',
            label: 'خیر',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
        ],
        readOnly: false,
      },
      {
        name: 'R_IOP',
        type: 'number',
        title: ' IOP* : ',
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
        name: 'R_visual_acuity',
        type: 'number',
        title: (
          <>
            <span style={{ marginLeft: '10px' }}>حدت بینایی : </span>
            <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
              {' '}
              10 /{' '}
            </span>
          </>
        ),
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
        name: 'R_visual_acuity_choice',
        type: 'selectOption',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
        },
        wrapperClass: 'input-block col-12 ',
        inputStyle: {
          width: '50%',
        },
        options: ['NLP', 'LP', 'HM', 'CF50cm', 'CF1m', 'CF2m', 'Other'],
        inputClass: 'mt-1',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'R_IOP_measurementMethod',
        type: 'selectOption',
        title: 'روش اندازه گیری IOP*',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '8px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },

        options: ['airpuff', 'goldman', 'Schiotz', 'tonopen'],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'R_timeCloseEye',
        type: 'number',
        title: 'زمان بستن چشم توصیه شده : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-8',
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
        min: '0',
        max: '10',
        readOnly: false,
      },
      {
        name: 'R_realTimeCloseEye',
        type: 'number',
        title: 'زمان بستن چشم واقعی : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
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
        name: 'R_examinationAnteriorSegment',
        type: 'textarea',
        title: 'معاینه سگمان قدامی  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '2px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'R_examinationPosteriorSegment',
        type: 'textarea',
        title: 'معاینه سگمان خلفی  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '2px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'R_complications_common',
        type: 'selectOption',
        title: '  عوارض رایج : ',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '8px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },

        options: [
          'Hyphema',
          'Iris defect',
          'Nucleus Drop',
          'IOL drop',
          'Others',
        ],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'R_complications',
        type: 'textarea',
        title: ' عوارض پیش آمده  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
          marginBottom: '20px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        type: 'radio',
        name: 'R_EUA',
        title: 'نیاز به EUA* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        radioItems: [
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'y4',
            value: 'بله',
            label: 'بله  | ',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'n4',
            value: 'خیر',
            label: 'خیر',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
        ],
        readOnly: false,
      },
      {
        name: 'R_surgery_date',
        type: 'date',
        title: ' تاریخ  جراحی*  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '140px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_examination_date',
        type: 'date',
        title: ' تاریخ  معاینه*  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '140px',
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
        wrapperClass: 'input-block col-12 ',
        inputStyle: {
          width: '50%',
        },

        options: visitData,
        defaultOption: defaultVisit,
        inputClass: 'mt-1',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'L_next_visit_date',
        type: 'date',
        title: ' تاریخ ویزیت بعدی*  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '140px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
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
          width: '100px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        type: 'radio',
        name: 'L_followTarget',
        title: 'دنبال کردن نور* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        radioItems: [
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'yl1',
            value: 'بله',
            label: 'بله  | ',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'nl1',
            value: 'خیر',
            label: 'خیر',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
        ],
        readOnly: false,
      },
      {
        type: 'radio',
        name: 'L_strabismus',
        title: 'استرابیسم* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        radioItems: [
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'yl2',
            value: 'بله',
            label: 'بله  | ',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'nl2',
            value: 'خیر',
            label: 'خیر',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
        ],
        readOnly: false,
      },
      {
        name: 'L_IOP',
        type: 'number',
        title: ' IOP* : ',
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
        name: 'L_visual_acuity',
        type: 'number',
        title: (
          <>
            <span style={{ marginLeft: '10px' }}>حدت بینایی : </span>
            <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
              {' '}
              10 /{' '}
            </span>
          </>
        ),
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
        name: 'L_visual_acuity_choice',
        type: 'selectOption',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
        },
        wrapperClass: 'input-block col-12 ',
        inputStyle: {
          width: '50%',
        },

        options: ['NLP', 'LP', 'HM', 'CF50cm', 'CF1m', 'CF2m', 'Other'],
        inputClass: 'mt-1',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'L_IOP_measurementMethod',
        type: 'selectOption',
        title: 'روش اندازه گیری IOP*',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '8px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: ['airpuff', 'goldman', 'Schiotz', 'tonopen'],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'L_timeCloseEye',
        type: 'number',
        title: 'زمان بستن چشم توصیه شده : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-8',
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
        min: '0',
        max: '10',
        readOnly: false,
      },
      {
        name: 'L_realTimeCloseEye',
        type: 'number',
        title: 'زمان بستن چشم واقعی : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
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
        name: 'L_examinationAnteriorSegment',
        type: 'textarea',
        title: 'معاینه سگمان قدامی  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '2px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'L_examinationPosteriorSegment',
        type: 'textarea',
        title: 'معاینه سگمان خلفی  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '2px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        name: 'L_complications_common',
        type: 'selectOption',
        title: '  عوارض رایج : ',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '8px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputStyle: {
          width: '50%',
        },
        options: [
          'Hyphema',
          'Iris defect',
          'Nucleus Drop',
          'IOL drop',
          'Others',
        ],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'L_complications',
        type: 'textarea',
        title: ' عوارض پیش آمده  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
          marginBottom: '20px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
      {
        type: 'radio',
        name: 'L_EUA',
        title: 'نیاز به EUA* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '20px',
        },
        radioItems: [
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'yl4',
            value: 'بله',
            label: 'بله  | ',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'nl4',
            value: 'خیر',
            label: 'خیر',
            labelClass: 'input-help text-right',
            labelStyle: {
              marginBottom: '12px',
            },
          },
        ],
        readOnly: false,
      },
      {
        name: 'L_surgery_date',
        type: 'date',
        title: ' تاریخ  جراحی*  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '140px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_examination_date',
        type: 'date',
        title: ' تاریخ  معاینه*  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        inputClass: '',
        inputStyle: {
          backgroundColor: '#d0eefa',
          width: '140px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
    ],
  };
};
