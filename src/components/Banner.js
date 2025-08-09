import { Container } from "react-bootstrap";
import self from "../assets/img/test5.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import resume from "../assets/Alyssa_Meczkowska_Resume.pdf";

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
                  <p id="spacing">I’m a fourth-year Computer Science student at St. John’s University specializing in machine learning applications across biomedical AI, cheminformatics, and quantum computing.
<br></br><br></br>My work includes building regression, ensemble, and clustering models for chemical property prediction, fine-tuning transformer architectures such as BioBERT on large-scale clinical datasets, and applying ML-driven benchmarking to hybrid Kyber/Dilithium PQC with BB84 QKD in high-mobility vehicular networks.
I’m always open to collaborating with researchers and practitioners interested in applying advanced machine learning to complex, interdisciplinary problems.</p>
                  <div className="info">
                  <a href={resume} target="_blank" rel="noopener noreferrer" className="a a2 one"> Resume <ArrowRightCircle size={25} /></a>
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
