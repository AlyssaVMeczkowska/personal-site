import Daisy from "../assets/img/joindaisy_logo.jpeg";
import ULC from "../assets/img/ULC.png";
import './Professional.css'

export const Professional = () => {
  return (
    <section className="experiences" id="experience">
      <div className="section-header">
        <h2>Professional Experience</h2>
      </div>

      <div className="timeline">
        {/* Daisy */}
         <a 
              href="https://www.joindaisy.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              {/* <div className="timeline-image">
                <img src={Daisy} alt="Daisy Property Management" />
              </div> */}
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                    <span className="company-name">Daisy Property Management</span>
                    <h3>AI Intern</h3>
                  </div>
                  <span className="exp-date">May 2025 – August 2025</span>
                </div>
                <p className="exp-description">
                  Built 3 AI workflow automations using the Gemini API and Make to extract, classify, and route
                  structured data from payroll and mortgage documents, processing 5K+ docs in testing and
                  development with a 95% reduction in processing time. Eliminated recurring manual errors by
                  replacing human review steps with automated validation pipelines, improving accuracy and
                  reducing ops overhead across finance workflows.
                </p>
                <div className="exp-tags">
                  <span className="tag">Gemini API</span>
                  <span className="tag">Automation</span>
                  <span className="tag">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </a>

        {/* Computer Science Tutor */}
        <a 
              href="https://www.stjohns.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              {/*<div className="timeline-image">
                <img src={ULC} alt="St. John's University" />
              </div> */}
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                    <span className="company-name">St. John's University</span>
                    <h3>Computer Science Tutor</h3>
                  </div>
                  <span className="exp-date">October 2024 – December 2025</span>
                </div>
                <p className="exp-description">
                  Delivered 200+ hours of instruction in computer science and math, earning recognition as
                  "Tutor of the Month." Designed custom exercises in algorithms and discrete math, strengthening
                  students' technical skills.
                </p>
                <div className="exp-tags">
                  <span className="tag">Algorithms</span>
                  <span className="tag">Discrete Math</span>
                  <span className="tag">Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    </section>
  )
}