import { Container, Row, Col } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-dark py-4 mt-auto">
      {/* Container to center the content and add padding */}
      <Container>
        <Row>
          {/* Column for "Company Info" section */}
          <Col xs={12} md={2} className="fw-bold mb-3">
            <h5 className="fw-bold">Company Info</h5>
            <div style={{ color: "#737373" }}>
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </Col>
          {/* Column for "Legal" section */}
          <Col xs={12} md={2} className="fw-bold mb-3">
            <h5 className="fw-bold">Legal</h5>
            <div style={{ color: "#737373" }}>
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </Col>
          {/* Column for "Features" section */}
          <Col xs={12} md={2} className="fw-bold mb-3">
            <h5 className="fw-bold">Features</h5>
            <div style={{ color: "#737373" }}>
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
          </Col>
          {/* Column for "Resources" section */}
          <Col xs={12} md={2} className="fw-bold mb-3">
            <h5 className="fw-bold">Resources</h5>
            <div style={{ color: "#737373" }}>
              <p>IOS & Android</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>API</p>
            </div>
          </Col>
          {/* Column for "Get In Touch" section */}
          <Col xs={12} md={4} className="fw-bold mb-3">
            <h5 className="fw-bold">Get In Touch</h5>
            <div style={{ color: "#737373" }}>
              {/* Contact phone */}
              <div className="d-flex align-items-center mb-3">
                <FiPhone style={{ fontSize: "20px", color: "#96BB7C" }} />
                <p className="mb-0 ms-2">(480) 555-0103</p>
              </div>
              {/* Contact location */}
              <div className="d-flex align-items-center mb-3">
                <IoLocationOutline style={{ fontSize: "20px", color: "#96BB7C" }} />
                <p className="mb-0 ms-2">
                  4517 Washington Ave. Manchester,
                  <br /> Kentucky 39495
                </p>
              </div>
              {/* Contact email */}
              <div className="d-flex align-items-center mb-3">
                <MdEmail style={{ fontSize: "20px", color: "#96BB7C" }} />
                <p className="mb-0 ms-2">debra.holt@example.com</p>
              </div>
            </div>
          </Col>
        </Row>
        {/* Footer bottom row for copyright and social media icons */}
        <Row className="bg-light text-dark pt-3 pb-2">
          <Col className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="fw-bold mb-2 mb-md-0 fs-6 fs-md-5">
              Made With Love By Figmaland All Right Reserved
            </p>
            <div style={{ fontSize: "20px", color: "#96BB7C" }} className="d-flex gap-3 mt-2 mt-md-0">
              {/* Social media icons */}
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
