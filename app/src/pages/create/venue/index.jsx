import CreateVenueForm from "@/components/createVenueForm/CreateVenueForm";
import { Card, Container } from "react-bootstrap";

export default function createVenuePage() {
  return (
    <div>
      <Container className="mt-5" style={{ maxWidth: 700 }}>
        <Card className="border-0">
          <h1 className="text-primary fw-bold mb-3">Create Venue</h1>
          <Card.Img src="/picture.jpg" alt="preview uploaded image" />
          <CreateVenueForm />
        </Card>
      </Container>
    </div>
  );
}
