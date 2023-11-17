import styles from './Home.module.scss';
import { data } from '../../db/categories.js';
import Slider from '../Slider';
import slides from '../../db/slides.json';
import IconsGenerator from '../IconsGenerator';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeInner}>
          <nav className={styles.menu}>
            <ul className={styles.menuInner}>
              {data.map(item => (
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
            {/* <Slider className={styles.slider} slides={slides} /> */}
            <Swiper
              style={{ borderRadius: '20px' }}
              modules={[Navigation, Pagination, Autoplay, A11y]}
              slidesPerView={1}
              className={styles.slider}
              speed={1000}
              pagination={{ clickable: true }}
              loop
              autoplay
              // autoHeight
              // navigation
            >
              <SwiperSlide>
                <img className={styles.img} src="/banners/1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src="/banners/2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src="/banners/3.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
