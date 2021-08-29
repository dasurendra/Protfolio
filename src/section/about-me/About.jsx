import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myimg from "../../assests/img/img1.jpg";
import { Section } from "../Section";

export const About = () => {
  return (
    <div id="about" className="py-5">
      <Section title="About Me" />
      <Container>
        <Row className="mt-5 text-center">
          <Col>
            <img src={myimg} width="550px" alt="" />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              error odio dolore exercitationem, asperiores saepe praesentium
              quibusdam dolorum? Inventore, omnis nemo? Recusandae aspernatur
              mollitia repudiandae laborum quibusdam error, in earum?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
