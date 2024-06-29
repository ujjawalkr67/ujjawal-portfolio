import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Research from "../../Assets/Projects/research.png";
import raem from "../../Assets/Projects/Raem.png";
import hackfeds from "../../Assets/Projects/hackfed.png";
import fusion from "../../Assets/Projects/codefusion.png";
import emotion from "../../Assets/Projects/emotion.png";
import fresh from "../../Assets/Projects/freshbite.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fusion}
              isBlog={false}
              title="Code-Fusion"
              description="**Code Fusion** is an innovative project that leverages WebSocket.io to enable real-time collaboration among users. It features an integrated chat application, allowing team members to communicate seamlessly, and a built-in compiler for running code directly within the platform. This combination creates a dynamic environment for collaborative coding and efficient project management."
              ghLink="https://github.com/ujjawalkr67/CodeCollab"
              demoLink="https://code-fusion1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fresh}
              isBlog={false}
              title="Fresh Bite"
              description="**Fresh Bite** is a dynamic burger ordering platform designed for a burger company. Built using React and styled with Tailwind CSS, it offers a seamless and visually appealing user experience. The project integrates with an API to manage orders efficiently, ensuring a smooth and responsive service for customers."
              ghLink="https://github.com/ujjawalkr67/Fresh-Bites"
             demoLink="https://fresh-bites-ashy.vercel.app/"// <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackfeds}
              isBlog={false}
              title="HACKFEDS"
              description="My Community website build with Next.js and Tailwind Css. It connects people with our community and they can explore with differen activites we organise at different place. "
              ghLink="https://github.com/ujjawalkr67/HACKFEDS"
              demoLink="https://hackfeds-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raem}
              isBlog={false}
              title="RAEM"
              description="RAEM is the website for the new course of our Gautam Buddha University. RAEM is connected with the official website of our University. "
              demoLink="http://raem.gbu.ac.in/"
              // ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Research}
              isBlog={false}
              title="Research By learning"
              description="This website is created for my first web development Hackathon. We scored first position in that. We use html,CSS and frontend framework to bilt this. "
              ghLink="https://github.com/ujjawalkr67/TCC_Hackathon"
              demoLink="https://ujjawalkr67.github.io/TCC_Hackathon/"              
            />
          </Col>

{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>  */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
