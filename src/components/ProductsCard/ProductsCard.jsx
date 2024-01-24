import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartLight } from 'react-icons/pi';
import { Checkbox, Rate } from 'antd';
import cn from 'classnames';
import styles from './ProductsCard.module.scss';

const ProductsCard = data => {
  const {
    id,
    title,
    artikul,
    sku,
    weight,
    length,
    width,
    height,
    ed_izm,
    slug,
    image,
    description,
    price,
    quantity,
    available,
    created,
    updated,
    category,
    brand,
    stock,
  } = data;
  const [value, setValue] = useState(3);

  return (
    <li className={styles.card}>
      <div className={styles.prewiev}>
        <a href="#">
          {/* <img className={styles.img} src="https://placehold.co/200" alt="" /> */}
          <img className={styles.img} src={image[0] || image} alt="" />
        </a>
        <a className={styles.link} href="#">
          <p className={styles.title}>{title}</p>
        </a>
      </div>
      <div className={styles.info}>
        <div className={styles.reviews}>
          <Checkbox className={styles.compare}>Сравнить</Checkbox>
          <Rate className={styles.rate} value={value} onChange={setValue} />
        </div>
        <div className={styles.order}>
          <span className={styles.price}>{price} ₽</span>
          <button className={cn(styles.btn, styles.btnFavourite)}>
            <CiHeart size={25} />
          </button>
          <button className={cn(styles.btn, styles.btnToCart)}>
            <PiShoppingCartLight size={25} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductsCard;
