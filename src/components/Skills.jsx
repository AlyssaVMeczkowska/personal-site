import machineLearning from "../assets/img/machineLearning.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import sql from "../assets/img/sql.png";
import quantumPhysics from "../assets/img/quantumPhysics.png";
import chemInfo from "../assets/img/chemInfo.png";
import javascript from "../assets/img/javascript.png";
import typescript from "../assets/img/typescript.svg";
import C from "../assets/img/C.png";
import quantumComputing from "../assets/img/quantumComputing.png";
import biomedical from "../assets/img/biomedical.png";
import Carousel from 'react-multi-carousel';
import Qiskit from "../assets/img/qiskit.png";
import PennyLane from "../assets/img/pennylane.png";
import TensorFlow from "../assets/img/tensorflow.png";
import PyTorch from "../assets/img/pytorch.png";
import 'react-multi-carousel/lib/styles.css';
import ScikitLearn from "../assets/img/scikit-learn.png";
import SpaCy from "../assets/img/spacy.png";
import Psi4 from "../assets/img/psi4.png";
import RdKit from "../assets/img/rdkit.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Programming Languages</h2>
                        <p>Utilizing the most widely used programming languages.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={C} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript/TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                        </Carousel>
                    </div>
                     <div className="skill-bx wow zoomIn">
                        <h2>Computational Tools</h2>
                        <p>Leveraging pivotal tools in quantum computing and machine learning.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={TensorFlow} alt="Image" />
                                <h5>TensorFlow</h5>
                            </div>
                            <div className="item">
                                <img src={PyTorch} alt="Image" />
                                <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                                <img src={PennyLane} alt="Image" />
                                <h5>PennyLane</h5>
                            </div>
                            <div className="item">
                                <img src={Qiskit} alt="Image" />
                                <h5>Qiskit</h5>
                            </div>
                            <div className="item">
                                <img src={ScikitLearn} alt="Image" />
                                <h5>Scikit-learn</h5>
                            </div>
                            <div className="item">
                                <img src={SpaCy} alt="Image" />
                                <h5>spaCy</h5>
                            </div>
                            <div className="item">
                                <img src={[Psi4]} alt="Image" />
                                <h5>Psi4</h5>
                            </div>
                            <div className="item">
                                <img src={RdKit} alt="Image" />
                                <h5>RdKit</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

