import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myimg from "../assests/img/img1.jpg";
import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="mt-5">
          <Col md="6 order-md-2">
            <div>
              <img src={myimg} width="550px" alt="" />
            </div>
          </Col>
          <Col md="6">
            <div class="info mt-5  order-md-1">
              <h1>I'm Surendra K C your Next Full stack Developer.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, animi distinctio, nostrum suscipit sunt exercitationem
                illo, vitae harum quae inventore ea molestias voluptates vero
                reprehenderit aut dolorem facilis quo molestiae?
              </p>
              <div>
                <Button variant="danger">Hire me</Button>{" "}
                <Button variant="outline-danger">Resume</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
