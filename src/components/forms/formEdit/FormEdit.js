import { Routes, Route } from 'react-router-dom';
import AfterSurgery from './AfterSurgery/AfterSurgery';
import BeforeSurgery from './BeforeSurgery/BeforeSurgery';
import Children from './Children/Children';
import ExaminationsSurgery from './ExaminationsSurgery/ExaminationsSurgery';
import RetinaConsult from './RetinaConsult/RetinaConsult';
import Glaucoma from './Glaucoma/Glaucoma';
import Strabism from './Strabism/Strabism';

export const FormEdit = () => {
  return (
    <Routes>
      <Route path="after_surgery/:id" element={<AfterSurgery />} />

      <Route path="before_surgery/:id" element={<BeforeSurgery />} />

      <Route path="epa/:id" element={<Children />} />

      <Route path="surgery/:id" element={<ExaminationsSurgery />} />

      <Route path="retina_consult/:id" element={<RetinaConsult />} />

      <Route path="glaucoma/:id" element={<Glaucoma />} />

      <Route path="strabism/:id" element={<Strabism />} />
    </Routes>
  );
};

export default FormEdit;
