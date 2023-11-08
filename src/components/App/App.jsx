import './App.module.scss';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import Register from 'src/pages/Register';
import NotFoundPage from 'src/pages/NotFoundPage';
import Layout from 'src/components/Layout';

const App = () => {
  // axios
  //   .get('http://test.s1lentsorrow.ru/api/v1/categories/')
  //   .then(res => console.log(res.data));

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
