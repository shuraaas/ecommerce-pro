import { useDispatch, useSelector } from 'react-redux';
import { Button, Empty, Flex, Checkbox } from 'antd';
import styles from './Cart.module.scss';
import ShopCartCard from '@/components/ShopCartCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [allChecked, setAllChecked] = useState(true);

  // const checkingTheCorrectEnding = () => {
  //   if (cart.length === 1) {
  //     console.log('товар');
  //     return;
  //   }

  //   const lastNumber = cart.length.toString().at(-1);
  //   if (lastNumber === )
  // };

  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <h2>Корзина</h2>
        <div className={styles.cartInner}>
          {cart.length !== 0 ? (
            <>
              <div className={styles.massSelection}>
                <Checkbox
                  checked={allChecked}
                  onChange={() => setAllChecked(!allChecked)}
                >
                  Выбрать все
                </Checkbox>
                {allChecked && <Button type="text">Удалить выбранные</Button>}
              </div>
              <ul className={styles.list}>
                {cart.map(item => (
                  <ShopCartCard key={item.id} {...item} />
                ))}
              </ul>
              <div className={styles.order}>
                <div className={styles.amountBlock}>
                  <span>Итого:</span>
                  <div className={styles.amount}>
                    <p>{cart.length} Товар(ов)</p>
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
    </section>
  );
};

export default Cart;
