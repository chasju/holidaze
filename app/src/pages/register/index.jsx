import { Button, Container, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import registerUser from "@/hooks/auth/register";
import { useState } from "react";
import Head from "next/head";

const schema = yup.object({
  fullName: yup.string().required("Please provide your full name.").min(3, "Name is too short - must be minimum 3 characters."),
  email: yup.string().email("Not a proper email").required("Please enter a valid email"),
  password: yup.string().required("Please provide a password.").min(8, "Password is too short - must be minimum 8 characters."),
  avatar: yup.string().required("Please provide an image url.").url(),
});

export default function registerPage() {
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
  const [registerFail, setRegisterFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");

  const handleFail = (message) => {
    setRegisterFail(true);
    setFailMessage(message);
  };

  function onSubmit(data) {
    registerUser(data, handleShow, handleFail);
  }

  return (
    <div>
      <Head>
        <title>Register a profile - Holidaze</title>
        <meta name="description" content="Register a profile here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container className="mt-5 pt-5">
        <Form onSubmit={handleSubmit(onSubmit)} className="m-auto" style={{ maxWidth: 500 }}>
          <h1 className="text-primary fw-bold mb-3">Register</h1>
          {registerFail && (
            <Form.Group className="mb-3">
              <Form.Text className="fw-semibold text-primary bg-lighter p-2 rounded-1">{failMessage}</Form.Text>
            </Form.Group>
          )}
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Label visuallyHidden>Name</Form.Label>
            <Form.Control {...register("fullName")} type="text" placeholder="name" className="border-light shadow py-3" />
            <Form.Text>{errors.fullName?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label visuallyHidden>Email</Form.Label>
            <Form.Control {...register("email")} type="email" placeholder="email" className="border-light shadow py-3" />
            <Form.Text>{errors.email?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label visuallyHidden>Password</Form.Label>
            <Form.Control {...register("password")} type="password" placeholder="password" className="border-light shadow py-3" />
            <Form.Text>{errors.password?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAvatar">
            <Form.Label visuallyHidden>avatar</Form.Label>
            <Form.Control {...register("avatar")} type="url" placeholder="avatar" className="border-light shadow py-3" />
            <Form.Text>{errors.avatar?.message}</Form.Text>
          </Form.Group>
          <div>
            <Link href="/login">Already registered? Login here</Link>
          </div>
          <Button variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
            Register
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body className="rounded-top text-center text-primary fw-bold fs-3 p-5">Your account has been created!</Modal.Body>
            <div className=" rounded-bottom d-flex justify-content-center pb-5">
              <Button variant="secondary" href="/login">
                Login in here
              </Button>
            </div>
          </Modal>
        </Form>
      </Container>
    </div>
  );
}
