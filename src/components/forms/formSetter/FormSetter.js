import { Routes, Route } from 'react-router-dom';
import BeforeSurgery from './BeforeSurgery/BeforeSurgery';
import AfterSurgery from './AfterSurgery/AfterSurgery';
import Children from './Children/Children';
import ExaminationsSurgery from './ExaminationsSurgery/ExaminationsSurgery';

export const FormSetter = () => {
  return (
    <Routes>
      <Route path="before_surgery/:national_id" element={<BeforeSurgery />} />

      <Route path="after_surgery/:national_id" element={<AfterSurgery />} />

      <Route path="epa/:national_id" element={<Children />} />

      <Route path="surgery/:national_id" element={<ExaminationsSurgery />} />
    </Routes>
  );
};
