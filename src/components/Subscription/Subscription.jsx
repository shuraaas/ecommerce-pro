import styles from './Subscription.module.scss';

const Subscription = () => {
  return (
    <section className={styles.subscription}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <p className={styles.text}>Будьте всегда в курсе! Узнавайте об акциях и скидках первыми!</p>
          <form className={styles.form}>
            <input className={styles.input} type="email" placeholder="Ваш e-mail..." />
            <button className={styles.button}>Подписаться</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
