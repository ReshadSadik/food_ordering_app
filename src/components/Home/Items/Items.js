import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Item from '../Item/Item';

const Items = () => {
  const { items, setItems } = useAuth();
  return (
    <div className="d-flex mt-5 gap-4 flex-wrap justify-content-center">
      {items.length &&
        items.map((item) => (
          <div>
            <Item item={item}></Item>
          </div>
        ))}
    </div>
  );
};

export default Items;
