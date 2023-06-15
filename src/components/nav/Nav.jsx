import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import { removeFromStorage } from "@/utils/localStorage/removeFromStorage";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavComponent = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleIsNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleLogOut = () => {
    removeFromStorage("profile");
    handleIsNavOpen();
    router.push("/", "/");
  };

  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const storageProfile = getStorage("profile");

  useEffect(() => {
    if (storageProfile) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [storageProfile]);

  return (
    <div>
      <Container className="d-lg-flex justify-content-between align-items-center">
        <Navbar expanded={isNavOpen} expand="lg" className="mt-3">
          {isLoggedIn && (
            <Nav>
              <Nav.Link href="/create/venue">
                <div className="bg-secondary shadow-sm p-2 px-4 rounded-1 d-lg-none">
                  <FontAwesomeIcon icon={faPlus} className="text-white" />
                </div>
              </Nav.Link>
            </Nav>
          )}
          <Navbar.Brand href="/" className="text-primary">
            HOLIDAZE
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleIsNavOpen} aria-controls="basic-navbar-nav" className="border-0 d-lg-none" />
          <Navbar.Collapse id="basic-navbar-nav" className={`d-lg-none`}>
            <Nav className="mt-5 d-lg-none">
              {isLoggedIn && (
                <div>
                  <Nav.Link href="/" className="bg-danger text-primary fw-bold rounded-1 text-center py-3">
                    Browse Venues
                  </Nav.Link>
                  <Nav.Link href="/profile" className="bg-lighter text-primary fw-bold rounded-1 text-center py-3">
                    My Profile
                  </Nav.Link>
                  <div className="mt-5 d-lg-none">
                    <Nav.Link href="/create/venue" className="bg-danger text-white fw-bold rounded-1 text-center py-3">
                      List your venue
                    </Nav.Link>
                  </div>
                  <Nav.Link onClick={handleLogOut} className="mt-3 text-primary fw-bold border-0 rounded-1 text-center py-3">
                    LOG OUT
                  </Nav.Link>
                </div>
              )}
              {!isLoggedIn && (
                <div>
                  <Nav.Link href="/login" className="bg-dark text-primary fw-bold rounded-1 text-center py-3">
                    LOGIN
                  </Nav.Link>
                  <Nav.Link href="/register " className="bg-lighter text-primary fw-bold rounded-1 text-center py-3">
                    REGISTER
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown" className="basic-nav-dropdown d-none d-lg-flex justify-content-center align-items-center bg-light rounded-circle mt-3 text-primary" style={{ width: 50, height: 50 }}>
          {isLoggedIn && (
            <div>
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/create/venue">Create Venue</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogOut}>Log out</NavDropdown.Item>
            </div>
          )}
          {!isLoggedIn && (
            <div>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            </div>
          )}
        </NavDropdown>
      </Container>
    </div>
  );
};

export default NavComponent;
