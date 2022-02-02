import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Sidenav.module.css';
import { BiFoodMenu, BiCheckCircle } from 'react-icons/bi';

const Sidenav = () => {
  return (
    <div>
      <div style={{}}>
        <div className={styles.sidenav}>
          <NavLink
            to="/"
            className={styles.btn}
            activeStyle={{ color: 'white' }}
            style={({ isActive }) => ({
              color: isActive ? '#49d893' : 'white',
              backgroundColor: isActive ? 'white' : '#49d893',
            })}
          >
            <BiFoodMenu></BiFoodMenu>
            Menu
          </NavLink>
          <NavLink
            to="/checkout"
            className={styles.btn}
            activeStyle={{ color: 'white' }}
            style={({ isActive }) => ({
              color: isActive ? '#49d893' : 'white',
              backgroundColor: isActive ? 'white' : '#49d893',
            })}
          >
            <BiCheckCircle></BiCheckCircle>
            Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
