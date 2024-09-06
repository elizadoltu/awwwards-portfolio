import { useState, useEffect } from "react";
import landingImage from "../assets/png/landing-image.png";
import secondImage from "../assets/png/second-landing.png";
import svgLanding from "../assets/png/svg-landing.png";
import instagram from '../assets/svg/Social.png';
import behance from '../assets/svg/Social-1.png';
import email from '../assets/svg/Social-2.png';
import whatsapp from '../assets/svg/Social-3.png';
import '../css/landing-page.css';

const Landing = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="font-urbanist h-screen">
      <div className="flex justify-between overall-information">
        <div className="font-urbanist location-information">
          <p>Location: Iasi, RO</p>
          <p>Timezone: EET</p>
          <p>Current Time: {currentTime}</p>
        </div>
        <div className="titles-information">
          <div>
            <p>web designer</p>
            <p>web developer</p>
            <p>student</p>
          </div>
        </div>
        <div className="personal-info-about-me">
          <div className="flex items-center">
            <h1 className="font-clash-grotesk-bold text-9xl middle-name">ELIZA</h1>
            <div className="image-landing-eliza">
              <img src={landingImage} alt="picture of eliza doltu" />
            </div>
          </div>
          <div className="right-0 flex flex-col items-end">
            <h1 className="flex -mt-5 font-clash-grotesk-bold text-9xl family-name">
              DOLTU
            </h1>
            <div className="mr-20 text-sm more-general-info">
              <p className="font-black">16</p>
              <p className="font-black">07</p>
              <div className="flex mt-5">
                <p className="mr-5">wireframing</p>
                <p>ux/ui</p>
              </div>
              <div className="flex">
                <p className="mr-5">web design</p>
                <p className="mr-5"> web development</p>
                <p>graphic design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col main-titles-container">
        <h1 className="font-clash-grotesk-bold text-9xl main-title-1">BORN TO CREATE</h1>
        <div className="flex">
          <h1 className="font-clash-grotesk-bold text-9xl -mt-5 main-title-2">
            DIGITAL <span className="font-urbanist italic">ART</span>
          </h1>
          <div>
            <div className="image-title-landing">
              {" "}
              <img src={secondImage} alt="a blue motion image with a person" />
            </div>{" "}
            <div className="-mt-28 -ml-24 -z-10 relative svg-landing">
              <img src={svgLanding} alt="a simple svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="right-0 absolute mr-5 -mt-36 social-media-links">
        <div className="image-social"><a href="http://instagram/elizadoltu.design/" target="_blank"><img src={instagram} alt="instagram logo" className="image-social"/></a></div>
        <div className="mt-3 image-social"><a href="http://behance.net/elizadoltu/" target="_blank"><img src={behance} alt="behance logo" /></a></div>
        <div className="mt-3 image-social"><a href="mailto:elizadoltuofficial@gmail.com" target="_blank"><img src={email} alt="gmail logo" /></a></div>
        <div className="mt-3 image-social"><a href="tel:+40732134019" target="_blank"><img src={whatsapp} alt="whatsapp logo" /></a></div>
      </div>
    </div>
  );
};

export default Landing;
