import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("new-collections");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>FRESH DROPS, JUST IN</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Trending🔥</p>
          </div>
          <p>Styles✨</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn" onClick={handleScroll}>
          <div>Shop New Arrivals</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
