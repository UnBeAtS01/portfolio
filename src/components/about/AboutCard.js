import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Sinha </span>
            from <span className="purple"> hyderabad, India.</span>
            <br />
            I'm pre final year student at jadavpur university.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing outdoor games
            </li>
            <li className="about-activity">
              <ImPointRight /> Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Learning and implementing things each day!!"{" "}
          </p>
          <footer className="blockquote-footer">-AnkitSinha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
