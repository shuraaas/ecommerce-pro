import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.rowInner}>
            <div className={styles.logo}>
              <img src="/logo/logo.svg" alt="Логотип" />
              <div className={styles.call}>
                <a href="#">Заказать звонок</a>
                <span>8 800 100-54-41</span>
                <span>8 984 707-97-98</span>
              </div>
            </div>
            <div className={styles.about}>
              <h2>Компания</h2>
              <ul className={styles.aboutMenu}>
                <li>
                  <a href="#">Краткая информация</a>
                </li>
                <li>
                  <a href="#">История</a>
                </li>
                <li>
                  <a href="#">Реквизиты</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Вакансии</a>
                </li>
                <li>
                  <a href="#">Адреса магазинов</a>
                </li>
                <li>
                  <a href="#">Отзывы</a>
                </li>
              </ul>
            </div>
            <div className={styles.customCare}>
              <h2>Информация</h2>
              <ul className={styles.customCareMenu}>
                <li>
                  <a href="#">Способы оплаты</a>
                </li>
                <li>
                  <a href="#">Пользовательское соглашение</a>
                </li>
                <li>
                  <a href="#">Политика конфиденциальности</a>
                </li>
                <li>
                  <a href="#">Статьи и обзоры</a>
                </li>
                <li>
                  <a href="#">Производители и бренды</a>
                </li>
                <li>
                  <a href="#">Архив товаров</a>
                </li>
              </ul>
            </div>
            <div className={styles.services}>
              <h2>Сервисы</h2>
              <ul className={styles.servicesInfo}>
                <li>
                  <a href="#">Корзина</a>
                </li>
                <li>
                  <a href="#">Авторизация</a>
                </li>
                <li>
                  <a href="#">Восстановление аккаунта</a>
                </li>
                <li>
                  <a href="#">Сброс пароля</a>
                </li>
                <li>
                  <a href="#">Поиск на сайте</a>
                </li>
                <li>
                  <a href="#">Карта сайта</a>
                </li>
              </ul>
              <ul className={styles.servicesMenu}>
                <li>
                  <a href="#">
                    <img src="/icons/vk.svg" alt="Вконтакте" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/icons/dzen.svg" alt="Dzen" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p>
            &copy; 2012-2023 МК ЭЛЕКТРО. Оптово-розничная сеть и
            интернет-магазин электротехнической продукции с доставкой по РФ и
            СНГ.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
