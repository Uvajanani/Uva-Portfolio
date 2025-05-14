import React from 'react';
import './Skills.css';
import { assets } from '../../assets/assets';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <h1><span>Skills </span></h1>
      <div className='all-skills'>
        <div className='skill-card frontend'>
            <div className='skills-image'>
                <h2>Frontend Development</h2>
                <img src={assets.ux} alt="frontend" />
            </div>
            <SkillProgress label="React" percent={80} />
            <SkillProgress label="HTML" percent={85} />
            <SkillProgress label="CSS" percent={75} />
            <SkillProgress label="TailwindCSS" percent={60} />
            <SkillProgress label="JavaScript" percent={65} />
        </div>

        <div className='skill-card backend'>
            <div className='skills-image'>
                <h2>Backend Development</h2>
                <img src={assets.backend} alt="backend" />
            </div>
            <SkillProgress label="Node.js" percent={75} />
            <SkillProgress label="Express.js" percent={70} />
            <SkillProgress label="REST API" percent={60} />
        </div>

        <div className='skill-card database'>
            <div className='skills-image'>
                <h2>Database Management</h2>
                <img src={assets.database} alt="database" />
            </div>
            <SkillProgress label="MySQL" percent={80} />
            <SkillProgress label="MongoDB" percent={75} />
        </div>

        <div className='skill-card programming'>
            <div className='skills-image'>
                <h2>Programming Languages</h2>
                <img src={assets.programming} alt="programming" />
            </div>
            <SkillProgress label="Java" percent={90} />
            <SkillProgress label="Python" percent={70} />
            <SkillProgress label="C++" percent={65} />
            <SkillProgress label="C" percent={70} />
        </div>
      </div>
    </div>
  );
};

const SkillProgress = ({ label, percent }) => {
  return (
    <div className='skillset'>
      <p className='label'>{label}</p>
      <div className='progress-bar-container'>
        <div className='progress-bar-fill' style={{ width: `${percent}%` }}></div>
      </div>
      <p>{percent}%</p>
    </div>
  );
};

export default Skills;
