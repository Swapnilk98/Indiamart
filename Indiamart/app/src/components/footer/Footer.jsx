import React from "react";
import "./Footer.css";
import AppleIcon from "@mui/icons-material/Apple";
import Shop2Icon from "@mui/icons-material/Shop2";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="nav">
          <div id="head">
            <h3>We are here to help you!</h3>
          </div>
          <div id="mo">
            <h6>Go mobile:</h6>
            <AppleIcon />
            <Shop2Icon />
            <TabletMacIcon />
            <h6>Follow us on:</h6>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="lastfooter">
          <ul className="main">
            <li>About Us</li>
            <li>Join Sales</li>
            <li>Success Stories</li>
            <li>Press Section</li>
            <li>Advertise with Us</li>
            <li>Jobs & Careers</li>
          </ul>
          <ul className="first">
            <li>Help</li>
            <li>Feedback</li>
            <li>Complaints</li>
            <li>Customer Care</li>
            <li>Contact Us</li>
          </ul>
          <ul className="second">
            <h3>Suppliers Tool Kit</h3>
            <li>Sell on IndiaMART</li>
            <li>Latest BuyLead</li>
            <li>Learning Centre</li>
          </ul>
          <ul className="third">
            <h3>Buyers Tool Kit</h3>
            <li>Post Your Requirement</li>
            <li>Products You Buy</li>
            <li>Search Products & Suppliers</li>
            <li>Pay With IndiaMART</li>
          </ul>
          <ul className="fourth">
            <h3>Events</h3>
            <li>Trade Shows</li>
            <li>Conferences</li>
            <li>Events by Country</li>
          </ul>
        </div>
        {/* <hr/> */}
        <div className="endpage">
          <hr></hr>
          <div className="lastFooter">
            <p className="Firstlast1">
              Copyright © 1996-2022 IndiaMART InterMESH Ltd. All rights reserved
            </p>
            <p className="Firstlast2">
              Terms of Use-Privacy Policy - Link to Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
