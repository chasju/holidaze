import { Button, Container, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import loginUser from "@/hooks/auth/login";
import { useState } from "react";

const schema = yup.object({
  password: yup.string().required("Please provide a password.").min(8, "Password is too short - must be minimum 8 characters."),
  email: yup.string().email("Not a proper email").required("Please enter a valid email"),
});

export default function loginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Success message
  const [show, setShow] = useState(false);

  const handleClose = () => {
    reset();
    setShow(false);
  };

  const handleShow = () => setShow(true);

  // Fail message
  const [loginFail, setLoginFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");

  const handleFail = (message) => {
    setLoginFail(true);
    setFailMessage(message);
  };

  function onSubmit(data) {
    loginUser(data, handleShow, handleFail);
  }

  return (
    <div>
      <Container className="mt-5 pt-5">
        <Form onSubmit={handleSubmit(onSubmit)} className="m-auto" style={{ maxWidth: 500 }}>
          <h1 className="text-primary fw-bold mb-3">Login</h1>
          {loginFail && (
            <Form.Group className="mb-3">
              <Form.Text className="fw-semibold text-primary bg-lighter p-2 rounded-1">{failMessage}</Form.Text>
            </Form.Group>
          )}
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label visuallyHidden>email</Form.Label>
            <Form.Control {...register("email")} type="email" placeholder="Enter email" className="border-light shadow py-3" />
            <Form.Text>{errors.email?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label visuallyHidden>password</Form.Label>
            <Form.Control {...register("password")} type="password" placeholder="Password" className="border-light shadow py-3" />
            <Form.Text>{errors.password?.message}</Form.Text>
          </Form.Group>
          <div>
            <Link href="/register">Not registered? Register here</Link>
          </div>
          <Button variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
            Login
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body className="rounded-top text-center text-primary fw-bold fs-3 p-5">You are logged in!</Modal.Body>
            <div className=" rounded-bottom d-flex justify-content-center pb-5">
              <Button variant="secondary" href="/profile">
                Go to Profile
              </Button>
            </div>
          </Modal>
        </Form>
      </Container>
    </div>
  );
}
