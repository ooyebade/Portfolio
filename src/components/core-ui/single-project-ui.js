import React from "react";
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import '../../assets/css/single-project.css';

function SingleProjectUI({ id, name, desc, tags, demo, code, image, theme, classes }) {

    return (

        <Fade bottom>

            <div
                key={id}
                className="singleProject"
                style={{ backgroundColor: theme.secondary }}
            >

                <div className="projectContent">
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary}}
                    >
                        {name}
                    </h2>

                    <img src={image} alt={name} />

                    <div className="project-showcaseBtn">
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                        >
                            <FaPlay 
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className={classes.icon}
                                aria-label="Demo"
                            />
                        </a>

                        <a
                            href={code}
                            target="_blank"
                            rel="noreferrer"
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                        >
                            <FaCode 
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className={classes.icon}
                                aria-label="Code"
                            />
                        </a>
                    </div>
                </div>

                <p
                    className="project-desc"
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>

                <div 
                    className="project-lang"
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}


export default SingleProjectUI;