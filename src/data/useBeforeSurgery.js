import useAxios from '../hooks/useAxios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const useBeforeSurgery = (patient_national_id) => {
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

    getVisits();
  }, []);

  if (visitData.length == 0) return null;
  return {
    RightEye: [
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
        name: 'R_visualAcuity',
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
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '15px',
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
        wrapperClass: 'input-block col-6 ',
        options: ['NLP', 'LP', 'HM', 'CF50cm', 'CF1m', 'CF2m', 'Other'],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        type: 'radio',
        name: 'R_followLight',
        title: 'دنبال کردن نور* : ',
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
            id: 'ry1',
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
            id: 'rn1',
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
            id: 'ry2',
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
            id: 'rn2',
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
        name: 'R_nystagmus',
        title: 'نیستاگموس* : ',
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
            id: 'ry3',
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
            id: 'rn3',
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
        name: 'R_redEyeReflex',
        type: 'selectOption',
        title: 'رفلکس قرمز چشم*',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '8px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: ['خوب', 'متوسط', 'ضعیف', 'ندارد'],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        type: 'headTitle',
        title: 'رفراکشن : ',
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
        title: 'Axis : ',
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
          width: '60px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_cylinder',
        type: 'number',
        title: 'Cylinder : ',
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
          width: '60px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_sphere',
        type: 'number',
        title: 'Sphere : ',
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
          width: '60px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'R_cataract',
        type: 'radio',
        title: 'کاتاراکت* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        radioItems: [
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'ctrcyR',
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
            id: 'ctrcynR',
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
        name: 'R_cataractType',
        type: 'selectOption',
        title: 'نوع کاتاراکت* :',
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
          'نوکلئار',
          'لاملار',
          'پوستریور ساب کپسولار',
          'انتریور کپسولار',
          'سکتورال',
          'سایر',
        ],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'R_anteriorSegment',
        type: 'selectOption',
        title: 'سگمان قدامی* :',
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
          'نرمال',
          'میکروکورنه',
          'پی اف وی PFV',
          'اپاسیته قرنیه',
          'سایر (توضیحات وارد شود)',
        ],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'R_anteriorSegmentDescription',
        type: 'textarea',
        title: 'سگمان قدامی (توضیحات) :',
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
        name: 'R_retin',
        type: 'selectOption',
        title: ' رتین* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: ['نرمال', 'ROP', 'سایر'],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'R_retinDescription',
        type: 'textarea',
        title: ' رتین (توضیحات) :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
          marginBottom: '8px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
    ],
    LeftEye: [
      {
        name: 'visit',
        type: 'selectOption',
        title: 'ویزیت* : ',
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
        name: 'L_visualAcuity',
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
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '15px',
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
        wrapperClass: 'input-block col-6',
        options: ['NLP', 'LP', 'HM', 'CF50cm', 'CF1m', 'CF2m', 'Other'],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        type: 'radio',
        name: 'L_followLight',
        title: 'دنبال کردن نور* : ',
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
        name: 'L_strabismus',
        title: 'استرابیسم* : ',
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
        type: 'radio',
        name: 'L_nystagmus',
        title: 'نیستاگموس* : ',
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
            id: 'y3',
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
            id: 'n3',
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
        name: 'L_redEyeReflex',
        type: 'selectOption',
        title: 'رفلکس قرمز چشم*',
        titleClass: 'input-help text-right ',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '8px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: ['خوب', 'متوسط', 'ضعیف', 'ندارد'],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        type: 'headTitle',
        title: 'رفراکشن : ',
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
        title: 'Axis : ',
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
          width: '60px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_cylinder',
        type: 'number',
        title: 'Cylinder : ',
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
          width: '60px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_sphere',
        type: 'number',
        title: 'Sphere : ',
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
          width: '60px',
          direction: 'ltr',
          display: 'inline',
          textAlign: 'center',
        },
        readOnly: false,
      },
      {
        name: 'L_cataract',
        type: 'radio',
        title: 'کاتاراکت* : ',
        titleClass: 'input-help text-right',
        titleStyle: {
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12',
        wrapperStyle: {
          marginTop: '10px',
        },
        inputClass: '',
        radioItems: [
          {
            style: {
              display: 'inline',
            },
            class: 'ms-1 me-2',
            id: 'ctrcyL',
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
            id: 'ctrcnL',
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
        name: 'L_cataractType',
        type: 'selectOption',
        title: 'نوع کاتاراکت* :',
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
          'نوکلئار',
          'لاملار',
          'پوستریور ساب کپسولار',
          'انتریور کپسولار',
          'سکتورال',
          'سایر',
        ],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'L_anteriorSegment',
        type: 'selectOption',
        title: 'سگمان قدامی* :',
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
          'نرمال',
          'میکروکورنه',
          'پی اف وی PFV',
          'اپاسیته قرنیه',
          'سایر (توضیحات وارد شود)',
        ],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'L_anteriorSegmentDescription',
        type: 'textarea',
        title: 'سگمان قدامی (توضیحات)  :',
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
        name: 'L_retin',
        type: 'selectOption',
        title: ' رتین* :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-6',
        wrapperStyle: {
          marginTop: '20px',
        },
        options: ['نرمال', 'ROP', 'سایر'],
        inputClass: '',
        optionItemClass: '',
        readOnly: false,
      },
      {
        name: 'L_retinDescription',
        type: 'textarea',
        title: ' رتین (توضیحات)  :',
        titleClass: 'input-help text-right',
        titleStyle: {
          color: 'rgb(81, 84, 252)',
          marginBottom: '12px',
        },
        wrapperClass: 'input-block col-12 mt-4',
        wrapperStyle: {
          marginTop: '20px',
          marginBottom: '8px',
        },
        inputClass: 'textarea text',
        placeholder: 'توضیحات خود را بنویسید :',
        readOnly: false,
      },
    ],
  };
};
