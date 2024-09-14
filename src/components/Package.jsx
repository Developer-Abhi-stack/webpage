import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { CiMonitor } from "react-icons/ci";

const Package = () => {
  return (
    <div>
      {/* Main container with margin spacing */}
      <Container className="my-5 mx-lg-5 mx-md-3 mx-2">
        {/* Row to contain two columns */}
        <Row className="my-lg-5 my-md-4 my-3">
          {/* First column with introductory content */}
          <Col xs={12} lg={6}>
            <Container className="d-flex flex-column gap-4">
              {/* Red horizontal line for design */}
              <div
                style={{ height: "10px", width: "150px", background: "red" }}
              ></div>
              {/* Title of the section */}
              <h1 className="fw-bold">Approdable Packages</h1>
              {/* Description text with color styling */}
              <p className="fw-bolder" style={{ color: "#737373" }}>
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: <br /> Newtonian mechanics
              </p>
              {/* Link to learn more with an arrow icon */}
              <h6 className="fw-bold" style={{ color: "#96BB7C" }}>
                Learn More <IoIosArrowForward />
              </h6>
            </Container>
          </Col>
          {/* Second column with package details */}
          <Col xs={12} lg={6} className="mt-lg-0 mt-4">
            <Container className="d-flex flex-column flex-lg-row gap-3">
              {/* Package item 1 */}
              <div className="d-flex flex-column gap-3 shadow-lg p-4 w-100 w-lg-50">
                {/* Icon container with green background */}
                <div
                  className="px-2 py-4 rounded-2 d-flex justify-content-center align-items-center w-50 mx-auto"
                  style={{ background: "#96BB7C" }}
                >
                  <CiMonitor className="text-white" size={40} />
                </div>
                {/* Title for the first package item */}
                <h6 className="fw-bold text-center">Certified Teacher</h6>
                {/* Red horizontal line for design */}
                <div
                  style={{ width: "50px", height: "2px", background: "red" }}
                  className="mx-auto"
                ></div>
                {/* Description for the first package item */}
                <p className="fw-bold text-center" style={{ color: "#737373" }}>
                  The gradual <br /> accumulation of <br /> information about
                </p>
              </div>

              {/* Package item 2 */}
              <div className="d-flex flex-column gap-3 shadow-lg p-4 w-100 w-lg-50">
                {/* Icon container with green background */}
                <div
                  className="px-2 py-4 rounded-2 d-flex justify-content-center align-items-center w-50 mx-auto"
                  style={{ background: "#96BB7C" }}
                >
                  <CiMonitor className="text-white" size={40} />
                </div>
                {/* Title for the second package item */}
                <h6 className="fw-bold text-center">Expert instruction</h6>
                {/* Red horizontal line for design */}
                <div
                  style={{ width: "50px", height: "2px", background: "red" }}
                  className="mx-auto"
                ></div>
                {/* Description for the second package item */}
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
 