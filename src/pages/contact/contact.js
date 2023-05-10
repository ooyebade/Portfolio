import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Contacts from '../../components/container/contact';
import { greetings } from '../../data/portfolio';
import Navbar from '../../components/container/navbar';

function ContactPage() {
    return (
        <HelmetProvider>
        <div>
            <Helmet>
                <title>{greetings.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br/>
            <Contacts />
        </div>
        </HelmetProvider>
    )
}

export default ContactPage;