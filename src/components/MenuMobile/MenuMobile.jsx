import styles from './MenuMobile.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import IconsGenerator from '../IconsGenerator';

const menu = [
  {
    id: 1,
    link: '/',
    name: 'Умный дом',
  },
  {
    id: 2,
    link: '/',
    name: 'Milwaukee',
  },
  {
    id: 3,
    link: '/',
    name: 'Изделия для электромонтажа',
  },
  {
    id: 4,
    link: '/',
    name: 'Розетки и выключатели',
  },
  {
    id: 5,
    link: '/',
    name: 'Кабель и провод',
  },
  {
    id: 6,
    link: '/',
    name: 'Светотехника',
  },
  {
    id: 7,
    link: '/',
    name: 'Модульное и щитовое оборудование',
  },
  {
    id: 8,
    link: '/',
    name: 'Метизы',
  },
  {
    id: 9,
    link: '/',
    name: 'Инструменты',
  },
  {
    id: 10,
    link: '/',
    name: 'Электробытовые товары',
  },
  {
    id: 11,
    link: '/',
    name: 'Теплый пол',
  },
  {
    id: 12,
    link: '/',
    name: 'Низковольтное оборудование',
  },
  {
    id: 13,
    link: '/',
    name: 'Климатическая техника',
  },
  {
    id: 14,
    link: '/',
    name: 'Строительные материалы',
  },
  {
    id: 15,
    link: '/',
    name: 'Вентиляция и люки доступа',
  },
  {
    id: 16,
    link: '/',
    name: 'Стабилизаторы напряжения',
  },
  {
    id: 17,
    link: '/',
    name: 'Высоковольтное оборудование',
  },
  {
    id: 18,
    link: '/',
    name: 'Генераторы',
  },
];
// const menu = [
//   {
//     name: 'Главная',
//     link: '/',
//   },
//   {
//     name: 'О нас',
//     children: [
//       {
//         name: 'О компании',
//         children: [
//           {
//             name: 'Еще меню 2',
//             link: '/about/company',
//           },
//         ],
//       },
//       {
//         name: 'Команда',
//         link: '/about/command',
//       },
//       {
//         name: 'Прочее',
//         children: [
//           {
//             name: 'Еще меню',
//             link: '/about/company',
//           },
//         ],
//       },
//     ],
//   },
// ];

const MenuMobile = ({ isOpen, onClose }) => {
  const [level, setLevel] = useState(1);
  const [currentMenu, setCurrentMenu] = useState([menu]);

  const selectLevel = (level, menu) => {
    if (!menu) return;
    setLevel(level);
    setCurrentMenu(l => {
      l[level] = menu;
      return l;
    });
  };

  const backLevel = () => {
    setLevel(level - 1);
    setCurrentMenu(l => {
      l[level] = [];
      return l;
    });
  };

  return (
    <>
      <nav className={styles.menu} role="navigation">
        <div
          className={cn(styles.cover, {
            [styles.coverShow]: isOpen,
          })}
          onClick={onClose}
        />
        <div
          className={cn(styles.mobileMenuBox, {
            [styles.mobileMenuBoxShow]: isOpen,
          })}
        >
          <div className={styles.menuHeader}>
            {level > 1 && (
              <button className={styles.backButton} onClick={() => backLevel()}>
                <img src="/icons/arrow.svg" alt="arrow" />
                Назад
              </button>
            )}
            {level === 1 && <div className={styles.backButton}>Каталог</div>}
            <button className={styles.closeButton} onClick={onClose}></button>
          </div>
          <div
            className={styles.level}
            style={{
              transform: `translateX(calc(-100% * ${level - 1} - 24px * ${
                level - 1
              }))`,
            }}
          >
            {currentMenu.map((item, i) => (
              <div key={i}>
                {item.map((m, index) => (
                  <div className={styles.link} key={m.name}>
                    {m.children && (
                      <button
                        className={styles.item}
                        onClick={() => selectLevel(level + 1, m.children)}
                      >
                        {m.name}{' '}
                        <img src="/icons/arrow-red.svg" alt="arrow-red" />
                      </button>
                    )}
                    {m.link && (
                      <>
                        <IconsGenerator name={m.name} />
                        <a className={styles.item} href={m.link}>
                          {m.name}
                        </a>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuMobile;
