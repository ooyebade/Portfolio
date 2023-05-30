import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import React, { useContext } from 'react';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { ThemeContext } from '../../context/themeContext';
import { contactData } from '../../data/portfolio';

import '../../assets/css/contact.css';

const ContactUI = ({ open, success, errMsg, handleClose, classes, handleContactForm, name, setName, form, email, setEmail, message, setMessage }) => {

    const { theme } = useContext(ThemeContext);

    const ContactItems = ({ item , i}) => {
        return (
            <div className="conct" key={i} >
                <i className={item.className} style={{ color: theme.primary }}></i>
                <span className="card-title">{item.name}</span>
                <span className="card-info">{item.url}</span>
            </div>
        )
    }

  return (
    <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
        <div className="contact-container">
            <div className="container">
                <div className="one">
                    <span style={{ color: theme.primary }}>{contactData.contactHeading}</span>
                </div>

                <p style={{ color: theme.primary }}/**/>{contactData.contactPara}</p>

                <div className="contactConatiners">
                    <div className="contact-one">
                        {contactData.contactBox.map((item, i) => {
                            return <ContactItems key={i} item={item} />
                        })}
                    </div>
                </div>
                
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form ref={form} onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <label htmlFor='Name' className={classes.label}>
                                    Name
                                </label>
                                <input
                                    placeholder='John Doe'
                                    id='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='user_name'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>
                            <div className='input-container'>
                                <label
                                    htmlFor='Email'
                                    className={classes.label}
                                >
                                    Email
                                </label>
                                    <input
                                        placeholder='John@doe.com'
                                        id='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        name='user_email'
                                                className={`form-input ${classes.input}`}
                                            />
                                        </div>
                                        <div className='input-container'>
                                            <label
                                                htmlFor='Message'
                                                className={classes.label}
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                placeholder='Type your message....'
                                                id='Message'
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                type='text'
                                                name='message'
                                                className={`form-message ${classes.message}`}
                                            />
                                        </div>
                                        <div className='submit-btn'>
                                            <button
                                                type='submit'
                                                className={classes.submitBtn}
                                            >
                                                <p>{!success ? 'Send' : 'Sent'}</p>
                                                <div className='submit-icon'>
                                                    <AiOutlineSend
                                                        className='send-icon'
                                                        style={{
                                                            animation: !success
                                                                ? 'initial'
                                                                : 'fly 0.8s linear both',
                                                            position: success
                                                                ? 'absolute'
                                                                : 'initial',
                                                        }}
                                                    />
                                                    <AiOutlineCheckCircle
                                                        className='success-icon'
                                                        style={{
                                                            display: !success
                                                                ? 'none'
                                                                : 'inline-flex',
                                                            opacity: !success ? '0' : '1',
                                                        }}
                                                    />
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                        open={open}
                                        autoHideDuration={4000}
                                        onClose={handleClose}
                                    >
                                    <SnackbarContent
                                        action={
                                            <React.Fragment>
                                                <IconButton
                                                    size='small'
                                                    aria-label='close'
                                                    color='inherit'
                                                    onClick={handleClose}
                                                >
                                                    <IoClose fontSize='small' />
                                                </IconButton>
                                            </React.Fragment>
                                        }
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,
                                            fontFamily: 'var(--primaryFont)',
                                        }}
                                        message={errMsg}
                                        />
                                    </Snackbar>
                                </div>
                            <div className="location-map">
                                <iframe
                                    src={contactData.mapAddress}
                                    width="100%" height="250px"
                                    loading="lazy" title='map' style={{ border: 0 }}>    
                                </iframe>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUI;