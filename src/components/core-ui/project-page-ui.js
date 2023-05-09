import React from "react";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { greetings } from "../../data/portfolio";
import SingleProject from "../container/single-projects";
import '../../assets/css/project-page.css';

const ProjectPageUi = ({ theme, classes, search, setSearch, filteredArticles }) => {

    return (
        <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
          <Helmet>
            <title>{greetings.name} | Projects</title>
          </Helmet>

          <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
            <Link to="/">
              <AiOutlineHome className={classes.home} />
            </Link>
            <h1 style={{ color: theme.secondary }}>Projects</h1>
          </div>
          <div className="projectPage-container">
            <div className="projectPage-search">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className={classes.search} />
            </div>
            <div className="project-container">
              <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
                {filteredArticles.map(project => (
                  <SingleProject
                    theme={theme}
                    key={project.id}
                    id={project.id}
                    name={project.projectName}
                    desc={project.projectDesc}
                    tags={project.tags}
                    demo={project.demo}
                    image={project.image}
                  />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      );
}

export default ProjectPageUi;