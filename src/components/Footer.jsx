import { Container, Row, Col } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-dark py-4 mt-auto">
      <Container>
        <Row>
          <Col md={2} className="fw-bold">
            <h5 className="fw-bold">Company Info</h5>
            <div style={{ color: "#737373" }}>
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </Col>
          <Col md={2} className="fw-bold">
            <h5 className="fw-bold">Legal</h5>
            <div style={{ color: "#737373" }}>
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </Col>
          <Col md={2} className="fw-bold">
            <h5 className="fw-bold">Features</h5>
            <div style={{ color: "#737373" }}>
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
          </Col>
          <Col md={2} className="fw-bold">
            <h5 className="fw-bold">Resources</h5>
            <div style={{ color: "#737373" }}>
              <p>IOS & Android</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>API</p>
            </div>
          </Col>
          <Col md={4} className="fw-bold">
            <h5 className="fw-bold">Get In Touch</h5>
            <div style={{ color: "#737373" }}>
              <span className="d-flex justify-content-start gap-2"><FiPhone style={{fontSize: '25px', color: '#96BB7C'}}/><p>(480) 555-0103</p></span>
              <span className="d-flex justify-content-start gap-2"><IoLocationOutline style={{fontSize: '25px', color: '#96BB7C'}} /><p>4517 Washington Ave. Manchester,<br /> Kentucky 39495</p></span>
              <span className="d-flex justify-content-start gap-2">< MdEmail style={{fontSize: '25px', color: '#96BB7C'}} /><p>debra.holt@example.com</p></span>
            </div>
          </Col>
        </Row>
        <Row className="bg-light text-dark">
          <Col className="mt-3 d-flex justify-content-around" >
            <p className="fw-bold">Made With Love By Figmaland All Right Reserved </p>
            <div style={{fontSize: '25px', color: '#96BB7C'}} className="d-flex gap-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
