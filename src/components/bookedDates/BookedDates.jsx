import formatDate from "@/utils/formatting/formatDate";
import { Accordion, ListGroup } from "react-bootstrap";

const BookedDates = ({ bookings, id }) => {
  return (
    <Accordion.Item eventKey={id} style={{ position: "relative", zIndex: 10 }}>
      <Accordion.Header>Bookings</Accordion.Header>
      <Accordion.Body>
        <ListGroup>
          {bookings?.map((booking) => {
            const from = formatDate(booking?.dateFrom);
            const to = formatDate(booking?.dateTo);

            return (
              <ListGroup.Item key={booking?.id}>
                {from} - {to}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default BookedDates;
