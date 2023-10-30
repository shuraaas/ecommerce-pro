import { Link, Outlet } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import ProductsList from '../ProductsList';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <Header />

      <main>
        {/* <Outlet /> */}
        <Home />
        <ProductsList />
      </main>

      {/* <footer>footer 2023</footer> */}
    </div>
  );
};

export default Layout;
