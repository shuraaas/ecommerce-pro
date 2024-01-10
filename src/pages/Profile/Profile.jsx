import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'src/store/slices/userSlice';
import styles from './Profile.module.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <section className={styles.user}>
      <div className={styles.container}>
        <h2>Профиль</h2>
        <div className={styles.mainInfo}>
          <img
            className={styles.image}
            src="https://sun6-22.userapi.com/s/v1/ig2/hjgmxYzhAJPGkvgs6o4-sWGZNnx2T2lVvNDBYs2dATC0jVCgT09dVoz33NmeeYsTEk_6GoSnXq_DJ930qtAtsQIU.jpg?size=2048x2048&quality=95&crop=0,0,2048,2048&ava=1"
            alt="аватар"
          />
          <div className={styles.info}>
            <h3>Иван И.</h3>
            <p>
              <span>Заказы: </span>100
            </p>
            <p>
              <span>Избранное: </span>30
            </p>
            <p>
              <span>Заказы: </span>100
            </p>
            <button onClick={onLogout}>Выйти</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
