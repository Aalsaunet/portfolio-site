import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/headshot.jpeg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.2em" }}>
              Andreas Oven <span className="first-color">Aalsaunet</span>
            </h1>
            <p className="home-about-body">
              Andreas Oven Aalsaunet is a seasoned software engineer and tech tead within 3D and system development at Aalsaunet Consulting, bringing over 10 years of extensive experience across 
              various facets of the development lifecycle. 
            </p>
            <p className="home-about-body">
              With a master's degree in computer science from the University of Oslo, Andreas has cultivated his expertise through diverse roles in renowned organizations such as Apple, Accenture, and 
              startups, alongside now running his own sole proprietorship. Throughout his career, Andreas has demonstrated versatility in working with a spectrum of technologies and frameworks. 
              He has led development teams, spearheaded Top Level Feature deliverables at Apple, developed 3D software in his own venture, and contributed as a backend developer for projects at NAV. 
              This rich background has endowed him with a technology-agnostic perspective and a profound understanding of software architecture and development practices.
            </p>
            <p className="home-about-body">
              Specifically, Andreas has showcased adeptness in fullstack .NET development, with proficiency in C#, as well as mastery in technologies including React, Typescript, Azure Functions, Azure services 
              like ServiceBus, Kubernetes, Rest API design and implementation, SQL Server, and OAuth2 authentication flows.
              Recognized for his proactive and responsible approach, Andreas excels in collaborative environments, where he leverages his strong communication skills to foster effective teamwork. 
              He has a passion for mentoring and sharing knowledge, serving as a valuable resource for colleagues seeking guidance and expertise.
              With a commitment to continuous improvement and a dedication to delivering high-quality solutions, Andreas embodies the qualities of a dynamic and influential technology leader in the consultancy realm.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <img src={myImg} className="img-fluid" style={{ borderRadius: 50 }} alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aalsaunet"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/aovenaal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aovenaal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aovenaal"
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
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
