import React, { useEffect, useState } from 'react';
import './EducationExperience.css';
import { assets } from '../../assets/assets';
import worker from '../../assets/worker.gif';
import traveller from '../../assets/traveller.gif';
import resume from '../../assets/resume.gif';

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
      bubble.classList.add('visible');
    });
  }, [activeTab]); 

  return (
    <div className="education-experience" id="education">
      <h2 className="title"><span>Education</span> & Experience</h2>

      <div className='edu-exp-button'>
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </div>

      {/* --- EDUCATION CONTENT --- */}
      {activeTab === 'education' && (
        <div className="education-road">
          <img src={assets.road} alt="Education Roadmap" className="road-img" />

          <div className="bubble b1 animate">
            <div className="bubble-text">
              <p>🎓B.E Computer Science and Engineering</p>
              <p>📍K. Ramakrishnan College of Engineering</p>
              <p><span>2022 - 2026</span></p>
            </div>
            <div className="circle1">CGPA: 9.14</div>
          </div>

          <div className="bubble b2 animate">
            <div className="bubble-text">
              <p>🎓HSC</p>
              <p>📍Nirmala Matriculation Higher Secondary School</p>
              <p><span>2021 - 2022</span></p>
            </div>
            <div className="circle2">96.66%</div>
          </div>

          <div className="bubble b3 animate">
            <div className="bubble-text">
              <p>🎓SSLC</p>
              <p>📍Nirmala Matriculation Higher Secondary School</p>
              <p><span>2019 - 2020</span></p>
            </div>
            <div className="circle3">99%</div>
          </div>
        </div>
      )}

      {/* --- EXPERIENCE CONTENT --- */}
      {activeTab === 'experience' && (
        <div className="timeline-container">
          <div className="timeline-info">
            <div className="time"><span>June</span> - July</div>
            <div className="org">Cod<span>Soft</span></div>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-content">
            <div className="milestone">
              <img src={worker} alt="Worker" className="avatar" />
              <div className="speech-bubble">
                <p>In June 2024, I started my quest as a Web Development Intern at CodSoft...</p>
              </div>
            </div>

            <div className="milestone">
              <img src={traveller} alt="Traveller" className="avatar" />
              <div className="speech-bubble">
                <p>Designed a static travel website with a user-friendly interface.</p>
              </div>
            </div>

            <div className="milestone">
              <img src={resume} alt="Resume" className="avatar" />
              <div className="speech-bubble">
                <p>Created a responsive portfolio website showcasing my projects.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationExperience;
