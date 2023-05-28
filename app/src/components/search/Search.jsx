import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ venues, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setSearchResults(venues);
    }

    const resultsArray = venues.filter((venue) => venue.name.toLowerCase().includes(e.target.value.toLowerCase()));

    setSearchResults(resultsArray);
  };

  return (
    <Container aria-label="Search venues">
      <Form onSubmit={handleSubmit} typeof="submit">
        <InputGroup className="mb-3 mt-4">
          <Form.Control onChange={handleSearchChange} type="text" placeholder="Search places to sleep ..." aria-label="Search" className="border-0 shadow p-3 text-primary" />
          <Button className="bg-secondary border-0 px-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default Search;
