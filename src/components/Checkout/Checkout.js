import React from 'react';
import useAuth from '../../hooks/useAuth';
import OrderedItem from '../Home/OrderedItem/OrderedItem';
import chefImg from '../../images/chef.png';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Checkout.module.css';
const Checkout = () => {
  const { orders } = useAuth();
  let newTotal = 0;

  orders.map((order) => (newTotal = newTotal + order.price * order.quantity));
  return (
    <div style={{}}>
      <div>
        <h2 className="fw-bold text-uppercase my-5">Your Orders</h2>

        <Row className=" justify-content-center d-flex align-items-center  ">
          <Col sm={7} className="bg-white ">
            <div className={styles.checkoutOrders}>
              {orders.map((order) => (
                <OrderedItem key={order.id} order={order}></OrderedItem>
              ))}
            </div>
            <p className="fs-4 fw-bold">
              Your total bill is{' '}
              <span className="text-success">${newTotal.toFixed(2)}</span>
            </p>
          </Col>

          <Col sm={5} className="bg-white rounded">
            <div>
              <img className={styles.checkoutImg} src={chefImg} alt="" />
            </div>
          </Col>
        </Row>

        <hr />

        <h5>please proceed to payment page</h5>
        <button className={styles.proceedBtn}>Make Payment</button>
      </div>
    </div>
  );
};

export default Checkout;
