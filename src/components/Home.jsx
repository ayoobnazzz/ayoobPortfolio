import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { fatchData } from "../utilits";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";
import ParallaxSection, { ParallaxElement } from "./ParallaxSection";
import ParticleBackground from "./ParticleBackground";
import { getSliderImageUrl, processImagePaths } from "../utils/imageUtils";
import "../styles/home.css";

const Home = memo(({ dark }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fatchData("/static/info.json");
      setData(processImagePaths(fetchedData));
    }
    fetchData();
  }, []);

  return (
    <div className="dizme_tm_section" id="home">
        <div className="dizme_tm_hero hero-enhanced">
          {/* Background Image */}
          <div
            className="background"
            data-img-url={getSliderImageUrl(`${dark ? 2 : 1}.jpg`)}
          />
          
          {/* Particle Background Canvas */}
          <div className="particle-background-hero" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
            <ParticleBackground particleCount={80} showShader={false} />
          </div>

          <div className="container">
            <div className="content">
              <ParallaxSection speed={0.3} className="details">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div className="hello" variants={fadeInUp}>
                    <div className="hero-greeting">{`Hello, I'm`}</div>
                  </motion.div>
                  <motion.div className="name" variants={fadeInUp}>
                    <h1 className="hero-name">{data && data.name ? data.name : "Ayoob Nazeer"}</h1>
                  </motion.div>
                  <motion.div className="job" variants={fadeInUp}>
                    <div className="hero-title">
                      A <span className="role">{data && data.mainSkill}</span>{" "}
                      From <span className="location">{data.address}</span>
                    </div>
                  </motion.div>
                  <motion.div className="text" variants={fadeInUp}>
                    <p className="hero-description">{data.bio}</p>
                  </motion.div>
                  <motion.div className="button" variants={fadeInUp}>
                    <div className="hero-buttons">
                      <a className="hero-btn-primary" href="#summery">
                        <span>About Me</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                      <div className="hero-social">
                        {data &&
                          data.social &&
                          data.social.map((social, i) => (
                            <motion.a 
                              key={i}
                              href={social.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hero-social-link"
                              whileHover={{ y: -3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <i className={social.icon} />
                            </motion.a>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </ParallaxSection>
            
            <ParallaxSection speed={0.5} className="avatar">
              <motion.div
                className="image hero-image-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div 
                  className="hero-image-enhanced"
                  whileHover={{ scale: 1.03 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={data && data.img ? data.img : getSliderImageUrl("photo-template-dev.png")}
                    alt="Ayoob Nazeer"
                    loading="eager"
                    fetchPriority="high"
                  />
                </motion.div>
                {data &&
                  data.skills &&
                  data.skills.map(
                    (skill, i) =>
                      skill.icon && (
                        <motion.span
                          key={i}
                          className={`skills ${skill.name} skill-badge-floating`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                        >
                          <img src={skill.icon} alt={skill.name} loading="lazy" width="70" height="70" />
                        </motion.span>
                      )
                  )}
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Home;
