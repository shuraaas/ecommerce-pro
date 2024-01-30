import { useDispatch, useSelector } from 'react-redux';
import { Button, Empty, Flex } from 'antd';
import styles from './Cart.module.scss';
import ShopCartCard from '@/components/ShopCartCard';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <h2>Корзина</h2>
        <div className={styles.cartInner}>
          <div className={styles.main}>
            {cart.length !== 0 ? (
              <>
                <ul className={styles.list}>
                  {cart.map(item => (
                    <ShopCartCard key={item.id} {...item} />
                  ))}
                </ul>
                <div className={styles.order}>
                  <div className={styles.amountBlock}>
                    <span>Итого:</span>
                    <div className={styles.amount}>
                      <p>{cart.length} Товар</p>
                      <p>12 313 ₽</p>
                    </div>
                  </div>
                  <Button size="large">Перейти к оформлению</Button>
                </div>
              </>
            ) : (
              <>
                <Empty description>
                  <p>Корзина пуста</p>
                </Empty>
                <Flex justify="center">
                  <Button>
                    <Link to="/">Вернуться к покупкам</Link>
                  </Button>
                </Flex>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
