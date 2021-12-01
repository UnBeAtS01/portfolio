import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import prims from "../../Assets/Projects/prims.png";
import bfs from "../../Assets/Projects/bfs.png";
import sort from "../../Assets/Projects/sort.png";
import ecom from "../../Assets/Projects/ecom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prims}
              isBlog={false}
              title="algorithm visualizer"
              description="prims and kruskal algo visualizer"
              link="https://cocky-jennings-b427cf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bfs}
              isBlog={false}
              title="algorithm visualizer"
              description="BFS DFS DIJIKSTRA VISUALIZER"
              link="https://wonderful-ride-21998d.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sort}
              isBlog={false}
              title="sort alog visualizer"
              description="all sorting algo visualizer"
              link="https://quirky-bhaskara-b6fdf5.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce site"
              description="tried to implement basics features of e-commerce site"
              link="https://eloquent-darwin-84e54c.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
