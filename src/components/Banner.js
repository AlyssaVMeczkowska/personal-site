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
                  <p id="spacing">I'm a third-year Computer Science student at St. John’s University with a strong academic foundation and hands-on experience in research, tutoring, and technology advocacy. 
                    <br></br><br></br>Currently, I’m conducting cheminformatics and machine learning research, applying clustering analysis and large language models to uncover insights in molecular data. 
                    I enjoy combining technical knowledge relating to quantum physics with scientific curiosity to contribute to meaningful research and innovation.</p>
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
