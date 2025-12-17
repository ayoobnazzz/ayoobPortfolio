import { useEffect, useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { fatchData } from "../utilits";
import { staggerContainer, fadeInUp } from "../utils/animations";
import DetailsPopup from "./popup/DetailsPopup";
import SectionTransition from "./PageTransition";
import ParticleBackground from "./ParticleBackground";
import { processImagePaths } from "../utils/imageUtils";
import "../styles/projects.css";

const PersonalProjects = memo(() => {
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await fatchData("/static/projects.json");
      setData(processImagePaths(projectsData));
    }
    fetchProjects();
  }, []);

  const handleProjectClick = useCallback((project) => {
    setPopupData(project);
    setPopup(true);
  }, []);

  return (
    <SectionTransition>
      <div className="dizme_tm_section" id="projects">
      <div className="dizme_tm_portfolio">
        <div className="container">
          <motion.div
            className="dizme_tm_main_title"
            data-align="center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 style={{ fontSize: '48px', marginBottom: '15px' }}>Personal Projects</h3>
            <p style={{ 
              fontSize: '18px', 
              color: '#6f6b80', 
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Showcasing innovative solutions and real-world applications. Each project demonstrates my expertise in modern web technologies and commitment to delivering exceptional user experiences.
            </p>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div
            className="projects-grid-enhanced"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {data &&
              data.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="project-card-enhanced"
                >
                  <div className="project-image-wrapper">
                    {project.featured && (
                      <div className="featured-badge">Featured</div>
                    )}
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="project-overlay">
                      <div className="project-overlay-content">
                        <h4>{project.title}</h4>
                        <p>{project.shortDec}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    
                    <p className="project-description">
                      {project.description}
                    </p>
                    
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="project-tech-stack">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="project-actions">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-btn btn-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>🚀</span>
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-btn btn-secondary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>💻</span>
                          GitHub
                        </a>
                      )}
                      <button 
                        className="project-btn btn-secondary"
                        onClick={() => handleProjectClick(project)}
                      >
                        <span>ℹ️</span>
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* Particle Background */}
        <div className="particle-background-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}>
          <ParticleBackground particleCount={100} showShader={false} />
        </div>
      </div>

      {/* Project Details Popup */}
      {popup && (
        <DetailsPopup
          open={popup}
          close={() => setPopup(false)}
          data={popupData}
        />
      )}
      </div>
    </SectionTransition>
  );
});

export default PersonalProjects;

