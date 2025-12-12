import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fatchData } from "../utilits";
import { staggerContainer, fadeInUp } from "../utils/animations";
import DetailsPopup from "./popup/DetailsPopup";
import SectionTransition from "./PageTransition";
import ParticleBackground from "./ParticleBackground";

const PersonalProjects = () => {
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await fatchData("/static/projects.json");
      setData(projectsData);
    }
    fetchProjects();
  }, []);

  const handleProjectClick = (project) => {
    setPopupData(project);
    setPopup(true);
  };

  return (
    <SectionTransition>
      <style>{`
        .project-card-enhanced {
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .project-card-enhanced:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(247, 80, 35, 0.25);
          border-color: #f75023;
        }
        .project-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 60%;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .project-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card-enhanced:hover .project-image {
          transform: scale(1.1);
        }
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: flex-end;
          padding: 25px;
        }
        .project-card-enhanced:hover .project-overlay {
          opacity: 1;
        }
        .project-overlay-content {
          color: white;
          width: 100%;
        }
        .project-overlay-content h4 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
          color: white;
        }
        .project-overlay-content p {
          font-size: 14px;
          opacity: 0.9;
          line-height: 1.5;
        }
        .project-content {
          padding: 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .project-header {
          margin-bottom: 15px;
        }
        .project-title {
          font-size: 26px;
          font-weight: 700;
          color: #000;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .project-description {
          font-size: 15px;
          color: #6f6b80;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }
        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .tech-badge {
          background: linear-gradient(135deg, #f75023 0%, #ff6b4a 100%);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(247, 80, 35, 0.2);
        }
        .tech-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(247, 80, 35, 0.3);
        }
        .project-actions {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }
        .project-btn {
          flex: 1;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          cursor: pointer;
        }
        .btn-primary {
          background: linear-gradient(135deg, #f75023 0%, #ff6b4a 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(247, 80, 35, 0.3);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(247, 80, 35, 0.4);
        }
        .btn-secondary {
          background: white;
          color: #000;
          border: 2px solid #e0e0e0;
        }
        .btn-secondary:hover {
          border-color: #f75023;
          color: #f75023;
          transform: translateY(-2px);
        }
        .projects-grid-enhanced {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 35px;
          margin-top: 60px;
        }
        .featured-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #6e50f0 0%, #8b69f7 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(110, 80, 240, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        @media (max-width: 768px) {
          .projects-grid-enhanced {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
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
          <ParticleBackground particleCount={1000} showShader={true} />
        </div>

        {/* Decorative Brushes */}
        <div className="brush_1">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2">
          <img src="img/brushes/portfolio/2.png" alt="image" />
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
};

export default PersonalProjects;

