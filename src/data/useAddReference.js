import useAxios from '../hooks/useAxios';
import { useState, useEffect } from 'react';

export const useAddReference = (patient_national_id) => {
  const axios = useAxios();
  const [visitData, setVisitData] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    const getVisits = async () => {
      try {
        const visits = await axios.get(`visits/?search=${patient_national_id}`);
        const visitObjs = visits.data.results.map((item) => {
          return {
            label: item?.register_date,
            value: item.id,
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

    const getDoctors = async () => {
      try {
        const result = await axios.get('doctors');
        const doctors = result.data.map((doctor) => ({
          label: doctor.user.first_name + ' ' + doctor.user.last_name,
          value: parseInt(doctor.id),
        }));
        setDoctorList(doctors);
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
      getDoctors();
    }
  }, []);

  if (visitData.length === 0 || doctorList.length === 0) return null;
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
        width: '40%',
      },

      options: visitData,
      inputClass: 'mt-1',
      optionItemClass: '',
      readOnly: false,
    },
    {
      name: 'strabismusDoctor',
      type: 'selectOption',
      title: 'پزشک استرابیسم',
      titleClass: 'input-help text-right ',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      options: doctorList,
    },
    {
      name: 'retinaConsultDoctor',
      type: 'selectOption',
      title: 'پزشک Retina Consult',
      titleClass: 'input-help text-right ',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      options: doctorList,
    },
    {
      name: 'geneticsDoctor',
      type: 'selectOption',
      title: 'پزشک Genetics',
      titleClass: 'input-help text-right ',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      options: doctorList,
    },
    {
      name: 'glaucomaDoctor',
      type: 'selectOption',
      title: 'پزشک Glaucoma',
      titleClass: 'input-help text-right ',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-6',
      wrapperStyle: { marginTop: '10px' },
      options: doctorList,
    },
    {
      name: 'description',
      type: 'textarea',
      title: '  توضیحات  :',
      titleClass: 'input-help text-right',
      titleStyle: { marginBottom: '12px' },
      wrapperClass: 'input-block col-12 mt-4',
      wrapperStyle: { marginTop: '20px' },
      inputClass: 'textarea text',
      placeholder: 'توضیحات خود را بنویسید :',
    },
  ];
};
