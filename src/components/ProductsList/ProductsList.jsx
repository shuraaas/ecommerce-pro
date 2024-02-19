import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import ProductsCard from '@/components/ProductsCard';
import styles from './ProductsList.module.scss';
// import data from '../../db/products.json';

const ProductsList = () => {
  const products = useSelector(state => state.products.items);
  const [page, setPage] = useState(1);
  const [pageQuantity, setPageQuantity] = useState(0);
  const productsPerPage = 10;
  const [resultArr, setResultArr] = useState([]);
  // const resultArr = products.slice(0, 10);

  // useEffect(() => {
  //   setResultArr(products.slice(0, 10));
  // }, [products]);

  useEffect(() => {
    setResultArr(
      products.slice((page - 1) * productsPerPage, page * productsPerPage),
    );
  }, [page, products]);

  // console.log(products.slice(0, 10));

  const onChange = page => {
    setPage(page);
    // console.log(page);
  };

  return (
    <section className={styles.productsList}>
      <div className={styles.container}>
        <h2 className={styles.title}>Товары</h2>
        <ul className={styles.productsListInner}>
          {resultArr.map(card => (
            <ProductsCard key={card._id.$oid} {...card} />
          ))}
          {/* {products.map(card => (
            <ProductsCard key={card.id} {...card} />
          ))} */}
          <Pagination
            onChange={page => setPage(page)}
            defaultCurrent={1}
            current={page}
            total={products.length}
          />
        </ul>
      </div>
    </section>
  );
};

export default ProductsList;
