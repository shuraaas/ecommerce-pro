import { useSelector } from 'react-redux';
import ProductsCard from '@/components/ProductsCard';
import styles from './ProductsList.module.scss';
// import data from '../../db/products.json';

const ProductsList = () => {
  const products = useSelector(state => state.products.items);

  return (
    <section className={styles.productsList}>
      <div className={styles.container}>
        <h2 className={styles.title}>Товары</h2>
        <ul className={styles.productsListInner}>
          {products.map(card => (
            <ProductsCard key={card.id} {...card} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsList;
