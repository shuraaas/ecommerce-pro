import styles from './LoginForm.module.scss';

const LoginForm = ({ buttonText }) => {
  return (
    <form className={styles.form}>

      <div className={styles.content}>
        <input className={styles.input} name="email" type="text" required />
        <label className={styles.label}>Email</label>
      </div>

      <div className={styles.content}>
        <input
          className={styles.input}
          name="password"
          type="password"
          required
        />
        <label className={styles.label}>Пароль</label>
      </div>

      <button className={styles.submit} type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default LoginForm;
