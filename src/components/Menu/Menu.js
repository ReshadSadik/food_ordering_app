import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Items from '../Home/Items/Items';
import Orders from '../Home/Orders/Orders';
import Sidenav from '../Home/Sidenav/Sidenav';

const Menu = () => {
  return (
    <div>
      <Row>
        <Col xxl={8} xl={8} lg={12} className="bg-white ">
          <Items></Items>
        </Col>

        <Col xxl={4} xl={4} lg={12} className="bg-white rounded">
          <Orders></Orders>
        </Col>
      </Row>
    </div>
  );
};

export default Menu;
