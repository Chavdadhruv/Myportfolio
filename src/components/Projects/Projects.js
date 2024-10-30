import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/Delight.png";
import emotion from "../../Assets/Projects/face.jpeg";
import chatify from "../../Assets/Projects/IPL_Action.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import leaf from "C:/Complete-Working-Contact-Form-in-react-js-06-Modern-Contact-Form-React-through-EmailJs-main/Portfolio-master/Portfolio-master/src/Assets/Projects/leaf.jpeg";
import editor from "C:/Complete-Working-Contact-Form-in-react-js-06-Modern-Contact-Form-React-through-EmailJs-main/Portfolio-master/Portfolio-master/src/Assets/Projects/Restaurants-recommendation.png";

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
              imgPath={chatify}
              isBlog={false}
              title="IPL_Auction"
              description="IPL_Action is an engaging simulation of an IPL-style auction built using Python, leveraging the capabilities of matplotlib for visualization and pandas for data handling. This project enables users to simulate a player auction where teams, represented by various IPL franchises, bid for players based on predefined budgets and player base prices."
              ghLink="https://github.com/Chavdadhruv/IPL_Action"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" Delight Ethnics"
              description="Delight Ethnics is a dynamic web application designed to showcase and offer a premium collection of ethnic wear, including suits, sherwanis, and more. Developed with HTML, CSS, and Bootstrap, the platform features a modern, responsive design that highlights traditional wear from various brands, materials, and styles, catering to a diverse range of preferences. With a clean layout and interactive elements, users can easily browse collections, view detailed descriptions, and explore options for each outfit."
              ghLink="https://github.com/Chavdadhruv/Delight_Ethnics/upload/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart Restaurant Finder: Personalized Dining Recommendations with Flask"
              description="A Flask-based Restaurant Recommendation System that provides personalized dining suggestions based on budget, cuisine, location, and group size."
              ghLink="https://github.com/Chavdadhruv/restaurant/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI-Driven Crop Management System: Fertilizer and Disease Prediction for Optimized Farming"
              description=" This Django-based platform provides farmers with intelligent recommendations for both fertilizer use and crop disease management. By analyzing leaf images, the system identifies potential diseases and suggests the appropriate treatments. Additionally, the tool offers guidance on the best fertilizers based on soil type, crop, and environmental conditions. With a user-friendly interface, farmers can input data, receive recommendations, and locate nearby suppliers to maintain optimal crop health and productivity"
              ghLink="https://drive.google.com/drive/folders/19eRvtF76f8Ayp4MTH2PwouZynnLtndB7?usp=sharing "
            />
          </Col>

          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={emotion}
    isBlog={false}
    title="Face Recognition and Emotion Detection"
    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and TensorFlow backend. The classifier successfully predicted the various types of emotions of humans. The highest accuracy obtained with the model was 60.1%. Then used OpenCV to detect the face in an image and passed the face to the classifier to predict the emotion of a person."
    ghLink="https://drive.google.com/drive/folders/19eRvtF76f8Ayp4MTH2PwouZynnLtndB7?usp=sharing"  
  />
</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
