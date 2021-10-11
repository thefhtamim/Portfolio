import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "..src/components/Resume/ResumeContent";

//import Github from "./Github";
//import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
//import laptopImg from "../../Assets/about.png";
//import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
{/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> 
          */}
        </Row>
{/*
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />  */}

<Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="No"
              date="July 2021 - September 2021"
         content={[
              //  "Worked on the development of an E-commerce website",
               // "Redesigned Wigme.com and created features to enhance the user experience and optimized designs for smartphones.",
              //  " Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
              //  "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
                "X.",
              ]} 
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
{/* <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on building front-end UI design using HTML5, CSS3, JavaScript jQuery, and building API routes using Node and express.js.",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MECHANICAL ENGINEERING [RUET Rajshahi, Bangladesh] "
              date="2019 - Present"
 
            />

            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                "Nothing Published Yet",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
 
content={[
               // `Current rank in Spoj ${spojRank}`,
              //  `Current rank in HackerRank  ${hackerrank}`,
              //  "Top Performer in Code-Break 1.0",
              //  "Participant in Hack-A-Bit 2019",
         "Will be Updated",
              ]} 
              
            />
          </Col>
        </Row>


      </Container>
    </Container>




     
        





  );
}

export default About;
