import styles from './News.module.scss';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Новости</h2>
          <div className={styles.cardsBlock}>
            <ul className={styles.cardsList}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                slidesPerView={3}
                spaceBetween={20}
                // navigation
                loop
                autoHeight
                // autoplay
                speed={1000}
                // pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/350x260" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/350x260" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/350x260" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/350x260" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/350x260" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/350x260" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>
          <a href="#">Все новости</a>
        </div>
      </div>
    </section>
  );
};

export default News;
