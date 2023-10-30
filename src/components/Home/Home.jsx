import styles from './Home.module.scss';
import { data } from '../../db/categories.js';
import Slider from '../Slider';
import slides from '../../db/slides.json';

// console.log(data);

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeInner}>
          <nav className={styles.menu}>
            <ul className={styles.menuInner}>
              {data.map((item, i) => (
                <a className={styles.menuItem} href="#" key={i}>
                  <li>{item.title}</li>
                </a>
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
