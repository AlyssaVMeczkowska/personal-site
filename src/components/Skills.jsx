/** 

import python from "../assets/img/python.png";
import C from "../assets/img/C.png";
import java from "../assets/img/java.png";
import javascript from "../assets/img/javascript.png";
import typescript from "../assets/img/typescript.svg";
import sql from "../assets/img/sql.png";

import PyTorch from "../assets/img/pytorch.png";
import TensorFlow from "../assets/img/tensorflow.png";
import ScikitLearn from "../assets/img/scikit-learn.png";
import SpaCy from "../assets/img/spacy.png";
import HuggingFace from "../assets/img/huggingface.png";
import nlp from "../assets/img/nlp.png";

import Ghidra from "../assets/img/ghidra.png";
import Wireshark from "../assets/img/wireshark.png";
import BurpSuite from "../assets/img/burpsuite.png";
import Metasploit from "../assets/img/metasploit.png";
import Nmap from "../assets/img/nmap.png";
import Gdb from "../assets/img/gdb.png";

import Linux from "../assets/img/linux.png";
import Unix from "../assets/img/unix.png";
import Docker from "../assets/img/docker.png";
import Git from "../assets/img/git.png";
import GitHub from "../assets/img/github.png";
import AWS from "../assets/img/aws.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css'

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
                        <h2>Programming</h2>
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
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>

                    <div className="skill-bx wow zoomIn">
                        <h2>AI/ML</h2>
                        <p>Frameworks and techniques for building and evaluating machine learning models.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={PyTorch} alt="Image" />
                                <h5>PyTorch</h5>
                            </div>
                            <div className="item">
                                <img src={TensorFlow} alt="Image" />
                                <h5>TensorFlow</h5>
                            </div>
                            <div className="item">
                                <img src={ScikitLearn} alt="Image" />
                                <h5>scikit-learn</h5>
                            </div>
                            <div className="item">
                                <img src={SpaCy} alt="Image" />
                                <h5>spaCy</h5>
                            </div>
                            <div className="item">
                                <img src={HuggingFace} alt="Image" />
                                <h5>Hugging Face Transformers</h5>
                            </div>
                            <div className="item">
                                <img src={nlp} alt="Image" />
                                <h5>Natural Language Processing</h5>
                            </div>
                        </Carousel>
                    </div>

                    <div className="skill-bx wow zoomIn">
                        <h2>Security</h2>
                        <p>Tools for reverse engineering, exploitation, and network analysis.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Ghidra} alt="Image" />
                                <h5>Ghidra</h5>
                            </div>
                            <div className="item">
                                <img src={Wireshark} alt="Image" />
                                <h5>Wireshark</h5>
                            </div>
                            <div className="item">
                                <img src={BurpSuite} alt="Image" />
                                <h5>Burp Suite</h5>
                            </div>
                            <div className="item">
                                <img src={Metasploit} alt="Image" />
                                <h5>Metasploit</h5>
                            </div>
                            <div className="item">
                                <img src={Nmap} alt="Image" />
                                <h5>Nmap</h5>
                            </div>
                            <div className="item">
                                <img src={Gdb} alt="Image" />
                                <h5>gdb</h5>
                            </div>
                        </Carousel>
                    </div>

                    <div className="skill-bx wow zoomIn">
                        <h2>Infrastructure</h2>
                        <p>Environments and tooling for building, shipping, and deploying software.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Linux} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={Unix} alt="Image" />
                                <h5>Unix</h5>
                            </div>
                            <div className="item">
                                <img src={Docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={Git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={GitHub} alt="Image" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={AWS} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>
    </section>

  )
}
  */