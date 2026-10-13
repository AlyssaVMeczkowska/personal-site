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
        {/* Columbia – Decompilation Book */}
<div className="timeline-item">
  <div className="timeline-marker"></div>
  <div className="timeline-content">
    <div className="timeline-flex-container">
      <div className="timeline-text">
        <div className="experience-header">
          <div className="exp-title-group">
            <span className="company-name">Columbia University</span>
            <h3>AI Security Research Intern</h3>
          </div>
          <span className="exp-date">Sep 2026 – Present</span>
        </div>
        <p className="exp-description">
          Contributing to{' '}
          <a
            href="https://decompilation.education/"
            target="_blank"
            rel="noopener noreferrer"
            className="exp-link"
          >
            Decompilation Book
          </a>
          , a “compiler course in reverse” built on{' '}
          <a
            href="https://github.com/ZhangZhuoSJTU/tiny-dec"
            target="_blank"
            rel="noopener noreferrer"
            className="exp-link"
          >
            tiny-dec
          </a>
          , an open-source educational decompiler (240+ GitHub stars) that turns RV32I binaries
          into readable C through 19 inspectable pipeline stages. I write and expand chapters
          walking readers through each stage, from instruction decoding and p-code lifting to
          CFGs, SSA, and type recovery, pairing explanations with diagrams, review quizzes, and
          hands-on tiny-dec exercises.
        </p>
        <div className="exp-tags">
          <span className="tag">Decompilation</span>
          <span className="tag">Reverse Engineering</span>
          <span className="tag">RISC-V</span>
          <span className="tag">Python</span>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Security Research Assistant */}
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
                    <h3>Security Research Assistant</h3>
                  </div>
                  <span className="exp-date">May 2025 – June 2026</span>
                </div>
                <p className="exp-description">
                  Built a post-quantum V2X handshake simulator (Mininet-WiFi, SUMO, Open Quantum Safe liboqs) executing real Kyber512 (ML-KEM) key exchanges, with five injected attack classes including GPS spoofing, entropy tampering, and key mismatch, producing a 500K+ labeled dataset. esigned and evaluated a multi-model detection pipeline (neural network, random forest, XGBoost) achieving 0.968 AUC, significantly outperforming baseline detection methods.
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