import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <Container aria-label="Search venues">
      <Form typeof="submit">
        <InputGroup className="mb-3 mt-4">
          <Form.Control type="" placeholder="Search places to sleep ..." aria-label="Search" className="border-0 shadow p-3 text-primary" />
          <Button className="bg-secondary border-0 px-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default Search;
