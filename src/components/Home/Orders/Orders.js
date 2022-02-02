import { BsClockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import OrderedItem from '../OrderedItem/OrderedItem';
import styles from './Orders.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Orders = () => {
  const { orders } = useAuth();
  let newTotal = 0;

  orders.map((order) => (newTotal = newTotal + order.price * order.quantity));

  return (
    <div data-aos="fade-down" className={styles.orders}>
      <div className="mb-5">
        <div className="d-flex justify-content-between fw-bold align-items-center ">
          <h4>My Order</h4>
          <p style={{ color: '#49d893' }}>Edit</p>
        </div>
        <p className="text-start fw-bold">
          <BsClockFill
            className=" rounded  fs-6 me-2"
            style={{ color: '#49d893' }}
          ></BsClockFill>
          14:30 pm
        </p>
      </div>
      <hr className="" />
      <div>
        <div className={styles.orderList}>
          {orders.map((order) => (
            <OrderedItem key={order.id} order={order}></OrderedItem>
          ))}
        </div>
        <div className={styles.dragdrop}>
          <h4>Drag&#38;Drop</h4>
        </div>
        <div className="d-flex justify-content-between  fw-bold">
          <h5>Total</h5>
          <p>${newTotal.toFixed(2)}</p>
        </div>
        <Link to="/checkout">
          <button className={styles.checkoutBtn}>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
