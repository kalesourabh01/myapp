import React, { Component } from 'react';
import { Card, Button} from 'react-bootstrap';

class profile extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://instagram.fhyd11-1.fna.fbcdn.net/v/t51.2885-15/e35/60326935_329712031048232_8463915410186745562_n.jpg?_nc_ht=instagram.fhyd11-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=i1upyw90y6sAX8QcNbb&oh=35a39625090ccafd58329933ee0919ba&oe=5F01445B" />
        <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
       </Card>
        );
    }
}

export default profile;