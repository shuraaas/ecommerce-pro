import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';

import { Rate, Space, Descriptions } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { toggleWishlistItem } from '@/store/slices/wishlistSlice';

import { CiHeart } from 'react-icons/ci';
import { PiCheck } from 'react-icons/pi';

import Breadcrumbs from '@/components/Breadcrumbs';
import cn from 'classnames';
import styles from './Product.module.scss';

const items = [
  {
    key: '1',
    label: 'Код товара',
    children: 'К00014375',
  },
  {
    key: '2',
    label: 'Артикул',
    children: '91520',
  },
  {
    key: '3',
    label: 'ID',
    children: '34751',
  },
  {
    key: '4',
    label: 'Штрихкод',
    children: '4607004490088',
  },
  {
    key: '5',
    label: 'Вес в упаковке',
    children: '6.77 кг',
  },
  {
    key: '6',
    label: 'Габариты в упаковке',
    children: '595×592×202 мм',
  },
  {
    key: '7',
    label: 'Кол-во в упаковке',
    children: '100 м',
  },
];

const Product = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(4);
  const { id } = useParams();
  const allProduct = useSelector(state => state.products.items) || [];
  // console.log(allProduct.find(item => item._id.$oid)
  const productById = allProduct.find(item => item._id.$oid === id) || {};
  console.log(productById);

  const {
    gdsNameTitle = 'title',
    image = 'https://placehold.co/350',
    rating = 1,
    gdsPrice1 = 1,
    stock = 1,
    description = 'description',
    artikul = 'artikul',
  } = productById;
  const wishlist = useSelector(state => state.wishlist.items);
  const cart = useSelector(state => state.cart.items);
  const inWishlist = wishlist.some(item => item.id === productById.id);
  const inCart = cart.some(item => item.id === productById.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      amount,
    },
  });
  const mainStore = 0;
  const remoteStore = 122;
  // const price = 35;
  const desc = ['1', '2', '3', '4', '5'];

  const submit = data => console.log(data);

  return (
    <section className={styles.product}>
      <div className={styles.container}>
        <Breadcrumbs lastChild={gdsNameTitle} />
        <h2 className={styles.productTitle}>{gdsNameTitle}</h2>
        <div className={styles.mainInfo}>
          <div className={styles.mainInfoWrap}>
            <div className={styles.imageSection}>
              <div className={styles.allImages}>
                <img className={styles.active} src="/carousel/1.jpg" alt="" />
                <img src="/carousel/2.jpg" alt="" />
                <img src="/carousel/3.jpg" alt="" />
                <img src="/carousel/1.jpg" alt="" />
                <img src="/carousel/2.jpg" alt="" />
                <img src="/carousel/3.jpg" alt="" />
              </div>
              <img
                className={styles.mainImage}
                src="https://placehold.co/350"
                alt={gdsNameTitle}
              />
            </div>

            <div className={styles.productSection}>
              <h3 className={styles.productFullName}>{gdsNameTitle}</h3>
              <div className={styles.rating}>
                <Space>
                  <Rate tooltips={desc} onChange={setValue} value={rating} />
                  {value ? <span>{desc[value - 1]}</span> : ''}
                </Space>
              </div>
              <div className={styles.productOrder}>
                <div className={styles.order}>
                  <span className={styles.price}>{gdsPrice1} ₽</span>
                  <button
                    onClick={() => dispatch(toggleWishlistItem(productById))}
                    className={cn(
                      styles.btn,
                      styles.btnFavourite,
                      inWishlist && styles.btnFavouriteActive,
                    )}
                  >
                    <CiHeart size={25} />
                  </button>

                  {inCart ? (
                    <Link
                      to="/cart"
                      className={cn(
                        styles.btn,
                        styles.btnToCart,
                        styles.btnToCartActive,
                      )}
                    >
                      <PiCheck size={25} />
                    </Link>
                  ) : (
                    <button
                      onClick={() => dispatch(addToCart(productById))}
                      className={cn(styles.btn, styles.btnToCart)}
                    >
                      Купить
                    </button>
                  )}
                </div>
                <div className={styles.orderInfo}>
                  <div className={styles.inStock}>
                    <span>В наличии:</span>
                    <a href="#">в {stock} магазинах</a>
                  </div>
                  <div className={styles.delivery}>
                    <span>Доставим на дом:</span>
                    <a href="#">завтра</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.artikul}>Код товара: {artikul}</span>
        </div>
        <div className={styles.specifications}>
          <h3>Характеристики</h3>
          <Descriptions items={items} bordered />
        </div>
        <div className={styles.description}>
          <h3>Описание</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
