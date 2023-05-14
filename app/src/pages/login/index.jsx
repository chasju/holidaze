import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Link from "next/link";

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

  const [isVisible, setIsVisible] = useState(false);

  function onSubmit(data) {
    console.log(data);
    setIsVisible(true);
    reset();
  }

  return (
    <div>
      <Container className="mt-5 pt-5">
        <Form onSubmit={handleSubmit(onSubmit)} className="m-auto" style={{ maxWidth: 500 }}>
          <h1 className="text-primary fw-bold mb-3">Login</h1>
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
        </Form>
      </Container>
    </div>
  );
}
