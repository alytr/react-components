import React from "react";
import { Form} from "react-bootstrap";
const Address = () => {
 return (
   <>
                   <Form>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>

   </>
 );
};
export default Address;

