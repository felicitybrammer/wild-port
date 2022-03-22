import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <p>I love math problems. I love them so much that I became a math teacher and taught teenagers to love math
                problems too. (Or, at least I taught them to laugh at my jokes)</p>
            <p>When I started to include coding skills in my curriculum, I realized that I wanted to be the one to find
                innovative and effective solutions to real-world problems.</p>
            <p>Now I'm looking to be part of something bigger, outside of the classroom. </p>
            <p>I currently work with JavaScript frameworks, and I'm hoping to grow and evolve by developing my skills
                using databases, back-end technologies, and many more.</p>

            <p>I'm really excited to take the leap with the right organization and to start building!</p>
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
