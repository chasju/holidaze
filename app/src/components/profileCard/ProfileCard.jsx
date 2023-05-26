import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Card, Ratio } from "react-bootstrap";

const ProfileCard = ({ data }) => {
  return (
    <Card className="mx-auto border-0 shadow col-md-3 col-lg-4 p-0 flex-grow-1" style={{ maxWidth: 550 }}>
      <Link href={`/venue?id=${data?.id}`} className="text-decoration-none">
        <Ratio aspectRatio="4x3">
          <Card.Img variant="top" src={data?.media?.[0]} alt={data?.name} style={{ objectFit: "cover" }} />
        </Ratio>
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
  );
};

export default ProfileCard;
