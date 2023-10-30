import styles from './ProductsList.module.scss';

const ProductsList = () => {
  return (
    <section className={styles.productsList}>
      <div className={styles.container}>
        <div className={styles.productsListInner}>
          <p>ProductsList</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
