import Paper from '../assets/img/paper.png';
import Poster from '../assets/img/poster.png';
import Quantum from '../assets/img/quantumML.png';

export const Research = () => {
  return (
    <section className="research-section" id="research">
      <div className="section-header">
        <h2>Recent Research</h2>
        <p className="section-subtitle">
          Advancing machine learning at the intersection of quantum computing, healthcare AI, and computational chemistry.
        </p>
      </div>

      {/* Clinical NLP Research */}
      <div className="research-project featured">
        <div className="project-header">
          <div className="project-meta">
            <span className="project-institution">Bukhari Lab</span>
          </div>
          <h3 className="project-title">A Machine Learning Framework for Clinician Burnout Detection</h3>
          <p className="project-role">Machine Learning Research Assistant</p>
        </div>

        <div className="project-content">
          <div className="project-visual">
  <img src={Paper} alt="BioBERT Fine-tuning" className="research-image" />
</div>

          <div className="project-details">
            <p className="project-description">
              Building end-to-end NLP pipelines to analyze 10,000+ MIMIC-IV clinical notes, uncovering 
              linguistic patterns linked to psychological stress in ICU documentation. Published work 
              accepted at IEEE ICMLA 2025.
            </p>

            <div className="project-highlights">
              <div className="highlight-item">
                <strong>Dataset:</strong> 10K+ MIMIC-IV clinical notes
              </div>
              <div className="highlight-item">
                <strong>Performance:</strong> 0.84 F1 score on burnout detection
              </div>
              <div className="highlight-item">
                <strong>Techniques:</strong> Sentiment analysis, NER, topic modeling
              </div>
            </div>

            <div className="tech-stack">
              <span className="tech-tag">BioBERT</span>
              <span className="tech-tag">HuggingFace</span>
              <span className="tech-tag">spaCy</span>
              <span className="tech-tag">PyTorch</span>
            </div>

            <div className="publication-badge">
              <span className="badge-icon"></span>
              <span className="badge-text">Published at IEEE ICMLA 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Computational Chemistry Research */}
      <div className="research-project featured">
        <div className="project-header">
          <div className="project-meta">
            <span className="project-institution">Vázquez Group</span>
          </div>
          <h3 className="project-title">Predictive Modeling of Keto-Enol Tautomerization</h3>
          <p className="project-role">Machine Learning Research Assistant</p>
        </div>

        <div className="project-content reverse">
          <div className="project-visual">
  <img src={Poster} alt="cheminformatics poster" className="research-image" />
</div>

          <div className="project-details">
            <p className="project-description">
              Co-leading development of predictive ML framework integrating quantum chemistry descriptors 
              with experimental data. Using ensemble methods and interpretability analysis to reveal 
              structure-reactivity relationships in tautomeric equilibria.
            </p>

            <div className="project-highlights">
              <div className="highlight-item">
                <strong>Dataset:</strong> 1,000+ molecules with computed descriptors
              </div>
              <div className="highlight-item">
                <strong>Models:</strong> Random Forest, XGBoost (R² = 0.71)
              </div>
              <div className="highlight-item">
                <strong>Analysis:</strong> SHAP values, PCA, feature importance
              </div>
            </div>

            <div className="tech-stack">
              <span className="tech-tag">Psi4</span>
              <span className="tech-tag">RDKit</span>
              <span className="tech-tag">XGBoost</span>
              <span className="tech-tag">scikit-learn</span>
            </div>

            <div className="award-badge">
              <span className="badge-icon"></span>
              <span className="badge-text">Presented at MERCURY 2025</span>
            </div>
            <div className="award-badge">
              <span className="badge-icon"></span>
              <span className="badge-text">CBL Summer Research Award</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Quantum ML Research */}
      <div className="research-project featured">
        <div className="project-header">
          <div className="project-meta">
            <span className="project-institution">Collins College of Professional Studies</span>
          </div>
          <h3 className="project-title">Quantum Machine Learning for Vehicular Network Security</h3>
          <p className="project-role">Quantum Machine Learning Research Assistant</p>
        </div>

        <div className="project-content">
          <div className="project-visual">
  <img src={Quantum} alt="QML" className="research-image" />
</div>

          <div className="project-details">
            <p className="project-description">
              Designing quantum-enhanced anomaly detection methods for vehicular network handshakes using 
              variational quantum circuits and kernel methods. Exploring conditions where quantum advantage 
              emerges in small, correlated security datasets.
            </p>

            <div className="project-highlights">
              <div className="highlight-item">
                <strong>Dataset:</strong> 500K+ computationally generated V2X handshakes
              </div>
              <div className="highlight-item">
                <strong>Methods:</strong> Data re-uploading circuits, IQP maps, QSVMs
              </div>
              <div className="highlight-item">
                <strong>Features:</strong> Timing jitter, RF entropy, certificate length
              </div>
            </div>

            <div className="tech-stack">
              <span className="tech-tag">Qiskit</span>
              <span className="tech-tag">PennyLane</span>
              <span className="tech-tag">scikit-learn</span>
              <span className="tech-tag">Python</span>
            </div>
            <div className="award-badge">
              <span className="badge-icon"></span>
              <span className="badge-text">Manuscript in progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

