import React, { useContext } from 'react';
import { aboutSection } from '../../data/portfolio';
import { greetings } from '../../data/portfolio';
import profilePic from '../../assets/images/profile-pic.jpg';
import { ThemeContext } from '../../context/themeContext';
import '../../assets/css/about.css';
import { Container } from '@mui/material';

const About = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme.secondary }}>

        <section className='about-container' id='about'>
            <Container className='container'>
                <div className='one'>
                    <span className='heading'>{aboutSection.abouttitle}</span>
                    {/**
                    <div className="line-styling">
                        <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                        <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                        <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                 </div> */}
                </div>

                <div 
                    className='container-layout'>
                        
                    <div className='image-box'>
                        <img alt='elizabeth' src={profilePic} className='u-image' />
                        <h1 style={{ color: theme.primary }}>{aboutSection.aboutname}</h1>

                        <div className='resume-btn'>
                            {greetings.resumePdf && (
                                <a
                                    href={greetings.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='main-btn'>
                                        Resume
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className='content-section'>
                        <h2 style={{ color: theme.primary }}>{aboutSection.aboutrole}</h2>
                        <p style={{ color: theme.tertiary }}>{aboutSection.description}<br /><br />
                        {aboutSection.description2}<br /><br />{aboutSection.description3}</p>
                    </div>
                </div>
            </Container>
        </section>
        </div>
    )
}


export default About
