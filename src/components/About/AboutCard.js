import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            <p> I’m an ex-teacher who loves solving logic problems and building things with code. </p>

            <p>I first became enthralled with coding in 2018. I was teaching Mathematics and Physics to high-schoolers in Whitehorse and I volunteered to attend a workshop on bringing coding into the curriculum for schools. As a person who loves to innovate and explore, I was fired up.</p>
            <p>My classes loved the new experiences, and I enjoyed learning with them. We built some simple apps in the classroom - a game of tic-tac-toe, a pixel art colouring tool, and a murder mystery-themed text analysis tool. </p>

            <p>I signed up for the professional development program at my school that allowed me to start taking credit courses in Computer Science while I worked, and I learned the basics of Java, C, Python and computer systems. Shortly after, I was promoted to a permanent position and my evenings and weekends became consumed with marking and lesson preparation. </p>

            <p>Then Covid hit, and suddenly I had time to spend on my personal interests. So, I started to learn again. Specifically, I learned JavaScript and web development because I wanted to try build things that were immediately accessible to me, and I was still scared to leave the security of my hard-won teaching job. </p>

            <p>After a few months of self-teaching, I knew this was what I wanted to do for my career. So, I signed up for the University of Toronto Web Development Bootcamp and put my heart and soul into it. I was coding every day, and on weekends, not because it was forced on me but because I loved it.  </p>

            <p>My work so far has been with JavaScript frameworks, but I'm keen to keep learning and to try new technologies or ways of working. I'm currently looking to try out my pre-Bootcamp Java skills with my new knowledge of building full-stack applications. I'm very keen to get more experience with SQL databases, in particular, and to really get into the mechanics of optimizing code for performance and scalability. </p>
            <p>I'd love to connect and have a longer conversation.</p>

            <h3>felicitybrammer@gmail.com</h3>
          </div>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
