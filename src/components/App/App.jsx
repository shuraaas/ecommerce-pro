import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import Order from 'src/pages/Order';
import Wishlist from 'src/pages/Wishlist';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  const loggedIn = useSelector(state => state.user.isLoggedIn)
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (loggedIn) {
      navigate('/user');
    } else {
      setIsOpen(true);
    }
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
          <Route path='order' element={<Order/>} />
          <Route path="register" element={<Register />} />
          <Route path="user" element={<Profile />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <BottomNav isOpen={handleProfileClick} />
      <LoginPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Вход"
        handleLogin={() => setIsOpen(false)}
      />
      <MenuMobile
        isOpen={isOpenBurgerMenu}
        onClose={() => setIsOpenBurgerMenu(false)}
      />
    </div>
  );
};

export default App;
