import React, { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './context/themeContext';
import Home from './pages/home/home';
import ThemeChange from './helper/theme-change';
import AboutPage from './pages/about/about';
import ResumePage from './pages/resume/resume';
function App() {

  const  { backgroundImage } = useContext(ThemeContext);

  return (

    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} >
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<AboutPage />} exact />
          <Route path='/resume' element={<ResumePage />} exact />

          <Route 
            path='*'
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>
      <ThemeChange />
    </div>
  );
}

export default App;
