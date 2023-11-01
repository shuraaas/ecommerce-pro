import styles from './ProductsList.module.scss';
import ProductsCard from '../ProductsCard';
import data from '../../db/productsList.json';

const ProductsList = () => {
  return (
    <section className={styles.productsList}>
      <div className={styles.container}>
        <h2 className={styles.title}>Хиты</h2>
        <ul className={styles.productsListInner}>
          {data.map(card => (
            <ProductsCard key={card.id} {...card} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsList;
