import { DatesContext } from "@/context/DatesContext";
import createBooking from "@/hooks/create/createBooking";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const { Form, Button, Modal } = require("react-bootstrap");

const CheckoutForm = ({ guests, dateFrom, dateTo }) => {
  const router = useRouter();
  const { id } = router.query;

  // Success message
  const [show, setShow] = useState(false);

  const { dispatch } = useContext(DatesContext);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  // Fail message
  const [registerFail, setRegisterFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");

  const handleFail = (message) => {
    setRegisterFail(true);
    setFailMessage(message);
  };

  const handleBooked = () => {
    dispatch({ type: "CLEAR_DATE" });
    onSubmit();
  };

  const onSubmit = () => {
    createBooking(guests, dateFrom, dateTo, id, handleShow, handleFail);
  };

  return (
    <>
      <Form className="m-auto mt-4" style={{ maxWidth: 500 }}>
        {registerFail && (
          <Form.Group className="mb-3">
            <p className="fw-semibold text-primary bg-lighter p-2 rounded-1">{failMessage}</p>
          </Form.Group>
        )}
        <h1 className="text-primary fw-bold mb-3">Checkout</h1>
        <Form.Group className="mb-4" controlId="formBasicName">
          <Form.Label visuallyHidden>name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" className="border-light shadow py-3" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label visuallyHidden>email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="border-light shadow py-3" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCardNumber">
          <Form.Label visuallyHidden>card number</Form.Label>
          <Form.Control type="number" placeholder="card number" className="border-light shadow py-3" />
        </Form.Group>
        <div className="mb-3 d-flex justify-content-between gap-2">
          <Form.Select>
            <option value="">month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </Form.Select>
          <Form.Select>
            <option value="">year</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
            <option value="27">2027</option>
          </Form.Select>
          <Form.Group controlId="formBasicCvc" className="flex-grow-1">
            <Form.Label visuallyHidden>card cvc</Form.Label>
            <Form.Control type="number" placeholder="cvc" className="border-light shadow py-3" />
          </Form.Group>
        </div>
        <Button onClick={handleBooked} variant="primary" type="button" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
          Book now
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="rounded-top text-center text-primary fw-bold fs-3 p-5">Booking successful!</Modal.Body>
          <div className=" rounded-bottom d-flex justify-content-center pb-5">
            <Button variant="secondary" href="/profile">
              Go to profile
            </Button>
          </div>
        </Modal>
      </Form>
    </>
  );
};

export default CheckoutForm;
