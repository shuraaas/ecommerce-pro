import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// Pages
import Delivery from '@/pages/ProfilePage/Delivery';
import Profile from '@/pages/ProfilePage/Profile';
import NotFoundPage from '@/pages/NotFoundPage';
import Orders from '@/pages/ProfilePage/Orders';
import Club from '@/pages/ProfilePage/Club';
import Register from '@/pages/Register';
import Wishlist from '@/pages/Wishlist';
import Product from '@/pages/Product';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
// Components
import LoginPopup from '@/components/LoginPopup';
import MenuMobile from '@/components/MenuMobile';
import BottomNav from '@/components/BottomNav';
// Layouts
import ProfileLayout from '@/layouts/ProfileLayout';
import MainLayout from '@/layouts/MainLayout';

import styles from './App.module.scss';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const loggedIn = useSelector(state => state.user.isLoggedIn);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch('http://45.80.68.71:8000/api/product/')
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);

  const handleProfileClick = () => {
    if (loggedIn) {
      navigate('/profile');
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
            <MainLayout
              handleClick={handleProfileClick}
              handleOpenBurgerMenu={() => setIsOpenBurgerMenu(true)}
              loggedIn={loggedIn}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/*" element={<ProfileLayout />}>
            <Route path="" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="club" element={<Club />} />
            <Route path="delivery" element={<Delivery />} />
          </Route>
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <BottomNav
        handleOpenBurgerMenu={() => setIsOpenBurgerMenu(true)}
        isOpen={handleProfileClick}
      />
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
