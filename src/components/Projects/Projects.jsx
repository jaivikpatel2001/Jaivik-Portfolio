import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid" ref={ref}>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image-content"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    const placeholder = e.target.parentElement.querySelector('.project-image-placeholder');
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                      placeholder.querySelector('span').textContent = project.title.substring(0, 2).toUpperCase();
                    }
                  }}
                />
                <div className="project-image-placeholder" style={{ display: 'none' }}>
                  <span>{project.title.substring(0, 2).toUpperCase()}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tags.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo-button"
                  aria-label="View live demo"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="button-icon" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
