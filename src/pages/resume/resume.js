import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Resume from '../../components/core-ui/resume';
import { greetings } from '../../data/portfolio';
import Navbar from '../../components/container/navbar';

function ResumePage() {
    return (
        <HelmetProvider>
        <div>
            <Helmet>
                <title>{greetings.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <Resume />
        </div>
        </HelmetProvider>
    )
}

export default ResumePage;
