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
        <Row>
          <Col>
            <Container className="p-5 d-lg-flex flex-column gap-4">
              <p className="fw-bold" style={{ color: "#96bb7c" }}>
                Welcome
              </p>
              <h1 className="display-2 text-capitalize fw-bold">
                Best learning
                <br /> opportunities
              </h1>
              <h3 style={{ color: "#737373" }} className="">
                Our goal is to make online <br /> education work for everyone
              </h3>
              <div>
                <Button
                  style={{ background: "#96bb7c", border: "none" }}
                  className="mx-3 px-lg-5 py-lg-3 fs-6 fw-bold"
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
                  className="mx-3 py-lg-3 px-lg-5 fs-6 fw-bold"
                >
                  Learn More
                </Button>
              </div>
            </Container>
          </Col>
          <Col className="p-5">
            <img src={bg} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainComponent;
