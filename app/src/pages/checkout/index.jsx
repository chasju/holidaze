import { Container } from "react-bootstrap";
import CheckoutCard from "@/components/checkoutCard/CheckoutCard";
import CheckoutForm from "@/components/checkoutForm/CheckoutForm";
import useGet from "@/hooks/useGet";
import { useRouter } from "next/router";
import { BASE_URL } from "@/utils/baseUrl";
import { useContext } from "react";
import { DatesContext } from "@/context/DatesContext";

export default function checkout() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGet(`${BASE_URL}/venues/${id}`);

  return (
    <div>
      <Container className="mt-5 pt-5">
        <CheckoutCard data={data} />
        <CheckoutForm />
      </Container>
    </div>
  );
}
