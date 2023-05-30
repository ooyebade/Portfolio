import React, { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './context/themeContext';
import Home from './pages/home/home';
import ThemeChange from './helper/theme-change';
import ResumePage from './pages/resume/resume';
import ProjectPage from './pages/projects/projects';
import ContactPage from './pages/contact/contact';
import Footer from './components/container/footer';
import BackToTop from './helper/back-to-top';
import ScrollToTop from './helper/scroll-to-top';

function App() {

  const  { backgroundImage } = useContext(ThemeContext);

  return (

    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
                  backgroundAttachment: 'fixed', backgroundPosition: 'top' }} >
      
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/resume' element={<ResumePage />} exact />
          <Route path='projects' element={<ProjectPage />} exact />
          <Route path='/contacts' element={<ContactPage />} exact />

          <Route 
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
        <Footer />
      </Router>
      <BackToTop />
      <ThemeChange />
    </div>
  );
}

export default App;
