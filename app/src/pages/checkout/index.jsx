import Link from "next/link";
import { Button, Card, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function checkout() {
  return (
    <div>
      <Container className="mt-5 pt-5">
        <Card className="border-0 ">
          <Link href="/venues" className="text-decoration-none">
            <Card.Img variant="top" src="picture.jpg" alt="House" />
          </Link>
          <Card.Body>
            <Card.Title>
              <h2 className="fs-4 text-primary">Card Title</h2>
            </Card.Title>
            <Card.Text aria-label="Date range" className="text-primary fw-semibold">
              <span>02/05/23</span>-<span>07/05/23</span>
              <span className="ms-2">
                <FontAwesomeIcon icon={faPen} />
              </span>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Card.Text aria-label="Nights amount" className="text-primary fw-semibold">
                2 nights x price
              </Card.Text>
              <Card.Text aria-label="Total price" className="text-primary fw-semibold">
                $200
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Form className="m-auto mt-4" style={{ maxWidth: 500 }}>
          <h1 className="text-primary fw-bold mb-3">Checkout</h1>
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Label visuallyHidden>name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" className="border-light shadow py-3" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label visuallyHidden>email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="border-light shadow py-3" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCardNumber">
            <Form.Label visuallyHidden>card number</Form.Label>
            <Form.Control type="number" placeholder="card number" className="border-light shadow py-3" />
          </Form.Group>
          <div className="mb-3 d-flex justify-content-between gap-2">
            <Form.Group controlId="formBasicExp" className="flex-grow-1">
              <Form.Label visuallyHidden>expiration date</Form.Label>
              <Form.Control type="number" placeholder="exp" className="border-light shadow py-3" />
            </Form.Group>
            <Form.Group controlId="formBasicCvc" className="flex-grow-1">
              <Form.Label visuallyHidden>card cvc</Form.Label>
              <Form.Control type="number" placeholder="cvc" className="border-light shadow py-3" />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
            Book now
          </Button>
        </Form>
      </Container>
    </div>
  );
}
