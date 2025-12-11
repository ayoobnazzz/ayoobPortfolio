import { motion } from "framer-motion";
import Counter from "./Counter";
import ParallaxSection, { ParallaxElement } from "./ParallaxSection";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";
import SectionTransition from "./PageTransition";

const About = () => {
  return (
    <SectionTransition>
      <div className="dizme_tm_section" id="summery">
        <div className="dizme_tm_about">
          <div className="container">
            <div className="wrapper">
              <ParallaxSection speed={0.4} className="left">
                <motion.div
                  className="image flex flex-wrap flex-col items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                >
                  <img src={`img/about/3.jpeg`} alt="image" />
                  <motion.div
                    className="numbers year w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <div className="wrapper">
                      <h3>
                        <Counter end={9} />+
                      </h3>
                      <span className="name">
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </ParallaxSection>
              
              <ParallaxSection speed={0.3} className="right">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.div className="title" variants={fadeInUp}>
                    <span>{`I'm a Developer`}</span>
                  </motion.div>
                  <motion.div className="text" variants={fadeInUp}>
                    <p>
                      {`I'm a seasoned Senior Front-End Web Developer with a strong 9 year reputation in leading the vision, strategy, and execution of important websites, ensuring they deliver intuitive and responsive user experiences. My experience includes all areas of web development, from architecting and coding front-end solutions to leading responsive design initiatives. I work closely with software developers and designers, develop guidelines and policies, solve technical challenges, and engage with cross-functional teams to foster collaboration. My commitment to excellence is demonstrated through my continual efforts to stay ahead of the curve with the latest frontend technologies, trends, and best practices, consistently exceeding expectations and driving web innovation.`}
                    </p>
                  </motion.div>
                  <motion.div className="dizme_tm_button" variants={fadeInUp}>
                    <a className="anchor" href="#contact">
                      <span>Contact</span>
                    </a>
                  </motion.div>
                </motion.div>
              </ParallaxSection>
            </div>
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
