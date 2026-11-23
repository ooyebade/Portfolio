import React, { useContext } from 'react';
import { aboutSection, greetings } from '../../data/portfolio';
import profilePic2 from '../../assets/images/profile-pic-2.jpeg';
import { ThemeContext } from '../../context/themeContext';
import '../../assets/css/about.css';
import { Container } from '@mui/material';

const About = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme.secondary }}>

            <section
                className="about-container"
                id="about"
            >

                <Container className="container">

                    {/* Section Heading */}

                    <div
                        className="one"
                        style={{ color: theme.primary }}
                    >

                        <span
                            className="heading"
                            style={{ color: theme.primary }}
                        >
                            {aboutSection.abouttitle}
                        </span>

                        {/* Optional Decorative Line */}

                        {/*
                        <div className="line-styling">

                            <div
                                className="style-circle"
                                style={{
                                    backgroundColor: theme.primary
                                }}
                            />

                            <div
                                className="style-circle"
                                style={{
                                    backgroundColor: theme.primary
                                }}
                            />

                            <div
                                className="style-line"
                                style={{
                                    backgroundColor: theme.primary
                                }}
                            />

                        </div>
                        */}

                    </div>


                    {/* About Content */}

                    <div className="container-layout">

                        {/* Profile Image */}

                        <div className="image-box">

                            <img
                                alt="Elizabeth"
                                src={profilePic2}
                                className="u-image"
                            />

                            <h1
                                style={{
                                    color: theme.primary
                                }}
                            >
                                {aboutSection.aboutname}
                            </h1>


                            {/* Resume */}

                            <div className="resume-btn">

                                {greetings.resumePdf && (

                                    <a
                                        href={greetings.resumePdf}
                                        download="resume"
                                        target="_blank"
                                        rel="noreferrer"
                                    >

                                        <button className="main-btn">
                                            Resume
                                        </button>

                                    </a>

                                )}

                            </div>

                        </div>


                        {/* About Text */}

                        <div className="content-section">

                            <h2
                                style={{
                                    color: theme.primary
                                }}
                            >
                                {aboutSection.aboutrole}
                            </h2>

                            <p
                                style={{
                                    color: theme.tertiary
                                }}
                            >

                                {aboutSection.description}

                                <br />
                                <br />

                                {aboutSection.description2}

                                <br />
                                <br />

                                {aboutSection.description3}

                            </p>

                        </div>

                    </div>

                </Container>

            </section>

        </div>
    );
};

export default About;
