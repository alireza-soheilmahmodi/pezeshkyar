import { Routes, Route } from 'react-router-dom';
import MyAppLayout from '../MyAppLayout/MyAppLayout';
import Patients from '../Patients/Patients';
import CreateFile from '../forms/formSetter/CreateFile/CreateFile';
import AddVisit from '../AddVisit/AddVisit';
import PatientPage from '../PatientPage/PatientPage';
import FormGetter from '../forms/FormGetter/FormGetter';
import { FormSetter } from '../forms/formSetter/FormSetter';
import FormEdit from '../forms/formEdit/FormEdit';
import AnswerRef from '../forms/answerRef/AnswerRef';
import Missing from '../missing/Missing';
import Home from '../Home/Home';
import AddReference from '../AddReference/AddReference';
import AllReferences from '../AllReferences/AllReferences';
import { Logout } from '../Logout/Logout';

const MyApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MyAppLayout />}>
        <Route path="home" element={<Home />} />

        <Route path="patients" element={<Patients />} />

        <Route path="patients/:id" element={<PatientPage />} />

        <Route path="form/get/:formType/:id" element={<FormGetter />} />

        <Route path="form/set/*" element={<FormSetter />} />

        <Route path="form/edit/*" element={<FormEdit />} />

        <Route path="/answerRef/*" element={<AnswerRef />} />

        <Route path="createFile" element={<CreateFile />} />

        <Route path="addVisit" element={<AddVisit />} />

        <Route path="addReference/:national_id" element={<AddReference />} />

        <Route path="References" element={<AllReferences />} />

        <Route path="logout" element={<Logout />} />

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default MyApp;
