import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { CiMonitor } from "react-icons/ci";

const Package = () => {
  return (
    <div>
      <Container className="my-5 mx-lg-5">
        <Row className="my-lg-5">
          <Col>
            <Container className="d-lg-flex flex-column gap-4">
              <div
                style={{ height: "10px", width: "150px", background: "red" }}
              ></div>
              <h1 className="fw-bold">Approdable Packages</h1>
              <p className="fw-bolder" style={{ color: "#737373" }}>
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics:
                <br /> Newtonian mechanics
              </p>
              <h6 className="fw-bold" style={{ color: "#96BB7C" }}>
                Learn More <IoIosArrowForward />
              </h6>
            </Container>
          </Col>
          <Col className="m-5">
            <Container className="d-lg-flex flex-row gap-3">
              <div className="d-lg-flex flex-column gap-3 shadow-lg p-4">
                <div
                  className="px-2 py-4  rounded-2 d-lg-flex justify-content-center align-items-center w-50 "
                  style={{ background: "#96BB7C" }}
                >
                  <CiMonitor className="text-white" size={40} />
                </div>
                <h6 className="fw-bold">Certified Teacher</h6>
                <div
                  style={{ width: "50px", height: "2px", background: "red" }}
                ></div>
                <p className="fw-bold" style={{ color: "#737373" }}>
                  The gradual <br /> accumulation of <br /> information about{" "}
                </p>
              </div>


              <div className="d-lg-flex flex-column gap-3 shadow-lg p-4">
                <div
                  className="px-2 py-4  rounded-2 d-lg-flex justify-content-center align-items-center w-50 "
                  style={{ background: "#96BB7C" }}
                >
                  <CiMonitor className="text-white" size={40} />
                </div>
                <h6 className="fw-bold">Expert instruction</h6>
                <div
                  style={{ width: "50px", height: "2px", background: "red" }}
                ></div>
                <p className="fw-bold" style={{ color: "#737373" }}>
                  The gradual <br /> accumulation of <br /> information about
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Package;
