import styles from './Trust.module.scss';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const Trust = () => {
  return (
    <section className={styles.trust}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Нам доверяют</h2>
          <div className={styles.cardsBlock}>
            <ul className={styles.cardsList}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                slidesPerView={5}
                spaceBetween={20}
                navigation
                loop
                autoHeight
                // autoplay
                speed={1000}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/250x350" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/250x350" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/250x350" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/250x350" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/250x350" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/250x350" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>
          <a href="#">Смотреть все</a>
        </div>
      </div>
    </section>
  );
};

export default Trust;
