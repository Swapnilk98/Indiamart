import React from "react";
import "../Navbar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";

const NavDiv1 = () => {
  return (
    <div className="div1">
      <div className="nav_logo">
        <Link to={"/"}>
          <div>
            <img
              src="https://utils.imimg.com/globalhf/hrd-sp-v29.png"
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="NavSearchbar">
        <div className="loc">
          <button>
            <div>
              <LocationOnIcon
                style={{ color: "grey", fontSize: "16px", marginTop: "7px" }}
              />
            </div>
            <p className="ALLp">All India</p>

            <div></div>
          </button>
        </div>
        <div className="searchbardiv">
          <input type="text" placeholder="Enter Product/Service to Search" />
        </div>
        <div className="mic">
          <MicIcon />
        </div>
        <button className="NavSearchButton">
          <div>
            <SearchIcon
              style={{ color: "white", marginTop: "5px", fontSize: "30px" }}
            />
          </div>
          <div className="navSearchIcon">Search</div>
        </button>
        <button className="PrizeButton">Get Best Price</button>
        <div className="NavShopping">
          <a href="#">
            <LocalOfferIcon
              style={{
                backgroundColor: "none",
                color: "white",
                marginLeft: "25px",
              }}
            />
          </a>
          <p className="navmenu3"> Shopping</p>
        </div>
      </div>
    </div>
  );
};

export default NavDiv1;
