import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import styles from './OrderedItem.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const OrderedItem = (props) => {
  const { name, price, weight, img, quantity, id } = props.order;
  const { orders, setOrders, updatedQuantity, setUpdatedQuantity } = useAuth();
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const ordered = orders.find((order) => order.id === id);
  const handleDecrement = () => {
    setUpdatedQuantity(updatedQuantity - 1);
    setUpdatedPrice(updatedPrice - price);
    ordered.quantity = quantity - 1;
  };
  const handleIncrement = () => {
    setUpdatedQuantity(updatedQuantity + 1);
    setUpdatedPrice(updatedPrice + price);
    ordered.quantity = quantity + 1;
  };
  // remove an order
  const cancelOrders = (id) => {
    const removedList = orders.filter((order) => order.id !== id);
    setOrders(removedList);
  };
  return (
    <div data-aos="fade-down">
      <div className="d-flex my-5 align-items-center   justify-content-between">
        <img className={styles.orderImg} src={img} alt="" />
        <div className={styles.title}>
          <h6 className="">{name}</h6>
          <span className="">{weight}g</span>
        </div>
        <div className={styles.inputContainer}>
          {updatedQuantity > 1 ? (
            <button className={styles.arrowBtn} onClick={handleDecrement}>
              -
            </button>
          ) : (
            <button
              className={styles.arrowBtn}
              disabled
              onClick={handleDecrement}
            >
              -
            </button>
          )}

          <input
            id="quantity"
            value={quantity}
            className={styles.input}
            type="number"
          />
          <button className={styles.arrowBtn} onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <p className={styles.price}>${updatedPrice.toFixed(2)}</p>
          <button
            onClick={() => {
              cancelOrders(id);
            }}
            className={styles.close}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
