import { Container } from "react-bootstrap";
import self from "../assets/img/img.jpg";
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
            
              <img src={self} alt="Header Img"/>   
              <Container>
                <div className="spacing">
                  <p id="spacing">I’m a master's student at Columbia University, studying Artificial Intelligence with a concentration in AI Infrastructure. My interests lie in AI security and reverse engineering.

<br></br><br></br> I currently conduct vulnerability research at Columbia University with Professor Zhuo Zhang. 

<br></br><br></br>  Outside of academics, I'm a competitive red teamer.

</p>
                  <div className="info">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssa-meczkowska/" className="a a2 one">LinkedIn<ArrowRightCircle size={25} /></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlyssaVMeczkowska/" className="a a2 one">Github<ArrowRightCircle size={25} /></a>
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
