import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const CardComponent = () => {
  return (
    <div className="mt-5">
      <Container>
        <Link href="/venues" className="text-decoration-none">
          <Card className="border-0 shadow">
            <Card.Img variant="top" src="picture.jpg" />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>
                  <h2 className="fs-4">Card Title</h2>
                </Card.Title>
                <Card.Text>Price</Card.Text>
              </div>
              <div>
                <Card.Text className="position-relative d-flex justify-content-center align-items-center" style={{ width: 35, height: 35 }}>
                  <FontAwesomeIcon icon={faUser} />
                  <span className="position-absolute top-0 start-0">2</span>
                </Card.Text>
              </div>
            </Card.Body>
            <Button variant="primary" className="bg-secondary shadow border-0 mb-4">
              View venue
            </Button>
          </Card>
        </Link>
      </Container>
    </div>
  );
};

export default CardComponent;
