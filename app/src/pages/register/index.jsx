import { BASE_URL } from "@/utils/baseUrl";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const postData = async ({ fullName, email, password, avatar }) => {
  console.log(fullName, email, password, avatar);
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/register`,
      {
        name: fullName,
        email: email,
        password: password,
        avatar: avatar,
        venueManager: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Insert success message here");

    return response;
  } catch (error) {
    console.log(error);
  }
};

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

  const [isVisible, setIsVisible] = useState(false);

  function onSubmit(data) {
    postData(data);
    setIsVisible(true);
    reset();
  }

  return (
    <div>
      <Container className="mt-5 pt-5">
        <Form onSubmit={handleSubmit(onSubmit)} className="m-auto" style={{ maxWidth: 500 }}>
          <h1 className="text-primary fw-bold mb-3">Register</h1>
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
        </Form>
      </Container>
    </div>
  );
}
