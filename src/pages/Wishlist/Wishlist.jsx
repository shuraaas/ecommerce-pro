import { useDispatch, useSelector } from 'react-redux';
import { Empty } from 'antd';
import styles from './Wishlist.module.scss';
import WishlistCard from '@/components/WishlistCard';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <section className={styles.wishlist}>
      <div className={styles.container}>
        <h2>Избранное</h2>
        <div className={styles.main}>
          {wishlist.length !== 0 ? (
            <ul className={styles.list}>
              {wishlist.map(item => (
                <WishlistCard key={item.id} {...item}/>
              ))}
            </ul>
          ) : (
            <Empty description>
              <p>Избранных товаров нет</p>
            </Empty>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
