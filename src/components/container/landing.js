import { makeStyles } from "@mui/styles";
import React, { useContext } from 'react';
import { ThemeContext} from '../../context/themeContext';
import '../../assets/css/landing.css';
import LandingUi from "../core-ui/landing-ui";

const Landing = () => {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      backgroundColor: theme.secondary,
      borderRadius: '30px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '150px',
      fontSize: '1rem',
      fontWeight: '500',
      height: '50px',
      fontFamily: 'var(--primaryFont)',
      border: `3px solid ${theme.primary}`,
      transition: '500ms ease-out',
      '&:hover': {
        backgroundColor: theme.buttonColor,
        color: theme.secondary,
        border: `3px solid ${theme.buttonColor}`,
      },
      [t.breakpoints.down('sm')]: {
        width: '180px',
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: '30px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '150px',
      height: '50px',
      fontSize: '1rem',
      fontWeight: '500',
      fontFamily: 'var(--primaryFont)',
      border: `3px solid ${theme.primary}`,
      transition: '500ms ease-out',
      '&:hover': {
        backgroundColor: theme.buttonColor,
        color: theme.secondary,
        border: `3px solid ${theme.buttonColor}`,
      },
      [t.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }));

  const classes = useStyles();

  return (
    <LandingUi drawerOpen={drawerOpen} theme={theme} classes={classes} />
  );
};

export default Landing;