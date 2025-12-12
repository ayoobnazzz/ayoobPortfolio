import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fatchData } from "../utilits";
import ResponsibilitiesPopup from "./popup/ResponsibilitiesPopup";
import ParallaxSection, { ParallaxElement } from "./ParallaxSection";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, cardHover } from "../utils/animations";
import SectionTransition from "./PageTransition";

const Experiences = () => {
  const [data, setData] = useState([]);
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  
  useEffect(() => {
    async function fetchExperiencesData() {
      setData(await fatchData("/static/service.json"));
    }
    fetchExperiencesData();
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return (
    <SectionTransition>
      <div className="dizme_tm_section" id="experiences">
        <div className="dizme_tm_services">
          <div className="container">
            <motion.div
              className="dizme_tm_main_title"
              data-align="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Professional Experiences</h3>
              <p style={{ marginTop: '15px', fontSize: '18px', color: '#6f6b80' }}>
                Building scalable solutions and driving innovation across enterprise applications
              </p>
            </motion.div>
            <motion.div
              className="service_list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <ul>
                {data &&
                  data.map(
                    (data, i) =>
                      data && (
                        <motion.li
                          key={i}
                          variants={(i * 1) % 2 === 0 ? fadeInLeft : fadeInRight}
                          whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          onClick={() => onClick(i)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="list_inner tilt-effect" style={{ 
                            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                            borderRadius: '12px',
                            padding: '30px',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(0,0,0,0.05)',
                            position: 'relative',
                            overflow: 'hidden'
                          }}>
                            <motion.div
                              className="experience-logo-wrapper"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              style={{ 
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginBottom: '25px',
                                width: '100%',
                                zIndex: 1
                              }}
                            >
                              <img src={data.img} alt={`${data.title} logo`} style={{ 
                                maxWidth: '80px', 
                                height: 'auto',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                position: 'relative',
                                zIndex: 2
                              }} />
                            </motion.div>
                            <div className="title" style={{ marginBottom: '15px', position: 'relative', zIndex: 1, width: '100%' }}>
                              <h3 style={{ fontSize: '26px', fontWeight: '600', marginBottom: '8px', color: '#000' }}>
                                {data.title}
                              </h3>
                              <span className="price" style={{ 
                                display: 'block', 
                                fontSize: '18px', 
                                fontWeight: '500',
                                color: '#f75023',
                                marginBottom: '8px'
                              }}>
                                <span>{data.designation}</span>
                              </span>
                              {data.location && (
                                <span style={{ 
                                  display: 'block', 
                                  fontSize: '14px', 
                                  color: '#6f6b80',
                                  marginBottom: '4px'
                                }}>
                                  📍 {data.location}
                                </span>
                              )}
                              {data.period && (
                                <span style={{ 
                                  display: 'block', 
                                  fontSize: '14px', 
                                  color: '#6f6b80',
                                  fontWeight: '500'
                                }}>
                                  📅 {data.period}
                                </span>
                              )}
                            </div>
                            <div className="text" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                              <p style={{ 
                                fontSize: '16px', 
                                lineHeight: '1.7', 
                                color: '#6f6b80',
                                marginBottom: '15px'
                              }}>
                                {data.shortDec}
                              </p>
                              {data.highlights && data.highlights.length > 0 && (
                                <div style={{ marginTop: '15px' }}>
                                  <div style={{ 
                                    fontSize: '14px', 
                                    fontWeight: '600', 
                                    color: '#000',
                                    marginBottom: '8px'
                                  }}>
                                    Key Achievements:
                                  </div>
                                  <ul style={{ 
                                    listStyle: 'none', 
                                    padding: 0,
                                    margin: 0
                                  }}>
                                    {data.highlights.slice(0, 3).map((highlight, idx) => (
                                      <li key={idx} style={{ 
                                        fontSize: '14px', 
                                        color: '#6f6b80',
                                        marginBottom: '6px',
                                        paddingLeft: '20px',
                                        position: 'relative'
                                      }}>
                                        <span style={{ 
                                          position: 'absolute', 
                                          left: '0',
                                          color: '#f75023',
                                          fontWeight: 'bold'
                                        }}>▸</span>
                                        {highlight}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                            <div style={{ 
                              marginTop: '20px', 
                              paddingTop: '15px',
                              borderTop: '1px solid rgba(0,0,0,0.05)',
                              fontSize: '13px',
                              color: '#6f6b80',
                              fontStyle: 'italic'
                            }}>
                              Click to view detailed responsibilities →
                            </div>
                          </div>
                        </motion.li>
                      )
                  )}
              </ul>
            </motion.div>
          </div>
          <ParallaxElement speed={0.2}>
            <div className="brush_1">
              <img src="img/brushes/service/5.png" alt="image" />
            </div>
          </ParallaxElement>
          <ParallaxElement speed={0.3}>
            <div className="brush_2">
              <img src="img/brushes/service/6.png" alt="image" />
            </div>
          </ParallaxElement>
        </div>
        {popup && (
          <ResponsibilitiesPopup
            data={popupdata}
            open={popup}
            close={() => setPopup(false)}
          />
        )}
      </div>
    </SectionTransition>
  );
};
export default Experiences;
