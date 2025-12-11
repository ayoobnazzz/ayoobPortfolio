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
            <h3>Personal Projects</h3>
            <p>Showcasing my latest work and creative solutions</p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="gallery_zoom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="portfolio_list">
              <ul>
                {data &&
                  data.map((project, i) => (
                    <motion.li
                      key={project.id}
                      className={`grid-item ${project.category} ${project.featured ? "featured" : ""}`}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                      style={{ perspective: 1000 }}
                    >
                      <div
                        className="list_inner tilt-effect"
                        onClick={() => handleProjectClick(project)}
                      >
                        <div className="image">
                          <img src={project.img} alt={project.title} />
                          <div className="overlay">
                            <div className="overlay_content">
                              <h3>{project.title}</h3>
                              <p>{project.shortDec}</p>
                              <span className="category">{project.category}</span>
                            </div>
                          </div>
                        </div>
                        <div className="details">
                          <h3>{project.title}</h3>
                          <span>{project.category}</span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
              </ul>
            </div>
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

