import { Breadcrumb } from 'antd';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          title: 'Главная',
          href: '/'
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
          title: 'Труба гофрированная',
        },
      ]}
    />
  );
};

export default Breadcrumbs;
