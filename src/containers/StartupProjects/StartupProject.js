import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          {bigProjects.projects.map((project) => {
            return (
              <div className="project-container">
                <h3>{project.title}</h3>
                <p
                  className={
                    isDark
                      ? "dark-mode project-subtitle col-9"
                      : "subTitle project-subtitle col-9"
                  }
                >
                  {project.subtitle}
                </p>
                <div className="row">
                  <div className="cursor-pointer col-6">
                    <img
                      onClick={() => openProjectInNewWindow(project.link)}
                      alt="Project Summary"
                      src={project.image}
                    ></img>
                  </div>
                  <div className="col-6">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
