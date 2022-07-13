import { Routes, Route } from 'react-router-dom';
import RetinaConsult from './RetinaConsult/RetinaConsult';
import Glaucoma from './Glaucoma/Glaucoma';
import Strabism from './Strabism/Strabism';

export const AnswerRef = () => {
  return (
    <Routes>
      <Route path="retina_consult/:id" element={<RetinaConsult />} />

      <Route path="glaucoma/:id" element={<Glaucoma />} />

      <Route path="strabism/:id" element={<Strabism />} />
    </Routes>
  );
};

export default AnswerRef;
