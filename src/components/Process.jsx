import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fatchData } from "../utilits";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";
import SectionTransition from "./PageTransition";

const Process = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchProcessData() {
      setData(await fatchData("/static/workProcess.json"));
    }
    fetchProcessData();
  }, []);
  return (
    <SectionTransition>
      <style>{`
        .process-card-enhanced {
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
          border-radius: 24px;
          padding: 45px 35px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .process-card-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at top right, var(--card-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        .process-card-enhanced:hover::before {
          opacity: 0.1;
        }
        .process-card-enhanced:hover {
          transform: translateY(-12px);
          border-color: var(--card-color);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        .process-icon-wrapper {
          position: relative;
          z-index: 1;
          margin-bottom: 30px;
        }
        .process-icon-bg {
          width: 140px;
          height: 140px;
          margin: 0 auto;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--card-color) 0%, var(--card-color-light) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          transition: all 0.4s ease;
        }
        .process-card-enhanced:hover .process-icon-bg {
          transform: scale(1.1);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
        }
        .process-icon-bg::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border-radius: 50%;
          border: 3px dashed var(--card-color);
          opacity: 0.3;
          animation: rotate 20s linear infinite;
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .process-icon-bg svg {
          width: 70px;
          height: 70px;
          filter: brightness(0) invert(1);
        }
        .process-number {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, var(--card-color) 0%, var(--card-color-light) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }
        .process-content {
          position: relative;
          z-index: 1;
        }
        .process-title {
          font-size: 30px;
          font-weight: 700;
          color: var(--card-color);
          margin-bottom: 15px;
          line-height: 1.3;
        }
        .process-description {
          font-size: 16px;
          color: #6f6b80;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .process-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-top: 20px;
        }
        .process-tech-item {
          background: white;
          border: 2px solid rgba(0,0,0,0.1);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          color: #000;
          transition: all 0.3s ease;
        }
        .process-tech-item:hover {
          border-color: var(--card-color);
          color: var(--card-color);
          transform: translateY(-2px);
        }
        .process-stats {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 25px;
          padding-top: 25px;
          border-top: 2px solid rgba(0,0,0,0.05);
        }
        .process-stat {
          text-align: center;
        }
        .process-stat-value {
          font-size: 28px;
          font-weight: 700;
          color: var(--card-color);
          display: block;
          line-height: 1;
          margin-bottom: 5px;
        }
        .process-stat-label {
          font-size: 12px;
          color: #6f6b80;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .process-grid-enhanced {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 35px;
          margin-top: 60px;
        }
        @media (max-width: 768px) {
          .process-grid-enhanced {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="dizme_tm_section mt-12">
        <div className="dizme_tm_process">
          <div className="container">
            <motion.div
              className="dizme_tm_main_title"
              data-align="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ marginBottom: '20px' }}
            >
              <h3 style={{ fontSize: '48px', marginBottom: '15px' }}>What I Do Best</h3>
              <p style={{ 
                fontSize: '18px', 
                color: '#6f6b80', 
                maxWidth: '700px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Specialized in building modern, scalable web applications with cutting-edge technologies. 
                From pixel-perfect interfaces to robust backend systems, I deliver end-to-end solutions.
              </p>
            </motion.div>

            <motion.div
              className="process-grid-enhanced"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {data &&
                data.map((item, i) => (
                  <motion.div
                    key={i}
                    className="process-card-enhanced"
                    variants={fadeInUp}
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      '--card-color': item.color,
                      '--card-color-light': item.colorLight
                    }}
                  >
                    <div className="process-number">{i + 1}</div>
                    
                    <div className="process-icon-wrapper">
                      <motion.div
                        className="process-icon-bg"
                        variants={scaleIn}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        {parse(item.icons[dark ? "dark" : "light"])}
                      </motion.div>
                    </div>
                    
                    <div className="process-content">
                      <h3 className="process-title">{item.title}</h3>
                      <p className="process-description">{item.dec}</p>
                      
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="process-tech-list">
                          {item.technologies.map((tech, idx) => (
                            <span key={idx} className="process-tech-item">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {item.stats && (
                        <div className="process-stats">
                          {item.stats.map((stat, idx) => (
                            <div key={idx} className="process-stat">
                              <span className="process-stat-value">{stat.value}</span>
                              <span className="process-stat-label">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
};
export default Process;
