import { Link, useHref } from 'react-router-dom';
import styles from './BottomNav.module.scss';
import cn from 'classnames';
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { RiMenuSearchLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';

const BottomNav = ({ isOpen }) => {
  const href = useHref();

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
            <a className={styles.navLink} href="#">
              <AiOutlineShoppingCart size={20} />
              <span>Корзина</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
              <BsBookmark size={20} />
              <span>Избранное</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <button onClick={isOpen} className={styles.navLink}>
              <AiOutlineUser size={20} />
              <span>Войти</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
