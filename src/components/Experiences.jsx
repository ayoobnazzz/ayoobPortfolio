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
              <h3>Experiences</h3>
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
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => onClick(i)}
                        >
                          <div className="list_inner tilt-effect">
                            <motion.span
                              className="icon"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <img className="back" src={data.img} alt="image" />
                            </motion.span>
                            <div className="title">
                              <h3>{data.title}</h3>
                              <span className="price">
                                <span>{data.designation}</span>
                              </span>
                            </div>
                            <div className="text">
                              <p>{data.shortDec}</p>
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
