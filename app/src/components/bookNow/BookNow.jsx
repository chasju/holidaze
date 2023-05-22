import { DatesContext } from "@/context/DatesContext";
import { BASE_URL } from "@/utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const BookNow = ({ dates, price, id }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    setSelectedDates(dates);
  }, [dates]);

  const getAllDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let dates = [];

    while (date <= end) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getAllDates(selectedDates[0]?.startDate, selectedDates[0]?.endDate);
  const nights = allDates?.length - 1;
  const sumPerNight = price * nights;

  const { dispatch } = useContext(DatesContext);
  const router = useRouter();

  const handleBookNow = () => {
    dispatch({ type: "NEW_DATE", payload: selectedDates });
    router.push("/checkout", `/checkout?id=${id}`, { state: selectedDates });
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

// const handleBookNow = async () => {
//   try {
//     const response = axios.post(`${BASE_URL}/bookings`, {
//       dateFrom: selectedDates[0].startDate,
//       dateTo: selectedDates[0].endDate
//     })

//   } catch (error) {
//     console.log(error);
//   }
// };
