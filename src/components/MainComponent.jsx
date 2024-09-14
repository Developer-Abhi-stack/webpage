import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import bg from "../assets/bg.svg";

const MainComponent = () => {
  return (
    <div>
      {/* Container with a fluid layout and a background color */}
      <Container fluid style={{ background: "#FDF3F1" }} className="">
        <Row>
          {/* Navbar component placed at the top */}
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} lg={6}>
            {/* Main content area with responsive padding and text alignment */}
            <Container className="p-3 p-lg-5 d-flex flex-column gap-3 gap-lg-4 text-center text-lg-start">
              {/* Welcome message */}
              <p className="fw-bold" style={{ color: "#96bb7c" }}>
                Welcome
              </p>
              {/* Main heading with responsive font sizes */}
              <h1 className="display-4 display-lg-2 text-capitalize fw-bold">
                Best learning
                <br /> opportunities
              </h1>
              {/* Subheading */}
              <h3 style={{ color: "#737373" }} className="">
                Our goal is to make online <br /> education work for everyone
              </h3>
              {/* Button group with responsive layout */}
              <div className="d-flex flex-column flex-lg-row gap-3">
                {/* Join Us button with custom styling */}
                <Button
                  style={{ background: "#96bb7c", border: "none" }}
                  className="px-4 px-lg-5 py-3 fs-6 fw-bold"
                >
                  Join Us
                </Button>
                {/* Learn More button with outline styling */}
                <Button
                  style={{
                    outline: 1,
                    border: "2px solid #96bb7c",
                    color: "#96bb7c",
                  }}
                  variant="transparent"
                  className="px-4 px-lg-5 py-3 fs-6 fw-bold"
                >
                  Learn More
                </Button>
              </div>
            </Container>
          </Col>
          {/* Image section with responsive styling */}
          <Col xs={12} lg={6} className="p-3 p-lg-5">
            <img src={bg} style={{ width: "100%" }} alt="Background" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainComponent;
