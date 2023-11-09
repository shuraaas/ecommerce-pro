import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';

const LoginForm = ({ buttonText }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const submit = data => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div className={styles.content}>
        <input
          className={styles.input}
          type="text"
          {...register('email', { required: true })}
        />
        <label className={styles.label}>Email</label>
      </div>

      <div className={styles.content}>
        <input
          className={styles.input}
          type="password"
          {...register('password', { required: true })}
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
