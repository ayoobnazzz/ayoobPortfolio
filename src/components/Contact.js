import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Contact = () => {
  const [data, setData] = useState({});
  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);
  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <div className="flex items-center" style={{display: "flex"}}>
                    <div className="">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="">
                        <h3>Location</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                    <div className="">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
              
                    <div className="">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                </div>
              )}
            </div>
           
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src="img/brushes/contact/2.png" alt="image" />
            </div>
          </div>

        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/contact/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
