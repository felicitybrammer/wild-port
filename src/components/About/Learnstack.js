import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAws,
  DiJava
  

} from "react-icons/di";
import {
  
  SiSpringboot,
  SiTypescript,
  SiCsharp
} from "react-icons/si";



function Learnstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "50px"}}>

      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
      

    </Row>
  );
}

export default Learnstack;
