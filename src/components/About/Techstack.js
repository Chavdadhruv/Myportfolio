import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiMysql, SiR, SiRuby } from "react-icons/si";

import {
  SiAnaconda,
  SiMongodb,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPowerbi,
  SiScikitlearn,
  SiTensorflow
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiMysql title="MySQL" />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiR title="R" />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiRuby title="Ruby" />
</Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow title="TensorFlow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas title="Pandas" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy title="NumPy" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv title="OpenCV" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi title="Power BI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn title="Scikit-learn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda title="Anaconda" />
      </Col>
    </Row>
  );
}

export default Techstack;
