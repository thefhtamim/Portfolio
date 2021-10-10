import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Forhatul Hasan Tamim </span>
            from <span className="purple"> Rajshahi,Bangladesh.</span>
            <br />I am pursuing B.Sc(Engg.) in Mechanical Engineering in RUET,Bangladesh.
            <br />
            <br />
              {/*  Apart from Studying, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>  */}

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Thought is powerful in all phases. Even in my career, even in my life, things end up exactly how I visualized them"{" "}
          </p>
          <footer className="blockquote-footer">Nipsey Hussle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
