export const retinaConsult = [
  {
    type: 'headTitle',
    title: 'فرم Retina Consult',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
  },
  {
    type: 'headTitle',
    title: 'Retina Consult : ',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
  },
  {
    name: 'congenitalCataract',
    type: 'selectOption',
    title: 'Congenital Cataract :',
    titleClass: 'input-help text-right ',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '20px',
    },
    defaultOption: '----',
    options: ['OD', 'OS', 'OU'],
    readOnly: true,
  },
  {
    type: 'radio',
    name: 'redReflex',
    title: 'Red Reflex : ',
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
    readOnly: true,
  },
  {
    type: 'radio',
    name: 'fixation',
    title: 'Fixation : ',
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
    readOnly: true,
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
    name: 'axis',
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
      width: '100px',
      direction: 'ltr',
      display: 'inline',
      textAlign: 'center',
    },
    readOnly: true,
  },
  {
    name: 'cylinder',
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
      width: '100px',
      direction: 'ltr',
      display: 'inline',
      textAlign: 'center',
    },
    readOnly: true,
  },
  {
    name: 'sphere',
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
      width: '100px',
      direction: 'ltr',
      display: 'inline',
      textAlign: 'center',
    },
    readOnly: true,
  },
  {
    name: 'deviation',
    type: 'selectOption',
    title: 'Deviation :',
    titleClass: 'input-help text-right ',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '20px',
    },
    defaultOption: '----',
    options: ['ET', 'XT'],
    readOnly: true,
  },
  {
    type: 'radio',
    name: 'visibilityFundus',
    title: 'Visibility of Fundus : ',
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
    readOnly: true,
  },
  {
    type: 'radio',
    name: 'coloboma',
    title: 'Coloboma : ',
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
    readOnly: true,
  },
  {
    type: 'headTitle',
    title: 'PFV : ',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
  },
  {
    type: 'radio',
    name: 'pfv',
    title: 'PFV : ',
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
        id: 'y6',
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
        id: 'n6',
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
    name: 'bScan',
    title: 'B-Scan : ',
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
        id: 'y5',
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
        id: 'n5',
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
    name: 'rentinalDetachment',
    title: 'Rentinal Detachment : ',
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
        id: 'y7',
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
        id: 'n7',
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
    name: 'pfvType',
    type: 'selectOption',
    title: 'PFV Type :',
    titleClass: 'input-help text-right ',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '20px',
    },
    defaultOption: '----',
    options: ['Anterior', 'Posterior'],
    readOnly: true,
  },
  {
    type: 'radio',
    name: 'activeVessels',
    title: 'Active Vessels : ',
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
        id: 'y18',
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
        id: 'n18',
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
    name: 'microphthalmia',
    title: 'Microphthalmia : ',
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
        id: 'y28',
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
        id: 'n28',
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
    name: 'longCiliaryProcess',
    title: 'Long Ciliary Process : ',
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
        id: 'n8',
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
    name: 'hyaloidArtery',
    title: 'Hyaloid Artery : ',
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
        id: 'y9',
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
        id: 'n9',
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
    name: 'draggingVessels',
    title: 'Dragging of Vessels : ',
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
        id: 'y10',
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
        id: 'n10',
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
    type: 'headTitle',
    title: 'ROP : ',
    titleClass: 'input-help text-right fs-4',
    titleStyle: {
      marginBottom: '12px',
    },
    wrapperClass: 'col-12',
  },
  {
    type: 'radio',
    name: 'rop',
    title: 'ROP : ',
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
        id: 'y11',
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
        id: 'n11',
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
    name: 'stage',
    type: 'selectOption',
    title: 'Stage :',
    titleClass: 'input-help text-right ',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '20px',
    },
    defaultOption: '----',
    options: ['1', '2', '3'],
    readOnly: true,
  },
  {
    name: 'zone',
    type: 'selectOption',
    title: 'Zone :',
    titleClass: 'input-help text-right ',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '20px',
    },
    defaultOption: '----',
    options: ['1', '2', '3'],
    readOnly: true,
  },
  {
    type: 'radio',
    name: 'historyLaser',
    title: 'History of Laser : ',
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
        id: 'n12',
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
    name: 'historyIVB',
    title: 'History of IVB injection : ',
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
        id: 'y13',
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
        id: 'n13',
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
    name: 'plan',
    type: 'selectOption',
    title: 'Plan :',
    titleClass: 'input-help text-right ',
    titleStyle: {
      color: 'rgb(81, 84, 252)',
      marginBottom: '12px',
    },
    wrapperClass: 'input-block col-12',
    wrapperStyle: {
      marginTop: '20px ',
      marginBottom: '12px',
    },
    defaultOption: '----',
    options: ['Lensectomy', 'Lensectomy/Vitrectomy'],
    readOnly: true,
  },
];
