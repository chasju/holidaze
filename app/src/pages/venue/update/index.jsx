import UpdateVenueForm from "@/components/updateVenueForm/updateVenueForm";
import useGet from "@/hooks/useGet";
import { BASE_URL } from "@/utils/baseUrl";
import { useRouter } from "next/router";
import { Card, Container } from "react-bootstrap";

export default function updateVenuePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useGet(`${BASE_URL}/venues/${id}`);

  return (
    <div>
      <Container className="mt-5" style={{ maxWidth: 700 }}>
        <Card className="border-0">
          <h1 className="text-primary fw-bold mb-3">Update Venue</h1>
          <UpdateVenueForm data={data} />
        </Card>
      </Container>
    </div>
  );
}
