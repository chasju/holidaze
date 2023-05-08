import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const CardComponent = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="row row-lg-cols-2 gap-5 justify-content-between">
          <Card className="m-auto border-0 shadow col-md-5 col-lg" style={{ maxWidth: 550 }}>
            <Link href="/venue" className="text-decoration-none">
              <Card.Img variant="top" src="picture.jpg" alt="House" />
            </Link>
            <Card.Body className="d-flex justify-content-between">
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
                  <FontAwesomeIcon icon={faUser} />
                  <span className="position-absolute top-0 start-0">2</span>
                </Card.Text>
              </div>
            </Card.Body>
            <Button href="/venues" variant="primary" className="bg-secondary shadow border-0 mb-4">
              View venue
            </Button>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default CardComponent;
