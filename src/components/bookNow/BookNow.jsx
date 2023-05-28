import { DatesContext } from "@/context/DatesContext";
import getAllDates from "@/utils/getAllDates";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const BookNow = ({ dates, price, id }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    setSelectedDates(dates);
  }, [dates]);

  const allDates = getAllDates(selectedDates[0]?.startDate, selectedDates[0]?.endDate);
  const nights = allDates?.length - 1;
  const sumPerNight = price * nights;

  const { dispatch } = useContext(DatesContext);
  const router = useRouter();

  const handleBookNow = () => {
    dispatch({ type: "NEW_DATE", payload: { dates: selectedDates } });
    router.push(`/checkout?id=${id}`, `/checkout?id=${id}`, { state: { selectedDates } });
  };

  return (
    <div className="fixed-bottom bg-secondary p-3 rounded-top d-flex justify-content-between align-items-center">
      <div className="text-white">{`${price} kr x ${nights === 0 ? 1 : nights} night${nights <= 1 ? "" : "s"}`}</div>
      <div className="text-white fw-semibold ms-auto pe-4">{`Total: ${sumPerNight === 0 ? price : sumPerNight} kr`}</div>
      <Button onClick={handleBookNow} className="px-4 py-2 bg-lighter text-primary fw-semibold border-0">
        Book now
      </Button>
    </div>
  );
};

export default BookNow;
