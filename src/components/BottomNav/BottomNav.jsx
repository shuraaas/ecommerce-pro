import { useHref } from 'react-router-dom';
import styles from './BottomNav.module.scss';
import cn from 'classnames';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { RiMenuSearchLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';

const BottomNav = () => {
  const href = useHref();

  return (
    <div className={styles.mobileNav}>
      <nav className={styles.bottomNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              className={cn(styles.navLink, href == '/' ? styles.active : '')}
              href="#"
            >
              <AiOutlineHome size={20} />
              <span>Главная</span>
            </a>
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
              <BsBookmark size={18} />
              <span>Избранное</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
              <AiOutlineUser size={20} />
              <span>Войти</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
