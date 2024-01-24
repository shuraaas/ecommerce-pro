import { Divider, Descriptions } from 'antd';
import styles from './Profile.module.scss';

const items1 = [
  {
    key: '1',
    label: 'Email',
    children: 's**************@yandex.ru',
  },
  {
    key: '2',
    label: 'Телефон',
    children: '+7 (982) *** ** 15',
  },
  {
    key: '3',
    label: 'Город',
    children: 'Челябинск',
  },
];

const items2 = [
  {
    key: '1',
    label: '-1 000',
    children: '1 ноября, Автосписание бонусов по истечении срока действия',
  },
  {
    key: '2',
    label: '+1 000',
    children: '10 октября, 1000 бонусов до 31.10.2023',
  },
  {
    key: '3',
    label: '-1 000',
    children: '28 сентября, Автосписание бонусов по истечении срока действия',
  },
];

const Profile = () => {
  return (
    <>
      <h2 className={styles.title}>Профиль</h2>
      <div className={styles.profileWrap}>
        <div className={styles.userInfo}>
          <h2>Александр</h2>
          <span>Статус: Basic</span>
          <Divider />
          <Descriptions column={1} items={items1} />
        </div>
        <div className={styles.userBonus}>
          <h2>0 бонусов</h2>
          <Descriptions column={1} items={items2} />
        </div>
        <div className={styles.userStatus}>
          <h2>Статус - BASIC</h2>
          <p>
            Статус в следующем квартале BASIC. Еще 5000 нужно потратить до 31
            марта, чтобы получить статус SILVER в следующем квартале
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
