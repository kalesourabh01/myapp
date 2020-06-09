import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
    state = {
        persons: []
      }
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    render() {
        return (
            <div>
        <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
                
            </div>
        );
    }
}

export default Table;