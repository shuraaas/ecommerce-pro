import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MainLayout = props => {
  return (
    <>
      <Header {...props} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
