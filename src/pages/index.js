import { BASE_URL } from "@/utils/baseUrl";
import Search from "@/components/search/Search";
import Head from "next/head";
import useGet from "@/hooks/useGet";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardsResult from "@/components/cardsResult/CardsResult";
import Loader from "@/components/loader/Loader";
import ErrorMessage from "@/components/errorMessage/Errormessage";

export default function Home() {
  const { data, isLoading, isError } = useGet(`${BASE_URL}/venues?sort=updated&sortOrder=desc`);

  const [venues, setVenues] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setVenues(data);
    setSearchResults(data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage message="Seems like there are no venues rn." cards={true} />;
  }

  return (
    <div>
      <Head>
        <title>Holidaze - book your next stay here</title>
        <meta name="description" content="Book your next stay here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Search venues={venues} setSearchResults={setSearchResults} />
      <Container className="m-auto row row-lg-cols-2 gap-5 justify-content-between">
        <CardsResult searchResults={searchResults} />
      </Container>
    </div>
  );
}
