import styles from './Brands.module.scss';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';
// import Chint from './brands/Chint';
// import Dekraft from './brands/Dekraft';
// import Ekf from './brands/Ekf';
// import { Iek } from './Iek';
// import { Resanta } from './Resanta';
// import { Schneider } from './Schneider';

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
                speed={1000}
                autoHeight
                loop
                // autoplay
                // navigation
              >
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="/brands/chint.png" alt="chint" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="/brands/dekraft.png" alt="dekraft" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="/brands/ekf.png" alt="ekf" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="/brands/iek.png" alt="iek" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="/brands/schneider.png" alt="schneider" />
                    </a>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li className={styles.card}>
                    <a href="#">
                      <img src="/brands/resanta.png" alt="resanta" />
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
