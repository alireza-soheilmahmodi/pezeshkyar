import useAxios from '../hooks/useAxios';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const useGenetics = (patient_national_id) => {
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
      wrapperClass: 'input-block col-12',
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
      name: 'ethnicityMothers',
      type: 'selectOption',
      title: 'قومیت مادر : ',
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
      options: ['فارس', 'ترک', 'کرد', 'لر', 'عرب', 'بلوچ', 'ترکمن', 'سایر'],
      readOnly: false,
    },
    {
      name: 'ethnicityFathers',
      type: 'selectOption',
      title: 'قومیت پدر : ',
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
      options: ['فارس', 'ترک', 'کرد', 'لر', 'عرب', 'بلوچ', 'ترکمن', 'سایر'],
      readOnly: false,
    },
    {
      type: 'headTitle',
      title: 'تاریخچه خانوادگی : ',
      titleClass: 'input-help text-right fs-4',
      titleStyle: {
        marginBottom: '5px',
      },
      wrapperClass: 'col-12 mt-2',
    },
    {
      type: 'radio',
      name: 'geneticColsultHistory',
      title: 'سابقه مشاوره ژنتیک : ',
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
          id: 'ys2',
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
          id: 'ns2',
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
      name: 'cigarUsageHistory',
      title: 'سابقه مصرف سیگار : ',
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
          id: 'ya2',
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
          id: 'na2',
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
      name: 'drugUsageHistory',
      title: 'سابقه مصرف مواد مخدر : ',
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
          id: 'yh2',
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
          id: 'nh2',
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
      name: 'drugName',
      type: 'text',
      title: 'نوع مواد مخدر : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        display: 'block',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-12',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '50%',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
      readOnly: false,
    },
    {
      type: 'radio',
      name: 'alchoholUsageHistory',
      title: 'سابقه مصرف الکل : ',
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
          id: 'yw2',
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
          id: 'nw2',
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
      name: 'teratogenicHistorys',
      type: 'selectOption',
      title: ' سابقه تماس با مواد تراتوژن : ',
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
      options: ['بله', 'خیر', 'اطاع ندارد'],
      readOnly: false,
    },
    {
      name: 'torchHistorys',
      type: 'selectOption',
      title: ' سابقه به TORCH : ',
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
      options: ['بله', 'خیر', 'اطاع ندارد'],
      readOnly: false,
    },
    {
      type: 'headTitle',
      title: 'سابقه زایمانی : ',
      titleClass: 'input-help text-right fs-4',
      titleStyle: {
        marginBottom: '5px',
      },
      wrapperClass: 'col-12 mt-2',
    },
    {
      type: 'radio',
      name: 'abortionHistory',
      title: 'سابقه سقط : ',
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
          id: 'yz2',
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
          id: 'nz2',
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
      name: 'abortionCount',
      type: 'number',
      title: ' تعداد سقط : ',
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
      type: 'radio',
      name: 'nonPregnancyHistory',
      title: 'سابقه عدم باروری : ',
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
          id: 'yr2',
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
          id: 'nr2',
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
      name: 'pregnancyHelpMethod',
      type: 'text',
      title: 'روش کمک باروری : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        display: 'block',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-12',
      wrapperStyle: {
        marginTop: '10px',
      },
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '50%',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
      readOnly: false,
    },
    {
      name: 'babyBirths',
      type: 'selectOption',
      title: ' تولد نوزاد : ',
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
      options: ['ترم', 'پره ترم'],
      readOnly: false,
    },
    {
      name: 'birthWeek',
      type: 'number',
      title: '  هفته : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-4',
      wrapperStyle: {
        marginTop: '55px',
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
      name: 'birthweight',
      type: 'number',
      title: ' وزن : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-4',
      wrapperStyle: {
        marginTop: '55px',
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
      type: 'radio',
      name: 'nicuHistory',
      title: 'سابقه بستری در NICU : ',
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
          id: 'yy2',
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
          id: 'ny2',
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
      name: 'cataractHistoryInFamily',
      title: 'سابقه کاتاراکت در خانواده : ',
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
          id: 'ym2',
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
          id: 'nm2',
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
      name: 'cataractInFamilyCount',
      type: 'number',
      title: ' نفر : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-3',
      wrapperStyle: {
        marginTop: '20px',
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
      name: 'cataractInFamilyRelation',
      type: 'text',
      title: ' نسبت : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-3',
      wrapperStyle: {
        marginTop: '20px',
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
      type: 'radio',
      name: 'eyeDiseaseHistoryInFamily',
      title: 'سابقه بیماری های چشمی در خانواده : ',
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
          id: 'yo2',
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
          id: 'no2',
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
      name: 'eyeDiseaseHistoryCount',
      type: 'number',
      title: ' نفر : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-3',
      wrapperStyle: {
        marginTop: '20px',
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
      name: 'eyeDiseaseHistoryRelation',
      type: 'text',
      title: ' نسبت : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-3',
      wrapperStyle: {
        marginTop: '20px',
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
      name: 'eyeDiseaseInFamily',
      type: 'text',
      title: ' نوع بیماری های چشمی در خانواده : ',
      titleClass: 'input-help text-right',
      titleStyle: {
        display: 'block',
        marginBottom: '12px',
      },
      wrapperClass: 'input-block col-12',
      wrapperStyle: {
        marginTop: '20px',
      },
      inputClass: '',
      inputStyle: {
        backgroundColor: '#d0eefa',
        width: '50%',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
      readOnly: false,
    },
    {
      type: 'headTitle',
      title: 'ازدواج خویشاوندی : ',
      titleClass: 'input-help text-right fs-4',
      titleStyle: {
        marginBottom: '5px',
      },
      wrapperClass: 'col-12 mt-2',
    },
    {
      type: 'radio',
      name: 'familyMarriage',
      title: 'ازدواج خویشاوندی : ',
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
          id: 'yp2',
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
          id: 'np2',
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
      name: 'marriageInFamilyRelation',
      type: 'text',
      title: ' نسبت : ',
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
        width: '80px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
      readOnly: false,
    },
    {
      name: 'zaribHamkhoni',
      type: 'number',
      title: ' ضریب هم خونی : ',
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
        width: '80px',
        direction: 'ltr',
        display: 'inline',
        textAlign: 'center',
      },
      readOnly: false,
    },
    {
      name: 'typeDiseaseTransmissions',
      type: 'selectOption',
      title: 'نوع انتقال احتمالی بیماری : ',
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
      options: ['AD', 'AR', 'XLR', 'XLD', 'MT', 'نامشخص'],
      readOnly: false,
    },
    {
      name: 'systemicDiseases',
      type: 'selectOption',
      title: 'بیماری سیستمیک شناخته شده : ',
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
      options: ['بله', 'خیر', 'تحت بررسی'],
      readOnly: false,
    },
    {
      name: 'systemicDiseasesIfyes',
      type: 'selectOption',
      title: 'بیماری سیستمیک شناخته شده : ',
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
        width: '100%',
      },
      defaultOption: '----',
      options: [
        'اختلال مغزی و عقب ماندگی ذهنی و یا میکروسفالی',
        'Down syndrome',
        'Autosomal cerebro-oculofacial skeletal syndrome (CFS)',
        'Autosomal recessive congenital infection-like syndrome',
        'Autosomal dominant microcephaly, eye anomalies (congenital cataract and coloboma), short stature and mental retardation',
        'Autosomal recessive congenital cataract, mental retardation, motor, sensory and autonomic neuropathy',
        'Early-onset Cockayne syndrome',
        'Cri-du-chat syndrome (5p deletion)',
        'Autosomal recessive cataract, microcephaly, renal tubular necrosis and encephalopathy with epilepsy',
        'Czeizel-Lowry syndrome ',
        "Edwards's syndrome ",
        'Autosomal recessive microcephaly and congenital cataracts, kyphoscoliOSis and failure to thrive',
        'Autosomal recessive microcephaly, microcornea, congenital cataract, mental retardation, optic atrophy and hypogenitalism',
        'Microcephaly, microphthalmia, cataracts and hypogenitalism',
        'Autosomal recessive ataxia-microcephaly-cataract syndrome',
        "Martsolf's syndrome",
        'سایر',
      ],
      readOnly: false,
    },
    {
      name: 'hydrocephalusSkulls',
      type: 'selectOption',
      title: 'هیدروسفال و مشکلات جمجمه : ',
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
      options: [
        'HEC syndrome',
        'Craniosynostosis and congenital cataract',
        "Martsolf's syndrome",
        'Hydrocephalus, congenital cataract and microphthalmia',
        'سایر',
      ],
      readOnly: false,
    },
    {
      name: 'partiallyDeafs',
      type: 'selectOption',
      title: 'اختلال شنوایی : ',
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
      options: ['Usher Syndrome', 'سایر'],
      readOnly: false,
    },
    {
      name: 'metabolics',
      type: 'selectOption',
      title: 'بیماری های متابولیک : ',
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
        'Galactosemia',
        'Homocystinuria',
        'Cystinosis',
        'Tyrosinemia',
        'سایر',
      ],
      readOnly: false,
    },
    {
      name: 'neurologicals',
      type: 'selectOption',
      title: '  اختلال نورولوژیک : ',
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
      options: ['Neurofibromatosis', 'CP', 'سایر'],
      readOnly: false,
    },
    {
      name: 'neuromusculars',
      type: 'selectOption',
      title: '  اختلال نوروماسکولار : ',
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
      options: ['Myotonic dystrophy', 'سایر'],
      readOnly: false,
    },
    {
      name: 'skeletalShortHeights',
      type: 'selectOption',
      title: '  اختلال اسکلتال و قد کوتاه : ',
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
        width: '100%',
      },
      defaultOption: '----',
      options: [
        'Chondrodysplasia punctata ',
        'Autosomal recessive mental retardation, cataract, ataxia, deafoess, polyneuropathy and short stature ',
        'Cataract, sensorineural deafness, hypergonadism, hypertrichosis and short stature ',
        'Marinesco-Sjogren syndrome ',
        "Majewski syndrome 6. Conradi's/Conradi-Hunermann syndrome",
        'Pollitt syndrome',
        "Martsolf's syndrome",
      ],
      readOnly: false,
    },
    {
      name: 'dysomorphicFaceFingers',
      type: 'selectOption',
      title: '  اختلال دیسمورفیک صورت و انگشتان : ',
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
        width: '100%',
      },
      defaultOption: '----',
      options: [
        'Hallermann-Streiff- syndrome',
        "Lowe's oculo-cerebro-renal syndrome",
        'Nance-Horan syndrome',
        'Smith-Lemli-Opitz syndrome',
        'Congenital cataract, microphthalmia, septal heart defect and dysmorphic facial features',
        'Majewski syndrome',
        'Smith-Lemli-Opitz syndrome',
        "Schachat and Maumenee's patient: congenital cataract, mental retardation, obesity, hypogenitalism, skull deformities and polydactyly",
      ],
      readOnly: false,
    },
    {
      name: 'skinDisorders',
      type: 'selectOption',
      title: '  اختلال پوستی : ',
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
        "Conradi's/Conradi-Hunermann syndrome ",
        'Chondrodysplasia punctata ',
        'Pollitt syndrome',
        "Menke's disease ",
        'Hypertrichosis and congenital cataract ',
        'Alopecia, hyperkeratosis and congenital cataract',
      ],
      readOnly: false,
    },
  ];
};
