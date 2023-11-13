import styles from './Brands.module.scss';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

const Brands = () => {
  return (
    <section className={styles.brands}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Популярные бренды</h2>
          <div className={styles.cardsBlock}>
            <ul className={styles.cardsList}>
              <Swiper
                modules={[Navigation, Autoplay, A11y]}
                slidesPerView={6}
                spaceBetween={20}
                // navigation
                loop
                autoHeight
                // autoplay
                speed={1000}
              >
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="https://placehold.co/150x100" alt="#" />
                    </a>
                  </li>
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
