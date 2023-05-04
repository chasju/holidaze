import { Button, Container, Form } from "react-bootstrap";

export default function registerPage() {
  return (
    <div>
      <Container className="mt-5 pt-5">
        <Form className="m-auto" style={{ maxWidth: 500 }}>
          <h1 className="text-primary fw-bold mb-3">Register</h1>
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Label visuallyHidden>Name</Form.Label>
            <Form.Control type="text" placeholder="name" className="border-light shadow py-3" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label visuallyHidden>Email</Form.Label>
            <Form.Control type="email" placeholder="email" className="border-light shadow py-3" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label visuallyHidden>Password</Form.Label>
            <Form.Control type="password" placeholder="password" className="border-light shadow py-3" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAvatar">
            <Form.Label visuallyHidden>avatar</Form.Label>
            <Form.Control type="url" placeholder="avatar" className="border-light shadow py-3" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}
