import image from "../../images/mamun.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div id="home" className="Home">
      <div className="home-image">
        <img src={image} alt="" title="This was my old picture" />
      </div>
      <div className="home-descriptions">
        <h1>
          {" "}
          <span>i'm mamun</span> front end developer based in bangladesh{" "}
        </h1>
        <p>
          i am a front end developer from bangladesh with 10 year experinces
          multiples works experinces
        </p>
      </div>
      <div className="home-button">
        <button className="connect-button">
          <a href="#contact">conntect with me</a>
        </button>
        <button className="my-resume">my resume </button>
      </div>
    </div>
  );
};

export default Home;
