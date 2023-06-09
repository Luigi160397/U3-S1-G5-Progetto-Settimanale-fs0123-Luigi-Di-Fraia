import { Component } from "react";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" className="text-secondary">
        <Container fluid className="px-5">
          <Navbar.Brand href="#home">
            <img src={logo} id="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#i">Home</Nav.Link>
              <Nav.Link href="#i">Tv Shows</Nav.Link>
              <Nav.Link href="#i">Movies</Nav.Link>
              <Nav.Link href="#i">Recently Added</Nav.Link>
              <Nav.Link href="#i">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#i" className="active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Nav.Link>
              <Nav.Link href="#i">KIDS</Nav.Link>
              <Nav.Link href="#i">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                  className="btn dropdown-toggle text-secondary border-0"
                >
                  <img src={avatar} id="avatar" alt="avatar" />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1">
                    <div className="d-flex align-items-center">
                      <img src={avatar} id="avatar-small" alt="avatar-small" />
                      Epicoder #1
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Manage Profiles</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Help Center</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Signout Netflix</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;
