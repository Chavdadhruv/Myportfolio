import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a deep passion for <span className="purple">data science</span> and solving complex problems with data.
              <br />
              <br />I am proficient in data-centric programming languages and tools like
              <i>
                <b className="purple"> Python, SQL, and R. </b>
              </i>
              <br />
              <br />
              My areas of expertise include
              <i>
                <b className="purple"> Machine Learning</b> and{" "}
              </i>{" "}
              as well as advanced topics like{" "}
              <i>
                <b className="purple">Computer Vision.</b>
              </i>
              <br />
              <br />
              I also have a strong interest in building end-to-end data science solutions, from data processing to deploying models using
              <b className="purple"> TensorFlow, Scikit-Learn, and PyTorch.</b>
              <br />
              <br />
              In addition, I enjoy applying my knowledge of modern data visualization tools like
              <b className="purple"> Plotly</b> and{" "}
              <i>
                <b className="purple"> Streamlit</b>
              </i>{" "}
              to communicate insights effectively.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me on data science and AI-related projects.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Chavdadhruv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruv-chavda-4a3144285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
