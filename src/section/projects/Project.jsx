import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import taskimg from "../../assests/img/tasks.png";
import calcimg from "../../assests/img/cal.png";

import { Section } from "../Section";

export const Project = () => {
  return (
    <div id="projects" className="py-5">
      <Section title="Projects" />
      <Container>
        <Row className="mt-5">
          <Col md="6 ">
            <img src={taskimg} width="100%" alt="not-to-do" />{" "}
          </Col>
          <Col md="6">
            <div className="fs-2 fw-bold ">
              No To Do Task List -
              <a href="" target="blank">
                <i class="fab fa-github"></i>
              </a>{" "}
              <a href="" target="blank">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <div className="fst-italic">Tech:HTML,CSS,JS</div>
            <p className="mt-3">
              <strong>About:</strong>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Doloremque recusandae in ipsam quo ea cum minus,
              quasi iste placeat, laudantium consectetur perspiciatis soluta
              mollitia illo assumenda rerum enim at ducimus.
            </p>
          </Col>
        </Row>{" "}
        <Row className="mt-5">
          <Col md="6 " className="order-md-2">
            <img src={calcimg} width="100%" alt="not-to-do" />{" "}
          </Col>
          <Col md="6" className="order-md-1">
            <div className="fs-2 fw-bold ">
              Calculator -
              <a href="" target="blank">
                <i class="fab fa-github"></i>
              </a>{" "}
              <a href="" target="blank">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <div className="fst-italic">Tech:HTML,CSS,JS</div>
            <p className="mt-3">
              <strong>About:</strong>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Doloremque recusandae in ipsam quo ea cum minus,
              quasi iste placeat, laudantium consectetur perspiciatis soluta
              mollitia illo assumenda rerum enim at ducimus.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
