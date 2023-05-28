import CreateVenueForm from "@/components/createVenueForm/CreateVenueForm";
import NotLoggedIn from "@/components/notLoggedIn/NotLoggedIn";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

export default function createVenuePage() {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const storageProfile = getStorage("profile");

  useEffect(() => {
    if (storageProfile) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [storageProfile]);

  return (
    <div>
      <Container className="mt-5" style={{ maxWidth: 700 }}>
        {isLoggedIn && (
          <Card className="border-0">
            <h1 className="text-primary fw-bold mb-3">Create Venue</h1>
            <CreateVenueForm />
          </Card>
        )}
        {!isLoggedIn && <NotLoggedIn />}
      </Container>
    </div>
  );
}
