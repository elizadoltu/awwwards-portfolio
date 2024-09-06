import aboutImage from "../assets/png/about-image.png";
import '../css/about-page.css';

const About = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="w-96 ml-44 first-caption-about">
        <p className="text-left">
          Hello, my name is Eliza - Teodora Doltu and I am a Romanian web
          developer and designer. Ever since I can remember, I've wanted to
          express my creativity in any way possible and create something
          beautiful.
        </p>
      </div>
      <div className="mt-44 font-clash-grotesk-bold text-4xl w-2/4 second-caption-about">
        <p className="text-center items-center leading-relaxed">
          Websites are very similar to storytelling; they tell a story through
          images, colors, and fonts. <span className="ml-64 span-second-caption">It's my responsibility to craft the best
          story possible.</span>
        </p>
        <div className="absolute -mt-28 ml-128 image-about">
          <img src={aboutImage} alt="colourfull image with some houses" />
        </div>
      </div>
    </div>
  );
};

export default About;
