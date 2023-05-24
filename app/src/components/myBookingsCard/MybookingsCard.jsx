import formatDate from "@/utils/formatting/formatDate";
import Link from "next/link";

const MyBookingsCard = ({ data, dateFrom, dateTo }) => {
  console.log(data);

  const from = formatDate(dateFrom);
  const to = formatDate(dateTo);

  return (
    <div className="h-25 d-flex align-items-center gap-4 mt-4">
      <Link href={`/venue?id=${data?.id}`} className="text-decoration-none">
        <img src={data?.media?.[0]} alt={data?.name} style={{ objectFit: "cover", width: 70, height: 70 }} />
      </Link>
      <div>
        <h2 className="fs-4 text-primary">{data?.name}</h2>
        <div aria-label="Price per night" className="text-secondary">
          {data?.price} kr per night
        </div>
      </div>
      <div className="ms-auto text-primary p-2 bg-lighter rounded-1">
        <div>From: {from}</div>
        <div>To: {to}</div>
      </div>
    </div>
  );
};

export default MyBookingsCard;
