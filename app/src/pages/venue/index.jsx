import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Button, Card, Container, ListGroup } from "react-bootstrap";

export default function venuePage() {
  return (
    <div>
      <Container className="mt-5">
        <Card className="border-0 ">
          <Link href="/venues" className="text-decoration-none">
            <Card.Img variant="top" src="picture.jpg" alt="House" />
          </Link>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>
                  <h2 className="fs-4 text-primary">Card Title</h2>
                </Card.Title>
                <Card.Text aria-label="Price per night" className="text-secondary">
                  Price
                </Card.Text>
              </div>
              <div>
                <Card.Text aria-label="Max number of people" className="position-relative d-flex justify-content-center align-items-center" style={{ width: 35, height: 35 }}>
                  <FontAwesomeIcon icon={faUser} className="text-primary" />
                  <span className="position-absolute top-0 start-0 text-primary">2</span>
                </Card.Text>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="fs-3 text-primary">Description</h3>
              <Card.Text className="text-primary">Description goes here</Card.Text>
              <div>
                <Card.Text className="text-secondary">Wifi</Card.Text>
                <Card.Text className="text-secondary">Parking</Card.Text>
                <Card.Text className="text-secondary">Breakfast</Card.Text>
                <Card.Text className="text-secondary">Pets</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
