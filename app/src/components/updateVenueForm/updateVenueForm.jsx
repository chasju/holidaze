import { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Form, Ratio, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import countryList from "react-select-country-list";
import Select from "react-select";
import updateVenue from "@/hooks/update/updateVenue";

const schema = yup.object({
  images: yup.array().test("imageArray", "Please enter valid URLs", (value) => {
    if (!value) return true;
    return value.every((url) => yup.string().url().isValidSync(url));
  }),
  title: yup.string(),
  description: yup.string(),
  price: yup.number(),
  maxGuests: yup.number(),
});

const UpdateVenueForm = ({ data }) => {
  const {
    register,
    setValue,
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

  // Checking Meta
  const [metaCheck, setMetaCheck] = useState({
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  });

  const handleCheckChange = (item) => {
    setMetaCheck((prevMeta) => ({
      ...prevMeta,
      [item]: !prevMeta[item],
    }));
  };

  // Get images
  const handleImageValue = (e) => {
    setImageArray(e.target.value.split(/[ ,]+/).filter(Boolean));
  };

  // Handle update inputs
  const [imageArray, setImageArray] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [guests, setGuests] = useState("0");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (data) {
      setImageArray(data?.media || []);
      setTitle(data?.name || "");
      setDescription(data?.description || "");
      setMetaCheck(data?.meta || []);
      setPrice(parseInt(data?.price) || "0");
      setGuests(parseInt(data?.maxGuests) || "0");
      setLocation(data?.location?.country || "");
    }
  }, [data]);

  // Country dropdown

  const options = useMemo(() => countryList().data, []);

  function onSubmit() {
    const updated = {
      media: imageArray,
      name: title,
      description: description,
      meta: metaCheck,
      price: Number(price),
      maxGuests: Number(guests),
      location: location,
    };

    console.log(updated);

    // updateVenue(updated, handleShow, handleFail);
  }

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  return (
    <div>
      <Ratio aspectRatio={"4x3"}>
        <Card.Img src={imageArray?.length ? imageArray[0] : "/house.jpg"} alt="preview uploaded image" style={{ objectFit: "cover" }} />
      </Ratio>
      <Form onSubmit={handleSubmit(onSubmit)} className="m-auto mt-4 " style={{ maxWidth: 500 }}>
        {registerFail && <p className="fw-semibold text-primary bg-lighter p-2 rounded-1">{failMessage}</p>}
        <Form.Group className="mb-4" controlId="formBasicURL">
          <Form.Label>Image url</Form.Label>
          <Form.Control {...register("images")} onChange={handleImageValue} value={imageArray || []} type="url" placeholder="Image url" className="border-light shadow py-3 text-primary" multiple />

          <Form.Text>{errors.images?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control {...register("title")} onChange={(e) => handleChange(e, setTitle)} value={title || ""} type="text" placeholder="Title" className="border-light shadow py-3 text-primary" />
          <Form.Text>{errors.title?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control {...register("description")} as="textarea" rows={3} onChange={(e) => handleChange(e, setDescription)} value={description || ""} placeholder="Description" className="border-light shadow py-3 text-primary" />
          <Form.Text>{errors.description?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicMeta">
          <Row className="mb-3">
            <Col>
              <Form.Check onChange={() => handleCheckChange("wifi")} checked={metaCheck?.wifi || false} inline label="wifi" name="meta" />
            </Col>
            <Col>
              <Form.Check onChange={() => handleCheckChange("parking")} checked={metaCheck?.parking || false} inline label="parking" name="meta" />
            </Col>
            <Col>
              <Form.Check onChange={() => handleCheckChange("breakfast")} checked={metaCheck?.breakfast || false} inline label="breakfast" name="meta" />
            </Col>
            <Col>
              <Form.Check onChange={() => handleCheckChange("pets")} checked={metaCheck?.pets || false} inline label="pets" name="meta" />
            </Col>
            <Form.Text>{errors.meta?.message}</Form.Text>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-4" controlId="formBasicPrice">
              <Form.Label>Price per night</Form.Label>
              <Form.Control {...register("price")} onChange={(e) => handleChange(e, setPrice)} value={Number(price)} type="number" placeholder="Price per night" className="border-light shadow py-3 text-primary" />
              <Form.Text>{errors.price?.message}</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicMaxGuests">
              <Form.Label>Max guests</Form.Label>
              <Form.Control {...register("maxGuests")} onChange={(e) => handleChange(e, setGuests)} value={Number(guests)} type="number" placeholder="Maximum guests" className="border-light shadow py-3 text-primary" />
              <Form.Text>{errors.maxGuests?.message}</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Select instanceId="dropdown" placeholder={location ? location : "Country"} options={options} onChange={setLocation} value={location} />
        <Button onClick={() => setValue("images", imageArray, { shouldValidate: true })} variant="primary" type="submit" className="w-100 bg-secondary py-3 mt-4 border-0 shadow">
          Update Venue
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="rounded-top text-center text-primary fw-bold fs-3 p-5">Venue updates!</Modal.Body>
          <div className=" rounded-bottom d-flex justify-content-center pb-5">
            <Button variant="secondary" href="/profile">
              Go to venue
            </Button>
          </div>
        </Modal>
      </Form>
    </div>
  );
};

export default UpdateVenueForm;
