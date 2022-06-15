import PatientSearchBox from '../common/PatientSearchBox/PatientSearchBox';
import Style from './Patients.module.css';

const Patients = () => {
  return (
    <section className={`${Style.patientsPage}`}>
      <PatientSearchBox />
    </section>
  );
};

export default Patients;
