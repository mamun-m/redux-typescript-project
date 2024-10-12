import svg from "../../assets/patter.svg";
import mail from "../../assets/email.svg";
import call from "../../assets/call.svg";
import locactin from "../../assets/location.svg";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch me </h1>
        <img src={svg} alt="" />
      </div>
      <div className="contact-title-container">
        <div className="contact-section">
          <h1>Let's talk </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            adipisci blanditiis sed numquam nobis voluptate eum nihil placeat a
            quos.
          </p>
          <div className="contact-section-side">
            <div className="div-item-icons">
              <img src={mail} alt="" /> <span>qualified@gmail.com</span>
            </div>
            <div className="div-item-icons">
              {" "}
              <img src={call} alt="" /> <span>+5254545454545445</span>
            </div>
            <div className="div-item-icons">
              {" "}
              <img src={locactin} alt="" />{" "}
              <span>co : 1325, road uut ottowa</span>
            </div>
          </div>
        </div>
        <form className="form-section">
          <label htmlFor="">Your Name </label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="">Email </label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message here </label>
          <textarea name="" id="" placeholder="Enter your message"></textarea>
          <button type="submit" className="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
