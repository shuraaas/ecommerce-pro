import styles from './Header.module.scss';

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
        <div className={styles.mainLogo}></div>
        <input className={styles.inputSearch} type="text" />
      </div>

      <div className={styles.container}>
        <div className={styles.headerTooltip}>
          <button className={styles.categoryBtn} type="button">Категории</button>
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
