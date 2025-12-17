import { useEffect, useState, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { fatchData } from "../utilits";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionTransition from "./PageTransition";
import { processImagePaths } from "../utils/imageUtils";
import "../styles/skills.css";

const Skills = memo(() => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchSkillsData() {
      const fetchedData = await fatchData("/static/info.json");
      setData(processImagePaths(fetchedData));
    }
    fetchSkillsData();
    // Removed scroll listener - using Framer Motion whileInView instead for better performance
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

  const skillCategories = useMemo(() => [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "#f75023",
      skills: [
        { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB", level: "Expert" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", level: "Expert" },
        { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031", level: "Advanced" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", level: "Expert" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", level: "Expert" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", level: "Expert" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Expert" },
        { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC", level: "Advanced" }
      ]
    },
    {
      title: "Styling & UI",
      icon: "🎭",
      color: "#6e50f0",
      skills: [
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", level: "Expert" },
        { name: "SCSS/LESS", icon: "https://cdn.simpleicons.org/sass/CC6699", level: "Advanced" },
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3", level: "Advanced" },
        { name: "Material-UI", icon: "https://cdn.simpleicons.org/mui/007FFF", level: "Advanced" },
        { name: "Styled Components", icon: "https://cdn.simpleicons.org/styledcomponents/DB7093", level: "Intermediate" },
        { name: "D3.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg", level: "Intermediate" }
      ]
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      color: "#1cbe59",
      skills: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", level: "Expert" },
        { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000", level: "Advanced" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098", level: "Advanced" },
        { name: "REST API", icon: "https://cdn.simpleicons.org/fastapi/009688", level: "Expert" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "#ff6b4a",
      skills: [
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", level: "Advanced" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", level: "Advanced" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", level: "Intermediate" },
        { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: "Intermediate" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "#4285F4",
      skills: [
        { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud/4285F4", level: "Advanced" },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", level: "Advanced" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", level: "Advanced" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5", level: "Advanced" },
        { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Testing",
      icon: "🔧",
      color: "#C21325",
      skills: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", level: "Expert" },
        { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325", level: "Advanced" },
        { name: "Cypress", icon: "https://cdn.simpleicons.org/cypress/17202C", level: "Intermediate" },
        { name: "Webpack", icon: "https://cdn.simpleicons.org/webpack/8DD6F9", level: "Advanced" },
        { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF", level: "Advanced" },
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", level: "Advanced" },
        { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC", level: "Advanced" }
      ]
    }
  ], []);

  return (
    <SectionTransition>
      <div className="dizme_tm_section mt-28" id="skills">
        <div className="dizme_tm_skills">
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
              <h3 style={{ fontSize: '48px', marginBottom: '15px' }}>Technical Expertise</h3>
              <p style={{ 
                fontSize: '18px', 
                color: '#6f6b80', 
                maxWidth: '700px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                9+ years of hands-on experience with modern technologies, frameworks, and tools. 
                Continuously learning and adapting to stay at the forefront of web development innovation.
              </p>
            </motion.div>

            <motion.div
              className="skills-categories-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={fadeInUp}
                  className="skills-category-card"
                  style={{ '--card-color': category.color }}
                >
                  <div className="skills-category-header">
                    <div className="skills-category-icon">{category.icon}</div>
                    <h3 className="skills-category-title">{category.title}</h3>
                  </div>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          title={skill.name}
                          loading="lazy"
                          width="50"
                          height="50"
                        />
                        <span className="skill-item-name">{skill.name}</span>
                        <span className="skill-item-level">{skill.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
});
export default Skills;
