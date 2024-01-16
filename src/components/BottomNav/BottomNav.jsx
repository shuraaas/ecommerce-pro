import { Link, useHref } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './BottomNav.module.scss';
import cn from 'classnames';
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { RiMenuSearchLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import { Badge } from 'antd';

const BottomNav = ({ isOpen }) => {
  const href = useHref();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <div className={styles.mobileNav}>
      <nav className={styles.bottomNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              className={cn(styles.navLink, href == '/' ? styles.active : '')}
              to="/"
            >
              <AiOutlineHome size={20} />
              <span>Главная</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
              <RiMenuSearchLine size={20} />
              <span>Каталог</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <Link
              className={cn(
                styles.navLink,
                href == '/order' ? styles.active : '',
              )}
              to="order"
            >
              <Badge size='small' count={1}>
                <AiOutlineShoppingCart size={20} />
              </Badge>
              <span>Корзина</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={cn(
                styles.navLink,
                href == '/wishlist' ? styles.active : '',
              )}
              to="wishlist"
            >
              <BsBookmark size={20} />
              <span>Избранное</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            {isLoggedIn ? (
              <Link
                className={cn(
                  styles.navLink,
                  href == '/user' ? styles.active : '',
                )}
                to="user"
              >
                <AiOutlineUser size={20} />
                <span>Профиль</span>
              </Link>
            ) : (
              <button onClick={isOpen} className={styles.navLink}>
                <AiOutlineUser size={20} />
                <span>Войти</span>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
