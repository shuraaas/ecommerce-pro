import Subscription from 'src/components/Subscription';
import News from 'src/components/News';
import Brands from 'src/components/Brands';
import Trust from 'src/components/Trust';
import ProductsList from 'src/components/ProductsList';
import Main from 'src/components/Main';

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
