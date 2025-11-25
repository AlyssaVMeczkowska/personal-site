export const Leadership = () => {
  return (
    <section className="leadership-section" id="leadership">
      <div className="section-header">
        <h2>Leadership & Recognition</h2>
        <p className="section-subtitle">
          Building communities, competing in cybersecurity, and earning recognition for academic excellence
        </p>
      </div>

      {/* Awards Grid */}
      <div className="awards-grid">
        <div className="award-card featured">
          <div className="award-icon">🏆</div>
          <h4>Hofstra-Amazon CTF Winner</h4>
          <p className="award-date">November 2025</p>
          <p className="award-description">First place in capture the flag cybersecurity competition</p>
        </div>

        <div className="award-card featured">
          <div className="award-icon">🏆</div>
          <h4>BSides Red Team CTF Winner</h4>
          <p className="award-date">October 2025</p>
          <p className="award-description">Won red team competition at BSides security conference</p>
        </div>

        <div className="award-card">
          <div className="award-icon">🎓</div>
          <h4>CCPS Honor Society</h4>
          <p className="award-date">October 2025</p>
          <p className="award-description">Inducted for academic excellence in computer science</p>
        </div>

        <div className="award-card">
          <div className="award-icon">🔬</div>
          <h4>Clare Boothe Luce Scholar</h4>
          <p className="award-date">May 2025</p>
          <p className="award-description">Funded summer research in computational chemistry</p>
        </div>

        <div className="award-card">
          <div className="award-icon">📚</div>
          <h4>Provost Scholarship</h4>
          <p className="award-date">August 2023</p>
          <p className="award-description">Merit-based scholarship for academic achievement</p>
        </div>
      </div>

      {/* Leadership Roles */}
      <div className="leadership-roles">
        <h3>Leadership Positions</h3>
        
        <div className="roles-grid">
          <div className="role-card">
            <div className="role-header">
              <div className="role-icon">🌐</div>
              <div className="role-info">
                <h4>Lead Organizer</h4>
                <p className="role-org">Google Developer Group</p>
                <span className="role-date">November 2025 – Present</span>
              </div>
            </div>
            <p className="role-description">
              Coordinating workshops, speaker events, and developer meetups that bring together students 
              and industry professionals to explore Google technologies.
            </p>
          </div>

          <div className="role-card">
            <div className="role-header">
              <div className="role-icon">💰</div>
              <div className="role-info">
                <h4>Treasurer</h4>
                <p className="role-org">Girls Who Code College Loop</p>
                <span className="role-date">September 2025 – Present</span>
              </div>
            </div>
            <p className="role-description">
              Managing finances and supporting initiatives to empower women in technology through 
              coding workshops and mentorship programs.
            </p>
          </div>

          <div className="role-card">
            <div className="role-header">
              <div className="role-icon">📱</div>
              <div className="role-info">
                <h4>Social Media Coordinator</h4>
                <p className="role-org">ACM Student Chapter</p>
                <span className="role-date">May 2025 – Present</span>
              </div>
            </div>
            <p className="role-description">
              Managing digital outreach, promoting technical events, and fostering community engagement 
              across social media platforms.
            </p>
          </div>

          <div className="role-card">
            <div className="role-header">
              <div className="role-icon">🖥️</div>
              <div className="role-info">
                <h4>Board Member</h4>
                <p className="role-org">Student Technology Governance</p>
                <span className="role-date">October 2024 – Present</span>
              </div>
            </div>
            <p className="role-description">
              Advocating for technology integration in student services and representing student 
              perspectives in university-wide IT decision-making.
            </p>
          </div>

          <div className="role-card">
            <div className="role-header">
              <div className="role-icon">🎯</div>
              <div className="role-info">
                <h4>Red Team Competitor</h4>
                <p className="role-org">STJ CyberStorm</p>
                <span className="role-date">October 2025 – Present</span>
              </div>
            </div>
            <p className="role-description">
              Competing in cybersecurity competitions, practicing offensive security techniques, 
              and developing penetration testing skills.
            </p>
          </div>

          <div className="role-card">
            <div className="role-header">
              <div className="role-icon">👩‍💻</div>
              <div className="role-info">
                <h4>Volunteer</h4>
                <p className="role-org">Code Path</p>
                <span className="role-date">October 2025</span>
              </div>
            </div>
            <p className="role-description">
              Supporting educational initiatives that increase diversity in tech through free 
              coding courses and career development resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
