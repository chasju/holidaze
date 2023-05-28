import { Container } from "react-bootstrap";
import CheckoutCard from "@/components/checkoutCard/CheckoutCard";
import useGet from "@/hooks/useGet";
import { useRouter } from "next/router";
import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import NotLoggedIn from "@/components/notLoggedIn/NotLoggedIn";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "@/components/loader/Loader";
import ErrorMessage from "@/components/errorMessage/Errormessage";

export default function checkout() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useGet(`${BASE_URL}/venues/${id}`);

  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const storageProfile = getStorage("profile");

  useEffect(() => {
    if (storageProfile) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [storageProfile]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage message="Something went wrong." cards={false} />;
  }

  return (
    <>
      <Head>
        <title>Checkout - Holidaze</title>
        <meta name="description" content="Checkout your booked dates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container className="mt-5 pt-5">
        {isLoggedIn && <CheckoutCard data={data} />}
        {!isLoggedIn && <NotLoggedIn />}
      </Container>
    </>
  );
}
