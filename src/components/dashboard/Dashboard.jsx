import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import Profile from "./Profile";
import Menu from "../Menu";
import Stocks from "./Stocks";
import Corona from "./Corona"
import Table from "./Table";
class Dashbord extends React.Component {
  constructor(){
    super();
    this.state ={}
  }

  handleClick = (event)=> {
    
    alert('hello sourabh')
  }

  render() {
    return <Container fluid> 
    <Row>
      <Col>  
        <Menu/>
      </Col>
    </Row>
    <Row>
    <Col sm={4}> <Profile/></Col>
    <Col sm={8}><Corona/></Col>
    <Table/>
  </Row>
   
  </Container>


  }
}

export default Dashbord;
