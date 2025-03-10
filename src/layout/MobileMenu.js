import { useState } from "react";
const MobileMenu = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dizme_tm_mobile_menu z-50">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home" onClick={() => setToggle(false)}>
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#summery">
                Summery
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#experiences">
              Experiences
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#contact">
                Contact
              </a>
            </li>
            <li className="download_cv">
              <a href="img/cv/Ayoob_Resume_PDF3.pdf" download="">
                <span>Download Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
