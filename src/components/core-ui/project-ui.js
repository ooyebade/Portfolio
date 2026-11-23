import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { projectsData } from "../../data/portfolio";
import SingleProject from "../container/single-projects";
import "../../assets/css/project.css";

function ProjectUi({ theme, classes }) {

    // Choose which project IDs should appear on the homepage
    const homepageProjectIds = [2, 3, 6];

    // Filter projects based on the IDs above
    const homepageProjects = projectsData.filter(
        (project) => homepageProjectIds.includes(project.id)
    );

    return (
        <>
            {homepageProjects.length > 0 && (

                <div
                    className="projects"
                    id="projects"
                    style={{
                        backgroundColor: theme.secondary
                    }}
                >

                    <div className="projects-header">
                        <h1
                            style={{
                                color: theme.primary
                            }}
                        >
                            Projects
                        </h1>
                    </div>

                    <div className="projects-body">

                        <div className="projects-bodyContainer">

                            {homepageProjects.map((project) => (

                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    demo={project.demo}
                                    image={project.image}
                                    status={project.status}
                                />

                            ))}

                        </div>

                        {/* View All */}

                        <div className="projects-viewAll">

                            <Link to="/projects">

                                <button className={classes.viewAllBtn}>
                                    View All

                                    <HiArrowRight
                                        className={classes.viewArr}
                                    />

                                </button>

                            </Link>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
}

export default ProjectUi;