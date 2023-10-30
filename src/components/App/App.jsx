import { Routes, Route, Link } from 'react-router-dom';
import Register from '../../pages/Register';
import Layout from '../Layout/Layout';
import NotFoundPage from '../../pages/NotFoundPage';
import './App.module.scss';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
