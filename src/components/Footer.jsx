import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col xs={12} className="text-center">
            {/* Social Media Icons */}
            <div className="social-icons">
              <a 
                href="https://www.linkedin.com/in/alyssa-meczkowska" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/AlyssaVMeczkowska" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:alyssa.meczkowska@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Navigation Links */}
           

            {/* Copyright */}
            <p className="copyright">
              Copyright ©2025 • Designed by Alyssa Meczkowska
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}