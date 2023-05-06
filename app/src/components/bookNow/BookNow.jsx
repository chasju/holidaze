import { Button } from "react-bootstrap";

const BookNow = () => {
  return (
    <div className="fixed-bottom bg-secondary p-3 rounded-top d-flex justify-content-between align-items-center">
      <div className="text-white">Price x 2 nights</div>
      <Button className="px-4 py-2 bg-lighter text-primary fw-semibold border-0">Book now</Button>
    </div>
  );
};

export default BookNow;
