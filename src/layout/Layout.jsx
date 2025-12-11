import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CopyRight from "../components/CopyRight";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  aTagClick,
  dataImage,
  fatchData,
  scrollTop,
  scroll_,
  stickyNav,
  wowJsAnimation,
} from "../utilits";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import PreLoader from "./PreLoader";
import Progressbar from "./Progressbar";

const Layout = ({ children, dark }) => {
  const [siteInfo, setSiteInfo] = useState({});
  useEffect(() => {
    async function fetchSiteInfo() {
      setSiteInfo(await fatchData("/static/siteSetting.json"));
    }
    fetchSiteInfo();
    dataImage();
  }, []);
  useEffect(() => {
    wowJsAnimation();
    aTagClick();
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollTop);
  }, []);


  return (
    <Fragment>
      <Helmet>
        <title>Ayoob | Portfolio</title>
        <meta name="description" content="Senior Front-End Developer Portfolio" />
      </Helmet>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu
          logo={
            siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]
          }
        />
        <Header
          logo={
            siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]
          }
        />
        {children}
        <CopyRight brandName={siteInfo && siteInfo.brandName} />
        <Progressbar />
      </div>
    </Fragment>
  );
};
export default Layout;
