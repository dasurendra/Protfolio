import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section } from "../section/Section";

export const Skills = () => {
  return (
    <div id="skills" className="py-5 ">
      <Section title="Skills" />
      <Container>
        <Row>
          <Col>
            <div className="skills-list fs-3 fw-bold d-flex justify-content-between flex-wrap mt-4">
              <div>
                <i className="fab fa-html5 text-primary"></i>HTML
              </div>
              <div>
                <i className="fab fa-css3-alt text-danger"></i>CSS
              </div>
              <div>
                <i className="fab fa-js-square text-warning"></i>Javascript
              </div>
              <div>
                <i className="fab fa-react text-info"></i>ReactJs
              </div>
              <div>
                <i className="fab fa-node-js text-success"></i>NodeJs
              </div>
              <div>
                <i className="fab fa-database  text-success"></i>MongoDB
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
