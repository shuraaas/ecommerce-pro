import Subscription from '@/components/Subscription';
import News from '@/components/News';
import Brands from '@/components/Brands';
import Trust from '@/components/Trust';
import ProductsList from '@/components/ProductsList';
import Main from '@/components/Main';

const Home = () => {
  return (
    <>
      <Main />
      <Brands />
      <ProductsList />
      <News />
      <Subscription />
      <Trust />
    </>
  );
};

export default Home;
