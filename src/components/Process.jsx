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
      <div className="dizme_tm_section mt-12">
        <div className="dizme_tm_process">
          <div className="container">
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
                              className="brush"
                              src={`img/brushes/process${dark ? "/dark" : ""}/${
                                i + 1
                              }.png`}
                              alt="image"
                            />
                            {parse(data.icons[dark ? "dark" : "light"])}
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
        </div>
      </div>
    </SectionTransition>
  );
};
export default Process;
