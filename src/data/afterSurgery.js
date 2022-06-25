export const afterSurgery = {
  RightModel: [
    {
      name: 'R_next_visit_date',
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
    },
    {
      name: 'R_visual_acuity',
      type: 'number',
      title: (
        <>
          <span style={{ marginLeft: '10px' }}>حدت بینایی : </span>
          <span style={{ fontWeight: 'bold', marginLeft: '5px' }}> 10 / </span>
        </>
      ),
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
      name: 'R_visual_acuity_choice',
      type: 'selectOption',
      titleClass: 'input-help text-right ',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
      },
      wrapperClass: 'input-block col-6 ',
      options: ['NLP', 'LP', 'HM', 'CF50cm', 'CF1m', 'CF2m', 'Other'],
      inputClass: 'mt-1',
      optionItemClass: '',
      readOnly: true,
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
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '20px',
      },
      options: ['airpuff', 'goldman', 'Schiotz', 'tonopen'],
      inputClass: '',
      optionItemClass: '',
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '20px',
      },
      options: ['Hyphema', 'Iris defect', 'Nucleus Drop', 'IOL drop', 'Others'],
      inputClass: '',
      optionItemClass: '',
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
    },
  ],
  LeftModel: [
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
    },
    {
      name: 'L_visual_acuity',
      type: 'number',
      title: (
        <>
          <span style={{ marginLeft: '10px' }}>حدت بینایی : </span>
          <span style={{ fontWeight: 'bold', marginLeft: '5px' }}> 10 / </span>
        </>
      ),
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
      name: 'L_visual_acuity_choice',
      type: 'selectOption',
      titleClass: 'input-help text-right ',
      titleStyle: {
        color: 'rgb(81, 84, 252)',
      },
      wrapperClass: 'input-block col-6 ',
      options: ['NLP', 'LP', 'HM', 'CF50cm', 'CF1m', 'CF2m', 'Other'],
      inputClass: 'mt-1',
      optionItemClass: '',
      readOnly: true,
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
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '20px',
      },
      options: ['airpuff', 'goldman', 'Schiotz', 'tonopen'],
      inputClass: '',
      optionItemClass: '',
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      wrapperClass: 'input-block col-6',
      wrapperStyle: {
        marginTop: '20px',
      },
      options: ['Hyphema', 'Iris defect', 'Nucleus Drop', 'IOL drop', 'Others'],
      inputClass: '',
      optionItemClass: '',
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
    },
  ],
};
