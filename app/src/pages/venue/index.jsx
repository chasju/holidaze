import { BASE_URL } from "@/utils/baseUrl";
import VenueCard from "@/components/venueCard/VenueCard";
import useGet from "@/hooks/useGet";
import { useRouter } from "next/router";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import { useEffect, useState } from "react";
import NotLoggedIn from "@/components/notLoggedIn/NotLoggedIn";
import { Container } from "react-bootstrap";
import Head from "next/head";

export default function venuePage() {
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

  const { data, isLoading, isError } = useGet(`${BASE_URL}/venues/${id}?_bookings=true`);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    <div>
      <p>There was an error loading the content. Please contact us if the issue persists.</p>
    </div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name} - Holidaze</title>
        <meta name="description" content="View specific venue" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isLoggedIn && <VenueCard data={data} />}
      {!isLoggedIn && (
        <Container className="mt-5" style={{ maxWidth: 700 }}>
          <NotLoggedIn />
        </Container>
      )}
    </div>
  );
}
