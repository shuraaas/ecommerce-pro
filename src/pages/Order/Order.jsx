import { Link } from 'react-router-dom';
import { Empty, Button } from 'antd';
import styles from './Order.module.scss';

const Order = () => {
  const orders = 0;

  return (
    <section className={styles.order}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Корзина</h2>
        <div>
          {!orders && (
            <>
              <Empty description>
                <p>Корзина пуста</p>
              </Empty>
              <Button>
                <Link to="/">Вернуться к покупкам</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Order;
