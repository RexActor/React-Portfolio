import projects from "../../projectList.json";
import ProjectCard from "../components/ProjectCard";
// import { useState } from "react";

function Projects() {
  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4">
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.name}
              image={project.image}
              desc={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
