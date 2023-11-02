import styles from './Layout.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header';
import Home from '../Home';
import ProductsList from '../ProductsList';
import Footer from '../Footer';
import LoginPopup from '../LoginPopup';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className={styles.wrap}>
      <Header onClick={handleClick} />
      <main>
        {/* <Outlet /> */}
        <Home />
        <ProductsList />
      </main>
      <Footer />

      <div className={styles.bottomNav}>
        <a className={styles.bottomNavLink} href="#">
          <img src="/icons/home.svg" alt="" />
          <p>Главная</p>
        </a>
        <a className={styles.bottomNavLink} href="#">
          <img src="/icons/categories.svg" alt="" />
          <p>Категории</p>
        </a>
        <a className={styles.bottomNavLink} href="#">
          <img src="/icons/cart.svg" alt="" />
          <p>Корзина</p>
        </a>
        <a className={styles.bottomNavLink} href="#">
          <img src="/icons/user.svg" alt="" />
          <p>Аккаунт</p>
        </a>
      </div>

      <LoginPopup isOpen={isOpen} onClose={handleClose} title="Вход" />
    </div>
  );
};

export default Layout;
