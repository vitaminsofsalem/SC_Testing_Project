import * as React from "react";
import "../Styles/Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const pages = ["All", "Amazon", "Noon", "Alibaba"];

  const navigate = useNavigate();
  const location = useLocation();

  const handlerFunction: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    switch ((event.target as HTMLButtonElement).value) {
      case "All":
        navigate("/");
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

  const isAtPage = (page: string): boolean => {
    switch (page) {
      case "All":
        return location.pathname === "/";
      case "Amazon":
        return location.pathname === "/amazonscraper";

      case "Noon":
        return location.pathname === "/noonscraper";

      case "Alibaba":
        return location.pathname === "/alibabascraper";
      default:
        return false;
    }
  };
  return (
    <div className="navbar">
      <img
        className="logo"
        src={require("../Resources/Logos/BlankScraperWhite.png")}
        alt="Company Logo"
        data-testid="logo"
      />
      <div className="btn-group">
        {pages.map((page) => (
          <button
            data-testid="menu-button"
            className={isAtPage(page) ? "btn-focus" : "btn-normal"}
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
