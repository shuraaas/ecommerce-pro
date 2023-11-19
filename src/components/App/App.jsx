import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Register from 'src/pages/Register';
import NotFoundPage from 'src/pages/NotFoundPage';
import Home from 'src/pages/Home';
import Profile from 'src/pages/Profile';
import { useNavigate } from "react-router-dom";
import LoginPopup from 'src/components/LoginPopup';
import MenuMobile from 'src/components/MenuMobile';
import BottomNav from 'src/components/BottomNav';
import Layout from 'src/layouts/Layout';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/user');
  }

  return (
    <div className={styles.page}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleClick={handleProfileClick}
              handleOpenBurgerMenu={() => setIsOpenBurgerMenu(true)}
            />
          }
        >
          <Route
            index
            element={
              <Home />
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="user" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <BottomNav />
      <LoginPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Вход"
      />
      <MenuMobile
        isOpen={isOpenBurgerMenu}
        onClose={() => setIsOpenBurgerMenu(false)}
      />
    </div>
  );
};

export default App;
