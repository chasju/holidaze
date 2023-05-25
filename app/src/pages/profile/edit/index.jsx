import editAvatar from "@/hooks/edit/editAvatar";
import useGetAuth from "@/hooks/useGetAuth";
import { BASE_URL } from "@/utils/baseUrl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function editPage() {
  const router = useRouter();
  const { name } = router.query;

  const { data } = useGetAuth(`${BASE_URL}/profiles/${name}`);
  console.log(data);

  const [previewImage, setPreviewImage] = useState();

  useEffect(() => {
    if (data) {
      setPreviewImage(data?.avatar);
    }
  }, [data]);

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setPreviewImage(data?.avatar);
    } else {
      setPreviewImage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editAvatar(previewImage, name);
  };

  return (
    <Container style={{ maxWidth: 700 }}>
      <div className="mx-auto mt-5 d-flex justify-content-center">
        <img src={previewImage} alt="avatar" className="rounded-circle shadow" style={{ width: 150, height: 150, objectFit: "cover" }} />
      </div>
      <Form.Group className="mt-5" controlId="formBasicAvatar">
        <Form.Label visuallyHidden>image url</Form.Label>
        <Form.Control onChange={handleChange} type="url" placeholder="Image url" className="border-light shadow py-3" />
        <Button onClick={handleSubmit} variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
          Update profile image
        </Button>
      </Form.Group>
    </Container>
  );
}
