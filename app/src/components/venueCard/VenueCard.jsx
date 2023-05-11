import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { Card, Ratio } from "react-bootstrap";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import placeholderImage from "../../../public/house.jpg";

const VenueCard = ({ data }) => {
  const onImageError = (e) => {
    e.target.src = placeholderImage.src;
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <Card className="border-0 ">
      <Link href="/venues" className="text-decoration-none">
        <Ratio aspectRatio={"4x3"}>
          <Card.Img variant="top" onError={onImageError} src={data.media} alt={data.name} style={{ objectFit: "cover" }} />
        </Ratio>
      </Link>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              <h2 className="fs-4 text-primary text-capitalize">{data.name}</h2>
            </Card.Title>
            <Card.Text aria-label="Price per night" className="text-secondary">
              {data.price} kr/night
            </Card.Text>
          </div>
          <div>
            <Card.Text aria-label="Max number of people" className="d-flex justify-content-center align-items-baseline gap-1">
              <FontAwesomeIcon icon={faUser} />
              <span>{data.maxGuests}</span>
            </Card.Text>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="fs-3 text-primary">Description</h3>
          <Card.Text className="text-secondary">{data.description}</Card.Text>
          <div className="mt-5 d-flex gap-2 flex-wrap justify-content-between text-primary fw-semibold">
            <Card.Text className={data?.meta?.wifi ? "" : "text-lighter text-decoration-line-through"}>Wifi</Card.Text>
            <Card.Text className={data?.meta?.parking ? "" : "text-lighter text-decoration-line-through"}>Parking</Card.Text>
            <Card.Text className={data?.meta?.breakfast ? "" : "text-lighter text-decoration-line-through"}>Breakfast</Card.Text>
            <Card.Text className={data?.meta?.pets ? "" : "text-lighter text-decoration-line-through"}>Pets</Card.Text>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="fs-3 text-primary"> Calendar</h3>
          <DateRange className="w-100" editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default VenueCard;
