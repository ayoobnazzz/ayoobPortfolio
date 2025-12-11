import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { activeSkillProgress, fatchData } from "../utilits";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionTransition from "./PageTransition";

const Skills = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchSkillsData() {
      setData(await fatchData("/static/info.json"));
    }
    fetchSkillsData();
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const skills = [
    "HTML", "CSS", "JavaScript", "SSR", "NodeJs", "NextJs", "ReactJs",
    "MongoDB", "MySQL", "Express", "SCSS", "TailWind CSS", "Bootstrap",
    "MUI", "Redux", "Styled Component", "Jest", "Kubernetes", "Docker",
    "GraphQL", "Jira", "D3", "GCP Cloud", "GitHub Actions", "Concourse CI",
    "TypeScript", "Webpack", "ES6", "REST API"
  ];

  return (
    <SectionTransition>
      <div className="dizme_tm_section mt-28" id="skills">
        <div className="dizme_tm_skills">
          <div className="container">
            <div className="wrapper">
              <motion.div
                className="left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="dizme_tm_main_title" data-align="left">
                  <h3>I Develop Skills Regularly to Keep Me Update</h3>
                  <p>
                    Most common methods for designing websites that work well on
                    desktop is responsive and adaptive design
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="skill-scrller"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="scroller" data-speed="fast">
                <ul className="tag-list scroller__inner">
                  {skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
};
export default Skills;
