import React, { useEffect, useState } from 'react';

const useItems = () => {
  const [orders, setOrders] = useState([]);
  const [updatedQuantity, setUpdatedQuantity] = useState(1);
  // let newTotal = 0;
  // orders.map((order) => (newTotal = newTotal + order.price * order.quantity));
  // const [total, setTotal] = useState(newTotal);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // console.log(orders);
  return {
    orders,
    setOrders,
    items,
    setItems,
    // total,
    // setTotal,
    updatedQuantity,
    setUpdatedQuantity,
  };
};

export default useItems;
