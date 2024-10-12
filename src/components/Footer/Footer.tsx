import "./Footer.css";
import connect from "../../assets/connect-you-svgrepo-com.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">
        <div className="footer-title-head">
          <h3>Mohammad Mamun</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            optio iure in illum. Fuga possimus inventore vel nisi. Optio,
            magnam. Quae, tempora dolor inventore quod minus rerum impedit natus
            nisi?
          </p>
        </div>
        <div className="footer-title-input">
          <img src={connect} alt="" />
          <div className="subscribe-button">
            <input type="text" />
            <span> subscribe</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-section">
        <div className="footer-section-last-fot">
          <span>Term of Services</span>
          <span>Privacy of Police</span>
          <span>Connect with me</span>
        </div>
        <div className="footer-section-last-copyrigh">
          <p>@2025 Mohammed mamun. all right copyrigts here</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
