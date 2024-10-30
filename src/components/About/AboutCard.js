import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view about-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruv Chavda</span> from <span className="purple">Ahmedabad, India.</span>
            <br />
            <br />
            I am currently pursuing my studies in <span className="purple">Data Science</span> at <span className="purple">LJ University</span>. My passion for data analysis and machine learning drives me to explore various techniques to derive meaningful insights from data.
            <br />
            <br />
            Apart from my academic pursuits, I enjoy engaging in activities such as:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in data science competitions and hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source data science projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tools and technologies in the field of data science
            </li>
            <br>
            </br>
            <hr></hr>
            <li className="about-activity">
              <ImPointRight /> Contact-Me
            </li>
            <li className="about-activity">
              <ImPointRight /> Mail-id: dhruvchavda447@gmail.com
            </li>
            <li className="about-activity">
              <ImPointRight /> Connect with me on 
    <a href="https://www.linkedin.com/in/dhruv-chavda-4a3144285/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer noopener" class="social-link">LinkedIn</a> 
            </li>
            <li className="about-activity">
              <ImPointRight />  
      Check out my work on  
    <a href="https://github.com/Chavdadhruv" target="_blank" rel="noreferrer noopener" class="social-link">GitHub</a>.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Data is the new oil; let's refine it!"
          </p>
          <footer className="blockquote-footer">Dhruv</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
