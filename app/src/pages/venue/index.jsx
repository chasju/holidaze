import { BASE_URL } from "@/utils/baseUrl";
import { Container } from "react-bootstrap";
import BookNow from "@/components/bookNow/BookNow";
import VenueCard from "@/components/venueCard/VenueCard";
import useGet from "@/hooks/useGet";
import { useRouter } from "next/router";

export default function venuePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useGet(`${BASE_URL}/venues/${id}`);

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
      <Container className="mt-5" style={{ maxWidth: 700 }}>
        <VenueCard data={data} />
      </Container>
      <BookNow />
    </div>
  );
}
