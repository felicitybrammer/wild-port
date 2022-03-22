import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import back from "../../Assets/portfolio-item-images/Back-tech.png"
import creature from "../../Assets/portfolio-item-images/project-okcreature.jpeg"
import java from "../../Assets/portfolio-item-images/java-tech.png"
import train from "../../Assets/portfolio-item-images/Song Detail List.png"
import book from "../../Assets/portfolio-item-images/reading-nook.png"
import budget from "../../Assets/portfolio-item-images/budget-tracker.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> */}
          {/* <Col  className="project-card"> */}
            <ProjectCard/>
              
              {/* // imgPath={creature}
              // key="creature"
              // title="OkCreature"
              // subtitle="A personalized pet-matching app"
              // description="A MERN stack, GraphQL API where users can match with pets up for adoption. Built with Apollo Server, with a React front end, MongoDB database, and Node.js/ Express.js server. Click image for more info.."
              // longDesc="A personalized matching app for pets and potential adopters. Users can take a quiz to match them with pets from the database based on lifestyle, housefold, preferences or ability to provide care."
              // link="https://github.com/felicitybrammer/pet-matcher"
              // live="https://okcreature.herokuapp.com"
              // role="One of my best team experiences! We executed a well-planned project using agile methodologies and with frequent communications.My role was to build and test the back-end functionality, to create JWT authentication on the server and client side, and to integrate state management with React hooks."
              // tech="Built with: MongoDB, Express, React, Node.js, GraphQL, Apollo, JavaScript, React-Bootstrap"
            ///> */}
          {/* </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={back}
              
              // title="Back To The Tech"
              // description=""
              // link=""
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={java}
              
              // title="Tech News Java API"
              // description="A full-stack tech news app backed by a server-side Java Spring Boot API. This is a refactor of Back to The Tech, which is backed by a server-side Express.js API."
              // link=""
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={train}
              
              title="Train To The Beat"
              description="A music search tool that allows tracks to be filtered by tempo and then by genre to create playlists that are tailored to a user’s specific training"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              
              title="Reading Nook"
              description="A MERN stack, GraphQL Book Search API built with Apollo Server, with a React front end, MongoDB database, and Node.js/Express.js server."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              
              title="My Finance Budget Tracker"
              description="A progressive web application that allows for offline access and functionality"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              
              title="My Finance Budget Tracker"
              description="A progressive web application that allows for offline access and functionality"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              
              title="My Finance Budget Tracker"
              description="A progressive web application that allows for offline access and functionality"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              
              title="My Finance Budget Tracker"
              description="A progressive web application that allows for offline access and functionality"
              link=""
            />
          </Col> */}

        {/* </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
