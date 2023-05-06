import { Button, Form } from "react-bootstrap";

const CreateVenueForm = () => {
  return (
    <div>
      <Form className="m-auto mt-4" style={{ maxWidth: 500 }}>
        <Form.Group className="mb-4" controlId="formBasicURL">
          <Form.Label visuallyHidden>Image url</Form.Label>
          <Form.Control type="url" placeholder="Image url" className="border-light shadow py-3" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Form.Label visuallyHidden>title</Form.Label>
          <Form.Control type="text" placeholder="Title" className="border-light shadow py-3" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPrice">
          <Form.Label visuallyHidden>price</Form.Label>
          <Form.Control type="number" placeholder="Price" className="border-light shadow py-3" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMaxGuests">
          <Form.Label visuallyHidden>max guests</Form.Label>
          <Form.Control type="number" placeholder="Maximum guests" className="border-light shadow py-3" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
          Create Venue
        </Button>
      </Form>
    </div>
  );
};

export default CreateVenueForm;
