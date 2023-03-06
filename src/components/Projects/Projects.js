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
import social from "../../Assets/portfolio-item-images/social-feed-small.png"
import note from "../../Assets/portfolio-item-images/note-taker.png"


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
        <Row style={{ justifyContent: "center", paddingBottom: "10px", display: "flex" }}>
          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={creature}
              title="OkCreature"
              subtitle="A personalized pet-matching app"
              description="A MERN stack, GraphQL API where users can match with pets up for adoption. Built with Apollo Server, with a React front end, MongoDB database, and Node.js/ Express.js server."
              link="https://github.com/felicitybrammer/pet-matcher"
              live="https://okcreature.herokuapp.com"

            />
          </Col>

          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={social}
              title="My Social!"
              description="A full-stack social media API built using SQL and following the Model-View-Controller paradigm. You can create a user profile, follow other users, add posts and comments, and like others' posts and comments."
              link="https://github.com/felicitybrammer/my-social"
              live="https://polar-sands-74505.herokuapp.com/login"
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={java}
              title="Tech News Java API"
              description="A full-stack tech news app backed by a server-side Java Spring Boot API. This is a refactor of Back to The Tech, which is backed by a server-side Express.js API."
              link="https://github.com/felicitybrammer/tech-news-java-api"
              live="https://cc-java-api-technews.herokuapp.com/"
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={back}
              title="Back To The Tech"
              description="A tech news RESTful API built with MySQL, JavaScript and Handlebars.js as a templating engine. Users can log in, post, comments and vote on others' posts."
              link="https://github.com/felicitybrammer/back-to-the-tech"
              live="https://mighty-taiga-78553.herokuapp.com/"
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={book}
              title="Reading Nook"
              description="A book search API where users can save and retrieve favourite titles. Built with Apollo Server, with a React front end, MongoDB database, and Node.js/Express.js server."
              link="https://github.com/felicitybrammer/reading-nook"
              live="https://peaceful-tor-40781.herokuapp.com/"
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={train}
              title="Train To The Beat"
              description="A music search tool that uses a third-party API to filter tracks by tempo and then by genre to create playlists that are tailored to a user’s specific training."
              link="https://github.com/felicitybrammer/activity-music"
              live="https://ScalexanderB.github.io/activity-music/"
            />
          </Col>



          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={note}
              title="Never Forget! Note Taker"
              description="An app that allows users to create, save and delete persistent notes. The app uses an Express back-end, and saves and retrieves notes from a JSON file"
              link="https://github.com/felicitybrammer/never-forget-note-taker"
              live="https://never-forget-note-taker.herokuapp.com/"
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              title="My Finance Budget Tracker"
              description="A progressive web application that allows users to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total will be updated when they're brought back online."
              link="https://github.com/felicitybrammer/my-finance-budget-tracker"
              live="https://agile-gorge-53171.herokuapp.com/"
            />
          </Col>






        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
