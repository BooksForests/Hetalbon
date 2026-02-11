import "./hero.css";
import Herocontent from "./heroContent/Herocontent";
import Bgvideo from "../../../assets/hetalbonnew.mp4";

const Hero = () => {
  return (
    <header className="hero-header">
      <div className="hero-content">
        <Herocontent />
      </div>
      <video autoPlay loop muted className="hero-video">
        <source src={Bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Hero;
