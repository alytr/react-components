
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class SimpleForm extends Component {
  render() {
    return (
    <Container>
            <img src={"./src.png"} alt="src" />
     <br/>

      <Form>
        <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>

    </Container>
    );
  }
       
}
export default SimpleForm;

