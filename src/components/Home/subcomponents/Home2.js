import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import laptopImg from "../../../Assets/process-overload-illustration.jpeg";

function Home2() {
  return (
    <Container fluid className="home-about-description" id="about">
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "left",
              paddingTop: "160px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ textAlign: "left"}}>
              Fast <strong className="third-color">delivery, </strong>fast <strong className="third-color">results</strong>
            </h1>
            <Card className="quote-card-view">
              <p><strong>Aalsaunet Consulting</strong> is a dynamic software consultancy firm dedicated to helping businesses and organizations achieve their 
              digital transformation goals through innovative software solutions. With a strong focus on client success, Aalsaunet specializes in delivering 
              custom software development, architecture consulting, and IT strategy services to ensure optimal business performance. 
              By leveraging cutting-edge technologies and industry best practices, the team at Aalsaunet works closely with clients to design scalable, efficient, 
              and secure solutions tailored to their unique needs.</p>
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
