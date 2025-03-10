import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const Home = ({ dark }) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
          // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{`Hello, I'm`}</h3>
              </div>
              <div className="name">
                <h3>{data && data.name ? data.name : "name"}</h3>
              </div>
              <div className="job">
                <p>
                  A <span className="greenText">{data && data.mainSkill}</span>{" "}
                  From <span className="purpleText">{data.address}</span>
                </p>
              </div>
              <div className="text">
                <p>{data.bio}</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#summery">
                    <span>About Me</span>
                  </a>
                </div>
                <div className="social">
                  <ul>
                    {data &&
                      data.social &&
                      data.social.map((social, i) => (
                        <li key={i}>
                          <a href={social.url} target="_blank">
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img
                  src={data && data.img ? data.img : "/img/slider/avatar.png"}
                  alt="image"
                />
                {data &&
                  data.skills &&
                  data.skills.map(
                    (skill, i) =>
                      skill.icon && (
                        <span
                          key={i}
                          className={`skills ${skill.name} anim_moveBottom`}
                        >
                          {/* {parse(skill.icon)} */}
                          <img
                  src={skill.icon}
                  alt="image"
                />
                        </span>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
