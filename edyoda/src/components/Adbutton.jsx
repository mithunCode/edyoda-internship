import "../app.css";
const Adbutton = () => {
  return (
    <div className="button-container">
      <button className="sec-btn">
        <p className="sec-btn-text">CANCEL</p>
      </button>
      <button className="pri-btn">
        <p className="pri-btn-text">Proceed to pay</p>
      </button>
    </div>
  );
};

export default Adbutton;
