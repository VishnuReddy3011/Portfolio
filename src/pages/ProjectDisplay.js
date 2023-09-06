import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import back from "../assets/arrow.png";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <div className="top">
        <div className="first"><Link to="/projects"><span id="icon"><img src={back} alt="" />Go back</span></Link></div>
        <div className="second"><h1> {project?.name}</h1></div>
      </div>
      <Link to={project?.site} target="_blank">
        <img id="proImage" src={project?.image} alt="proImage" /> 
      </Link>
      {/* Make carousel here */}

      <p>
        <b>Skills:</b> {project?.skills}
      </p>
      <Link to={project?.githublink} target="_blank">
        <GitHubIcon id="giticon"/>
      </Link>
      <span style={{marginTop:"10px"}}>GitHub Link</span>
    </div>
  );
}

export default ProjectDisplay;