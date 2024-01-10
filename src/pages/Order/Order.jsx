import { Link } from 'react-router-dom';
import styles from './Order.module.scss';

const Order = () => {
  const orders = 0;
  return (
    <section className={styles.order}>
      <h2>Корзина</h2>
      <div>
        {!orders && (
          <>
            <p>В корзине нет товаров</p>
            <Link to="/">Вернуться к покупкам</Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Order;
