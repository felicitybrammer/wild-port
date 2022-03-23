import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "../Modal";



function ProjectCards(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    
  };

  

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal}  />
      )}
      <Card className="project-card-view">
        <Card.Img onClick={toggleModal} variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text  style={{ textAlign: "justify" }}>
            {props.description} 
          </Card.Text>
          <Button variant="primary" href="{prop.link}" target="_blank" >
            {"More Info"}
          </Button>
          <Button variant="primary" href={props.live} target="_blank">
            {"Live Demo"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProjectCards;
