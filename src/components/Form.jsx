import React from 'react';
import { Button} from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter 
} from "react-router-dom";



class BasicForms extends React.Component {
  
  constructor(){
    super();
    this.state ={
      fireRedirect: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/dashboard');
  };


  render() {
    const { fireRedirect } = this.state;
    return <Container className="col-lg-6"> <Form  onSubmit={this.handleSubmit}> 
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Log in
    </Button>
  </Form>
  </Container>;
  }
}

export default  withRouter(BasicForms);;
