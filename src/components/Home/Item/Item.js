import React, { useState } from 'react';
import styles from './Item.module.css';
import { BsStarFill, BsHeart } from 'react-icons/bs';

import useAuth from '../../../hooks/useAuth';
const Item = (props) => {
  const { name, img, price, color, id, bg, weight } = props.item;
  const { orders, setOrders, items } = useAuth();

  // items when clicked
  const handleItems = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    const quantity = {
      ...selectedItem,
      // sending 1 as quantify when item is clicked once
      quantity: 1,
    };
    //saving the order with quantity
    const newOrder = [...orders, quantity];
    setOrders(newOrder);
  };

  return (
    <div
      onClick={() => {
        handleItems(id);
      }}
      style={{ backgroundColor: bg }}
      className={styles.card}
    >
      <div className="d-flex justify-content-between rounded-xl">
        <div className="d-flex align-items-center bg-black text-white rounded-pill px-2 fs-6">
          <BsStarFill
            className="text-warning me-1"
            style={{ width: '13px' }}
          ></BsStarFill>
          4.2
        </div>

        <div className="bg-white rounded-circle px-2 py-1">
          <BsHeart></BsHeart>
        </div>
      </div>
      <img
        className="mt-3"
        src="https://raw.githubusercontent.com/ReshadSadik/Delicious-resturant/main/src/images/Breakfast/breakfast1.png"
        width="80px"
        alt=""
      />

      <div>
        <h4 className="text-start fs-6 fw-regular mt-3">
          {name}{' '}
          <span className={styles.weight} style={{ color: 'black' }}>
            {weight}g
          </span>{' '}
        </h4>
      </div>

      <p className={styles.price}>${price}</p>
    </div>
  );
};

export default Item;
