import { Collapse } from 'antd';
import styles from './Orders.module.scss';

const items = [
  {
    key: '1',
    label: 'Заказ V032918616',
    children: 'text',
  },
  {
    key: '2',
    label: 'Заказ V032918616',
    children: 'text',
  },
  {
    key: '3',
    label: 'Заказ V032918616',
    children: 'text',
  },
];

const Orders = () => {
  return (
    <>
      <h2 className={styles.title}>Заказы</h2>
      <div className={styles.ordersWrap}>
        <Collapse items={items} defaultActiveKey={['1']} />
      </div>
    </>
  );
};

export default Orders;
