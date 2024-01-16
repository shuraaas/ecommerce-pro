import { Link } from 'react-router-dom';
import { Empty } from 'antd';
import styles from './Order.module.scss';

const Order = () => {
  const orders = 0;

  return (
    <section className={styles.order}>
    <div className={styles.container}></div>
      <h2>Корзина</h2>
      <div>
        {!orders && (
          <>
            <Empty description>
              <p>Корзина пуста</p>
            </Empty>
            <Link to="/">Вернуться к покупкам</Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Order;
