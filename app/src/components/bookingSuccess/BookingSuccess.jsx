const { Card, Container, Button } = require("react-bootstrap");

const BookingSuccess = () => {
  return (
    <Container>
      <Card.Text className="mt-5 bg-lighter p-5 fw-semibold rounded-1">Booking successfully processed. A confirmation email will be sent with your booking details.</Card.Text>
      <Button href="/" className="w-100 mt-3 py-3 fw-semibold bg-secondary border-0">
        Continue Browsing
      </Button>
    </Container>
  );
};

export default BookingSuccess;
