import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/container/navbar';
import Landing from '../../components/container/landing';
import { greetings } from '../../data/portfolio';
import About from '../../components/core-ui/about';
import Skills from '../../components/core-ui/skills';
import Projects from '../../components/container/projects';
function Home() {
    return (
        
        <div>
            <Helmet>
                <title>{greetings.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
           {/* <About /> */}
           <About />
           <Skills />
           <Projects />
        </div>
    )
}

export default Home