import React, { useState } from 'react';
import styles from './Item.module.css';
import { BsStarFill, BsHeart } from 'react-icons/bs';
import swal from 'sweetalert';

import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Item = (props) => {
  const { name, img, price, color, id, bg, weight } = props.item;
  const { orders, setOrders, items } = useAuth();

  // items when clicked
  const handleItems = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    const found = orders.find((order) => order.id === id);
    if (found) {
      swal('Item already added!');
    } else {
      const quantity = {
        ...selectedItem,
        // sending 1 as quantify when item is clicked once
        quantity: 1,
      };
      //saving the order with quantity
      const newOrder = [...orders, quantity];
      setOrders(newOrder);
      swal('Thank you!', 'Item added to cart!', 'success');
    }
  };

  return (
    <div
      data-aos="flip-left"
      onClick={() => {
        handleItems(id);
      }}
      style={{ backgroundColor: bg }}
      className={styles.card}
    >
      <div className="d-flex justify-content-between rounded-xl">
        <div className={styles.rating}>
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
        src="https://raw.githubusercontent.com/ReshadSadik/Delicious-resturant/main/src/images/Breakfast/breakfast1.png"
        alt=""
      />

      <div>
        <h4 className={styles.title}>
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
