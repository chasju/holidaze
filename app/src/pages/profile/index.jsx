import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";
import ProfileCard from "@/components/profileCard/ProfileCard";

export default function profilePage() {
  return (
    <Container className="mt-5">
      <h1 className="text-primary">Profile</h1>
      <div className="mt-4 d-flex align-items-center gap-3">
        <div className="position-relative" style={{ width: 80 }}>
          <img src="avatar.png" alt="avatar" className="rounded-circle shadow ratio ratio-1x1" style={{ width: 70 }} />
          <FontAwesomeIcon icon={faPen} className="position-absolute end-0 bottom-0 text-primary" />
        </div>
        <p className="mb-0 text-primary fw-semibold fs-4">Hello Charlie</p>
      </div>
      <div className="w-100 mt-4 d-flex gap-3 overflow-hidden overflow-scroll">
        <Button variant="secondary" active="true" style={{ width: 150 }} className="flex-shrink-0">
          My Venues
        </Button>
        <Button variant="secondary" style={{ width: 150 }} className="flex-shrink-0">
          My Bookings
        </Button>
        <Button variant="secondary" style={{ width: 150 }} className="flex-shrink-0">
          My Info
        </Button>
      </div>
      <ProfileCard />
    </Container>
  );
}
