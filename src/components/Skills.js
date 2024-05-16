import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";

const Skills = () => {
  const [data, setData] = useState({});

  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
    window.addEventListener("scroll", activeSkillProgress);

  }, []);
  let scrollers = document.querySelectorAll(".scroller");


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}


function addAnimation() {
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

  return (
    <div className="dizme_tm_section mt-28" id="skills">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                <p>
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design
                </p>
              </div>

            </div>
       
          </div>


<div className="skill-scrller">
<div className="scroller" data-speed="fast">
  <ul className="tag-list scroller__inner">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>SSR</li>
    <li>NodeJs</li>
    <li>NextJs</li>
    <li>ReactJs</li>
    <li>MongoDB</li>
    <li>MySQL</li>
    <li>Express</li>
    <li>SCSS</li>
    <li>TailWind CSS</li>
    <li>Bootstrap</li>
    <li>MUI</li>
    <li>Redux</li>
    <li>Styled Component</li>
    <li>Jest</li>
    <li>Kubernetes</li>
    <li>Docker</li>
    <li>GraphQL</li>
    <li>Jira</li>
    <li>D3</li>
    <li>GCP Cloud</li>
    <li>GitHub Actions</li>
    <li>Concourse CI</li>
    <li>TypeScript</li>
    <li>Webpack</li>
    <li>ES6</li>
    <li>REST API</li>
    <li>Webpack</li>

  </ul>
</div>
</div>
  





    
        </div>
      </div>
    </div>
  );
};
export default Skills;
