import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/digital-twin.png";
import Particle from "../Particle";
import Home2 from "./subcomponents/Home2";
import Home3 from "./subcomponents/Home3";
import Home4 from "./subcomponents/Home4";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                Welcome to<br></br>
                <strong className="first-color">AALSAUNET CONSULTING</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 0 }}>
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
      <Home4 />
      
    </section>
  );
}

export default Home;
