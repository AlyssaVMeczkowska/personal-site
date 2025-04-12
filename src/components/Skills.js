import machineLearning from "../assets/img/machineLearning.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import sql from "../assets/img/sql.png";
import quantumPhysics from "../assets/img/quantumPhysics.png";
import chemInfo from "../assets/img/chemInfo.png";
import javascript from "../assets/img/javascript.png";
import typescript from "../assets/img/typescript.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
                        <h2>Skills</h2>
                        <p>Experience in full-stack software development, database management, and scientific research, with a strong foundation in computer science
                             and a focus on applying technical skills to real-world problems in machine learning and quantum physics.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={machineLearning} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={quantumPhysics} alt="Image" />
                                <h5>Quantum Physics</h5>
                            </div>
                            <div className="item">
                                <img src={chemInfo} alt="Image" />
                                <h5>Cheminformatics</h5>
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
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}