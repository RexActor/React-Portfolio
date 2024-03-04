// import React from "react";
// import myImg from "./images/password-generator.jpg";
import "./style.css";
function ProjectCard(prop) {
  console.log(prop);
  return (
    <div className="card mb-4 mt-4 ">
      <div className="card-header bg-primary-subtle ">
        <h2>{prop.title}</h2>
      </div>
      <img alt={prop.image} height="200" src={`./images/${prop.image}`} />
      <div className="card-body">{prop.desc}</div>
      <div className="card-footer  bg-primary-subtle ">
        <a href={prop.link}>Repository Link</a>
      </div>
    </div>
  );
}
export default ProjectCard;
// src\assets\password-generator.PNG
