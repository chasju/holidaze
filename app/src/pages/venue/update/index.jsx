import NotLoggedIn from "@/components/notLoggedIn/NotLoggedIn";
import UpdateVenueForm from "@/components/updateVenueForm/updateVenueForm";
import useGet from "@/hooks/useGet";
import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

export default function updateVenuePage() {
  const storageProfile = getStorage("profile");
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  useEffect(() => {
    if (storageProfile) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [storageProfile]);

  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useGet(`${BASE_URL}/venues/${id}`);

  return (
    <Container className="mt-5" style={{ maxWidth: 700 }}>
      {isLoggedIn && (
        <Card className="border-0">
          <h1 className="text-primary fw-bold mb-3">Update Venue</h1>
          <UpdateVenueForm data={data} />
        </Card>
      )}
      {!isLoggedIn && <NotLoggedIn />}
    </Container>
  );
}
