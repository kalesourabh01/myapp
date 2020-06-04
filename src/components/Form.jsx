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
      email: '', pass: ''
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
  })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.email == 'kalesourabh01@gmail.com' && this.state.pass == 123){
      this.props.history.push('/dashboard');
    } else{
      alert('enter valid creds');
    }
    
  };


  render() {
    return <Container className="col-lg-6"> <Form  onSubmit={this.handleSubmit}> 
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name= "email" required onChange={this.handleChange} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  name= "pass" onChange={this.handleChange}/>
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
