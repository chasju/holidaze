import deleteVenue from "@/hooks/delete/deleteVenue";
import useGetAuth from "@/hooks/useGetAuth";
import { BASE_URL } from "@/utils/baseUrl";
import { faPen, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Accordion, Card, Ratio } from "react-bootstrap";
import BookedDates from "../bookedDates/BookedDates";

const ProfileCard = ({ venue, onDelete }) => {
  const { data } = useGetAuth(`${BASE_URL}/venues/${venue?.id}?_bookings=true`);
  const bookings = data?.bookings;

  const handleClick = async (e) => {
    e.preventDefault();
    await deleteVenue(venue?.id);
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <Card className="mx-auto border-0 shadow col-md-4  p-0 flex-grow-1" style={{ maxWidth: 550 }}>
      <div className="position-relative">
        <Ratio aspectRatio="4x3">
          <Card.Img variant="top" src={venue?.media?.[0]} alt={venue?.name} style={{ objectFit: "cover" }} />
        </Ratio>
        <Link href={`/venue/update?id=${venue?.id}`} className="text-decoration-none">
          <Card.Text aria-label="edit" className="position-absolute d-flex justify-content-center align-items-center bg-white rounded-circle" style={{ width: 35, height: 35, top: 25, right: 25 }}>
            <FontAwesomeIcon icon={faPen} />
          </Card.Text>
        </Link>
      </div>
      <Card.Body style={{ maxHeight: 177 }}>
        <div className="d-flex justify-content-between">
          <div>
            <Link href={`/venue?id=${venue?.id}`} className="text-decoration-none">
              <Card.Title>
                <h2 className="fs-4 text-primary">{venue?.name}</h2>
              </Card.Title>
            </Link>
            <Card.Text aria-label="Price per night" className="text-secondary">
              {venue?.price} kr per night
            </Card.Text>
          </div>
          <div>
            <Card.Text aria-label="Max number of people" className="ms-auto position-relative d-flex justify-content-center align-items-center" style={{ width: 35, height: 35 }}>
              <FontAwesomeIcon icon={faUser} />
              <span className="position-absolute top-0 start-0">{venue?.maxGuests}</span>
            </Card.Text>
            <div aria-label="delete" onClick={handleClick} className="d-flex justify-content-center align-items-center position-relative" style={{ zIndex: 10 }}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </div>
        <Accordion className="mt-4">
          <BookedDates bookings={bookings} id={venue?.id} />
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
