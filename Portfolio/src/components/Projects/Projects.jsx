import React, {useState, useRef } from 'react'
import './Projects.css'
import { assets } from '../../assets/assets'


const projectsData = [
  {
    title: ' Yourself',
    subtitle: 'Unwind',
    description: 'A mental wellness platform offering emotion-aware voice chat, AI-powered support, 3D storytelling, daily check-ins, and a personal stress dashboard to combat overthinking.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Flask', 'numpy', 'pandas', 'Whisper'],
    image: assets.unwind,
    live: 'https://github.com/Uvajanani/Unwind-Yourself',
    source: 'https://github.com/Uvajanani/Unwind-Yourself'
  },
  {
    title: ' Converter ',
    subtitle: 'Text to Speech',
    description: 'Developed a Text-to-Speech converter that converts written text into natural-sounding speech, with support for multiple languages.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Speech API'],
    image: assets.text,
    live: 'https://uvajanani.github.io/Text-to-Speech-Converter/',
    source: 'https://github.com/Uvajanani/Text-to-Speech-Converter'
  },
  {
    title: ' Website',
    subtitle: 'Food Delivery',
    description: 'Developed a full-stack food delivery website with cart, Stripe payments, order tracking, and an admin panel using the MERN stack.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Toastify'],
    image: assets.food,
    live: 'https://github.com/Uvajanani/Food-Delivery-App',
    source: 'https://github.com/Uvajanani/Food-Delivery-App'
  },
  {
    title: 'Spark',
    subtitle: 'Edu',
    description: 'Created an interactive 3D educational app using the MERN stack and Blender, enabling students to learn subjects through gamified tests, videos, and chatbot support.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Blender', 'three.js'],
    image: assets.eduspark,
    live: 'https://github.com/Uvajanani/EduSpark',
    source: 'https://github.com/Uvajanani/EduSpark'
  },
  {
    title: ' Calculator',
    subtitle: 'GPA',
    description: 'Built a GPA calculator that allows students to input grades and credits to instantly compute their GPA with a clean, user-friendly interface.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: assets.gpa,
    live: 'https://gpa-calculator-9bfmgaci0-uvajananis-projects.vercel.app/',
    source: 'https://github.com/Uvajanani/GPA-Calculator'
  },
  {
    title: ' Clone',
    subtitle: 'Spotify',
    description: 'Developed a Spotify clone allowing users to play, pause, skip, and rewind songs, manage playlists, and explore albums, with an admin panel for song and album management.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: assets.spotify,
    live: 'https://github.com/Uvajanani/Spotify-FullStack',
    source: 'https://github.com/Uvajanani/Spotify-FullStack'
  },
  {
    title: ' Chat App',
    subtitle: 'Real-time',
    description: 'Created a real-time chat app with features like messaging, emoji support, media sharing, profile customization, and user search, built with React and Firebase.',
    tech: ['React', 'Firebase', 'CSS', 'Toastify'],
    image: assets.chat,
    live: 'https://github.com/Uvajanani/Real-time-Chat-Application',
    source: 'https://github.com/Uvajanani/Real-time-Chat-Application'
  },
  {
    title: ' Generator',
    subtitle: 'QR Code',
    description: 'Developed a QR code generator that allows users to create and download custom QR codes for URLs, text, and other data types.',
    tech: ['HTML', 'CSS', 'QR API'],
    image: assets.qr,
    live: 'https://qr-code-generator-plodsc568-uvajananis-projects.vercel.app/',
    source: 'https://github.com/Uvajanani/QR-Code-Generator'
  },
  {
    title: ' App',
    subtitle: 'Weather',
    description: 'Built a weather app that provides real-time weather updates and forecasts based on the user location using weather API.',
    tech: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    image: assets.weather,
    live: 'https://weather-jcczuv4q7-uvajananis-projects.vercel.app/',
    source: 'https://github.com/Uvajanani/Weather'
  },
  {
    title: 'ulator',
    subtitle: 'Calc',
    description: 'Created a calculator app with basic arithmetic operations, offering a clean, user-friendly interface for quick and accurate calculations.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: assets.calc,
    live: 'https://calculator-ibno2kls4-uvajananis-projects.vercel.app/',
    source: 'https://github.com/Uvajanani/Calculator'
  },
  {
    title: ' Website',
    subtitle: 'Travel',
    description: 'Designed and developed a dynamic travel website showcasing destinations, packages, and travel details with a user-friendly interface and responsive design.',
    tech: ['HTML', 'CSS'],
    image: assets.travel,
    live: 'https://travel-littacorv-uvajananis-projects.vercel.app/',
    source: 'https://github.com/Uvajanani/Travel'
  },
  {
    title: ' Game',
    subtitle: 'Snake',
    description: 'Developed a classic Snake game with interactive controls and an engaging gameplay experience.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: assets.snake,
    live: 'https://snake-game-jade-seven.vercel.app/',
    source: 'https://github.com/Uvajanani/Snake-Game'
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const projectSectionRef = useRef(null);  

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);

    if (projectSectionRef.current) {
        projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  return (
    <div className='projects' id='projects' ref={projectSectionRef}>
      <h1><span>Project </span>Works</h1>

      <div className='projects-list'>
        {currentProjects.map((project, index) => (
          <div className='project-card' key={project.title}>
            <div className='project-image'>
              <img src={project.image} alt={project.title} />
            </div>

            <div className='project-description'>
              <h2><span>{project.subtitle}</span>{project.title}</h2>
              <p>{project.description}</p>
            </div>

            <div className='project-tech'>
              <ul>
                {project.tech.map((techItem, i) => (
                  <li key={i}>{techItem}</li>
                ))}
              </ul>
            </div>

            <div className='project-buttons'>
              <a href={project.live} target="_blank" rel='noopener noreferrer'>
                <button><img src={assets.domain} alt="Live Demo" />Live Demo</button>
              </a>
              <a href={project.source} target="_blank" rel='noopener noreferrer'>
                <button><img src={assets.github} alt="Source Code" />Source Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;


