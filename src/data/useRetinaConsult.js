import useAxios from '../hooks/useAxios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const useRetinaConsult = (patient_national_id) => {
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

  return [
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
      inputStyle: {
        width: '50%',
      },
      defaultOption: '----',
      options: ['OD', 'OS', 'OU'],
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
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
      inputStyle: {
        width: '50%',
        marginBottom: '15px',
      },
      defaultOption: '----',
      options: ['ET', 'XT'],
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
    },
    {
      type: 'headTitle',
      title: 'PFV : ',
      titleClass: 'input-help text-right fs-4',
      titleStyle: {
        marginTop: '20px',
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
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
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
      inputStyle: {
        width: '50%',
        marginBottom: '15px',
      },
      defaultOption: '----',
      options: ['Anterior', 'Posterior'],
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
    },
    {
      type: 'headTitle',
      title: 'ROP : ',
      titleClass: 'input-help text-right fs-4',
      titleStyle: {
        marginTop: '20px',
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
      readOnly: false,
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
      inputStyle: {
        width: '50%',
      },
      defaultOption: '----',
      options: ['1', '2', '3'],
      readOnly: false,
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
      inputStyle: {
        width: '50%',
      },
      defaultOption: '----',
      options: ['1', '2', '3'],
      readOnly: false,
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
      readOnly: false,
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
      readOnly: false,
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
      inputStyle: {
        width: '50%',
      },
      defaultOption: '----',
      options: ['Lensectomy', 'Lensectomy/Vitrectomy'],
      readOnly: false,
    },
    {
      name: 'otherDiagnoses',
      type: 'textarea',
      title: 'تشخیص های دیگر :',
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
  ];
};
