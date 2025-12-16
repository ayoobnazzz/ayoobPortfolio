import { motion } from "framer-motion";
import Counter from "./Counter";
import ParallaxSection, { ParallaxElement } from "./ParallaxSection";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";
import SectionTransition from "./PageTransition";

const About = () => {
  return (
    <SectionTransition>
      <style>{`
        .summary-modern {
          position: relative;
          padding: 100px 0;
        }
        .summary-section-header {
          text-align: center;
          margin-bottom: 70px;
        }
        .summary-subtitle {
          font-size: 16px;
          font-weight: 600;
          color: #f75023;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }
        .summary-main-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          background: linear-gradient(135deg, #000 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .summary-main-description {
          font-size: 18px;
          color: #6f6b80;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .summary-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          align-items: start;
        }
        .summary-image-container {
          position: relative;
        }
        .summary-image-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          background: linear-gradient(135deg, #f75023 0%, #6e50f0 100%);
          padding: 8px;
        }
        .summary-image-card img {
          border-radius: 18px;
          display: block;
          width: 100%;
          height: auto;
        }
        .summary-experience-badge {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 30px 50px;
          border-radius: 20px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
          text-align: center;
          z-index: 10;
        }
        .summary-experience-badge h3 {
          font-size: 56px;
          font-weight: 800;
          background: linear-gradient(135deg, #f75023 0%, #6e50f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 10px 0;
          line-height: 1;
        }
        .summary-experience-badge span {
          font-size: 16px;
          color: #6f6b80;
          font-weight: 600;
          display: block;
        }
        .summary-text-content {
          padding-top: 20px;
        }
        .summary-role-title {
          font-size: 20px;
          font-weight: 700;
          color: #f75023;
          margin-bottom: 15px;
          display: inline-block;
          padding: 8px 20px;
          background: rgba(247, 80, 35, 0.08);
          border-radius: 30px;
        }
        .summary-main-text {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.6;
          color: #000;
          margin-bottom: 25px;
        }
        .summary-description-text {
          font-size: 17px;
          line-height: 1.8;
          color: #6f6b80;
          margin-bottom: 20px;
        }
        .summary-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 35px 0;
        }
        .summary-highlight-item {
          background: linear-gradient(135deg, rgba(247, 80, 35, 0.05) 0%, rgba(110, 80, 240, 0.05) 100%);
          padding: 25px;
          border-radius: 16px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        .summary-highlight-item:hover {
          border-color: rgba(247, 80, 35, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .summary-highlight-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }
        .summary-highlight-title {
          font-size: 18px;
          font-weight: 700;
          color: #000;
          margin-bottom: 8px;
        }
        .summary-highlight-desc {
          font-size: 14px;
          color: #6f6b80;
          line-height: 1.6;
        }
        .summary-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          background: linear-gradient(135deg, #f75023 0%, #ff6b4a 100%);
          color: white;
          font-weight: 600;
          font-size: 16px;
          border-radius: 30px;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(247, 80, 35, 0.35);
          transition: all 0.3s ease;
          margin-top: 20px;
        }
        .summary-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(247, 80, 35, 0.45);
        }
        @media (max-width: 1040px) {
          .summary-content-wrapper {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          .summary-highlights {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="dizme_tm_section summary-modern" id="summery">
        <div className="container">
          <motion.div
            className="summary-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="summary-subtitle">Get To Know More</p>
            <h2 className="summary-main-title">About Me</h2>
            <p className="summary-main-description">
              Crafting exceptional digital experiences through innovative solutions and cutting-edge technologies
            </p>
          </motion.div>

          <div className="summary-content-wrapper">
            <ParallaxSection speed={0.4}>
              <motion.div
                className="summary-image-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
              >
                <div className="summary-image-card">
                  <img src={`img/about/3.jpeg`} alt="Ayoob Nazeer" />
                </div>
                <motion.div
                  className="summary-experience-badge"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3>
                    <Counter end={9} />+
                  </h3>
                  <span>Years of Experience</span>
                </motion.div>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed={0.3}>
              <motion.div
                className="summary-text-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <span className="summary-role-title">Senior Front-End Developer</span>
                </motion.div>
                
                <motion.h3 className="summary-main-text" variants={fadeInUp}>
                  Transforming complex ideas into elegant, scalable solutions that users love
                </motion.h3>
                
                <motion.p className="summary-description-text" variants={fadeInUp}>
                  Passionate developer with 9+ years specializing in architecting high-performance applications that deliver exceptional digital experiences. I've built micro-frontend systems reducing build times by 35%, optimized applications achieving 40% performance boosts, and crafted RESTful APIs handling 10,000+ daily requests with 99.9% uptime.
                </motion.p>
                
                <motion.p className="summary-description-text" variants={fadeInUp}>
                  My expertise spans React.js, Next.js, Angular, TypeScript, Node.js, and modern cloud technologies including GCP, Azure, Docker, and Kubernetes. I'm a mentor who's elevated team efficiency by 30%, and an innovator leveraging AI-assisted development to accelerate delivery cycles by 25%.
                </motion.p>

                <motion.div className="summary-highlights" variants={fadeInUp}>
                  <motion.div 
                    className="summary-highlight-item"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="summary-highlight-icon">🚀</div>
                    <div className="summary-highlight-title">Performance Expert</div>
                    <div className="summary-highlight-desc">
                      40% performance boosts and 50% faster data retrieval
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="summary-highlight-item"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="summary-highlight-icon">🎯</div>
                    <div className="summary-highlight-title">Micro-Frontend Architect</div>
                    <div className="summary-highlight-desc">
                      35% reduction in build times with scalable architecture
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="summary-highlight-item"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="summary-highlight-icon">👥</div>
                    <div className="summary-highlight-title">Team Leader</div>
                    <div className="summary-highlight-desc">
                      30% team efficiency boost through mentorship
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="summary-highlight-item"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="summary-highlight-icon">🤖</div>
                    <div className="summary-highlight-title">AI-Powered Development</div>
                    <div className="summary-highlight-desc">
                      25% faster delivery with GitHub Copilot & Claude AI
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <a className="summary-cta-button" href="#contact">
                    <span>Let's Work Together</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
        <ParallaxElement speed={0.2}>
          <div className="brush_1">
            <img src="img/brushes/about/1.png" alt="image" />
          </div>
        </ParallaxElement>
        <ParallaxElement speed={0.3}>
          <div className="brush_2">
            <img src="img/brushes/about/2.png" alt="image" />
          </div>
        </ParallaxElement>
      </div>
    </SectionTransition>
  );
};
export default About;
