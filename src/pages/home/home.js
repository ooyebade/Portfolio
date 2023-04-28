import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/container/navbar';
import Landing from '../../components/container/landing';
import { greetings } from '../../data/portfolio';

function Home() {
    return (
        
        <div>
            <Helmet>
                <title>{greetings.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
        </div>
    )
}

export default Home