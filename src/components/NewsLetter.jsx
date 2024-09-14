import { Container, Form, Button } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <div>
      <Container
        fluid
        style={{ background: "#FFF2F3" }}
        className="d-lg-flex flex-column justify-content-center align-items-center gap-5 my-5"
      >
        <div className="text-center" style={{ marginTop: "150px" }}>
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

        <div className="mb-5">
          <Form className="d-lg-flex">
            <Form.Group controlId="formEmail">
              <Form.Control
              style={{ width: "600px", padding: '10px'}}
                type="email"
                placeholder="Your email"
                required
              />
            </Form.Group>
            <Button style={{background: '#96BB7C', border: 'none'}} type="submit">
              Subscribe
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;
