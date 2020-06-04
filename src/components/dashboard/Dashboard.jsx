import React from 'react';
import { Button, Row, Col, Card, Navbar, Form, Container, Nav, NavDropdown, FormControl  } from 'react-bootstrap';
import Profile from "./Profile";
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
        <Navbar bg="gray" expand="lg" >
        <Navbar.Brand href="#home">Welcome Sourabh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
   
      <Profile/>
    </Col>
    </Row>
  </Container>
  }
}

export default Dashbord;
