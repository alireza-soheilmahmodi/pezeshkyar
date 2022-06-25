const strabism = [
  {
    type: 'headTitle',
    title: 'فرم استرابیسم',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
  },
  {
    type: 'headTitle',
    title: 'OD :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-6',
  },
  {
    type: 'headTitle',
    title: 'OS :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-6',
  },
  {
    name: 'OD_VA',
    type: 'number',
    title: (
      <>
        <span style={{ marginLeft: '10px' }}> VA : </span>
        <span style={{ fontWeight: 'bold', marginLeft: '5px' }}> 10 / </span>
      </>
    ),
    titleClass: 'input-help text-right',
    titleStyle: { marginBottom: '12px' },
    wrapperClass: 'input-block col-6',
    wrapperStyle: { marginTop: '20px' },
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
    name: 'OS_VA',
    type: 'number',
    title: (
      <>
        <span style={{ marginLeft: '10px' }}> VA : </span>
        <span style={{ fontWeight: 'bold', marginLeft: '5px' }}> 10 / </span>
      </>
    ),
    titleClass: 'input-help text-right',
    titleStyle: { marginBottom: '12px' },
    wrapperClass: 'input-block col-6',
    wrapperStyle: { marginTop: '20px' },
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
    name: 'OD_fixation',
    title: 'Fixation : ',
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
    type: 'radio',
    name: 'OS_fixation',
    title: 'Fixation : ',
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
        id: 'y8',
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
        id: 'n8',
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
    name: 'OD_following',
    title: 'Following : ',
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
        id: 'y12',
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
        id: 'n12',
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
    name: 'OS_following',
    title: 'Following : ',
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
        id: 'yi2',
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
        id: 'ni2',
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
    type: 'headTitle',
    title: 'استرابیسم با عینک :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
  },
  {
    type: 'headTitle',
    title: 'OD :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-6',
  },
  {
    type: 'headTitle',
    title: '  OS :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-6',
  },
  {
    name: 'OD',
    type: 'selectOption',
    title: 'OD : ',
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
      'ندارد',
      'قابل ارزیابی نیست',
      'دارد / فوریا',
      'دارد / Intermittent',
      'دارد / Constant',
    ],
    readOnly: true,
  },
  {
    name: 'OS',
    type: 'selectOption',
    title: 'OS : ',
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
      'ندارد',
      'قابل ارزیابی نیست',
      'دارد / فوریا',
      'دارد / Intermittent',
      'دارد / Constant',
    ],
    readOnly: true,
  },
  {
    name: 'OD_ET',
    type: 'number',
    title: '  ET : ',
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
    readOnly: true,
  },
  {
    name: 'OS_ET',
    type: 'number',
    title: '  ET : ',
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
    readOnly: true,
  },
  {
    name: 'OD_XT',
    type: 'number',
    title: '  XT : ',
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
    readOnly: true,
  },
  {
    name: 'OS_XT',
    type: 'number',
    title: '  XT : ',
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
    readOnly: true,
  },
  {
    name: 'OD_HT',
    type: 'number',
    title: '  HT : ',
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
    readOnly: true,
  },
  {
    name: 'OS_HT',
    type: 'number',
    title: '  HT : ',
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
    readOnly: true,
  },
  {
    name: 'OD_Hot',
    type: 'number',
    title: '  Hot : ',
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
    readOnly: true,
  },
  {
    name: 'OS_Hot',
    type: 'number',
    title: '  Hot : ',
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
    readOnly: true,
  },
  {
    name: 'mainEye',
    type: 'selectOption',
    title: 'چشم غالب :',
    titleClass: 'input-help text-right',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '10px',
    },
    defaultOption: '----',
    options: ['چپ', 'راست', 'Alt'],
    readOnly: true,
  },
  {
    name: 'pattern',
    type: 'selectOption',
    title: ' Pattern :',
    titleClass: 'input-help text-right',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '10px',
    },
    defaultOption: '----',
    options: ['A', 'V', 'X', 'Y', 'λ'],
    readOnly: true,
  },
  {
    name: 'postures',
    type: 'selectOption',
    title: ' Abnormal Head Posture :',
    titleClass: 'input-help text-right',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '10px',
    },
    defaultOption: '----',
    options: [
      'ندارد',
      'دارد / turn / چپ',
      'دارد / turn / راست',
      'دارد / tilt / چپ',
      'دارد / tilt / راست',
      'Chin UP',
      'Chin DOWN',
    ],
    readOnly: true,
  },
  {
    type: 'headTitle',
    title: 'Oblique Dysfunction :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
  },
  {
    type: 'headTitle',
    title: 'OD :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-6',
  },
  {
    type: 'headTitle',
    title: 'OS :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-6',
  },
  {
    type: 'radio',
    name: 'OD_oblique_dysfunction',
    title: 'Oblique Dysfunction : ',
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
        id: 'yi21',
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
        id: 'ni21',
        value: 'خیر',
        label: 'خیر',
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
    name: 'OS_oblique_dysfunction',
    title: 'Oblique Dysfunction : ',
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
        id: 'yi22',
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
        id: 'ni22',
        value: 'خیر',
        label: 'خیر',
        labelClass: 'input-help text-right',
        labelStyle: {
          marginBottom: '12px',
        },
      },
    ],
    readOnly: true,
  },
  {
    name: 'OD_IOOA',
    type: 'number',
    title: 'IOOA : ',
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
    readOnly: true,
  },
  {
    name: 'OS_IOOA',
    type: 'number',
    title: 'IOOA : ',
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
    readOnly: true,
  },
  {
    name: 'OD_IOUA',
    type: 'number',
    title: 'IOUA : ',
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
    readOnly: true,
  },
  {
    name: 'OS_IOUA',
    type: 'number',
    title: 'IOUA : ',
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
    readOnly: true,
  },
  {
    name: 'OD_SOOA',
    type: 'number',
    title: 'SOOA : ',
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
    readOnly: true,
  },
  {
    name: 'OS_SOOA',
    type: 'number',
    title: 'SOOA : ',
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
    readOnly: true,
  },
  {
    name: 'OD_SOUA',
    type: 'number',
    title: 'SOUA : ',
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
    readOnly: true,
  },
  {
    name: 'OS_SOUA',
    type: 'number',
    title: 'SOUA : ',
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
    readOnly: true,
  },
  {
    name: 'nystagmuses',
    type: 'selectOption',
    title: ' نیستاگموس :',
    titleClass: 'input-help text-right',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '10px',
    },
    defaultOption: '----',
    options: [
      'ندارد',
      'دارد / Jerk',
      'دارد / Pendular',
      'دارد / Upbeat',
      'دارد / Downbeat',
      'دارد / Seesaw',
      'دارد / Wandering eye',
    ],
    readOnly: true,
  },
  {
    name: 'nulls',
    type: 'selectOption',
    title: ' Null Point :',
    titleClass: 'input-help text-right',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '10px',
    },
    defaultOption: '----',
    options: [
      'ندارد',
      'دارد / Right gaze',
      'دارد / Left gaze',
      'دارد / Primary position',
      'دارد / Up gaze',
      'دارد / Down gaze',
      'دارد / Rt tilt',
      'دارد / Left tilt',
    ],
    readOnly: true,
  },
  {
    type: 'headTitle',
    title: 'محدودیت حرکت چشم ها :',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
  },
  {
    type: 'headTitle',
    title: 'OD : ',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-6',
  },
  {
    type: 'headTitle',
    title: 'OS : ',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-6',
  },
  {
    type: 'radio',
    name: 'OD_eyeLimit',
    title: 'محدودیت حرکت چشم ها : ',
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
        id: 'yi23',
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
        id: 'ni23',
        value: 'خیر',
        label: 'خیر',
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
    name: 'OS_eyeLimit',
    title: 'محدودیت حرکت چشم ها : ',
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
        id: 'yi24',
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
        id: 'ni24',
        value: 'خیر',
        label: 'خیر',
        labelClass: 'input-help text-right',
        labelStyle: {
          marginBottom: '12px',
        },
      },
    ],
    readOnly: true,
  },
  {
    name: 'OD_abduction',
    type: 'number',
    title: 'Abduction : ',
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
    readOnly: true,
  },
  {
    name: 'OS_abduction',
    type: 'number',
    title: 'Abduction : ',
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
    readOnly: true,
  },
  {
    name: 'OD_adduction',
    type: 'number',
    title: 'Adduction : ',
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
    readOnly: true,
  },
  {
    name: 'OS_adduction',
    type: 'number',
    title: 'Adduction : ',
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
    readOnly: true,
  },
  {
    name: 'OD_elevation',
    type: 'number',
    title: 'Elevation : ',
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
    readOnly: true,
  },
  {
    name: 'OS_elevation',
    type: 'number',
    title: 'Elevation : ',
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
    readOnly: true,
  },
  {
    name: 'OD_depression',
    type: 'number',
    title: 'Depression : ',
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
    readOnly: true,
  },
  {
    name: 'OS_depression',
    type: 'number',
    title: 'Depression : ',
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
    readOnly: true,
  },
  {
    name: 'plans',
    type: 'selectOption',
    title: ' Plans :',
    titleClass: 'input-help text-right',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '10px',
    },
    defaultOption: '----',
    options: [
      'ادامه عینک یا لنز قبلی',
      'تجویز عینک جدید',
      'جراحی استرابیسم',
      'Patching',
      'قطره آتروپین',
      'بوتاکس',
    ],
    readOnly: true,
  },
];

export default strabism;
