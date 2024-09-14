import { Container, Form, Button } from "react-bootstrap";

// Functional component for the Newsletter section
const NewsLetter = () => {
  return (
    <Container
      fluid
      style={{ background: "#FFF2F3" }} // Light pink background for the container
      className="d-flex flex-column justify-content-center align-items-center gap-4 py-4" // Centering content with padding and spacing
    >
      {/* Header and description section */}
      <div className="text-center mb-4">
        <p className="fw-bold" style={{ color: "#96BB7C" }}>
          NewsLetter
        </p>
        <h1 className="fw-bold" style={{ color: "#252B42" }}>
          Watch our Courses
        </h1>
        <p className="fw-bold" style={{ color: "#737373" }}>
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Newsletter subscription form */}
      <div className="w-100">
        <Form className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
          <Form.Group controlId="formEmail" className="w-50 w-sm-50 mb-3 mb-sm-0">
            <Form.Control
              style={{ padding: "10px" }} // Padding inside the input field
              type="email"
              placeholder="Your email" // Placeholder text for the email input
              required // Marks the email input as required
            />
          </Form.Group>
          <Button
            className="p-2" // Padding inside the button
            style={{ background: "#96BB7C", border: "none" }} // Green background with no border
            type="submit"
          >
            Subscribe
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default NewsLetter;
