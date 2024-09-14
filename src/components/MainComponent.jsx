import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import bg from "../assets/bg.svg";

const MainComponent = () => {
  return (
    <div>
      <Container fluid style={{ background: "#FDF3F1" }} className="">
        <Row>
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} lg={6}>
            <Container className="p-3 p-lg-5 d-flex flex-column gap-3 gap-lg-4 text-center text-lg-start">
              <p className="fw-bold" style={{ color: "#96bb7c" }}>
                Welcome
              </p>
              <h1 className="display-4 display-lg-2 text-capitalize fw-bold">
                Best learning
                <br /> opportunities
              </h1>
              <h3 style={{ color: "#737373" }} className="">
                Our goal is to make online <br /> education work for everyone
              </h3>
              <div className="d-flex flex-column flex-lg-row gap-3">
                <Button
                  style={{ background: "#96bb7c", border: "none" }}
                  className="px-4 px-lg-5 py-3 fs-6 fw-bold"
                >
                  Join Us
                </Button>
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
          <Col xs={12} lg={6} className="p-3 p-lg-5">
            <img src={bg} style={{ width: "100%" }} alt="Background" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainComponent;
