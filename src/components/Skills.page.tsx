import quoteImage from "../assets/png/quote-image.png";
import firstSkills from '../assets/png/01-skills.png';
import secondSkills from '../assets/png/02-skills.png';
import '../css/skills-page.css';

const Skills = () => {
    return (
      <div className="w-full h-auto bg-bg-color flex flex-col skills-container">
        <div className="ml-5 titles-skills">
            <h1 className="font-clash-grotesk-bold text-font-color text-9xl titles-skills">BORN TO CREATE</h1>
            <h1 className="font-clash-grotesk-bold text-font-color text-9xl titles-skills">BUT ALSO TO <span className="font-urbanist font-regular italic">LEARN</span></h1>
        </div>
        <div className="flex flex-col justify-start items-end">
            <p className="font-urbanist text-font-color w-96 mr-28 quote-skills">"I found I could say things with color and shapes that I couldn't say 
                any other way - things I had no words for." - <span className="font-bold">Georgia O'Keeffe</span>
            </p>
            <div className="image-skills">
                <img src={quoteImage} alt="a blur person" />
            </div>
        </div>
        <div className="text-font-color font-urbanist ml-5 -mt-16 flex description-container">
            <p className="w-96 description-skills paragraph-skills">crafting captivating online experiences where <span className="font-bold">design meets functionality</span>,
            inspiring connections with every click.</p>
            <div className="ml-10 flex items-end first-pack-skills">
                <div><img src={firstSkills} alt="image with alexander the great" /></div>
                <div className="text-sm ml-5 description-skills">
                    <h4 className="font-bold">&#40;01&#41; digital ecosystem</h4>
                    <p className="mt-5">ux/ui design</p>
                    <p>web development</p>
                    <p>wireframing</p>
                    <p>web design</p>
                </div>
            </div>
        </div>
        <div className="flex items-end mt-5 ml-20 second-pack-skills">
            <div className="font-urbanist text-font-color text-right text-sm description-skills">
                <h4 className="font-bold">&#40;02&#41; digital box</h4>
                <p>html</p>
                <p>css</p>
                <p>javascript</p>
                <p>reactjs</p>
                <p>tailwind</p>
                <p>gsap</p>
                <p>figma</p>
            </div>
            <div className="ml-5 image-with-a-robot"><img src={secondSkills} alt="image with a robot" /></div>
        </div>
      </div>  
    );
}

export default Skills;