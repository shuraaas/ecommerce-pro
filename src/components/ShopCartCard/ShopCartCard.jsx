import { Button, Checkbox } from 'antd';
import { useState } from 'react';
import { GoPlus, GoDash, GoTrash } from 'react-icons/go';
import styles from './ShopCartCard.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '@/store/slices/cartSlice';

const ShopCartCard = item => {
  const [checked, setChecked] = useState(true);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  return (
    <li className={styles.card}>
      <div className={styles.preview}>
        <div className={styles.previewInner}>
          <img
            className={styles.img}
            src={item.image[0] || item.image}
            alt={item.title}
          />
          <span className={styles.artikul}>{item.artikul}</span>
          <Checkbox
            className={styles.checkbox}
            onChange={e => setChecked(!checked)}
            checked={checked}
          />
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className={cn(styles.button, styles.trashButton)}
          >
            <GoTrash size={20} />
          </button>
        </div>
        <p className={styles.title}>{item.title}</p>
      </div>
      <div className={styles.widgetBottom}>
        <div className={styles.countButtons}>
          <button
            className={styles.button}
            onClick={() => setAmount(amount - 1)}
          >
            <GoDash size={20} />
          </button>
          <span>{amount}</span>
          <button
            className={styles.button}
            onClick={() => setAmount(amount + 1)}
          >
            <GoPlus size={20} />
          </button>
        </div>
        <span className={styles.price}>33 998 ₽</span>
      </div>
    </li>
  );
};

export default ShopCartCard;
