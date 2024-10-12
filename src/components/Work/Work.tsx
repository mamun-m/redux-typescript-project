import "./Work.css";
import svg from "../../assets/patter.svg";
import img1 from "../../images/protfilio-1.jpg";
import img2 from "../../images/protfilio-2.jpg";
import img3 from "../../images/protfilio-3.jpg";
import img4 from "../../images/protfilio-4.jpg";
import arrow from "../../assets/right-arrow-black.svg";
const Work = () => {
  return (
    <div id="work" className="work">
      <div className="work-title">
        <h1>My work </h1>
        <img src={svg} alt="" />
      </div>
      <div className="work-section">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img3} alt="" />
        <img src={img2} alt="" />
        <img src={img1} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className="work-show-more">
        <p>show more</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Work;
