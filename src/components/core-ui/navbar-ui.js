import React from 'react';
import Fade from 'react-reveal/Fade';
import { HashLink as NavLink } from 'react-router-hash-link';

import { FaUser, FaCode } from 'react-icons/fa';
import {
    BsFillMoonFill,
    BsFillSunFill
} from 'react-icons/bs';

import {
    IoClose,
    IoHomeSharp,
    IoMenuSharp
} from 'react-icons/io5';

import { HiDocumentText } from 'react-icons/hi';
import { MdPhone } from 'react-icons/md';

import {
    AiOutlineFundProjectionScreen
} from 'react-icons/ai';

import { Drawer } from '@mui/material';

import '../../assets/css/navbar.css';
import { greetings } from '../../data/portfolio';


function NavbarUi({
    theme,
    classes,
    handleDrawerOpen,
    handleDrawerClose,
    open,
    themeChange,
    isDark
}) {

    return (
        <div
            className="navbar"
            style={{
                '--nav-text-color': theme.tertiary,
                '--nav-hover-color': theme.primary
            }}
        >

            <div className="navbar-container">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="navbar-logo"
                >
                    <h1>
                        {greetings.name} <FaCode />
                    </h1>
                </NavLink>


                {/* =========================
                    DESKTOP NAVIGATION
                ========================= */}

                <nav className="desktop-nav">

                    <NavLink
                        to="/"
                        className="desktop-nav-link"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/#about"
                        smooth
                        className="desktop-nav-link"
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/resume"
                        className="desktop-nav-link"
                    >
                        Resume
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className="desktop-nav-link"
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/contacts"
                        className="desktop-nav-link"
                    >
                        Contact
                    </NavLink>


                    {/* Theme Toggle */}
                    <button
                        type="button"
                        className="desktop-theme-toggle"
                        onClick={themeChange}
                        aria-label={
                            isDark
                                ? 'Switch to light theme'
                                : 'Switch to dark theme'
                        }
                    >
                        {isDark ? (
                            <BsFillSunFill />
                        ) : (
                            <BsFillMoonFill />
                        )}
                    </button>

                </nav>


                {/* =========================
                    MOBILE MENU
                ========================= */}

                <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label="Open Menu"
                />

            </div>


            {/* =========================
                MOBILE DRAWER
            ========================= */}

            <Drawer
                variant="temporary"
                onClose={handleDrawerClose}
                anchor="left"
                open={open}
                classes={{
                    paper: classes.MuiDrawer
                }}
                className="drawer"
                disableScrollLock={true}
            >

                <div className="div-closebtn">

                    <IoClose
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (
                                e.key === ' ' ||
                                e.key === 'Enter'
                            ) {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role="button"
                        tabIndex="0"
                        aria-label="Close Menu"
                    />

                </div>


                <div
                    onClick={handleDrawerClose}
                    className="drawer-content"
                >

                    <div className="navLink-container">

                        {/* HOME */}
                        <Fade left>
                            <NavLink to="/">
                                <div className={classes.drawerItem}>
                                    <IoHomeSharp
                                        className={classes.drawerIcon}
                                    />

                                    <span className={classes.drawerLinks}>
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>


                        {/* ABOUT */}
                        <Fade left>
                            <NavLink
                                to="/#about"
                                smooth
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaUser
                                        className={classes.drawerIcon}
                                    />

                                    <span className={classes.drawerLinks}>
                                        About
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>


                        {/* RESUME */}
                        <Fade left>
                            <NavLink to="/resume">
                                <div className={classes.drawerItem}>
                                    <HiDocumentText
                                        className={classes.drawerIcon}
                                    />

                                    <span className={classes.drawerLinks}>
                                        Resume
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>


                        {/* PROJECTS */}
                        <Fade left>
                            <NavLink to="/projects">
                                <div className={classes.drawerItem}>
                                    <AiOutlineFundProjectionScreen
                                        className={classes.drawerIcon}
                                    />

                                    <span className={classes.drawerLinks}>
                                        Projects
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>


                        {/* CONTACT */}
                        <Fade left>
                            <NavLink to="/contacts">
                                <div className={classes.drawerItem}>
                                    <MdPhone
                                        className={classes.drawerIcon}
                                    />

                                    <span className={classes.drawerLinks}>
                                        Contact
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>


                        {/* THEME */}
                        <Fade left>
                            <div
                                className={classes.drawerItem}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    themeChange();
                                }}
                            >

                                {isDark ? (
                                    <BsFillSunFill
                                        className={classes.drawerIcon}
                                    />
                                ) : (
                                    <BsFillMoonFill
                                        className={classes.drawerIcon}
                                    />
                                )}

                                <span className={classes.drawerLinks}>
                                    {isDark ? 'Light' : 'Dark'}
                                </span>

                            </div>
                        </Fade>

                    </div>

                </div>

            </Drawer>

        </div>
    );
}

export default NavbarUi;