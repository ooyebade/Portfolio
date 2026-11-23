import React, { useContext, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import emailjs from '@emailjs/browser';
import isEmail from 'validator/lib/isEmail';
import { ThemeContext } from '../../context/themeContext';
import ContactUI from '../core-ui/contact-ui';

const Contacts = () => {
    const [open, setOpen] = useState(false);

    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const form = useRef();

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        input: {
            border: `2px solid ${theme.buttonColor}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',

            '&:focus': {
                border: `2px solid ${theme.primary}`,
            },
        },

        message: {
            border: `2px solid ${theme.buttonColor}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',

            '&:focus': {
                border: `2px solid ${theme.primary}`,
            },
        },

        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px, 50%)',
            display: 'inline-flex',
        },

        submitBtn: {
            backgroundColor: theme.quaternary,
            color: theme.secondary,
            transition: '250ms ease-in-out',

            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.buttonColor,
            },
        },
    }));

    const classes = useStyles();

    const handleContactForm = (e) => {
        e.preventDefault();

        // Reset previous messages
        setErrMsg('');
        setSuccess(false);

        // Validate required fields
        if (!name || !email || !message) {
            setErrMsg('Enter all the fields');
            setOpen(true);
            return;
        }

        // Validate email
        if (!isEmail(email)) {
            setErrMsg('Invalid email');
            setOpen(true);
            return;
        }

        // Send form through EmailJS
        emailjs
            .sendForm(
                'service_a2ajoub',
                'template_awtmo4n',
                form.current,
                'O-ggGSpn8terRIiHx'
            )
            .then((result) => {
                console.log('Email sent successfully:', result.text);

                setSuccess(true);
                setErrMsg('');

                // Clear form
                setSubject('');
                setName('');
                setEmail('');
                setMessage('');

                setOpen(false);
            })
            .catch((error) => {
                console.error('EmailJS error:', error);

                setSuccess(false);
                setErrMsg(
                    error?.text ||
                    'Unable to send your message. Please try again.'
                );

                setOpen(true);
            });
    };

    return (
        <ContactUI
            open={open}
            success={success}
            errMsg={errMsg}
            handleClose={handleClose}
            classes={classes}
            handleContactForm={handleContactForm}
            subject={subject}
            setSubject={setSubject}
            name={name}
            setName={setName}
            form={form}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
        />
    );
};

export default Contacts;