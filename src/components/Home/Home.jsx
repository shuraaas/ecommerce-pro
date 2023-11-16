import styles from './Home.module.scss';
import { data } from '../../db/categories.js';
import Slider from '../Slider';
import slides from '../../db/slides.json';
import IconsGenerator from '../IconsGenerator';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeInner}>
          <nav className={styles.menu}>
            <ul className={styles.menuInner}>
              {data.map((item) => (
                <li key={item.id}>
                  <a className={styles.menuItem} href="#">
                    <IconsGenerator name={item.title} />
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.rightBlock}>
            <div className={styles.bestCategories}>
              <a className={styles.categoriesItem} href="#">
                <div className={styles.cover} />
                <img
                  src="https://1000nk.ru/wp-content/uploads/2022/11/cables-de-cobre-2048x1536.jpg"
                  alt=""
                />
                <span>Распродажа</span>
              </a>
              <a className={styles.categoriesItem} href="#">
                <div className={styles.cover} />
                <img
                  src="https://1000nk.ru/wp-content/uploads/2022/11/cables-de-cobre-2048x1536.jpg"
                  alt=""
                />
                <span>Акции</span>
              </a>
              <a className={styles.categoriesItem} href="#">
                <div className={styles.cover} />
                <img
                  src="https://1000nk.ru/wp-content/uploads/2022/11/cables-de-cobre-2048x1536.jpg"
                  alt=""
                />
                <span>Популярные товары</span>
              </a>
            </div>
            <Slider className={styles.slider} slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
