import React, { createContext, useState /**useEffect*/ } from 'react';

import { theDarkTheme, theLightTheme } from '../theme/theme';

//import darkImage from '../assets/images/darkImage.jpg';

import darkImg from '../assets/images/darkImg.jpg';

import lightImage from '../assets/images/lightImage.jpg';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
   
  // eslint-disable-next-line
  const [theme, setTheme] = useState(theDarkTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDark, setDark] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(darkImg);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

    
  const themeChange = () => {
    if (isDark) {
      setTheme(theLightTheme);
      setDark(false);
      setBackgroundImage(lightImage);
    } else {
      setTheme(theDarkTheme);
      setDark(true);
      setBackgroundImage(darkImg);
    }
  } 
  
  /*
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));
  
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    }
  }, []);
  
  const onSelectMode = (theme) => {
    setTheme(theme)
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      setBackgroundImage(darkImage);
    }
    else {
      document.body.classList.remove('dark-mode');
      setBackgroundImage(lightImage);
    }
  }
  */

  const value = { theme, drawerOpen, setHandleDrawer, themeChange, isDark, backgroundImage }
    
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
