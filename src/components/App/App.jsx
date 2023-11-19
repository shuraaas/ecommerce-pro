import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Register from 'src/pages/Register';
import NotFoundPage from 'src/pages/NotFoundPage';
import Home from 'src/pages/Home';
import Profile from 'src/pages/Profile';
import { useNavigate } from 'react-router-dom';
import LoginPopup from 'src/components/LoginPopup';
import MenuMobile from 'src/components/MenuMobile';
import BottomNav from 'src/components/BottomNav';
import Layout from 'src/layouts/Layout';
import Gofra from '../Gofra';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (loggedIn) {
      navigate('/user');
    } else {
      setIsOpen(true);
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/user');
    setIsOpen(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <div className={styles.page}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleClick={handleProfileClick}
              handleOpenBurgerMenu={() => setIsOpenBurgerMenu(true)}
              loggedIn={loggedIn}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="products/gofra" element={<Gofra />} />
          <Route path="register" element={<Register />} />
          <Route path="user" element={<Profile onLogout={handleLogout} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <BottomNav isOpen={handleProfileClick} />
      <LoginPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Вход"
        handleLogin={handleLogin}
      />
      <MenuMobile
        isOpen={isOpenBurgerMenu}
        onClose={() => setIsOpenBurgerMenu(false)}
      />
    </div>
  );
};

export default App;
