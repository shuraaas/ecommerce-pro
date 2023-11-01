import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className={styles.secondary}>
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <span className={styles.city}>Челябинск</span>
            <div className={styles.phoneList}>
              <span className={styles.phone}>8 800 100-54-41</span>
              <span className={styles.phone}>8 984 707-97-98</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.headerMain}>
          <Link to="/">
            <img src="/logo/main-logo.png" alt="Мк электро" />
          </Link>
          <div className={styles.search}>
            <input className={styles.inputSearch} type="text" placeholder='Поиск по товарам...' />
            <button className={styles.btnSearch}>
              <img src="/icons/search.svg" alt="Иконка поиска" />
            </button>
          </div>
          <div className={styles.headerUser}>
            <button className={styles.user}>
              <img src="/icons/user.svg" alt="Кнопка Аккаунт" />
            </button>
            <button className={styles.cart}>
              <img src="/icons/cart.svg" alt="Кнопка Корзина" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.headerTooltip}>
          <button className={styles.categoryBtn} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="menu"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
            <p>Категории</p>
          </button>
          <ul className={styles.navbar}>
            <li>
              <a className={styles.navbarLink} href="#">
                Главная
              </a>
            </li>
            <li>
              <a className={styles.navbarLink} href="#">
                Страницы
              </a>
            </li>
            <li>
              <a className={styles.navbarLink} href="#">
                Аккаунт
              </a>
            </li>
            <li>
              <a className={styles.navbarLink} href="#">
                Отследить заказ
              </a>
            </li>
            <li>
              <a className={styles.navbarLink} href="#">
                Доставка
              </a>
            </li>
            <li>
              <a className={styles.navbarLink} href="#">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
