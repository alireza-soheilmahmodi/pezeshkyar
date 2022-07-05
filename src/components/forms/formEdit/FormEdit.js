import { Routes, Route } from 'react-router-dom';
import AfterSurgery from './AfterSurgery/AfterSurgery';
import BeforeSurgery from './BeforeSurgery/BeforeSurgery';
import Children from './Children/Children';
import ExaminationsSurgery from './ExaminationsSurgery/ExaminationsSurgery';

export const FormEdit = () => {
  return (
    <Routes>
      <Route path="after_surgery/:id" element={<AfterSurgery />} />

      <Route path="before_surgery/:id" element={<BeforeSurgery />} />

      <Route path="epa/:id" element={<Children />} />

      <Route path="surgery/:id" element={<ExaminationsSurgery />} />
    </Routes>
  );
};

export default FormEdit;
