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
    <>
      <style>{`
        .hero-enhanced {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow: hidden;
        }
        .hero-greeting {
          font-size: 26px;
          font-weight: 500;
          color: #f75023;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hero-greeting::before {
          content: '👋';
          font-size: 32px;
          animation: wave 2s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
        }
        .hero-name {
          font-size: clamp(50px, 8vw, 80px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #000 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
        }
        .hero-title {
          font-size: clamp(24px, 4vw, 32px);
          line-height: 1.5;
          margin-bottom: 25px;
          color: #333;
        }
        .hero-title .role {
          background: linear-gradient(135deg, #1cbe59 0%, #2ed66c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          position: relative;
        }
        .hero-title .location {
          background: linear-gradient(135deg, #6e50f0 0%, #8b69f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }
        .hero-description {
          font-size: 18px;
          line-height: 1.7;
          color: #6f6b80;
          margin-bottom: 35px;
          max-width: 600px;
        }
        .hero-buttons {
          display: flex;
          gap: 15px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .hero-btn-primary {
          padding: 16px 36px;
          background: linear-gradient(135deg, #f75023 0%, #ff6b4a 100%);
          color: white;
          border-radius: 30px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 6px 25px rgba(247, 80, 35, 0.35);
          transition: all 0.3s ease;
          border: none;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 35px rgba(247, 80, 35, 0.45);
        }
        .hero-social {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .hero-social::before {
          content: '';
          width: 50px;
          height: 2px;
          background: linear-gradient(to right, #f75023, transparent);
        }
        .hero-social-link {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          border: 2px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-size: 20px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .hero-social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f75023 0%, #ff6b4a 100%);
          transform: scale(0);
          transition: transform 0.3s ease;
          border-radius: 50%;
        }
        .hero-social-link:hover {
          border-color: #f75023;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(247, 80, 35, 0.3);
        }
        .hero-social-link:hover::before {
          transform: scale(1);
        }
        .hero-social-link i {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }
        .hero-social-link:hover i {
          color: white;
        }
        .hero-image-wrapper {
          position: relative;
        }
        .hero-image-enhanced {
          position: relative;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          transition: all 0.4s ease;
          background: linear-gradient(135deg, #f75023 0%, #6e50f0 100%);
          padding: 6px;
        }
        .hero-image-enhanced:hover {
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
        }
        .hero-image-enhanced img {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          transition: all 0.4s ease;
          display: block;
          width: 100%;
        }
        .hero-image-enhanced:hover img {
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
        }
        .skill-badge-floating {
          position: absolute;
          width: 85px;
          height: 85px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          background: white;
          border: 3px solid white;
        }
        .skill-badge-floating:hover {
          transform: scale(1.15) !important;
        }
        .skill-badge-floating img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
        .hero-stats {
          display: flex;
          gap: 35px;
          margin-top: 40px;
          padding-top: 30px;
          border-top: 2px solid rgba(0,0,0,0.08);
        }
        .hero-stat-item {
          text-align: left;
        }
        .hero-stat-value {
          font-size: 42px;
          font-weight: 800;
          background: linear-gradient(135deg, #f75023 0%, #6e50f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 8px;
          display: block;
        }
        .hero-stat-label {
          font-size: 14px;
          color: #6f6b80;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>
      
      <div className="dizme_tm_section" id="home">
        <div className="dizme_tm_hero hero-enhanced">
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
                    src={data && data.img ? data.img : "/img/slider/avatar.png"}
                    alt="Ayoob Nazeer"
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
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            y: [0, -10, 0]
                          }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + i * 0.1,
                            y: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
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
    </>
  );
};
export default Home;
