import "./Header.css";

import React from "react";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from "@mui/icons-material/Done";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";

export const Header = () => {
  return (
    <div>
      <div className="Headers">
        <div className="Headers1">
          <img
            src="https://3.imimg.com/data3/HJ/OY/MY-3792183/blue-heaven-cosmetics-private-limited-logo-120x120.jpg"
            alt=""
          />
        </div>
        <div className="Headers2">
          <h1 style={{ marginTop: "5px" }}>Blue Heaven Cosmetics (P) Ltd</h1>
          <div className="Headaddress">
            <div className="AddressDiv">
              <div>
                <LocationOnIcon style={{ color: "green", fontSize: "20px" }} />
              </div>
              <div>Kirti Nagar,New Delhi,Delhi</div>
            </div>
            <div className="gstdiv">
              <div>
                <CheckCircleIcon style={{ color: "grey", fontSize: "20px" }} />
              </div>
              <div>GST 07AACCB1155C1ZB</div>
            </div>
            <div className="gstdiv">
              <div>
                <DoneIcon style={{ fontSize: "20px" }} />
              </div>
              <div>Verified Supplier</div>
            </div>
            <div className="gstdiv">
              <div>
                <ThumbUpIcon style={{ fontSize: "20px" }} />
              </div>
              <div>4.2/5</div>
              <StarRateIcon style={{ fontSize: "20px", color: "goldenrod" }} />
              <StarIcon style={{ fontSize: "20px", color: "goldenrod" }} />
              <StarIcon style={{ fontSize: "20px", color: "goldenrod" }} />
              <StarIcon style={{ fontSize: "20px", color: "goldenrod" }} />
              <StarIcon style={{ fontSize: "20px", color: "grey" }} />
            </div>
          </div>
        </div>
        <div className="Headers3">
          <div>
            <div lassName="Headers31">
              <WifiCalling3Icon style={{ fontSize: "17px", color: "green" }} />
            </div>
            <div className="Headers32">View Mobile Number</div>
            {/* <div lassName="Headers33">Ext 167</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
