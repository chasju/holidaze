import { Button, Container, Form } from "react-bootstrap";

export default function loginPage() {
  return (
    <div>
      <Container className="mt-5 pt-5">
        <Form className="m-auto" style={{ maxWidth: 500 }}>
          <h1 className="text-primary fw-bold mb-3">Login</h1>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" className="border-light shadow py-3" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" className="border-light shadow py-3" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}
