import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import  { ThemeContext } from '../../context/themeContext';
import { skillsData } from '../../data/portfolio';
import { skillsImg } from '../../utils/skillsImg';
import '../../assets/css/skills.css';

function Skills() {
    
    const { theme } = useContext(ThemeContext);

    const skillsStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 12px ${theme.primary}`
    }

    return (
        <div className='skills' style={{ backgroundColor: theme.secondary}} >
            <div className='skillsHeader'>
                <h2 style={{ color: theme.primary}}>Skillset</h2>
            </div>

            <div className='skillsContainer'>
                <div className='skill-scroll'>
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction='left'
                    >

                        {skillsData.map((skills, id) => (
                            <div className='skill-box' key={id} style={skillsStyle} >
                                <img src={skillsImg(skills)} alt={skills} />
                                <h3 style={ {color: theme.tertiary }}>
                                    {skills}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills