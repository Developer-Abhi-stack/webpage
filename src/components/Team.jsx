import { Container, Card } from "react-bootstrap";
import image from "../assets/image1.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      <Container className="my-5 mx-5">
        <div className="my-5">
          <p style={{ color: "#96BB7C" }} className="fw-bold">
            Team
          </p>
          <h3 className="fw-bold" style={{ color: "#252B42" }}>
            Get Quality Education
          </h3>
          <p style={{ color: "#737373" }} className="fw-bolder">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="d-lg-flex gap-3 justify-content-between">
          <Card style={{ width: "18rem" }} className="rounded-5 text-center">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title className="fw-bold">Julian Jameson</Card.Title>
              <Card.Text className="fw-bold">Profession</Card.Text>
              <div className="d-lg-flex gap-2 justify-content-center">
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

          <Card style={{ width: "18rem" }} className="rounded-5 text-center">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title className="fw-bold">Julian Jameson</Card.Title>
              <Card.Text className="fw-bold">Profession</Card.Text>
              <div className="d-lg-flex gap-2 justify-content-center">
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

          <Card style={{ width: "18rem" }} className="rounded-5 text-center">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title className="fw-bold">Julian Jameson</Card.Title>
              <Card.Text className="fw-bold">Profession</Card.Text>
              <div className="d-lg-flex gap-2 justify-content-center">
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

          <Card style={{ width: "18rem" }} className="rounded-5 text-center">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title className="fw-bold">Julian Jameson</Card.Title>
              <Card.Text className="fw-bold">Profession</Card.Text>
              <div className="d-lg-flex gap-2 justify-content-center">
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
      </Container>
    </div>
  );
};

export default Team;
