import { Breadcrumb } from 'antd';
import styles from './Breadcrumbs.module.scss';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ lastChild }) => (
  <Breadcrumb
    className={styles.breadcrumb}
    separator=">"
    items={[
      {
        title: <Link to="/">Главная</Link>,
        // href: '/',
      },
      {
        title: 'Изделия для электромонтажа',
        href: '',
      },
      {
        title: 'Трубы и держатели',
        href: '',
      },
      {
        title: lastChild,
      },
    ]}
  />
);

export default Breadcrumbs;
