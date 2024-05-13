import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const Contact = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/contact.json"));
  }, []);
  return (
    <div className="dizme_tm_section" id="contact">
    <div className="dizme_tm_process">
      <div className="container z-10">
        <div className="list">
          <ul>
            {data &&
              data.map((data, i) => (
                <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                  <div className="list_inner">
                    <div className="icon">
                      <span>
                        <img
                          className="w-28"
                          // src={`img/contact/location.svg`}
                          alt="image"
                          src={`img/contact/${
                            i + 1
                          }.svg`}
                        />
                        {/* {parse(data.icons["light"])} */}
                      </span>
                    </div>
                    <div className="title">
                      <h3>{data.title}</h3>
                    </div>
                    <div className="text">
                      <p>{data.dec}</p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>

        </div>
      </div>

      <div className="brush_1 wow zoomIn left-16 absolute" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn right-0 absolute" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>

    </div>

  </div>
    
  );
};
export default Contact;
