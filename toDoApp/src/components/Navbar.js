import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Navbar() {
 return( <Form className="d-flex">
 <Form.Control
   type=" "
   placeholder=" "
   className="me-2"
   aria-label=" "
 />
 <Button variant="outline-success">Add</Button>
</Form>
 )
}
   
  export default Navbar;