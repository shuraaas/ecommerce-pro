import styles from './Layout.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header';
import Home from '../Home';
import ProductsList from '../ProductsList';
import Footer from '../Footer';
import LoginPopup from '../LoginPopup';
import MenuMobile from '../MenuMobile';
import BottomNav from '../BottomNav';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpenBurgerMenu = () => setIsOpenBurgerMenu(true);
  const handleCloseBurgerMenu = () => setIsOpenBurgerMenu(false);

  return (
    <div className={styles.page}>
      <Header onClick={handleClick} onBurgerMenuClick={handleOpenBurgerMenu} />
      <main>
        {/* <Outlet /> */}
        <Home />
        <ProductsList />
      </main>
      <Footer />

      <BottomNav />
      <LoginPopup isOpen={isOpen} onClose={handleClose} title="Вход" />
      <MenuMobile isOpen={isOpenBurgerMenu} onClose={handleCloseBurgerMenu} />
    </div>
  );
};

export default Layout;
