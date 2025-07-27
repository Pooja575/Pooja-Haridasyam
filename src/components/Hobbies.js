// components/Hobbies.js

import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import Lottie from 'lottie-react';
import hobbiesAnimation from '../assets/img/hobbies.json'; // Adjust the path to your hobbies.json animation file
import './Hobbies.css';

export const Hobbies = () => {
  const hobbies = [
    {
      title: "K-Pop",
      description:"K-Pop is my energy boost, connecting me to vibrant music, powerful performances, and a passionate community. I enjoy discovering new artists and keeping up with the latest comebacks.",
      iconClass: "bi bi-music-note-beamed", // Example of using Bootstrap icons
    },
    {
      title: "Photography",
      description: "Photography lets me freeze moments in time. I enjoy capturing everyday beauty, from cityscapes to candid portraits, and experimenting with lighting and composition.",
      iconClass: "bi bi-camera",
    },
    {
      title: "Cooking",
      description: "I like experimenting in the kitchen, blending flavors from different cuisines to create dishes that surprise and delight.",
      iconClass: "bi bi-egg",
    },
    {
      title: "Reading",
      description: "Reading is my way to recharge. I gravitate toward books that inspire personal growth, spark curiosity, and help me see the world from fresh perspectives.",
      iconClass: "bi bi-journal",
    }
  ];

  return (
    <section className="hobbies" id="hobbies">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="section-title">Hobbies</h1>
                  <Tab.Container id="hobbies-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-3 justify-content-center" id="hobbies-tab">
                      {hobbies.map((hobby, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link className="Navlink" eventKey={`hobby-${index}`}>
                            <i className={hobby.iconClass}></i> {hobby.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {hobbies.map((hobby, index) => (
                        <Tab.Pane eventKey={`hobby-${index}`} key={index}>
                          <div className="hobby-card">
                            <div className="hobby-icon">
                              <i className={hobby.iconClass}></i>
                            </div>
                            <h2 style={{color:'#997AE4'}}>{hobby.title}</h2>
                            <p className="typing-text">{hobby.description}</p>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="mb-4 d-flex justify-content-center align-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{ maxWidth: '100%', height: 'auto' }}>
                  <Lottie animationData={hobbiesAnimation} className="lottie-animation" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
