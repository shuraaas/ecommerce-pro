import { Link, Outlet } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import ProductsList from '../ProductsList';
import styles from './Layout.module.scss';
import Footer from '../Footer';
import { useState } from 'react';

const Layout = () => {
  const [isOpenUserPopup, setIsOpenUserPopup] = useState(false);

  const handleUserClick = () => {
    setIsOpenUserPopup(!isOpenUserPopup);
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <main>
        {/* <Outlet /> */}
        <Home />
        <ProductsList />
      </main>
      <Footer />
      {/* <LoginPopup /> */}
    </div>
  );
};

export default Layout;
