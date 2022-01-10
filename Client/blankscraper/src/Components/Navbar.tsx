import * as React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const pages = ["All", "Amazon", "Noon", "Alibaba"];

  const navigate = useNavigate();

  const handlerFunction = (event: any) => {
    switch (event.target.value) {
      case "All":
        navigate("/all");
        break;
      case "Amazon":
        navigate("/amazonscraper");
        break;
      case "Noon":
        navigate("/noonscraper");
        break;
      case "Alibaba":
        navigate("/alibabascraper");
    }
  };
  return (
    <div className="navbar">
      <img
        src={require("../Resources/Logos/BlankScraperWhite.png")}
        alt="Company Logo"
      />
      <div className="btn-group">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            value={page}
            onClick={handlerFunction}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
