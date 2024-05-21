import Counter from "./Counter";
const About = () => {
  return (
    <div className="dizme_tm_section" id="summery">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image flex flex-wrap flex-col items-center">
                <img src={`img/about/3.jpeg`} alt="image" />
                <div className="numbers year w-full">
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
                </div>
  
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Developer`}</span>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`I'm a seasoned Senior Front-End Web Developer with a strong 9 year reputation in leading the vision, strategy, and execution of important websites, ensuring they deliver intuitive and responsive user experiences. My experience includes all areas of web development, from architecting and coding front-end solutions to leading responsive design initiatives. I work closely with software developers and designers, develop guidelines and policies, solve technical challenges, and engage with cross-functional teams to foster collaboration. My commitment to excellence is demonstrated through my continual efforts to stay ahead of the curve with the latest frontend technologies, trends, and best practices, consistently exceeding expectations and driving web innovation.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
  </div>      
      <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div> 
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
