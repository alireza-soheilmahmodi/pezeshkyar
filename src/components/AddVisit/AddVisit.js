import { useState, useRef } from 'react';
import Style from './AddVisit.module.css';
import { usePatientSearch } from '../../hooks/usePatientSearch';
import { useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import { toast } from 'react-toastify';

const AddVisit = () => {
  const [name, setName] = useState('');
  const [patient, setPatient] = useState(null);
  const [showPatientList, setShowPatientList] = useState(true);
  const inputRef = useRef();
  const [doctorList, setDoctorList] = useState([]);
  const [doctor, setDoctor] = useState();
  const result = usePatientSearch(name);

  const axios = useAxios();

  const handleChange = (e) => {
    setShowPatientList(true);
    setPatient(null);
    setName(e.target.value);
  };

  const handleClick = (item) => {
    setPatient(item);
    setShowPatientList(false);
  };

  const handleDropDown = (e) => {
    setDoctor(e.target.value);
  };

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const doctors = await axios.get('doctors');
        const doctorsList = doctors.data.map((item) => {
          return {
            name: item?.user?.first_name,
            lastName: item?.user?.last_name,
            id: item?.user?.id,
          };
        });
        setDoctorList(doctorsList);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getDoctors();
  }, []);

  useEffect(() => {
    if (patient) {
      inputRef.current.value = `${patient.first_name} ${patient.last_name}`;
    }
  });

  const doSubmit = async () => {
    if (!patient || !doctor) {
      toast.error('فرم کامل نیست');
      return;
    }
    const model = {
      patient: patient.id,
      doctor: parseInt(doctor),
    };
    console.log(model);
    try {
      await axios.post('visits/', model);
      toast.success('ویزیت با موفقیت ثبت شد');
    } catch (err) {
      toast.error('ویزیت ثبت نشد');
      console.log(err);
    }
  };
  return (
    <section className={Style.container}>
      <section className={Style.inputSection}>
        <label>بیمار:</label>

        <form>
          <input
            ref={inputRef}
            type="text"
            required
            onChange={(e) => handleChange(e)}
            value={name}
          />
        </form>
      </section>

      <ul className={`list-group ${Style.resultContainer}`}>
        {showPatientList &&
          result.map((item) => (
            <li className={`${Style.paLi} list-group-item`} key={item.id}>
              <button
                className={`${Style.paButton} btn btn-lg`}
                onClick={() => handleClick(item)}
              >
                {`${item.first_name} ${item.last_name}, ${item.national_id}`}
              </button>
            </li>
          ))}
      </ul>

      <select
        onChange={(e) => handleDropDown(e)}
        className={`${Style.dropDown}`}
      >
        <option value={null}>انتخاب کنید</option>
        {doctorList.map((item) => (
          <option
            value={item.id}
            key={item.id}
          >{`${item.name} ${item.lastName}`}</option>
        ))}
      </select>

      <button className={`${Style.jfButton}`} onClick={doSubmit}>
        ثبت
      </button>
    </section>
  );
};

export default AddVisit;
