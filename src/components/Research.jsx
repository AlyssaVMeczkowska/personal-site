import Quantum from '../assets/img/quantumML.png';
import Paper from '../assets/img/paper.png';
import Poster from '../assets/img/poster.png';
import './Professional.css'

export const Research = () => {
  return (
    <section className="experiences" id="research">
      <div className="section-header">
        <h2>Research Experience</h2>
      </div>

      <div className="timeline">
        {/* AI Security Research Assistant */}
        <a 
              href="https://www.stjohns.edu/academics/schools/college-professional-studies" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              {/* <div className="timeline-image">
                <img src={Quantum} alt="Quantum ML / Network Security" />
              </div> */}
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                    <span className="company-name">St. John's University</span>
                    <h3>AI Security Research Assistant</h3>
                  </div>
                  <span className="exp-date">May 2025 – June 2026</span>
                </div>
                <p className="exp-description">
                  Built a multi-component simulation system integrating three open-source frameworks (network
                  emulation, traffic simulation, and cryptography) to generate a 500K+ sample labeled dataset
                  across six network attack scenarios. Designed and evaluated a multi-model classification
                  pipeline (Neural Network, Random Forest, XGBoost) achieving 0.968 AUC, significantly
                  outperforming baseline detection methods.
                </p>
                <div className="exp-tags">
                  <span className="tag">Neural Networks</span>
                  <span className="tag">XGBoost</span>
                  <span className="tag">Network Security</span>
                  <span className="tag">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </a>

        {/* Bukhari Lab */}
        <a 
              href="https://bukharilab.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              {/* <div className="timeline-image">
                <img src={Paper} alt="Bukhari Lab" />
              </div> */}
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                    <span className="company-name">Bukhari Lab</span>
                    <h3>AI/ML Research Assistant</h3>
                  </div>
                  <span className="exp-date">April 2025 – May 2026</span>
                </div>
                <p className="exp-description">
                  Built an NLP classification model for clinical text, improving prediction accuracy through
                  large-scale feature engineering and evaluation on a multi-million-row healthcare dataset.
                  Co-authored two peer-reviewed publications (IEEE ICMLA, FLAIRS) on the resulting framework.
                  Led full-stack development of an AI-powered medical billing platform: built a clinician-facing
                  dashboard (React, Node.js, GraphQL, SQL) and an end-to-end RAG pipeline for information
                  retrieval, deployed on AWS.
                </p>
                <div className="exp-tags">
                  <span className="tag">BioBERT</span>
                  <span className="tag">NLP</span>
                  <span className="tag">React</span>
                  <span className="tag">RAG</span>
                  <span className="tag">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </a>

        {/* Vázquez Group */}
        <a 
              href="https://sites.google.com/view/vazquez-group" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-flex-container">
              {/* <div className="timeline-image">
                <img src={Poster} alt="Vázquez Group" />
              </div> */}
              <div className="timeline-text">
                <div className="experience-header">
                  <div className="exp-title-group">
                    <span className="company-name">Vázquez Group</span>
                    <h3>AI/ML Research Assistant</h3>
                  </div>
                  <span className="exp-date">March 2025 – May 2026</span>
                </div>
                <p className="exp-description">
                  Built an ML framework to predict outcomes of organic chemical reactions from molecular data of
                  200+ computationally generated molecules, using quantum chemistry computation libraries in
                  Python. Trained ensemble models (Random Forest, XGBoost) achieving R² of 0.71 across a large
                  dataset. Independently designed, wrote, and presented 3 research posters at academic
                  conferences.
                </p>
                <div className="exp-tags">
                  <span className="tag">Random Forest</span>
                  <span className="tag">XGBoost</span>
                  <span className="tag">Cheminformatics</span>
                  <span className="tag">Python</span>
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