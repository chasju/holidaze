import { BASE_URL } from "@/utils/baseUrl";
import VenueCard from "@/components/venueCard/VenueCard";
import useGet from "@/hooks/useGet";
import { useRouter } from "next/router";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import { useEffect, useState } from "react";
import NotLoggedIn from "@/components/notLoggedIn/NotLoggedIn";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Loader from "@/components/loader/Loader";
import ErrorMessage from "@/components/errorMessage/Errormessage";

export default function venuePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useGet(`${BASE_URL}/venues/${id}?_bookings=true`);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    <ErrorMessage message="Couldn't find the correct venue." cards={false} />;
  }

  return (
    <div>
      <Head>
        <title>{data?.name} - Holidaze</title>
        <meta name="description" content="View specific venue" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <VenueCard data={data} />
    </div>
  );
}
