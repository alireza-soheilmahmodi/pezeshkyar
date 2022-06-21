import { Routes, Route } from 'react-router-dom';
import MyAppLayout from '../MyAppLayout/MyAppLayout';
import Patients from '../Patients/Patients';
import CreateFile from '../CreateFile/CreateFile';
import AddVisit from '../AddVisit/AddVisit';
import PatientPage from '../PatientPage/PatientPage';
import FormGetter from '../forms/FormGetter/FormGetter';

const MyApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MyAppLayout />}>
        <Route path="patients" element={<Patients />} />
        <Route path="patients/:id" element={<PatientPage />} />

        <Route path="form/get/:formType/:id" element={<FormGetter />} />

        <Route path="form/set/:formType/:id" element={<FormGetter />} />

        <Route path="form/edit/:formType/:id" element={<FormGetter />} />

        <Route path="createFile" element={<CreateFile />} />

        <Route path="addVisit" element={<AddVisit />} />
      </Route>
    </Routes>
  );
};

export default MyApp;
