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
      <div className="dizme_tm_section" id="contact">
        <div className="dizme_tm_process">
          <div className="container z-10">
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
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="list_inner">
                        <motion.div
                          className="icon"
                          variants={scaleIn}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span>
                            <img
                              className="w-28"
                              alt="image"
                              src={`img/contact/${i + 1}.svg`}
                            />
                          </span>
                        </motion.div>
                        <div className="title">
                          <h3>{data.title}</h3>
                        </div>
                        <div className="text">
                          <p>{data.dec}</p>
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
