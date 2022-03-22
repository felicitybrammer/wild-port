import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "../Modal";
import back from "../../Assets/portfolio-item-images/Back-tech.png"
import creature from "../../Assets/portfolio-item-images/project-okcreature.jpeg"
import java from "../../Assets/portfolio-item-images/java-tech.png"
import train from "../../Assets/portfolio-item-images/Song Detail List.png"
import book from "../../Assets/portfolio-item-images/reading-nook.png"
import budget from "../../Assets/portfolio-item-images/budget-tracker.png"


function ProjectCards() {

  const projects = [
    {
      imgPath: "project-okcreature.jpeg",
      key: "creature",
      title: "OkCreature",
      subtitle: "A personalized pet-matching app",
      description: "A MERN stack, GraphQL API where users can match with pets up for adoption. Built with Apollo Server, with a React front end, MongoDB database, and Node.js/ Express.js server. Click image for more project..",
      longDesc: "A personalized matching app for pets and potential adopters. Users can take a quiz to match them with pets from the database based on lifestyle, housefold, preferences or ability to provide care.",
      link: "https://github.com/felicitybrammer/pet-matcher",
      live: "https://okcreature.herokuapp.com",
      role: "One of my best team experiences! We executed a well-planned project using agile methodologies and with frequent communications.My role was to build and test the back-end functionality, to create JWT authentication on the server and client side, and to integrate state management with React hooks.",
      tech: "Built with: MongoDB, Express, React, Node.js, GraphQL, Apollo, JavaScript, React-Bootstrap"
    },
    {
      imgPath: "Back-tech.png",

      title: "Back To The Tech",
      description: "ldfj sdjhd shjfkd sdjhdkj hd h sjh ks",
      link: "https://github.com/felicitybrammer/back-to-the-tech"
    },
    {
      imgPath: "java-tech.png",

      title: "Tech News Java API",
      description: "A full-stack tech news app backed by a server-side Java Spring Boot API. This is a refactor of Back to The Tech, which is backed by a server-side Express.js API.",
      link: ""
    },
    {
      imgPath: "Song Detail List.png",

      title: "Train To The Beat",
      description: "A music search tool that allows tracks to be filtered by tempo and then by genre to create playlists that are tailored to a user’s specific training",
      link: ""
    },
    {
      imgPath: "reading-nook.png",

      title: "Reading Nook",
      description: "A MERN stack, GraphQL Book Search API built with Apollo Server, with a React front end, MongoDB database, and Node.js/Express.js server.",
      link: ""
    },
    {
      imgPath: "budget-tracker.png",

      title: "My Finance Budget Tracker",
      description: "A progressive web application that allows for offline access and functionality",
      link: ""
    },
    {
      imgPath: "budget-tracker.png",

      title: "My Finance Budget Tracker",
      description: "A progressive web application that allows for offline access and functionality",
      link: ""
    },
    {
      imgPath: "budget-tracker.png",

      title: "My Finance Budget Tracker",
      description: "A progressive web application that allows for offline access and functionality",
      link: ""
    },
    {
      imgPath: "budget-tracker.png",

      title: "My Finance Budget Tracker",
      description: "A progressive web application that allows for offline access and functionality",
      link: ""
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (project, key) => {
    setIsModalOpen(!isModalOpen);

  };

  return (
    <div>


      {projects.map((project) => (
        <div>
          {isModalOpen && (
            <Modal onClose={toggleModal} />
          )}
          <Card className="project-card-view">
            <Card.Img onClick={toggleModal} variant="top" src={require(`../../Assets/portfolio-item-images/${project.imgPath}`)} alt="card-img" />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                {project.description}
              </Card.Text>
              <Button variant="primary" href={project.link} target="_blank">
                {"GitHub"}
              </Button>
              <Button variant="primary" href={project.live} target="_blank">
                {"Live Demo"}
              </Button>
            </Card.Body>
          </Card>

        </div>
      ))}
    </div>
  );
}
export default ProjectCards;
