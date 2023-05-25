import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Card } from "react-bootstrap";

const ProfileCard = ({ data }) => {
  return (
    <div className="mt-5 row row-lg-cols-2 gap-5 justify-content-between">
      <Card className="border-0 shadow col-md-5 col-lg " style={{ maxWidth: 550 }}>
        <Link href={`/venue?id=${data?.id}`} className="text-decoration-none">
          <Card.Img variant="top" src={data?.media?.[0]} alt={data?.name} />
        </Link>
        <Card.Body className="d-flex justify-content-between">
          <div>
            <Card.Title>
              <h2 className="fs-4 text-primary">{data?.name}</h2>
            </Card.Title>
            <Card.Text aria-label="Price per night" className="text-secondary">
              {data?.price} kr per night
            </Card.Text>
          </div>
          <div>
            <Card.Text aria-label="Max number of people" className="position-relative d-flex justify-content-center align-items-center" style={{ width: 35, height: 35 }}>
              <FontAwesomeIcon icon={faUser} />
              <span className="position-absolute top-0 start-0">{data?.maxGuests}</span>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileCard;
