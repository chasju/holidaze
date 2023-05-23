import { DatesContext } from "@/context/DatesContext";
import formatDate from "@/utils/formatting/formatDate";
import getAllDates from "@/utils/getAllDates";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Card, Ratio } from "react-bootstrap";

const CheckoutCard = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  const { dates } = useContext(DatesContext);

  // format date
  const startDate = formatDate(dates[0]?.startDate);
  const endDate = formatDate(dates[0]?.endDate);

  // get all dates
  const allDates = getAllDates(dates[0]?.startDate, dates[0]?.endDate);
  const nights = allDates?.length - 1;
  const sumPerNight = data.price * nights;

  return (
    <>
      <Card className="border-0 m-auto" style={{ maxWidth: 700 }}>
        <Ratio aspectRatio={"4x3"}>
          <Card.Img variant="top" src={data?.media} alt={data.name} style={{ objectFit: "cover" }} />
        </Ratio>
        <Card.Body>
          <Card.Title>
            <h2 className="fs-4 text-primary">{data?.name}</h2>
          </Card.Title>
          <Card.Text aria-label="Date range" className="text-primary fw-semibold">
            <span>{startDate}</span> - <span>{endDate}</span>
            <Link href={`/venue?id=${id}`}>
              <span className="ms-2">
                <FontAwesomeIcon icon={faPen} />
              </span>
            </Link>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Card.Text aria-label="Nights amount" className="text-primary fw-semibold">
              {`${nights} nights x ${data.price} kr`}
            </Card.Text>
            <Card.Text aria-label="Total price" className="text-primary fw-semibold">
              {sumPerNight} kr
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CheckoutCard;
