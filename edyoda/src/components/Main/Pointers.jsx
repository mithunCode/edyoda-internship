import "../../app.css";
import p1 from "../../assets/Icon.png";
import p2 from "../../assets/Icon-1.png";
import p3 from "../../assets/Icon-2.png";
import p4 from "../../assets/Icon-3.png";
import p5 from "../../assets/Icon-4.png";
const Pointers = () => {
  return (
    <div className="pointer-section">
      <div className="pointer">
        <img src={p1} alt="Icon-1" />
        <p className="para">
          <span className="unstriked">100+&nbsp;</span>
          Job relevant courses
        </p>
      </div>
      <div className="pointer">
        <img src={p2} alt="Icon-1" />
        <p className="para">
          <span className="unstriked">20000+&nbsp;</span>
          Hours of Content
        </p>
      </div>
      <div className="pointer">
        <img src={p4} alt="Icon-1" />
        <p className="para">
          <span className="unstriked">Exclusive &nbsp;</span>
          Webinar Access
        </p>
      </div>
      <div className="pointer">
        <img src={p3} alt="Icon-1" />
        <p className="para">
          Scholarship worth &nbsp;
          <span className="unstriked">₹ 94,500</span>
        </p>
      </div>
      <div className="pointer">
        <img src={p5} alt="Icon-1" />
        <p className="para">
          <span className="unstriked">Ad Free &nbsp;</span>
          learning experience
        </p>
      </div>
    </div>
  );
};

export default Pointers;
