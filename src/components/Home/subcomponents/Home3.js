import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import laptopImg from "../../../Assets/about.png";


function Home2() {
  return (
    <Container fluid className="home-about-description2" id="about">
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
              Key <strong className="third-color">services</strong>
            </h1>
            <Card className="quote-card-view">
              <ul>
                  <li><strong>Custom Software Development:</strong> End-to-end development of tailored software solutions, from initial planning and design to deployment and maintenance.</li>
                  <li><strong>Software Architecture Consulting:</strong> Expertise in defining and refining system architectures to ensure scalability, performance, and security.</li>
                  <li><strong>IT Strategy & Advisory:</strong> Guidance on technology trends and strategic planning to optimize business outcomes through technology.</li>
                  <li><strong>Cloud Solutions:</strong> Design and implementation of cloud infrastructures (AWS, Azure, GCP) to support scalable, cost-effective operations.</li>
                  <li><strong>DevOps Integration:</strong> Streamlining development and operations processes for faster, more reliable software delivery.</li>
                  <li><strong>Legacy System Modernization:</strong> Assessing and upgrading outdated systems to align with modern performance and security standards.</li>
                  <li><strong>Quality Assurance & Testing:</strong> Comprehensive testing strategies to ensure software reliability, functionality, and performance.</li>
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
