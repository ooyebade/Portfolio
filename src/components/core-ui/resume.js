import React, { useEffect, useState, useContext } from 'react';
import '../../assets/css/resume.css';
import { greetings } from '../../data/portfolio';
import Particle from "../../helper/particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row } from "react-bootstrap";
import resumePdf from "../../assets/Oyindamola_Resume.pdf";
import  Zoom  from 'react-reveal/Zoom';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ThemeContext } from '../../context/themeContext';
import Responsive from 'react-responsive';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://raw.githubusercontent.com/ooyebade/Portfolio/main/src/assets/Oyindamola_Resume.pdf";

function Resume() {
   const [numPages, setNumPages] = useState(null);
   const { theme } = useContext(ThemeContext);
   const isDesktop = 786;
   const [width, setWidth] = useState(1200);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    


   return (
       <div style={{ backgroundColor: theme.secondary }}>
               <Container fluid className="service-container">
                <Particle />
                    <Row style={{ justifyContent: "center", position: "relative" }}> 
                        <Zoom left cascade>
                            <div className="one">
                                <span className="heading">Resume</span>
                            </div>
                        </Zoom>
                   </Row>

                   <Row style={{ justifyContent: "center", position: "relative" }}> 
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
                   </Row>

                   <Row className='resume'>
                        <Document file={resumeLink} onLoadSuccess={({ numPages }) => setNumPages(numPages)} className="">
                            {Array(numPages).fill().map((_, i) => (
                            <Page key={`page_${i + 1}`} pageNumber={i + 1} scale={width > isDesktop ? 1.7 : 0.6} />
                            ))}
                        </Document>
                    </Row>

                   <Row style={{ justifyContent: "center", position: "relative" }}> 
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
                   </Row>
               </Container>
       </div>
   )
}
export default Resume;