import React, { useEffect, useState, useContext } from 'react';
import '../../assets/css/resume.css';
import { greetings } from '../../data/portfolio';
import Particle from "../../helper/particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row,Col } from "react-bootstrap";
import resumePdf from "../../assets/Oyindamola_Oyebade_Resume.pdf";
import  Zoom  from 'react-reveal/Zoom';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ThemeContext } from '../../context/themeContext';
import Responsive from 'react-responsive';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://raw.githubusercontent.com/ooyebade/Portfolio/main/src/assets/Oyindamola_Oyebade_Resume.pdf";

const Resume = () => {
   const [numPages, setNumPages] = useState(null);
   const { theme } = useContext(ThemeContext);
   const isDesktop = Responsive({ minWidth: 786 });
   const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

   return (
       <div style={{ backgroundColor: theme.secondary }}>
           <section className="service-container">
               <Particle />
               <Container className="container">
                   <Zoom left cascade>
                       <div className="one">
                           <span className="heading">Resume</span>
                       </div>
                   </Zoom>

                   <div className='resume-btn'>
                       {greetings.resumePdf && (
                           <a
                               href={resumePdf}
                               download='resume'
                               target='_blank'
                               rel='noreferrer'
                               style={{ maxWidth: "250px" }}
                           >
                               <button className='main-btn'>
                                   <AiOutlineDownload />
                                    Download CV
                               </button>
                           </a>
                       )}
                   </div>

                   <div>
                        <Document file={resumeLink} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                            {Array(numPages).fill().map((_, i) => (
                            <Page key={`page_${i + 1}`} pageNumber={i + 1} scale={isDesktop ? 1.7 : 0.6} />
                            ))}
                        </Document>
                   </div>

                   <div className='resume-btn'>
                       {greetings.resumePdf && (
                           <a
                               href={resumePdf}
                               download='resume'
                               target='_blank'
                               rel='noreferrer'
                               style={{ maxWidth: "250px" }}
                           >
                               <button className='main-btn'>
                                   <AiOutlineDownload />
                                    Download CV
                               </button>
                           </a>
                       )}
                   </div>

               </Container>
           </section>
       </div>
   )
}
export default Resume;