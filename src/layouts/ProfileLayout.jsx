import { Outlet, Link, useNavigate, useHref } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/userSlice';
import { Button } from 'antd';
import cn from 'classnames';
import styles from './styles/ProfileLayout.module.scss';

const ProfileLayout = () => {
  const href = useHref();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <section className={styles.user}>
      <div className={styles.container}>
        <div className={styles.userInner}>
          <div className={styles.menu}>
            <div className={styles.menuWrapper}>
              <Link
                className={cn(
                  styles.link,
                  href === '/profile' && styles.active,
                )}
                to="/profile"
              >
                Мой профиль
              </Link>
              <Link
                className={cn(
                  styles.link,
                  href.includes('orders') && styles.active,
                )}
                to="orders"
              >
                Заказы
              </Link>
              <Link
                className={cn(
                  styles.link,
                  href.includes('club') && styles.active,
                )}
                to="club"
              >
                Бонусы
              </Link>
              <Link
                className={cn(
                  styles.link,
                  href.includes('delivery') && styles.active,
                )}
                to="delivery"
              >
                Доставка
              </Link>
            </div>
            <Button onClick={onLogout} type="primary" danger>
              Выйти
            </Button>
          </div>
          <div className={styles.info}>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
