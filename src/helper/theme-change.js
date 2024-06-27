import { makeStyles } from "@mui/styles";
import React, { useContext} from "react";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from '../context/themeContext';
import './theme-change.css';

const ThemeChange = () => {
    const { theme, themeChange, isDark } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({

        icon: {
            fontSize: '1.4em',
            color: '#f4a460',
            '&hover': {
                transform: 'scale(1.08)',
                color: '#FFF',
            },
        },
    }));

    const classes = useStyles();

    return (
        
        <div
            className="themeChange"
        >

            <button onClick={themeChange} aria-label="Back to top">

                {isDark ?
                    <BsFillSunFill className={classes.icon} />
                    :
                    <BsFillMoonFill className={classes.icon} />
                }
            </button>

        </div>
    );
};

export default ThemeChange;

