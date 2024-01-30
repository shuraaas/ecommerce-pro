import { Breadcrumb } from 'antd';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ lastChild }) => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Главная',
        href: '/',
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
