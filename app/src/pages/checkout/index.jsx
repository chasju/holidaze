import { Container } from "react-bootstrap";
import CheckoutCard from "@/components/checkoutCard/CheckoutCard";
import CheckoutForm from "@/components/checkoutForm/CheckoutForm";

export default function checkout() {
  return (
    <div>
      <Container className="mt-5 pt-5">
        <CheckoutCard />
        <CheckoutForm />
      </Container>
    </div>
  );
}
