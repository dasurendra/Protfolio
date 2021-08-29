import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Contact = () => {
  return (
    <div id="contact" className="py-3">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between">
            <a href="mailto:dasurendra@gmail.com" target="blank">
              <i className="fas fa-envelope-square"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/surendra-k-c-8427631b7/"
              target="blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="tel:0410162777" target="blank">
              <i className="fas fa-phone"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
