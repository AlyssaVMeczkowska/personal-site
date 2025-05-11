import { Container } from "react-bootstrap";
import self from "../assets/img/test5.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {

  return (
    <section id="home">
      <div className="banner">
        <div className="headAlign">
          <h1 className="header">Hi, I'm Alyssa Meczkowska</h1>
          <div className="alignment">
            <div className="box1">
              <img src={self} alt="Header Img"/></div>    
              <Container>
                <div className="spacing">
                  <p id="spacing">I'm a third-year Computer Science student at St. John’s University with a strong academic foundation and hands-on experience in research, technology outreach, and student advocacy.
                  <br></br><br></br> Currently, I’m conducting research in cheminformatics, clinical NLP, and quantum computing, applying clustering methods, transformer models, and cryptographic frameworks to extract insights from scientific and medical data. 
                  I enjoy combining technical depth with curiosity to drive innovation and build inclusive, research-driven communities.</p>
                  <div className="info">
                  <a href="Resume_AM.pdf" target="_blank" rel="noopener noreferrer" className="a a2 one"> Resume <ArrowRightCircle size={25} /></a>
                    <a href="mailto:alyssa.meczkowska@gmail.com" className="a a2 two"> Contact<ArrowRightCircle size={25} /></a>
                  </div>
                </div>
              </Container>
          </div>
        </div>
      </div>
    </section>
  )
}
