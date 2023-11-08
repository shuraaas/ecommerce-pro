import styles from './LoginPopup.module.scss';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from '../LoginForm';

const LoginPopup = ({ isOpen, onClose, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog static as={motion.div} open={isOpen} onClose={onClose}>
          <motion.div
            className={styles.bg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dialog.Panel className={styles.popup}>
              <Dialog.Title className={styles.title}>{title}</Dialog.Title>
              <LoginForm buttonText="Войти" />
              <button className={styles.close} onClick={onClose}></button>
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;
