import "./form.css";
import "../../app.css";
import { useEffect, useState } from "react";
import Alert from "../../assets/alert.icon";
const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [alertPrice, setalertPrice] = useState("18,401");
  const [discount, setDiscount] = useState("18500");
  const [updatedPrice, setUpdatedPrice] = useState("149");
  const handleOptionChange = (event) => {
    //setPrice(event.target.value);
    setDiscount(+(event.target.value * 100) + 600);
    setUpdatedPrice(+event.target.value);
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setalertPrice(+discount - 99, () => {
      +discount - 99;
    });
  }, [discount]);
  return (
    <form className="main-form">
      <div className="text-field1">
        <input
          type="radio"
          style={{ width: "32px", height: "32px" }}
          disabled
        />
        <div className="rd-text-container">
          <div className="tag">
            <span className="tag-text">Offer Expired</span>{" "}
          </div>
          <p className="sub-text">12 Months Subscription</p>
          <div className="rd-right-text" style={{ color: "#bebebe" }}>
            <div className="rd-right-top">
              <div className="total" style={{ color: "#bebebe" }}>
                {" "}
                Total
              </div>
              <span className="amt" style={{ color: "#bebebe" }}>
                ₹99
              </span>
            </div>
            <div className="rd-right-bottom">
              <div className="rd-month-total" style={{ color: "#bebebe" }}>
                ₹8
              </div>
              <div className="per-mon" style={{ color: "#bebebe" }}>
                /mo
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Second Value*/}
      <div className="text-field">
        <input
          type="radio"
          style={{ width: "32px", height: "32px" }}
          value="179"
          checked={selectedOption === "179"}
          onChange={handleOptionChange}
        />
        <div className="rd-text-container">
          <div className="tag-text-2">
            <span className="tag-text">Recommended</span>{" "}
          </div>
          <p className="sub-text-2">12 Months Subscription</p>
          <div className="rd-right-text">
            <div className="rd-right-top">
              <div className="total"> Total</div>
              <span className="amt">₹179</span>
            </div>
            <div className="rd-right-bottom">
              <div className="rd-month-total">₹15</div>
              <div className="per-mon">/mo</div>
            </div>
          </div>
        </div>
      </div>
      {/*third Value*/}
      <div className="text-field">
        <input
          type="radio"
          style={{ width: "32px", height: "32px" }}
          value="149"
          checked={selectedOption === "149"}
          onChange={handleOptionChange}
        />
        <div className="rd-text-container">
          <p className="sub-text-2">6 Months Subscription</p>
          <div className="rd-right-text">
            <div className="rd-right-top">
              <div className="total"> Total</div>
              <span className="amt">₹149</span>
            </div>
            <div className="rd-right-bottom">
              <div className="rd-month-total">₹25</div>
              <div className="per-mon">/mo</div>
            </div>
          </div>
        </div>
      </div>
      {/*Fourth Value*/}
      <div className="text-field">
        <input
          type="radio"
          style={{ width: "32px", height: "32px" }}
          value="99"
          checked={selectedOption === "99"}
          onChange={handleOptionChange}
        />
        <div className="rd-text-container">
          <p className="sub-text-2">3 Months Subscription</p>
          <div className="rd-right-text">
            <div className="rd-right-top">
              <div className="total"> Total</div>
              <span className="amt">₹99</span>
            </div>
            <div className="rd-right-bottom">
              <div className="rd-month-total">₹33</div>
              <div className="per-mon">/mo</div>
            </div>
          </div>
        </div>
      </div>

      {/*After Form*/}
      <br />
      <div className="summary-container">
        <div className="sub-fee">
          <p className="sub-fee-text">Subscription Fee</p>
          <p className="sub-fee-amt">₹ {discount}</p>
        </div>
      </div>
      <div className="alert-cont">
        <div className="alert-header">
          <div className="alert-left-text">Limited Time Offer</div>
          <div className="alert-right-text">-₹ {alertPrice}</div>
        </div>
        <div className="alert-body">
          <Alert />
          <div className="alert-body-text">
            Offer Valid Till 23rd March 2023
          </div>
        </div>
      </div>
      <div className="total-txt-gst">
        <div className="gst-left">Total (Incl. of 18% GST)</div>
        <div className="gst-right">₹ {updatedPrice}</div>
      </div>
    </form>
  );
};

export default Form;
