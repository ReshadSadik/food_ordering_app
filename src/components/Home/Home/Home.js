import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Checkout from '../../Checkout/Checkout';
import Menu from '../../Menu/Menu';
import Items from '../Items/Items';
import Orders from '../Orders/Orders';
import Sidenav from '../Sidenav/Sidenav';

const Home = () => {
  return (
    <div
      className=" d-flex align-items-center gap-0 px-5"
      style={{ height: '90vh' }}
    >
      <Container fluid>
        <Row className="">
          <Col
            sm={2}
            className=" rounded  p-0"
            style={{ backgroundColor: '#49d893' }}
          >
            <Sidenav></Sidenav>
          </Col>
          {/* <Col sm={7} className="bg-white ">
            <Items></Items>
          </Col>

          <Col sm={3} className="bg-white rounded">
            <Orders></Orders>
          </Col> */}
          <Col sm={10} className="bg-white rounded">
            {/* <Orders></Orders> */}
            {/* <Menu></Menu> */}
            {/* <Checkout></Checkout> */}
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>

      {/* <div>
        <Orders></Orders>
      </div> */}
    </div>
  );
};

export default Home;
