import { BASE_URL } from "@/utils/baseUrl";
import Search from "@/components/search/Search";
import Card from "@/components/card/Card";
import Head from "next/head";
import useGet from "@/hooks/useGet";
import { Container } from "react-bootstrap";

export default function Home() {
  const { data } = useGet(`${BASE_URL}/venues`);

  return (
    <div>
      <Head>
        <title>Holidaze - book your next stay here</title>
        <meta name="description" content="Book your next stay here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Search />
        <Container className="m-auto row row-lg-cols-2 gap-5 justify-content-between">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Container>
      </main>
    </div>
  );
}
