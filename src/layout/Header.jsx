import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = ({ logo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["home", "summery", "skills", "projects", "experiences", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .header-modern {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 20px 0;
        }
        .header-modern.scrolled {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .header-modern .header-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-logo {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #f75023 0%, #6e50f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          display: block;
          padding: 10px 20px;
          font-size: 15px;
          font-weight: 500;
          color: #000;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 8px;
          position: relative;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 20px;
          right: 20px;
          height: 2px;
          background: linear-gradient(135deg, #f75023 0%, #ff6b4a 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .nav-link:hover {
          color: #f75023;
        }
        .nav-link:hover::before {
          transform: scaleX(1);
        }
        .nav-link.active {
          color: #f75023;
          background: rgba(247, 80, 35, 0.08);
        }
        .nav-link.active::before {
          transform: scaleX(1);
        }
        .download-btn {
          padding: 12px 28px !important;
          background: linear-gradient(135deg, #f75023 0%, #ff6b4a 100%);
          color: white !important;
          border-radius: 25px;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(247, 80, 35, 0.3);
          transition: all 0.3s ease;
          border: none;
          margin-left: 12px;
        }
        .download-btn::before {
          display: none;
        }
        .download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(247, 80, 35, 0.4);
          color: white !important;
        }
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #000;
          padding: 8px;
        }
        @media (max-width: 1040px) {
          .header-content {
            padding: 0 20px !important;
          }
          .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
          }
          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
          .nav-item {
            width: 100%;
          }
          .nav-link {
            width: 100%;
            padding: 15px 20px;
            text-align: left;
          }
          .download-btn {
            margin-left: 0 !important;
            width: 100%;
            text-align: center;
            margin-top: 10px;
          }
          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
      
      <motion.div 
        className={`header-modern ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="header-content">
          <motion.div 
            className="header-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            AN.
          </motion.div>
          
          <ul className="nav-menu">
            <li className="nav-item">
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#summery" 
                className={`nav-link ${activeSection === 'summery' ? 'active' : ''}`}
              >
                Summary
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#experiences" 
                className={`nav-link ${activeSection === 'experiences' ? 'active' : ''}`}
              >
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="img/cv/Ayoob_Resume_PDF3.pdf" 
                download="" 
                className="nav-link download-btn"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};
export default Header;
