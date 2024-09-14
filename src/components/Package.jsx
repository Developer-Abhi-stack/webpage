import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { CiMonitor } from "react-icons/ci";

const Package = () => {
  return (
    <div>
      <Container className="my-5 mx-lg-5 mx-md-3 mx-2">
        <Row className="my-lg-5 my-md-4 my-3">
          <Col xs={12} lg={6}>
            <Container className="d-flex flex-column gap-4">
              <div
                style={{ height: "10px", width: "150px", background: "red" }}
              ></div>
              <h1 className="fw-bold">Approdable Packages</h1>
              <p className="fw-bolder" style={{ color: "#737373" }}>
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: <br /> Newtonian mechanics
              </p>
              <h6 className="fw-bold" style={{ color: "#96BB7C" }}>
                Learn More <IoIosArrowForward />
              </h6>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="mt-lg-0 mt-4">
            <Container className="d-flex flex-column flex-lg-row gap-3">
              <div className="d-flex flex-column gap-3 shadow-lg p-4 w-100 w-lg-50">
                <div
                  className="px-2 py-4 rounded-2 d-flex justify-content-center align-items-center w-50 mx-auto"
                  style={{ background: "#96BB7C" }}
                >
                  <CiMonitor className="text-white" size={40} />
                </div>
                <h6 className="fw-bold text-center">Certified Teacher</h6>
                <div
                  style={{ width: "50px", height: "2px", background: "red" }}
                  className="mx-auto"
                ></div>
                <p className="fw-bold text-center" style={{ color: "#737373" }}>
                  The gradual <br /> accumulation of <br /> information about
                </p>
              </div>

              <div className="d-flex flex-column gap-3 shadow-lg p-4 w-100 w-lg-50">
                <div
                  className="px-2 py-4 rounded-2 d-flex justify-content-center align-items-center w-50 mx-auto"
                  style={{ background: "#96BB7C" }}
                >
                  <CiMonitor className="text-white" size={40} />
                </div>
                <h6 className="fw-bold text-center">Expert instruction</h6>
                <div
                  style={{ width: "50px", height: "2px", background: "red" }}
                  className="mx-auto"
                ></div>
                <p className="fw-bold text-center" style={{ color: "#737373" }}>
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
