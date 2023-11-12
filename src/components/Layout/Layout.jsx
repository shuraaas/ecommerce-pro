import styles from './Layout.module.scss';
import { useState } from 'react';
import Header from '../Header';
import Home from '../Home';
import ProductsList from '../ProductsList';
import Footer from '../Footer';
import LoginPopup from '../LoginPopup';
import MenuMobile from '../MenuMobile';
import BottomNav from '../BottomNav';
import Subscription from '../Subscription';
import News from '../News';
import Brands from '../Brands';
import Trust from '../Trust';

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
        <Home />
        <Brands />
        <ProductsList />
        <News />
        <Subscription />
        <Trust />
      </main>
      <Footer />

      <BottomNav />
      <LoginPopup isOpen={isOpen} onClose={handleClose} title="Вход" />
      <MenuMobile isOpen={isOpenBurgerMenu} onClose={handleCloseBurgerMenu} />
    </div>
  );
};

export default Layout;
