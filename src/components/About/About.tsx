import patter from "../../assets/patter.svg";
import images from "../../images/mamun2.jpg";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content-first">
        <h1>about me </h1>
        <img src={patter} alt="" />
      </div>
      <div className="about-content-left">
        <img src={images} alt="" />
        <div className="about-descriptions">
          <div className="about-text-part">
            <p>
              As a Front-End Developer, here’s a text you can add to your
              website, highlighting your role, skills, and the value you bring
              to the development of user interfaces and web applications:
            </p>
            <p>
              Hi, i am a passionate Front-End Developer with a strong focus on
              creating visually engaging, user-friendly, and high-performing
              websites. I specialize in translating designs into functional,
              interactive experiences using modern web technologies.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & css</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>js & typescript</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>react & redux</p> <hr style={{ width: "52%" }} />
            </div>
            <div className="about-skill">
              <p>Git & Github</p> <hr style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-content-right">
        <div className="about-end-year">
          <span>10+</span>
          <p>Year of experinces</p>
        </div>
        <hr />
        <div className="about-end-year">
          <span>90+</span>
          <p>Year of experinces</p>
        </div>
        <hr />
        <div className="about-end-year">
          <span>15+</span>
          <p>Year of experinces</p>
        </div>
      </div>
    </div>
  );
};

export default About;
