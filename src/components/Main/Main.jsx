import styles from './Main.module.scss';
import { data } from '../../db/categories.js';
import { Link } from 'react-router-dom';
// import Slider from '../Slider';
// import slides from '../../db/slides.json';
import IconsGenerator from '../IconsGenerator';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward } from 'react-icons/io';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mainInner}>
          <nav className={styles.menu}>
            <ul className={styles.menuInner}>
              {/* {data.map((item, i) => (
                <div key={i}>
                  {item.link && (
                    <a className={styles.menuItem} href="#">
                      <IconsGenerator name={item.name} />
                      {item.name}
                      {item.children && (
                        <IoIosArrowForward size={20} fill="red" />
                      )}
                    </a>
                  )}
                </div>
              ))} */}
              {/* {data.map((item, i) => (
                <div key={i}>
                  <a className={styles.menuItem} href="#">
                    <IconsGenerator name={item.name} />
                    {item.name}
                  </a>
                  {item.map((m, index) => (
                    <div key={index}>
                      {m.children && (
                        <button>
                          {m.name}{' '}
                          <img src="/icons/arrow-red.svg" alt="arrow-red" />
                        </button>
                      )}
                      {m.link && (
                        <>
                          <IconsGenerator name={m.name} />
                          <a href={m.link}>{m.name}</a>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))} */}
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Умный дом" />
                  Умный дом
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Milwaukee" />
                  Milwaukee
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Изделия для электромонтажа" />
                  <span>Изделия для электромонтажа</span>
                  <IoIosArrowForward size={20} fill="red" />
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <span>Трубы и держатели</span>
                      <IoIosArrowForward size={20} fill="red" />
                    </a>
                    <ul>
                      <li>
                        <Link to="/products/gofra">Труба гофрированная</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Изолента</a>
                  </li>
                  <li>
                    <a href="#">Знаки безопасности</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Розетки и выключатели" />
                  Розетки и выключатели
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Кабель и провод" />
                  Кабель и провод
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Светотехника" />
                  Светотехника
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Модульное и щитовое оборудование" />
                  Модульное и щитовое оборудование
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Метизы" />
                  Метизы
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Инструменты" />
                  Инструменты
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Электробытовые товары" />
                  Электробытовые товары
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Теплый пол" />
                  Теплый пол
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Низковольтное оборудование" />
                  Низковольтное оборудование
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Климатическая техника" />
                  Климатическая техника
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Строительные материалы" />
                  Строительные материалы
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Вентиляция и люки доступа" />
                  Вентиляция и люки доступа
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Стабилизаторы напряжения" />
                  Стабилизаторы напряжения
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Высоковольтное оборудование" />
                  Высоковольтное оборудование
                </a>
              </li>
              <li>
                <a className={styles.menuItem} href="#">
                  <IconsGenerator name="Генераторы" />
                  Генераторы
                </a>
              </li>
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

export default Main;
