import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import aboutImg from "../../Assets/about-lou-modified.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              WHO I <strong className="purple">AM</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutImg} alt="about" className="img-fluid" />
          </Col>
          <Row className="blockquote">
            <Col md={12}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>WHAT I <strong className="purple">DO</strong></h1>
            </Col>
            <Col md={4}>
              <h3>Code</h3>
              <p>I love to code and and I love to solve problems. I always seek to challenge myself and I can offer
                drive and commitment to building and maintaining high quality web applications.</p>
            </Col>
            <Col md={4}>
              <h3>Refine</h3>
              <p>I'm really interested in optimization for efficiency and scalability. I'm also a big fan of unit
                tests. I love to find ways to refactor and improve my code and to incorporate new ideas or
                technologies.</p>
            </Col>
            <Col md={4}>
              <h3>Repeat</h3>
              <p>Lifelong learning is my passion and I'm excited to keep growing and developing my skills and
                knowledge. I thrive in an environment dedicated to teamwork and cooperation.</p>
            </Col>
          </Row>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skills </strong> and <strong className="purple">Tools</strong>
        </h1>

        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
