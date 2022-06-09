import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Missing from './components/missing/Missing';
import MyApp from './components/MyApp/MyApp';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="app/*" element={<MyApp />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
