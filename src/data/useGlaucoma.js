import useAxios from '../hooks/useAxios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const useGlaucoma = (patient_national_id) => {
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

  return [
    {
      name: 'visit',
      title: 'ویزیت* : ',
      type: 'selectOption',
      titleClass: 'input-help text-right ',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
      },
      wrapperClass: 'input-block col-12',
      inputStyle: {
        width: '50%',
      },
      options: visitData,
      inputClass: 'mt-1',
      optionItemClass: '',
      readOnly: false,
    },
    {
      name: 'age',
      type: 'number',
      title: 'سن : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
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
      name: 'operationAge',
      type: 'number',
      title: 'سن در هنگام عمل لنز کتومی : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
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
      name: 'glaucomaHistoryOperation',
      title: 'سابقه عمل جراحی گلوکوم :',
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
          value: 'دارد',
          label: 'دارد  | ',
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
          value: 'ندارد',
          label: 'ندارد',
          labelClass: 'input-help text-right',
          labelStyle: {
            marginBottom: '12px',
          },
        },
      ],
      readOnly: false,
    },
    {
      name: 'shant',
      type: 'selectOption',
      title: 'شانت : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['بادریچه', 'بدون دریچه'],
      readOnly: false,
    },
    {
      name: 'shantLocation',
      type: 'selectOption',
      title: 'محل شانت : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['سوپراتمپورال', ' اینفرانازال', 'سایر'],
      readOnly: false,
    },
    {
      name: 'tubeLocation',
      type: 'selectOption',
      title: 'محل تیوب : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['اتاق قدامی', ' سولکوس', 'سایر'],
      readOnly: false,
    },
    {
      name: 'examinationType',
      type: 'selectOption',
      title: 'نوع معاینه : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['معاینه تحت بیهوشی', 'در درمانگاه'],
      readOnly: false,
    },
    {
      name: 'bihooshiType',
      type: 'selectOption',
      title: 'نوع بیهوشی : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['با ماسک', 'اینتوبه'],
      readOnly: false,
    },
    {
      name: 'bihooshiDuration',
      type: 'number',
      title: 'فاصله زمانی از شروع بیهوشی تا زمان اندازه گیری فشار چشم : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-12',
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
      name: 'iopTool',
      type: 'selectOption',
      title: 'دستگاه IOP : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-12',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '50%',
      },
      defaultOption: '----',
      options: ['شیوتز', 'گلدمن', 'تونوپن', 'پرکینز', 'icare'],
      readOnly: false,
    },
    {
      type: 'headTitle',
      title: 'معاینات قرنیه : ',
      titleClass: 'input-help text-right fs-5 mt-3',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'col-12',
    },
    {
      name: 'cct',
      type: 'number',
      title: 'CCT : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-12',
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
      name: 'cornealEdemas',
      type: 'selectOption',
      title: 'ادم قرنیه : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['ندارد', 'دارد / اپیتلیلال', 'دارد / استرومال'],
      readOnly: false,
    },
    {
      name: 'cornealOpacitys',
      type: 'selectOption',
      title: 'کدورت قرنیه : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['ندارد', 'دارد / محیطی', 'دارد / مرکزی'],
      readOnly: false,
    },
    {
      type: 'radio',
      name: 'haabsStriae',
      title: 'Haabs Striae : ',
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
          id: 'y72',
          value: 'دارد',
          label: 'دارد  | ',
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
          id: 'n72',
          value: 'ندارد',
          label: 'ندارد',
          labelClass: 'input-help text-right',
          labelStyle: {
            marginBottom: '12px',
          },
        },
      ],
      readOnly: false,
    },
    {
      name: 'cornealDiameterVertical',
      type: 'number',
      title: 'دیامتر قرنیه عمودی :',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
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
      name: 'cornealDiameterHorizontal',
      type: 'number',
      title: 'دیامتر قرنیه افقی :',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
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
      type: 'headTitle',
      title: 'معاینات اتاق قدامی : ',
      titleClass: 'input-help text-right fs-5 mt-3',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'col-12',
    },
    {
      type: 'radio',
      name: 'pas',
      title: 'PAS : ',
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
          id: 'yj2',
          value: 'دارد',
          label: 'دارد  | ',
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
          id: 'nm2',
          value: 'ندارد',
          label: 'ندارد',
          labelClass: 'input-help text-right',
          labelStyle: {
            marginBottom: '12px',
          },
        },
      ],
      readOnly: false,
    },
    {
      name: 'PASDuraction',
      type: 'number',
      title: 'مدت PAS : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-12',
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
      name: 'pupils',
      type: 'selectOption',
      title: 'پوپیل : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['poor dilation', 'good dilation'],
      readOnly: false,
    },
    {
      type: 'radio',
      name: 'vitre',
      title: 'ویتره در اتاق قدامی : ',
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
          id: 'y22',
          value: 'دارد',
          label: 'دارد  | ',
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
          id: 'n32',
          value: 'ندارد',
          label: 'ندارد',
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
      name: 'retainedCorticalMaterial',
      title: 'Retained Cortical Material : ',
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
          id: 'y52',
          value: 'دارد',
          label: 'دارد  | ',
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
          id: 'n42',
          value: 'ندارد',
          label: 'ندارد',
          labelClass: 'input-help text-right',
          labelStyle: {
            marginBottom: '12px',
          },
        },
      ],
      readOnly: false,
    },
    {
      name: 'iols',
      type: 'selectOption',
      title: 'IOLS : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: ['ندارد', 'دارد / دربگ', 'دارد / درسولکوس', 'دارد / آرتیزان'],
      readOnly: false,
    },
    {
      name: 'CDRatio',
      type: 'number',
      title: (
        <>
          <span style={{ marginLeft: '10px' }}>CD Ratio : </span>
          <span style={{ fontWeight: 'bold', marginLeft: '5px' }}> 10 / </span>
        </>
      ),
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-12',
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
      name: 'plan',
      type: 'selectOption',
      title: 'Plan : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        width: '100%',
      },
      defaultOption: '----',
      options: [
        'نیاز به اقدام بیشتری ندارد',
        'پیگیری بیمار بدون دارو',
        'پیگیری بیمار با دارد / تیمولول',
        'پیگیری بیمار با دارد / دورزولامید',
        'پیگیری بیمار با دارد / لاتانوپروست',
        'پیگیری بیمار با دارد / بریمونیدین',
        'پیگیری بیمار با دارد / سایر',
      ],
      readOnly: false,
    },
    {
      type: 'radio',
      name: 'operationNeeded',
      title: 'نیاز به عمل جراحی : ',
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
          id: 'y152',
          value: 'دارد',
          label: 'دارد  | ',
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
          id: 'n412',
          value: 'ندارد',
          label: 'ندارد',
          labelClass: 'input-help text-right',
          labelStyle: {
            marginBottom: '12px',
          },
        },
      ],
      readOnly: false,
    },
    {
      name: 'type_surgery',
      type: 'text',
      title: 'نوع عمل : ',
      titleClass: 'input-help text-right ms-1',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12',
      wrapperStyle: { marginTop: '20px' },
      placeholder: '',
      inputClass: '',
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
