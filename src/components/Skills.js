import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Zoom, Slide } from "react-awesome-reveal";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: "SQL", proficiency: 95 },
    { name: "Power BI", proficiency: 92 },
    { name: "Tableau", proficiency: 90 },
    { name: "Snowflake", proficiency: 88 },
    { name: "Azure", proficiency: 85 },
    { name: "AWS S3", proficiency:80 },
    { name: "Python", proficiency:85 },
    { name: "Data Modeling", proficiency:90 },
    { name: "Data Validation", proficiency:90 },
    { name: "KPI Design", proficiency:98 },
    { name: "Git", proficiency:90 },
    { name: "JIRA & Confluence", proficiency:90 }

  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Zoom>
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  {skills.map((skill, index) => (
                    <div className="item" key={index}>
                      <Slide direction="down">
                        <h6>{skill.name}</h6>
                        <Progress 
                          type="circle" 
                          percent={skill.proficiency} 
                          status="active" 
                          theme={{
                            active: {
                              symbol: `${skill.proficiency}%`,
                              trailColor: 'rgba(255,255,255,0.2)',
                              color: '#b68cfa'

                            }
                          }}
                        />
                      </Slide>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};
