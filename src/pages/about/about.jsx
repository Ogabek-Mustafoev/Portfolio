import cv from '../../assets/Ogabek Mustafoev-CV.pdf'
import level from '../../assets/English level.pdf'
import certificate from '../../assets/it_sertifikat.pdf'
import './about.css';
import GoBack from '../../components/go-back/go-back';

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <GoBack />
        <div className="block">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <h3>I'm Ogabek Mustafoev - <span>Front-end Developer</span></h3>
          <p>
            From Uzbekistan, {new Date().getFullYear() - 2001} years old
            developer working with JavaScript sphere. To be honest, I don't have
            real experience because I'm new to this field. I have been studying
            front-end for 6 months. Even though I have no work experience, I can
            prepare a project and read and improve other people's code. I have
            good skills in React JS. And besides, I know Next JS for SSR & SEO and I know
            Redux & Toolkit and Zustand for state management.
          </p>
        </div>
        <div className="grid-row-2">
          <div className="grid-3">
            <div className="personal-info-1">
              <p>Birthday: <span>08 Jun, 2001</span></p>
              <p>Age: <span>22</span></p>
              <p>City:
                <span>
                  <a data-aos='fade-up' target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Samarkand,+Uzbekistan/@39.6402225,66.6382411,10z/data=!3m1!4b1!4m5!3m4!1s0x3f4d191960077df7:0x487636d9d13f2f57!8m2!3d39.627012!4d66.9749731">
                    Samarkand
                  </a>
                </span>
              </p>
            </div>
            <div className="personal-info-2">
              <p>Email:
                <span>
                  <a data-aos='fade-up' target="_blank" rel="noopener noreferrer" href="mailto:mustafoev0806@gmail.com">ogabek@gmail.com</a>
                </span>
              </p>
              <p>Phone:
                <span>
                  <a href="tel:+998883521214" target="_blank" rel="noopener noreferrer">+998 88 352-12-14</a>
                </span>
              </p>
              <p>Freelance: <span>Available</span></p>
            </div>
            <div className="cv-hireme">
              <a href={certificate} className="btn hire-me">Certificate</a>
              <a href={level} className="btn hire-me">English Level</a>
              <a href={cv} className="btn">CV</a>
            </div>
          </div>
          <div className="skills">
            <div className="skill-item">
              <h5>JS</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '86%' }}></div>
                <div className="skill-percent">86%</div>
              </div>
            </div>
            <div className="skill-item">
              <h5>React</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '78%' }}></div>
                <div className="skill-percent">78%</div>
              </div>
            </div>
            <div className="skill-item">
              <h5>Redux</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '71%' }}></div>
                <div className="skill-percent">71%</div>
              </div>
            </div>
            <div className="skill-item">
              <h5>Next</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '67%' }}></div>
                <div className="skill-percent">67%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
