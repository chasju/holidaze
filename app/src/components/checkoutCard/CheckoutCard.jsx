import { DatesContext } from "@/context/DatesContext";
import formatDate from "@/utils/formatting/formatDate";
import getAllDates from "@/utils/getAllDates";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Card, Ratio } from "react-bootstrap";
import placeholderImage from "../../../public/house.jpg";
import CheckoutForm from "../checkoutForm/CheckoutForm";

const CheckoutCard = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  // Context
  const { dates } = useContext(DatesContext);

  // format date
  const startDate = formatDate(dates[0]?.startDate);
  const endDate = formatDate(dates[0]?.endDate);

  // get all dates and calc total amount
  const allDates = getAllDates(dates[0]?.startDate, dates[0]?.endDate);
  let nights;
  {
    allDates?.length ? (nights = allDates?.length - 1) : (nights = 1);
  }
  const sumPerNight = data.price * nights;

  const today = new Date();
  const formatToday = formatDate(today);

  // Image error
  const onImageError = (e) => {
    e.target.src = placeholderImage.src;
  };

  // Create select based off max Guests
  const [options, setOptions] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(1);

  const handleChange = (e) => {
    setSelectedAmount(e.target.value);
  };

  const generateOptions = () => {
    const options = [];

    for (let i = 1; i <= data?.maxGuests; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );

      setOptions(options);
    }
  };

  useEffect(() => {
    if (data) {
      generateOptions();
    }
  }, [data]);

  console.log(options, selectedAmount);

  return (
    <>
      <Card className="border-0 m-auto" style={{ maxWidth: 700 }}>
        <Ratio aspectRatio={"4x3"}>
          <Card.Img variant="top" onError={onImageError} src={data?.media?.length === 0 ? placeholderImage.src : data?.media?.[0]} alt={data.name} style={{ objectFit: "cover" }} />
        </Ratio>
        <Card.Body>
          <Card.Title>
            <h2 className="fs-4 text-primary">{data?.name}</h2>
          </Card.Title>
          <Card.Text aria-label="Date range" className="text-primary fw-semibold">
            <span>{startDate === "Invalid Date" ? formatToday : startDate}</span> - <span>{endDate === "Invalid Date" ? formatToday : endDate}</span>
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
          <select value={selectedAmount} onChange={handleChange} name="numberOfGuests" id="numberOfGuests">
            {options}
          </select>
        </Card.Body>
      </Card>
      <CheckoutForm guests={selectedAmount} dateFrom={dates[0]?.startDate} dateTo={dates[0]?.endDate} />
    </>
  );
};

export default CheckoutCard;
