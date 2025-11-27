import { Container } from "react-bootstrap";
import self from "../assets/img/Headshot_AM.JPEG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import resume from "../assets/Alyssa_Meczkowska_Resume.pdf";
import './Banner.css'

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
                  <p id="spacing">I’m a fourth-year Computer Science undergraduate student at St. John’s University, conducting research in both classical and quantum machine learning.

<br></br><br></br>My work includes developing quantum kernel methods and QSVM-based anomaly detection for vehicular networks, building regression and clustering models for chemical property prediction, and fine-tuning transformer architectures like BioBERT on large-scale MIMIC-IV clinical notes for clinician burnout detection. I’m always open to collaborating with researchers and practitioners interested in applying advanced machine learning to complex problems.</p>
                  <div className="info">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssa-meczkowska/" className="a a2 one">LinkedIn<ArrowRightCircle size={25} /></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlyssaVMeczkowska/" className="a a2 one">Github<ArrowRightCircle size={25} /></a>
                  <a href={resume} target="_blank" rel="noopener noreferrer" className="a a2 one"> Resume <ArrowRightCircle size={25} /></a>
                    <a href="mailto:alyssa.meczkowska@gmail.com" className="a a2 two">  Email <ArrowRightCircle size={25} /></a>
                  </div>
                </div>
              </Container>
          </div>
        </div>
      </div>
    </section>
  )
}
