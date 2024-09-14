import { Container, Card } from "react-bootstrap";
import image from "../assets/image1.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      {/* Main container for the team section */}
      <Container className="my-5">
        
        {/* Header section */}
        <div className="my-5 text-center">
          <p style={{ color: "#96BB7C" }} className="fw-bold fs-4">
            Team
          </p>
          <h3 className="fw-bold fs-3" style={{ color: "#252B42" }}>
            Get Quality Education
          </h3>
          <p style={{ color: "#737373" }} className="fw-bolder">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Grid for team member cards */}
        <div className="row">
          {/* Each team member card */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card className="rounded-5 text-center w-100">
              <Card.Img variant="top" src={image} className="img-fluid" />
              <Card.Body>
                <Card.Title className="fw-bold">Julian Jameson</Card.Title>
                <Card.Text className="fw-bold">Profession</Card.Text>
                <div className="d-flex gap-2 justify-content-center">
                  {/* Social media buttons */}
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaFacebook />
                  </button>
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaInstagram />
                  </button>
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaTwitter />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Repeat the card for other team members */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card className="rounded-5 text-center w-100">
              <Card.Img variant="top" src={image} className="img-fluid" />
              <Card.Body>
                <Card.Title className="fw-bold">Julian Jameson</Card.Title>
                <Card.Text className="fw-bold">Profession</Card.Text>
                <div className="d-flex gap-2 justify-content-center">
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaFacebook />
                  </button>
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaInstagram />
                  </button>
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaTwitter />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card className="rounded-5 text-center w-100">
              <Card.Img variant="top" src={image} className="img-fluid" />
              <Card.Body>
                <Card.Title className="fw-bold">Julian Jameson</Card.Title>
                <Card.Text className="fw-bold">Profession</Card.Text>
                <div className="d-flex gap-2 justify-content-center">
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaFacebook />
                  </button>
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaInstagram />
                  </button>
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaTwitter />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card className="rounded-5 text-center w-100">
              <Card.Img variant="top" src={image} className="img-fluid" />
              <Card.Body>
                <Card.Title className="fw-bold">Julian Jameson</Card.Title>
                <Card.Text className="fw-bold">Profession</Card.Text>
                <div className="d-flex gap-2 justify-content-center">
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaFacebook />
                  </button>
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaInstagram />
                  </button>
                  <button
                    style={{
                      color: "#96BB7C",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <FaTwitter />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
