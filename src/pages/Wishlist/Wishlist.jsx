import { useDispatch, useSelector } from 'react-redux';
import styles from './Wishlist.module.scss';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <section className={styles.wishlist}>
      <div className={styles.container}>
        <h2>Избранное</h2>
        <div className={styles.main}>
          {wishlist.length !== 0 ? (
            <ul>
              <li>тут избранные товары</li>
            </ul>
          ) : (
            <p>Пока нет товаров в избранном</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
