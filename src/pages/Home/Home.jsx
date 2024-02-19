import Subscription from '@/components/Subscription';
import News from '@/components/News';
import Brands from '@/components/Brands';
import Trust from '@/components/Trust';
import ProductsList from '@/components/ProductsList';
import Main from '@/components/Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '@/store/slices/productsSlice';
// import data from '@/db/products.json';
import data from '@/db/items.products.json';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts(data));
  }, []);

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
