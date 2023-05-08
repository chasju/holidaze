import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Card } from "react-bootstrap";

const ProfileCard = () => {
  return (
    <div className="mt-5">
      <Card className="border-0 shadow">
        <Link href="/venue" className="text-decoration-none">
          <Card.Img variant="top" src="picture.jpg" alt="House" />
        </Link>
        <Card.Body className="d-flex justify-content-between">
          <div>
            <Card.Title>
              <h2 className="fs-4 text-primary">Card Title</h2>
            </Card.Title>
            <Card.Text aria-label="Price per night" className="text-secondary">
              Price
            </Card.Text>
          </div>
          <div>
            <Card.Text aria-label="Max number of people" className="position-relative d-flex justify-content-center align-items-center" style={{ width: 35, height: 35 }}>
              <FontAwesomeIcon icon={faUser} />
              <span className="position-absolute top-0 start-0">2</span>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileCard;
