import "../../app.css";
import Form from "./Form";
import Pointers from "./Pointers";

import Adbutton from "../Adbutton";
import razor from "../../assets/razor.png";
const Main = () => {
  return (
    <section className="main-body">
      <div className="main-content">
        <div className="left-content">
          <p className="header">
            Access curated courses worth{" "}
            <span className="striked">₹ 18,500</span> at just{" "}
            <span className="unstriked">₹ 99</span> per year!
          </p>
          <Pointers />
        </div>
        <div className="right-content">
          <div className="progressbar">
            <div className="stage1">
              <div className="bluecircle">
                <span className="bluecircle-number">1</span>
              </div>
              <div className="pg-text">Sign Up</div>
            </div>
            <div className="stage1">
              <div className="bluecircle">
                <span className="bluecircle-number">2</span>
              </div>
              <div className="pg-text">Subscribe</div>
            </div>
          </div>
          <div className="form-start">
            <p className="form-header">Select your subscription plan</p>
          </div>
          <Form />

          <Adbutton />
          <div className="icon-cont-razor">
            <img src={razor} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
