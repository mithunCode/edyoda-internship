import "../../App.css";
import Search from "../../assets/Search";
import logo from "../../assets/LOGO.png";
import Button from "../Button";
const Navbar = () => {
  return (
    <nav className="nav-main">
      <div className="main-container">
        <div className="left-container">
          <img src={logo} alt="Edyoda-Logo" />
          <select name="" id="" className="dropdow">
            <option>Courses</option>
          </select>
          <select name="" id="" className="dropdow">
            <option>Programs</option>
          </select>
        </div>
        <div className="right-container">
          <Search />
          <p className="login">Log In</p>
          <button className="join-now">JOIN NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
