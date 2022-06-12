import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import "./contact.css";

export const ContactUs = () => {
  return (
    <div id="MainContact">
      <div className="left">
        <div>
          <p className="text-left">Contact Us for more details</p>
          <h3 className="text-left">Requirements Details</h3>
          <form action="">
            <input
              type="text"
              name=""
              placeholder="Additional details about your requirements"
              id="text"
              className="text-left"
            />
            <input type="submit" id="button" value="Submit Requirements" />
          </form>
        </div>
      </div>
      <div className="right">
        <h2 className="text-left">Reach Us</h2>
        <div className="text-left">
          <LocationOnIcon />
          <span className="text-left">
            No. 39, DLF Industrial Area, Kirti Nagar, New Delhi-110019, Delhi,
            India
          </span>
        </div>
        <div className="text-left">
          <AccountCircleIcon />
          <span className="text-left">Arvind Srivastava (Manager)</span>
        </div>
        <div className="text-left">
          <WifiCalling3Icon />
          <span className="text-left">Call 08048361220</span>
          <p className="text-left">
            Dial Ext <b className="teal">167</b>when connected
          </p>
        </div>
      </div>
    </div>
  );
};
