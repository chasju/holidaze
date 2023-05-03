import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="mt-3">
        <Container>
          <Nav className="bg-secondary shadow-sm px-4 rounded-1">
            <Nav.Link href="/create/venue">
              <FontAwesomeIcon icon={faPlus} className="text-white" />
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="/" className="text-primary">
            HOLIDAZE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-5">
              <Nav.Link href="/" className="bg-danger text-primary fw-bold rounded-1 text-center py-3">
                HOME
              </Nav.Link>
              <Nav.Link href="/bookings" className="bg-dark text-primary fw-bold rounded-1 text-center py-3">
                MY BOOKINGS
              </Nav.Link>
              <Nav.Link href="/venues" className="bg-light text-primary fw-bold rounded-1 text-center py-3">
                MY VENUES
              </Nav.Link>
              <Nav.Link href="/profile" className="bg-lighter text-primary fw-bold rounded-1 text-center py-3">
                MY PROFILE
              </Nav.Link>
              <Nav.Link href="/login" className="bg-danger text-primary fw-bold rounded-1 text-center py-3">
                LOGIN
              </Nav.Link>
              <Nav.Link href="/register " className="bg-dark text-primary fw-bold rounded-1 text-center py-3">
                REGISTER
              </Nav.Link>
              <Nav.Link href="/" className="bg-light text-primary fw-bold rounded-1 text-center py-3">
                LOGOUT
              </Nav.Link>
            </Nav>
            <Nav className="me-auto mt-5">
              <Nav.Link href="/create/venue" className="bg-danger text-white fw-bold rounded-1 text-center py-3">
                List your venue
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavComponent;
