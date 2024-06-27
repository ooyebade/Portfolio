import React from 'react';
import { HashLink as NavLink } from "react-router-hash-link";
import Typed from 'react-typed';
import { greetings } from '../../data/portfolio';
// import cartoon  from '../../assets/images/cartoon.png';
import profile from '../../assets/images/profilePic.jpg'

import { FaLinkedin, FaGithub } from 'react-icons/fa';


import '../../assets/css/landing.css';

function LandingUi ({ theme, drawerOpen, classes }) {

    return (
        <div className='landing' >
            <div className='landing--container'>
                <div className='social'>
                    <div className='lcl--content'>
                        {greetings.linkedin && (
                            <a
                                href={greetings.linkedin}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.quaternary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {greetings.github && (
                            <a
                                href={greetings.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.quaternary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={profile}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className='landing--container-right' >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <span>Hello, I'm</span>
                        <h1>{greetings.name}</h1>
                        <Typed
                            strings={[
                                'WordPress Designer',
                                'Front End Designer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <div className='lcr-buttonContainer'>
                            {greetings.resumePdf && (
                                <a
                                    href={greetings.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className={classes.resumeBtn}>
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <NavLink
                                to='/contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <button className={classes.contactBtn}>
                                    Contact
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LandingUi;