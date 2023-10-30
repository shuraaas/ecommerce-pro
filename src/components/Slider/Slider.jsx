import styles from './Slider.module.scss';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      slidesPerView={1}
      navigation
      loop
      autoHeight
      autoplay
      speed={1000}
      pagination={{ clickable: true }}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <img className={styles.img} src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
