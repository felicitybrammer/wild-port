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
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              A little bit <strong className="purple">About </strong>me
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "120px", paddingBottom: "50px", fontStyle: "italic" }}
            className="about-img"
          >
            <img src={aboutImg} alt="about" className="img-fluid"
            style={{ border: "2.2px solid rgba(197, 115, 230, 0.883)", borderRadius: "50%", }} />
            <p className="italic" >Yes, I'm holding a <span className="purple">python</span> here. </p>
            {/* <p>His name is Lou.</p> */}
           <p className="italic">I've worked mostly with <span className="purple">JavaScript</span> frameworks so far, but I'm always <span className="purple">learning.</span> I'm currently developing my skills in <span className="purple">Java</span> to round out my back-end experience.</p>
          </Col>
          {/* <Row className="blockquote">
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
          </Row> */}

        </Row>
        <h1 className="project-heading">
          A snapshot of some of the <strong className="purple">Skills </strong> and <strong className="purple">Tools</strong> that I use
        </h1>
        <h5>I'd love to talk more about what I can do and how I can grow</h5>

        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
