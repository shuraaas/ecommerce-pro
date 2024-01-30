import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './Products.module.scss';
import { Rate, Space, Descriptions } from 'antd';
import { CiHeart } from 'react-icons/ci';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const Products = () => {
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(4);
  const { id } = useParams();
  const allProduct = useSelector(state => state.products.items) || [];
  const {
    title = 'title',
    image = 'image',
    rating = 1,
    price = 1,
    stock = 1,
    description = 'description',
    artikul = 'artikul',
  } = allProduct.find(item => item.id.toString() === id) || {};

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
    <section className={styles.gofra}>
      <div className={styles.container}>
        <Breadcrumbs lastChild={title} />
        <h2 className={styles.productTitle}>{title}</h2>
        <div className={styles.mainInfo}>
          <div className={styles.mainInfoWrap}>
            <div className={styles.imageSection}>
              {/* <img
              className={styles.image}
              src="https://мкэлектро.рф/images/virtuemart/product/truba-gofrirovannaya-s-protyajkoy-d20-mm-100-m-seraya-tyaj-dkc-2.jpg"
              alt="Труба гибкая гофрированная с протяжкой DKC 20мм серая тяжел"
            /> */}
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
                src={image[0] || image}
                alt={title}
              />
            </div>

            <div className={styles.productSection}>
              <h3 className={styles.productFullName}>{title}</h3>
              <div className={styles.rating}>
                <Space>
                  <Rate tooltips={desc} onChange={setValue} value={rating} />
                  {value ? <span>{desc[value - 1]}</span> : ''}
                </Space>
              </div>
              <div className={styles.productOrder}>
                <div className={styles.order}>
                  <span className={styles.price}>{price} ₽</span>
                  <button className={cn(styles.btn, styles.btnFavourite)}>
                    <CiHeart size={25} />
                  </button>
                  <button className={cn(styles.btn, styles.btnToCart)}>
                    Купить
                  </button>
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
                {/* <div className={styles.orderInfo}>
                <p>В наличии:</p>
                <span>Основной склад: {mainStore} ед.</span>
                <br />
                <span>Удалённый склад: {remoteStore} ед.</span>
                <p style={{ fontSize: '26px', paddingTop: '20px' }}>
                  Итог: {amount * price} руб.
                </p>
              </div> */}
                {/* <form onSubmit={handleSubmit(submit)}>
                <div>
                  <button
                    type="button"
                    onClick={() => amount && setAmount(amount - 1)}
                  >
                    -
                  </button>
                  <input type="text" {...register('amount')} value={amount} />
                  <button type="button" onClick={() => setAmount(amount + 1)}>
                    +
                  </button>
                </div>

                <button className={styles.buy}>Купить</button>
              </form> */}
              </div>
            </div>
          </div>
          <span>Код товара: {artikul}</span>
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

export default Products;