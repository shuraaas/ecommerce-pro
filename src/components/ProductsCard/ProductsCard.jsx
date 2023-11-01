import styles from './ProductsCard.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

const ProductsCard = ({ image, price, brand, title }) => {
  const [counter, setCounter] = useState(0);

  const handleRemoveClick = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  const handleAddClick = () => setCounter(counter + 1);

  return (
    <li className={styles.productsCard}>
      <a href="#">
        <img className={styles.img} src={image} alt={title} />
      </a>
      <div className={styles.cardInfo}>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>{price} руб.</p>
        </div>
        <div className={styles.addCart}>
          <button
            onClick={handleRemoveClick}
            className={classNames(styles.btn, styles.btnRemove)}
          ></button>
          <span className={styles.counter}>{counter}</span>
          <button
            onClick={handleAddClick}
            className={classNames(styles.btn, styles.btnAdd)}
          ></button>
        </div>
      </div>
    </li>
  );
};

export default ProductsCard;
