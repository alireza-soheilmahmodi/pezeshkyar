export const glaucoma = [
  {
    type: 'headTitle',
    title: 'فرم Glaucoma',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
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
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
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
    defaultOption: '----',
    options: ['بادریچه', 'بدون دریچه'],
    readOnly: true,
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
    defaultOption: '----',
    options: ['سوپراتمپورال', ' اینفرانازال', 'سایر'],
    readOnly: true,
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
    defaultOption: '----',
    options: ['اتاق قدامی', ' سولکوس', 'سایر'],
    readOnly: true,
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
    defaultOption: '----',
    options: ['معاینه تحت بیهوشی', 'در درمانگاه'],
    readOnly: true,
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
    defaultOption: '----',
    options: ['با ماسک', 'اینتوبه'],
    readOnly: true,
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
    readOnly: true,
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
    wrapperClass: 'input-block col-6',
    wrapperStyle: {
      marginTop: '10px',
    },
    defaultOption: '----',
    options: ['شیوتز', 'گلدمن', 'تونوپن', 'پرکینز', 'icare'],
    readOnly: true,
  },
  {
    name: 'treatmentMethod',
    type: 'selectOption',
    title: 'روش درمان دارویی : ',
    titleClass: 'input-help text-right',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-6',
    wrapperStyle: {
      marginTop: '10px',
    },
    defaultOption: '----',
    options: ['تیمولول', 'دورزولامید', 'لاتانوپروست', 'بریمونیدین', 'دیاموکس'],
    readOnly: true,
  },
  {
    name: 'axialLength',
    type: 'number',
    title: 'Axial Length : ',
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
    readOnly: true,
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
    readOnly: true,
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
    defaultOption: '----',
    options: ['ندارد', 'دارد / اپیتلیلال', 'دارد / استرومال'],
    readOnly: true,
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
    defaultOption: '----',
    options: ['ندارد', 'دارد / محیطی', 'دارد / مرکزی'],
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
  },
  {
    name: 'PASDuraction',
    type: 'number',
    title: 'مدت PAS : ',
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
    readOnly: true,
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
    defaultOption: '----',
    options: ['poor dilation', 'good dilation'],
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
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
    defaultOption: '----',
    options: ['ندارد', 'دارد / دربگ', 'دارد / درسولکوس', 'دارد / آرتیزان'],
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
  },
];
