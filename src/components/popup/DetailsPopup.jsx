const DetailsPopup = ({ open, close, data = {} }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={(e) => { e.preventDefault(); close(); }}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={data.img || "img/portfolio/6.jpg"} alt={data.title || "image"} />
              <div
                className="main"
                data-img-url={data.img || "img/portfolio/6.jpg"}
                style={{ backgroundImage: `url("${data.img || "img/portfolio/6.jpg"}")` }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{data.title || "Project Title"}</h3>
              <span>
                {data.liveUrl && (
                  <a href={data.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
                {data.githubUrl && (
                  <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>GitHub</a>
                )}
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>{data.shortDec || ""}</p>
                <p>{data.description || ""}</p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Category</span>
                    <span>{data.category ? data.category.charAt(0).toUpperCase() + data.category.slice(1) : "N/A"}</span>
                  </li>
                  <li>
                    <span className="first">Technologies</span>
                    <span>{data.technologies ? data.technologies.join(", ") : "N/A"}</span>
                  </li>
                  {data.featured && (
                    <li>
                      <span className="first">Status</span>
                      <span>Featured Project</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
