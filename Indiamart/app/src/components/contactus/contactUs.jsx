import "./contactus.css";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MessageIcon from "@mui/icons-material/Message";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const ContactUs = () => {
  return (
    <div id="contactus">
      <h1>Get in touch with us</h1>
      <div>
        <div id="col1">
          <div>
            <h2>Our Company</h2>
            <Link to={"/aboutUs"}>About Us</Link>
            <Link to={""}>Products & Services</Link>
            <Link to={""}>Contact Us</Link>
            <Link to={""}>Sitemap</Link>
            <Link to={""}>Download Brochure</Link>
          </div>
          <div>
            <ShareIcon />
            Share with us
            <FacebookIcon className="navy" />
            <LinkedInIcon className="teal" />
            <TwitterIcon className="blue" />
          </div>
        </div>
        <div id="col2">
          <h1>Reach us</h1>
          <div id="location">
            <div id="paragraph">
              <h3>
                <LocationOnIcon />
                Blue Heaven Cosmetics (P) Ltd
              </h3>
              <p>
                No. 39, DLF Industrial Area, Kirti Nagar, New Delhi-110019,
                Delhi, India
              </p>
            </div>
          </div>
          <div className="flex">
            <PersonIcon />
            <p>Arvind Srivastava (Manager)</p>
          </div>
          <div className="flex">
            <AddIcCallIcon />
            <p>
              Call <span className="teal">08048361220</span>
            </p>
          </div>
          <div className="flex">
            <button id="sms">
              <MessageIcon />
              Send sms
            </button>
            <button id="mail" className="teal">
              <MailOutlineIcon />
              Send Mail
            </button>
          </div>
        </div>
        <div id="col3">
          <h2>Leave a Message, we will call you back!</h2>
          <input
            type="text"
            placeholder="+91  Enter Your Mobile Number"
          ></input>
          <textarea
            name=""
            placeholder="Additaional details about our requirements..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Submit Requirement</button>
        </div>
      </div>
    </div>
  );
};
