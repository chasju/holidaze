import { Container } from "react-bootstrap";
import CheckoutCard from "@/components/checkoutCard/CheckoutCard";
import useGet from "@/hooks/useGet";
import { useRouter } from "next/router";
import { BASE_URL } from "@/utils/baseUrl";

export default function checkout() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGet(`${BASE_URL}/venues/${id}`);

  return (
    <div>
      <Container className="mt-5 pt-5">
        <CheckoutCard data={data} />
      </Container>
    </div>
  );
}
