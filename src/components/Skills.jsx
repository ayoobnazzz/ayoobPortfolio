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

  const skillCategories = [
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
        { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6", level: "Expert" },
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
        { name: "D3.js", icon: "https://cdn.simpleicons.org/d3dotjs/F9A03C", level: "Intermediate" }
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
        { name: "DynamoDB", icon: "https://cdn.simpleicons.org/amazondynamodb/4053D6", level: "Intermediate" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "#4285F4",
      skills: [
        { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud/4285F4", level: "Advanced" },
        { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4", level: "Advanced" },
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
  ];

  return (
    <SectionTransition>
      <style>{`
        .skills-category-card {
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
          border-radius: 20px;
          padding: 35px 30px;
          border: 2px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .skills-category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--card-color) 0%, transparent 100%);
          opacity: 0.05;
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        .skills-category-card:hover::before {
          opacity: 0.1;
        }
        .skills-category-card:hover {
          border-color: var(--card-color);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          transform: translateY(-5px);
        }
        .skills-category-header {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
          position: relative;
          z-index: 1;
        }
        .skills-category-icon {
          font-size: 40px;
          margin-right: 15px;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));
        }
        .skills-category-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--card-color);
          margin: 0;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 15px;
          position: relative;
          z-index: 1;
        }
        .skill-item {
          background: white;
          border-radius: 12px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          border: 2px solid rgba(0,0,0,0.05);
          cursor: pointer;
        }
        .skill-item:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border-color: var(--card-color);
        }
        .skill-item img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .skill-item:hover img {
          transform: rotate(360deg);
        }
        .skill-item-name {
          font-size: 14px;
          font-weight: 600;
          color: #000;
          text-align: center;
          line-height: 1.2;
        }
        .skill-item-level {
          font-size: 11px;
          color: #6f6b80;
          background: rgba(0,0,0,0.05);
          padding: 3px 10px;
          border-radius: 12px;
          font-weight: 500;
        }
        .skill-item:hover .skill-item-level {
          background: var(--card-color);
          color: white;
        }
        .skills-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        @media (max-width: 768px) {
          .skills-categories-grid {
            grid-template-columns: 1fr;
          }
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 12px;
          }
        }
      `}</style>
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
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
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
};
export default Skills;
