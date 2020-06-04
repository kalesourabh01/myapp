import React from 'react';
import { Button} from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { Container} from 'react-bootstrap';


class Dashbord extends React.Component {
  constructor(){
    super();
    this.state ={}
  }

  handleClick = (event)=> {
    
    alert('hello sourabh')
  }


  render() {
    return <div>
        <h1>i am on dashbord</h1>
    </div>
  }
}

export default Dashbord;
