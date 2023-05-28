import { Card, Container, Placeholder } from "react-bootstrap";

const ErrorMessage = ({ message, cards }) => {
  return (
    <Container className="mt-5 m-auto" style={{ maxWidth: 700 }}>
      <h1>{message} If the problem persists, please contact us.</h1>
      {cards && (
        <Container className="mt-5 m-auto row row-lg-cols-2 gap-5 justify-content-between" style={{ maxWidth: 700 }}>
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="house.jpg" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="house.jpg" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="house.jpg" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card className="mx-auto" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="house.jpg" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </Container>
      )}
    </Container>
  );
};

export default ErrorMessage;
