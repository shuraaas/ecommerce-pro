import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';

const LoginForm = ({ buttonText }) => {
  const { register, handleSubmit } = useForm();
  const submit = data => console.log(data);

  const getInputNumbersValue = input => input.value.replace(/\D/g, '');

  const handlePhoneKeyDown = e => {
    const input = e.target;
    if (e.key == 'Backspace' && getInputNumbersValue(input).length === 1)
      input.value = '';

    return input;
  };

  const handlePhoneInput = e => {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '',
      selectionStart = input.selectionStart;

    if (!inputNumbersValue) return (input.value = '');

    if (input.value.length !== selectionStart) {
      if (e.nativeEvent.data && /\D/g.test(e.nativeEvent.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].includes(inputNumbersValue[0])) {
      if (inputNumbersValue[0] == '9')
        inputNumbersValue = '7' + inputNumbersValue;
      let firstSymbol = inputNumbersValue[0] == '8' ? '8' : '+7';
      formattedInputValue = firstSymbol + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+ ' + inputNumbersValue.substring(0, 16);
    }

    input.value = formattedInputValue;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div className={styles.content}>
        <input
          className={styles.input}
          type="text"
          maxLength="18"
          {...register('phone', { required: true })}
          onInput={handlePhoneInput}
          onKeyDown={handlePhoneKeyDown}
        />
        <label className={styles.label}>Логин</label>
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
      <span className={styles.bottomSpan}>
        Ещё не зарегистрированы? <a href="#">Регистрация</a>
      </span>
    </form>
  );
};

export default LoginForm;
