import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
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
          <Col sm={10} className="bg-white rounded">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
