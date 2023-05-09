import Link from "next/link";
import { Button, Ratio } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "../../../public/house.jpg";

const CardComponent = ({ data }) => {
  const onImageError = (e) => {
    e.target.src = placeholderImage.src;
  };

  return (
    <div className="mt-5 shadow rounded-4 col-md-5 col-lg p-0" style={{ maxWidth: 550, minWidth: 290 }}>
      <Card className="border-0 ">
        <Link href={`venue?id=${data.id}`} className="text-decoration-none">
          <Ratio aspectRatio="4x3">
            <Card.Img variant="top" onError={onImageError} src={data.media.length === 0 ? placeholderImage.src : data.media} alt={data.name} style={{ objectFit: "cover" }} />
          </Ratio>
        </Link>
        <Card.Body className="d-flex justify-content-between">
          <div>
            <Card.Title>
              <h2 className="fs-4 text-primary">{data.name}</h2>
            </Card.Title>
            <Card.Text aria-label="Price per night" className="text-secondary">
              {data.price} kr/night
            </Card.Text>
          </div>
          <div>
            <Card.Text aria-label="Max number of people" className="position-relative d-flex justify-content-center align-items-center" style={{ width: 50, height: 35 }}>
              <FontAwesomeIcon icon={faUser} />
              <span className="position-absolute top-0 end-0">{data.maxGuests}</span>
            </Card.Text>
          </div>
        </Card.Body>
        <Button href={`venue?id=${data.id}`} variant="primary" className="bg-secondary shadow border-0 mb-4">
          View venue
        </Button>
      </Card>
    </div>
  );
};

export default CardComponent;
