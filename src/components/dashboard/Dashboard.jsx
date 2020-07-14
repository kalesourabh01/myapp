import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Profile from "./Profile";
import Menu from "../Menu";
import Stocks from "./Stocks";
import Corona from "./Corona"
import Table from "./Table";
class Dashbord extends React.Component {

  render() {
    return <Container fluid> 
    <Row>
      <Col>  
        <Menu/>
      </Col>
    </Row>
    <Row>
    <Col sm={4}> <Profile name="sourabh kale"/></Col>
    <Col sm={8}><Corona/></Col>
    <Table/>
  </Row>
  </Container>


  }
}

export default Dashbord;
