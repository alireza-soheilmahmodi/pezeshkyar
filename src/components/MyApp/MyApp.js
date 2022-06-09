import { Link } from 'react-router-dom';
import MyAppStyle from './MyApp.module.css';
import { Routes, Route } from 'react-router-dom';
import MyAppLayout from '../MyAppLayout/MyAppLayout';
import Patients from '../Patients/Patients';
import CreateFile from '../CreateFile/CreateFile';
import AddVisit from '../AddVisit/AddVisit';

const MyApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MyAppLayout />}>
        <Route path="patients" element={<Patients />} />

        <Route path="createFile" element={<CreateFile />} />

        <Route path="addVisit" element={<AddVisit />} />
      </Route>
    </Routes>
  );
};

export default MyApp;
