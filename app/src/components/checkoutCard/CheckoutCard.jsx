import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Card } from "react-bootstrap";

const CheckoutCard = () => {
  return (
    <>
      <Card className="border-0 ">
        <Link href="/venues" className="text-decoration-none">
          <Card.Img variant="top" src="picture.jpg" alt="House" />
        </Link>
        <Card.Body>
          <Card.Title>
            <h2 className="fs-4 text-primary">Card Title</h2>
          </Card.Title>
          <Card.Text aria-label="Date range" className="text-primary fw-semibold">
            <span>02/05/23</span>-<span>07/05/23</span>
            <span className="ms-2">
              <FontAwesomeIcon icon={faPen} />
            </span>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Card.Text aria-label="Nights amount" className="text-primary fw-semibold">
              2 nights x price
            </Card.Text>
            <Card.Text aria-label="Total price" className="text-primary fw-semibold">
              $200
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CheckoutCard;
