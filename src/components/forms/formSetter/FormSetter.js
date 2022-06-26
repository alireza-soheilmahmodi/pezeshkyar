import { Routes, Route } from 'react-router-dom';
import BeforeSurgery from './BeforeSurgery/BeforeSurgery';
import AfterSurgery from './AfterSurgery/AfterSurgery';

export const FormSetter = () => {
  return (
    <Routes>
      <Route path="before_surgery/:national_id" element={<BeforeSurgery />} />

      <Route path="after_surgery/:national_id" element={<AfterSurgery />} />
    </Routes>
  );
};
