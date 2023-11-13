import styles from './SearchMobile.module.scss';
import cn from 'classnames';
import { BiSearch } from 'react-icons/bi';

const SearchMobile = ({ isOpen, onClose }) => {
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
              type="text"
              placeholder="Поиск по товарам"
            />
            <button className={styles.btnSearch}>
              <BiSearch size={15}/>
            </button>
          </form>
          <button className={styles.closeBtn} onClick={onClose}>
            <span>Отмена</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
