import Search from "@/components/search/Search";
import Card from "@/components/card/Card";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Holidaze - book your next stay here</title>
        <meta name="description" content="Book your next stay here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Search />
        <Card />
      </main>
    </div>
  );
}
