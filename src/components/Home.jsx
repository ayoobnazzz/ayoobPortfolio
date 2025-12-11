import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fatchData } from "../utilits";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";
import ParallaxSection, { ParallaxElement } from "./ParallaxSection";
import ParticleBackground from "./ParticleBackground";

const Home = ({ dark }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      setData(await fatchData("/static/info.json"));
    }
    fetchData();
  }, []);

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        {/* Background Image */}
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
        />
        
        {/* Particle Background Canvas */}
        <div className="particle-background-hero" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
          <ParticleBackground particleCount={1500} showShader={true} />
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
                  <h3 className="orangeText">{`Hello, I'm`}</h3>
                </motion.div>
                <motion.div className="name" variants={fadeInUp}>
                  <h3>{data && data.name ? data.name : "name"}</h3>
                </motion.div>
                <motion.div className="job" variants={fadeInUp}>
                  <p>
                    A <span className="greenText">{data && data.mainSkill}</span>{" "}
                    From <span className="purpleText">{data.address}</span>
                  </p>
                </motion.div>
                <motion.div className="text" variants={fadeInUp}>
                  <p>{data.bio}</p>
                </motion.div>
                <motion.div className="button" variants={fadeInUp}>
                  <div className="dizme_tm_button">
                    <a className="anchor" href="#summery">
                      <span>About Me</span>
                    </a>
                  </div>
                  <div className="social">
                    <ul>
                      {data &&
                        data.social &&
                        data.social.map((social, i) => (
                          <li key={i}>
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                              <i className={social.icon} />
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </ParallaxSection>
            
            <ParallaxSection speed={0.5} className="avatar">
              <motion.div
                className="image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={data && data.img ? data.img : "/img/slider/avatar.png"}
                  alt="image"
                />
                {data &&
                  data.skills &&
                  data.skills.map(
                    (skill, i) =>
                      skill.icon && (
                        <motion.span
                          key={i}
                          className={`skills ${skill.name} anim_moveBottom`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                        >
                          <img src={skill.icon} alt={skill.name} />
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
};
export default Home;
