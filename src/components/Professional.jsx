import IBM from "../assets/img/IBM-Research-logo.jpg";
import MediCaddie from "../assets/img/mc.png";
import Daisy from "../assets/img/joindaisy_logo.jpeg";
import ULC from "../assets/img/ULC.png";
import CCPS from "../assets/img/CCPS.jpg";

export const Professional = () => {
  return (
    <section className="experiences" id="experience">
      <div className="section-header">
        <h2>Professional Experience</h2>
        <p className="section-subtitle">
          Shaping the field of technology one line of code at a time.
        </p>
      </div>

      <div className="timeline">
        {/* IBM Research */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              <div className="timeline-image">
                {/* Replace with your actual image */}
                <img src={IBM} alt="IBM Research" />
              </div>
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                    <span className="company-name">IBM Thomas J. Watson Research Center</span>
                    <h3>Research Software Contributor</h3>
                  </div>
                  <span className="exp-date">November 2025 – Present</span>
                </div>
                <p className="exp-description">
                  Selected to collaborate with IBM engineers on active development of the OSCAL Compass compliance 
                  automation toolkit. Contributing bug fixes, schema improvements, and documentation across multiple 
                  GitHub repositories.
                </p>
                <div className="exp-tags">
                  <span className="tag">Open Source</span>
                  <span className="tag">Python</span>
                  <span className="tag">OSCAL</span>
                  <span className="tag">GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MediCaddie */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              <div className="timeline-image">
                <img src={MediCaddie} alt="MediCaddie" />
              </div>
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                    <span className="company-name">MediCaddie Technologies</span>
                    <h3>Machine Learning Engineer</h3>
                  </div>
                  <span className="exp-date">November 2025 – Present</span>
                </div>
                <p className="exp-description">
                  Designing and training ICD-10 and CPT prediction models using transformer-based embeddings, TF-IDF features, and structured EHR signals to automate clinical coding with high precision
                </p>
                <div className="experience-header">
                  <div className="exp-title-group">
                    <h3>Software Engineer</h3>
                  </div>
                  <span className="exp-date">August 2025 – November 2025</span>
                </div>
                <p className="exp-description">
                  Led full-stack development of clinician dashboard with React, Node.js, GraphQL, and SQL. 
                </p>
                <div className="exp-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">GraphQL</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">Neo4j</span>
                  <span className="tag">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* Tutoring */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              <div className="timeline-image">
                <img src={CCPS} alt="St. John's University" />
              </div>
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                    <span className="company-name">Collins College of Professional Studies</span>
                    <h3>Computer Science Tutor</h3>
                  </div>
                  <span className="exp-date">September 2025 – Present</span>
                </div>
                <p className="exp-description">
                  Guiding students through complex algorithms, debugging, and project design. Developing 
                  tailored problem-solving strategies for advanced CS coursework.
                </p>
                <div className="exp-tags">
                  <span className="tag">Algorithms</span>
                  <span className="tag">Data Structures</span>
                  <span className="tag">Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Daisy */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              <div className="timeline-image">
                <img src={Daisy} alt="Daisy Property Management" />
              </div>
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                                        <span className="company-name">Daisy Property Management</span>
                    <h3>Automation Engineering Intern</h3>
                  </div>
                  <span className="exp-date">May 2025 – August 2025</span>
                </div>
                <p className="exp-description">
                  Built 3 workflow automations processing 5,000+ documents, reducing processing time by 95% 
                  and eliminating recurring errors across payroll and mortgage operations.
                </p>
                <div className="exp-tags">
                  <span className="tag">API Development</span>
                  <span className="tag">Automation</span>
                  <span className="tag">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* University Learning Commons */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              <div className="timeline-image">
                <img src={ULC} alt="University Learning Commons" />
              </div>
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                                        <span className="company-name">University Learning Commons</span>
                    <h3>Computer Science and Math Tutor</h3>
                  </div>
                  <span className="exp-date">October 2024 – May 2025</span>
                </div>
                <p className="exp-description">
                  Delivered 150+ hours of instruction earning "Tutor of the Month" recognition. Designed 
                  custom exercises in algorithms and discrete math to strengthen students' technical skills.
                </p>
                <div className="exp-tags">
                  <span className="tag">Computer Science</span>
                  <span className="tag">Mathematics</span>
                  <span className="tag">Discrete Math</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}