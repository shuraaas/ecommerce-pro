import styles from './Home.module.scss';
import { data } from '../../db/categories.js';
import Slider from '../Slider';
import slides from '../../db/slides.json';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeInner}>
          <nav className={styles.menu}>
            <ul className={styles.menuInner}>
              {data.map((item, i) => (
                <li key={i}>
                  <a className={styles.menuItem} href="#">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.homeSlider}>
            <Slider className={styles.homeSlider} slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
