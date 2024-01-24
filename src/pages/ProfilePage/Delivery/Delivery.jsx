import styles from './Delivery.module.scss';

const Delivery = () => {
  return (
    <>
      <h2 className={styles.title}>Доставка</h2>
      <div className={styles.ordersWrap}>
        <h3>Адреса и получатели не добавлены</h3>
        <p>
          У вас пока еще нет сохраненных адресов и получателей. Добавьте данные
          — это ускорит оформление заказа.
        </p>
      </div>
    </>
  );
};

export default Delivery;
