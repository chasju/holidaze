import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">Holidaze</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/bookings">MY BOOKINGS</Nav.Link>
              <Nav.Link href="/venues">MY VENUES</Nav.Link>
              <Nav.Link href="/profile">MY PROFILE</Nav.Link>
              <Nav.Link href="/login">LOGIN</Nav.Link>
              <Nav.Link href="/register">REGISTER</Nav.Link>
              <Nav.Link href="/">LOGOUT</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="/create/venue">List your venue</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavComponent;
