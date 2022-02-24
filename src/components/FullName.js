import React from "react";
import { Form} from "react-bootstrap";
const FullName = () => {
 return (
   <>
   <div className='col'>
   <form>
			        <Form.Group controlId="form.Name">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter firstname" />
        </Form.Group>
        <Form.Group controlId="form.Name">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter lastname" />
        </Form.Group>
   </form>
   </div>
   </>
 );
};
export default FullName;

