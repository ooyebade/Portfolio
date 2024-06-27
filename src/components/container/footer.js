import React, { useContext } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import  { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { greetings } from '../../data/portfolio';
import { ThemeContext } from '../../context/themeContext';

import '../../assets/css/footer.css';

function Footer() {

    //let date = new Date();
    //let year = date.getFullYear();
    const { theme } = useContext(ThemeContext)

    return (
        <div className='footer'>

            <div className='footer-body'>


                <div className='footer-copyright'>
                    <h3>{greetings.copyright}</h3>
                </div>

                <div className='footer-copyright'>
                    <h3>Copyright &copy; {greetings.copyrightyear} EO</h3>
                </div>

                    <ul className='footer-icons'>
                        <li className='social-icons'>
                            <a
                                href={greetings.github}
                                style={{color: theme.footerColor}}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub />
                            </a>
                        </li>

                        <li className='social-icons'>
                            <a
                                href={greetings.linkedin}
                                style={{color: theme.footerColor}}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    );
}


export default Footer;