import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container fluid>
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="#home">SpaceFlight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
