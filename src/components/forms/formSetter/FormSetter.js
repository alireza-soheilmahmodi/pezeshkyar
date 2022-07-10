import { Routes, Route } from 'react-router-dom';
import BeforeSurgery from './BeforeSurgery/BeforeSurgery';
import AfterSurgery from './AfterSurgery/AfterSurgery';
import Children from './Children/Children';
import ExaminationsSurgery from './ExaminationsSurgery/ExaminationsSurgery';
import Strabism from './Strabism/Strabism';
import RetinaConsult from './RetinaConsult/RetinaConsult';
import Genetics from './Genetics/Genetics';
import Glaucoma from './Glaucoma/Glaucoma';

export const FormSetter = () => {
  return (
    <Routes>
      <Route path="before_surgery/:national_id" element={<BeforeSurgery />} />

      <Route path="after_surgery/:national_id" element={<AfterSurgery />} />

      <Route path="epa/:national_id" element={<Children />} />

      <Route path="surgery/:national_id" element={<ExaminationsSurgery />} />

      <Route path="strabism/:national_id" element={<Strabism />} />

      <Route path="retina_consult/:national_id" element={<RetinaConsult />} />

      <Route path="genetics/:national_id" element={<Genetics />} />

      <Route path="glaucoma/:national_id" element={<Glaucoma />} />
    </Routes>
  );
};
