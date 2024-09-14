import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const NavbarComponent = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      {/* Container to align items and add spacing */}
      <Container className="d-flex justify-content-between">
        
        {/* Brand logo and name */}
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          Brandname
        </Navbar.Brand>
        
        {/* Navbar toggle button for collapsing on smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navbar collapse section for navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-6 fw-bold">
            {/* Navigation links */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        {/* Buttons for login and call-to-action */}
        <div className="d-flex">
          {/* Login button */}
          <Button variant="light" className="mx-2 fs-6 fw-bold">
            Login
          </Button>
          
          {/* Join Us button with icon */}
          <Button
            style={{ background: "#96bb7c", border: "none" }}
            className="mx-2 py-lg-3 text-uppercase fs-6 fw-bold"
          >
            Join Us <BsArrowRight className="mx-2 fw-bold fs-5" />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
