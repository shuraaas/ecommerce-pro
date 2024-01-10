import styles from './Header.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import {
  MdFavorite,
  MdShoppingCart,
  MdBalance,
  MdAccountCircle,
  MdLocalPhone,
} from 'react-icons/md';
import { PiYoutubeLogoLight } from 'react-icons/pi';
import { SlSocialVkontakte } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';
import SearchMobile from '../SearchMobile';
import { useSelector } from 'react-redux';

const Header = ({ handleClick, handleOpenBurgerMenu }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenTagsBar, setIsOpenTagsBar] = useState(false);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const popularTags = [
    'tag',
    'tag',
    'tag',
    'tag',
    'tag',
    'tag',
    'tag',
    'tag',
    'tag',
    'tag',
    'tag',
    'tag',
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.secondary}>
          <div className={styles.container}>
            <div className={styles.inner}>
              <span className={styles.city}>Челябинск</span>
              <ul className={styles.navbar}>
                <li>
                  <a className={styles.navbarLink} href="#">
                    Акции
                  </a>
                </li>
                <li>
                  <a className={styles.navbarLink} href="#">
                    О компании
                  </a>
                </li>
                <li>
                  <a className={styles.navbarLink} href="#">
                    Доставка
                  </a>
                </li>
                <li>
                  <a className={styles.navbarLink} href="#">
                    Контакты
                  </a>
                </li>
                <li>
                  <a className={styles.navbarLink} href="#">
                    Отследить заказ
                  </a>
                </li>
              </ul>
              <div className={styles.contact}>
                <div className={styles.phoneNumbers}>
                  <MdLocalPhone size={30} />
                  <div className={styles.phoneList}>
                    <span className={styles.phone}>8 800 100-54-41</span>
                    <span className={styles.phone}>8 984 707-97-98</span>
                  </div>
                </div>
                <button className={styles.orderCall}>Заказать звонок</button>
                <ul className={styles.socials}>
                  <li className={styles.socialsIcon}>
                    <a href="#">
                      <CiMail size={25} />
                    </a>
                  </li>
                  <li className={styles.socialsIcon}>
                    <a href="#">
                      <PiYoutubeLogoLight size={25} />
                    </a>
                  </li>
                  <li className={styles.socialsIcon}>
                    <a href="#">
                      <SlSocialVkontakte size={25} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.headerMain}>
            <div className={styles.headerTop}>
              <button
                className={styles.burgerMenu}
                onClick={handleOpenBurgerMenu}
              >
                <RxHamburgerMenu size={24} />
              </button>
              <Link className={styles.link} to="/">
                <img
                  className={styles.logo}
                  src="/logo/logo.svg"
                  alt="Мк электро"
                />
              </Link>
              <button
                className={styles.burgerSearch}
                onClick={() => setIsOpenSearch(true)}
              >
                <BiSearch size={24} />
              </button>
            </div>

            <div className={styles.search}>
              <div className={styles.inputSearch}>
                <input
                  className={styles.input}
                  onClick={() => setIsOpenTagsBar(!isOpenTagsBar)}
                  type="text"
                  placeholder="Поиск по товарам"
                />
                <button className={styles.btnSearch}>
                  <img src="/icons/search.svg" alt="Иконка поиска" />
                </button>
              </div>
              <div
                className={cn(styles.tagsBar, {
                  [styles.active]: isOpenTagsBar,
                })}
              >
                <span>Popular: </span>
                <ul className={styles.tags}>
                  {popularTags.map((item, index) => (
                    <li className={styles.tagsItem} key={index}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.headerUser}>
              <button className={styles.button}>
                <MdBalance size={25} color="red" />
                <span>Сравнение</span>
              </button>
              <Link className={styles.button} to="wishlist">
                <MdFavorite size={25} color="red" />
                <span>Избранное</span>
              </Link>
              <Link className={styles.button} to="order">
                <MdShoppingCart size={25} color="red" />
                <span>Корзина</span>
              </Link>
              {isLoggedIn ? (
                <Link className={styles.button} to="user">
                  <MdAccountCircle size={25} color="red" />
                  <span>Профиль</span>
                </Link>
              ) : (
                <button onClick={handleClick} className={styles.button}>
                  <MdAccountCircle size={25} color="red" />
                  <span>Войти</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles.headerTooltip}>
          <div className={styles.container}>
            <div className={styles.headerTooltipInner}>
              <button className={styles.categoryBtn} type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="menu"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <p>Категории</p>
              </button>
            </div>
          </div>
        </div>
      </header>
      <SearchMobile
        isOpen={isOpenSearch}
        onClose={() => setIsOpenSearch(false)}
      />
    </>
  );
};

export default Header;
