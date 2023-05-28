import { BASE_URL } from "@/utils/baseUrl";
import Search from "@/components/search/Search";
import Head from "next/head";
import useGet from "@/hooks/useGet";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardsResult from "@/components/cardsResult/CardsResult";

export default function Home() {
  const { data } = useGet(`${BASE_URL}/venues?sort=updated&sortOrder=desc`);

  const [venues, setVenues] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setVenues(data);
    setSearchResults(data);
  }, [data]);

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
