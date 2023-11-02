import styles from './LoginPopup.module.scss';
import { Dialog } from '@headlessui/react';
import LoginForm from '../LoginForm';

const LoginPopup = ({ isOpen, onClose, title }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className={styles.bg}>
        <Dialog.Panel className={styles.popup}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          <LoginForm buttonText='Войти' />
          <button className={styles.close} onClick={onClose}></button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default LoginPopup;
