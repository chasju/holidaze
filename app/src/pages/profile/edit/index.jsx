import { Button, Container, Form } from "react-bootstrap";

export default function editPage() {
  return (
    <Container>
      <div className="mt-5 d-flex justify-content-center">
        <img src="/avatar.png" alt="avatar" className="rounded-circle shadow ratio ratio-1x1" style={{ width: "50%", maxWidth: 350 }} />
      </div>
      <Form.Group className="mt-5" controlId="formBasicAvatar">
        <Form.Label visuallyHidden>image url</Form.Label>
        <Form.Control type="url" placeholder="Image url" className="border-light shadow py-3" />
        <Button variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
          Update profile image
        </Button>
      </Form.Group>
    </Container>
  );
}
