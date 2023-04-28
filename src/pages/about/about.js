import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../../components/core-ui/about';
import { greetings } from '../../data/portfolio';
import Navbar from '../../components/container/navbar';

function AboutPage() {
    return (
        
        <div>
            <Helmet>
                <title>{greetings.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <About />
        </div>
    )
}

export default AboutPage
