import "./Service.css";
import svg from "../../assets/patter.svg";
import Data from "../../assets/json/Data.json";
import arrow from "../../assets/right-arrow-black.svg";
type Props = {
  id: number;
  title: string;
  desc: string;
};
const Service = () => {
  return (
    <div className="service">
      <div id="service" className="service-title">
        <h1>My service</h1>
        <img src={svg} alt="" />
      </div>
      <div className="service-section">
        {Data.map((data: Props) => {
          return (
            <div key={data.id} className="service-section-card">
              <h1>{data.id}</h1>
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
              <div className="arrow-descations">
                <p>read more</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
