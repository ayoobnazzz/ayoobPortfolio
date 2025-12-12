import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fatchData } from "../utilits";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";
import SectionTransition from "./PageTransition";
import ParallaxElement from "./ParallaxSection";

const Contact = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchContactData() {
      setData(await fatchData("/static/contact.json"));
    }
    fetchContactData();
  }, []);
  return (
    <SectionTransition>
      <style>{`
        .contact-card {
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          border: 2px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(247, 80, 35, 0.05) 0%, rgba(110, 80, 240, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        .contact-card:hover::before {
          opacity: 1;
        }
        .contact-card:hover {
          border-color: #f75023;
          box-shadow: 0 20px 50px rgba(247, 80, 35, 0.2);
          transform: translateY(-8px);
        }
        .contact-icon-wrapper {
          position: relative;
          z-index: 1;
          margin-bottom: 25px;
        }
        .contact-icon-bg {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          border-radius: 50%;
          background: linear-gradient(135deg, #f75023 0%, #ff6b4a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(247, 80, 35, 0.3);
        }
        .contact-card:hover .contact-icon-bg {
          box-shadow: 0 15px 40px rgba(247, 80, 35, 0.4);
          transform: scale(1.05);
        }
        .contact-icon-bg::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          border: 2px solid rgba(247, 80, 35, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
        .contact-card-content {
          position: relative;
          z-index: 1;
        }
        .contact-title {
          font-size: 28px;
          font-weight: 700;
          color: #000;
          margin-bottom: 15px;
          letter-spacing: -0.5px;
        }
        .contact-text {
          font-size: 16px;
          color: #6f6b80;
          line-height: 1.6;
          word-break: break-word;
        }
        .contact-text a {
          color: #f75023;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        .contact-text a:hover {
          color: #6e50f0;
          text-decoration: underline;
        }
      `}</style>
      <div className="dizme_tm_section" id="contact">
        <div className="dizme_tm_process">
          <div className="container z-10">
            <motion.div
              className="dizme_tm_main_title"
              data-align="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ marginBottom: '60px' }}
            >
              <h3 style={{ fontSize: '48px', marginBottom: '15px' }}>Get In Touch</h3>
              <p style={{ fontSize: '18px', color: '#6f6b80', maxWidth: '600px', margin: '0 auto' }}>
                Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </motion.div>

            <motion.div
              className="list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <ul>
                {data &&
                  data.map((data, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="contact-card">
                        <div className="contact-icon-wrapper">
                          <motion.div
                            className="contact-icon-bg"
                            variants={scaleIn}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <img
                              style={{ 
                                width: '70px', 
                                height: '70px',
                                filter: 'brightness(0) invert(1)',
                                objectFit: 'contain'
                              }}
                              alt={data.title}
                              src={`img/contact/${i + 1}.svg`}
                            />
                          </motion.div>
                        </div>
                        <div className="contact-card-content">
                          <div className="contact-title">
                            <h3>{data.title}</h3>
                          </div>
                          <div className="contact-text">
                            {data.title === 'Email' ? (
                              <a href={`mailto:${data.dec}`}>{data.dec}</a>
                            ) : data.title === 'LinkedIn' ? (
                              <a href={data.dec} target="_blank" rel="noopener noreferrer">
                                View LinkedIn Profile →
                              </a>
                            ) : (
                              <p>{data.dec}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          </div>

          <ParallaxElement speed={0.2}>
            <div className="brush_1 left-16 absolute">
              <img src="img/brushes/news/1.png" alt="image" />
            </div>
          </ParallaxElement>
          <ParallaxElement speed={0.3}>
            <div className="brush_2 right-0 absolute">
              <img src="img/brushes/news/2.png" alt="image" />
            </div>
          </ParallaxElement>
        </div>
      </div>
    </SectionTransition>
  );
};
export default Contact;
