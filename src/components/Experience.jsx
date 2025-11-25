import Google from '../assets/img/Google.png';
import CodePath from '../assets/img/CodePath_Logo.png';
import GWC from '../assets/img/GWC.png';
import ACM from '../assets/img/ACM.png';
import SJU from '../assets/img/SJU.png';

export const Experience = () => {

  return (
    <>
      <section className="experiences" id="leadership">      
        
        <div className="section-header">
        <h2>Community Involvement</h2>
        <p className="section-subtitle">
          Helping build vibrant and inclusive tech communities through leadership, mentorship, and advocacy.
        </p>
      </div>
        <div className="experience-grid">
          <div className="exp-card">
            <div className="exp-card-image">
              <img src={Google} className="placeholder-img"></img>
            </div>
            <div className="exp-card-content">
              <span className="exp-date">Lead Organizer | Nov '25 – Present</span>
              <h3>Google Developer Group</h3>
              <p>Coordinating workshops, speaker events, and developer meetups that bring together students and industry professionals to explore modern Google technologies and help build a sustained developer community on campus.</p>
            </div>
          </div>

          <div className="exp-card">
            <div className="exp-card-image">
              <img src={CodePath} className="placeholder-img"></img>
            </div>
            <div className="exp-card-content">
              <span className="exp-date">Volunteer | Oct '25</span>
              <h3>CodePath</h3>
              <p>Supported introductory programming cohorts by answering questions, walking students through resuming building sessions, and providing mentorship advice to help advance their career goals.</p>
            </div>
          </div>


          <div className="exp-card">
            <div className="exp-card-image">
              <img src={GWC} className="placeholder-img"></img>
            </div>
            <div className="exp-card-content">
              <span className="exp-date">Treasurer | Sep '25 – Present</span>
              <h3>Girls Who Code</h3>
              <p>Managing the chapter’s budget, track expenses, and coordinate funding requests, ensuring we can run workshops, speaker events, and community-building activities that support women and nonbinary students in computing.</p>
            </div>
          </div>

          <div className="exp-card">
            <div className="exp-card-image">
              <img src={ACM} className="placeholder-img"></img>
            </div>
            <div className="exp-card-content">
              <span className="exp-date">Social Media Coordinator | May '25 – Present</span>
              <h3>Association for Computing Machinery</h3>
              <p>Managing digital outreach for the ACM chapter, promoting technical events, fostering community engagement through social media, and collaborating with the executive board to support technical events, peer engagement, and community building</p>
            </div>
          </div>

           <div className="exp-card">
            <div className="exp-card-image">
              <img src={SJU} className="placeholder-img"></img>
            </div>
            <div className="exp-card-content">
              <span className="exp-date">Board Member | Oct '24 – Present</span>
              <h3>Student Technology Governance Group</h3>
              <p>Advocating for technology integration in student services and academic programs, collaborates with faculty and administration to evaluate and improve campus technologies, and represents student perspectives in university-wide IT decision-making and planning efforts</p>
            </div>
          </div>
           {/* 
          <div className="exp-card">
            <div className="exp-card-image">
              <div className="placeholder-img">🖥️</div>
            </div>
            <div className="exp-card-content">
              <span className="exp-date">Red Team Competitor | Oct '24 – Present</span>
              <h3>STJ CyberStorm</h3>
              <p>Competing on the red team in collegiate cybersecurity exercises, practicing offensive security techniques such as recon, exploitation, and post-exploitation while collaborating with teammates to break into hardened, simulated environments. Recently won $2,000 with a fellow competitor at the Hofstra-Amazon CTF.</p>
            </div>
          </div> */}
        </div>

      </section>
    </>
  )
}