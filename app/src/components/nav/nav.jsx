import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavComponent = () => {
  return (
    <div>
      <Container className="d-lg-flex justify-content-between align-items-center">
        <Navbar expand="lg" className="mt-3">
          <Nav>
            <Nav.Link href="/create/venue">
              <div className="bg-secondary shadow-sm p-2 px-4 rounded-1 d-lg-none">
                <FontAwesomeIcon icon={faPlus} className="text-white" />
              </div>
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="/" className="text-primary">
            HOLIDAZE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 d-lg-none" />
          <Navbar.Collapse id="basic-navbar-nav" className="d-lg-none">
            <Nav className="mt-5 d-lg-none">
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
            <Nav className="mt-5 d-lg-none">
              <Nav.Link href="/create/venue" className="bg-danger text-white fw-bold rounded-1 text-center py-3">
                List your venue
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown" className="d-none d-lg-flex justify-content-center align-items-center bg-light rounded-circle mt-3 text-primary" style={{ width: 50, height: 50 }}>
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Log out</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </div>
  );
};

export default NavComponent;
