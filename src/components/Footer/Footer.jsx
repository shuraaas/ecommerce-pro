import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <img src="/logo/main-logo.png" alt="Логотип" />
            <p className={styles.logoText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit suscipit accusamus dolorem eius.
            </p>
          </div>
          <div className={styles.about}>
            <h2>About Us</h2>
            <ul className={styles.aboutMenu}>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our Stores</a>
              </li>
              <li>
                <a href="#">Our Cares</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.customCare}>
            <h2>Custom Care</h2>
            <ul className={styles.customCareMenu}>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">How to Buy</a>
              </li>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">Corporate & Bulk Purchasing</a>
              </li>
              <li>
                <a href="#">Returns & Funds</a>
              </li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h2>Custom Care</h2>
            <ul className={styles.contactsInfo}>
              <li><p>70 Washington Square South, New York, NY 10012, United States </p></li>
              <li><p>Email: uilib.help@gmail.com</p></li>
              <li><p>Phone: +1 1123 456 780</p></li>
            </ul>
            <ul className={styles.contactsMenu}>
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
    </footer>
  );
};

export default Footer;
