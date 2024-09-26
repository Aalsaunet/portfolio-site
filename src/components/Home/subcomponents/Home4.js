import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import laptopImg from "../../../Assets/about.png";


function Home2() {
  return (
    <Container fluid className="home-about-description" id="about">
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "left",
              paddingTop: "80px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ textAlign: "left"}}>
              Why choose <strong className="third-color">Aalsaunet Consulting</strong>?
            </h1>
            <Card className="quote-card-view">
            <ul>
              <li><strong>Client-Centric Approach:</strong> Dedicated to understanding the unique challenges of each client and delivering customized solutions.</li>
              <li><strong>Experienced Team:</strong> A team of expert developers, architects, and consultants with diverse industry experience.</li>
              <li><strong>Agile Methodologies:</strong> Commitment to Agile development practices for rapid delivery, continuous feedback, and collaboration.</li>
              <li><strong>Proven Success:</strong> A strong track record of successful projects across various industries including finance, healthcare, and manufacturing.</li>
              <li><strong>Innovation & Technology:</strong> Continuously adopting the latest technologies and frameworks to provide cutting-edge solutions.</li>
          </ul>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ borderRadius: 50 }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
