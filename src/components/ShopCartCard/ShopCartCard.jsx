import styles from './ShopCartCard.module.scss';

const ShopCartCard = item => {
  return (
    <li className={styles.card}>
      <img className={styles.img} src={item.image[0] || item.image} alt={item.title} />
      <p className={styles.title}>{item.title}</p>
    </li>
  );
};

export default ShopCartCard;
