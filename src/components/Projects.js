import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from 'react-bootstrap-icons'; 
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.jpg";
import projImg6 from "../assets/img/project6.avif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css'; 

export const Projects = () => {
  const projects = [
    {
      title: "Responsive Travel and Stay Website ",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://github.com/Pooja575/travelwebsite.git"
    },
    {
      title: "Intelligent Album Manager ",
      description: "Machine Learning & Analysis",
      imgUrl: projImg2,
      url: "https://github.com/Pooja575/Intelligent-Album-Manager"
    },
    {
      title: "Movie Rating Analysis",
      description: "Mining & Analysis",
      imgUrl: projImg3,
      url: "https://github.com/Pooja575/Movie-Rating-Analysis"
    },
    {
      title: "Telecom Customer Churn Prediction",
      description: "Machine Learning & Analysis",
      imgUrl: projImg4,
      url: "https://github.com/Pooja575/Telecom-Customer-Churn-Prediction"
    },
    {
      title: "Sports Data App",
      description: "API Integration & Data Visualization",
      imgUrl: projImg5,
      url: "https://github.com/Pooja575/sports"
    },
    {
      title: "Smart Note App",
      description: "Design & Development",
      imgUrl: projImg6,
      url: "https://github.com/Pooja575/Keeper-app"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Explore my projects!</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Explore my projects</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div className="text-center mt-4">
                    <Button
                      className="github-button"
                      href="https://github.com/Pooja575"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find More on GitHub <ArrowRightCircle size={25} />
                    </Button>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
