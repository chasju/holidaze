import NotLoggedIn from "@/components/notLoggedIn/NotLoggedIn";
import editAvatar from "@/hooks/edit/editAvatar";
import useGetAuth from "@/hooks/useGetAuth";
import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

export default function editPage() {
  const storageProfile = getStorage("profile");
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  useEffect(() => {
    if (storageProfile) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [storageProfile]);

  const router = useRouter();
  const { name } = router.query;

  const { data } = useGetAuth(`${BASE_URL}/profiles/${name}`);

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

  // Success message
  const [show, setShow] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    editAvatar(previewImage, name, handleShow, handleFail);
  };

  return (
    <Container style={{ maxWidth: 700 }} className=" mt-5">
      {isLoggedIn && (
        <div>
          <div className="mx-auto d-flex justify-content-center">
            <img src={previewImage} alt="avatar" className="rounded-circle shadow" style={{ width: 150, height: 150, objectFit: "cover" }} />
          </div>
          {registerFail && (
            <Form.Group className="mb-3 mt-2">
              <p className="fw-semibold text-primary bg-lighter p-2 rounded-1">{failMessage}</p>
            </Form.Group>
          )}
          <Form.Group className="mt-5" controlId="formBasicAvatar">
            <Form.Label visuallyHidden>image url</Form.Label>
            <Form.Control onChange={handleChange} type="url" placeholder="Image url" className="border-light shadow py-3" />
            <Button onClick={handleSubmit} variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
              Update profile image
            </Button>
          </Form.Group>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body className="rounded-top text-center text-primary fw-bold fs-3 p-5">Your avatar was updated!</Modal.Body>
            <div className=" rounded-bottom d-flex justify-content-center pb-5">
              <Button variant="secondary" href="/profile">
                Go to profile
              </Button>
            </div>
          </Modal>
        </div>
      )}
      {!isLoggedIn && <NotLoggedIn />}
    </Container>
  );
}
