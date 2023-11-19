import styles from './SearchMobile.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import { BiSearch } from 'react-icons/bi';

const SearchMobile = ({ isOpen, onClose }) => {
  const [isOpenTagsBar, setIsOpenTagsBar] = useState(false);

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
    <div className={styles.searchMobilePopup}>
      <div
        className={cn(styles.cover, {
          [styles.coverShow]: isOpen,
        })}
      />

      <div
        className={cn(styles.mobileMenuBox, {
          [styles.mobileMenuBoxShow]: isOpen,
        })}
      >
        <div className={styles.menuHeader}>
          <form className={styles.inputSearch}>
            <input
              className={styles.input}
              onClick={() => setIsOpenTagsBar(!isOpenTagsBar)}
              type="text"
              placeholder="Поиск по товарам"
            />
            <button className={styles.btnSearch}>
              <BiSearch size={15} />
            </button>
          </form>
          <div className={cn(styles.tagsBar, {[styles.active]: isOpenTagsBar})}>
                <ul className={styles.tags}>
                  {popularTags.map((item, index) => (
                    <li className={styles.tagsItem} key={index}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <span>Отмена</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
