import formatDate from "@/utils/formatting/formatDate";
import Link from "next/link";

const MyBookingsCard = ({ data, dateFrom, dateTo }) => {
  const from = formatDate(dateFrom);
  const to = formatDate(dateTo);

  return (
    <div className="h-25 bg-lighter rounded-1 p-1 d-flex flex-wrap align-items-center gap-4 mt-4">
      <Link href={`/venue?id=${data?.id}`} className="text-decoration-none">
        <img src={data?.media?.[0]} alt={data?.name} style={{ objectFit: "cover", width: 70, height: 70 }} />
      </Link>
      <div className="d-flex flex-grow-1 align-items-center justify-content-between gap-4">
        <div>
          <h2 className="fs-4 text-primary text-wrap text-break">{data?.name}</h2>
          <div aria-label="Price per night" className="text-secondary">
            {data?.price} kr per night
          </div>
        </div>
        <div className="ms-auto text-primary p-2 ">
          <div>From: {from}</div>
          <div>To: {to}</div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsCard;
