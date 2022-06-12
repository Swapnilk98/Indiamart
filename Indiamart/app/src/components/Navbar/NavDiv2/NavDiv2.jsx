import React, { useEffect, useState } from "react";
import "../Navbar.css";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MasksIcon from "@mui/icons-material/Masks";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SmsIcon from "@mui/icons-material/Sms";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MessageIcon from "@mui/icons-material/Message";
import ModeIcon from "@mui/icons-material/Mode";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../../../Redux/cart/action";
import Cookies from "js-cookie";

const NavDiv2 = () => {
  const dispatch = useDispatch();
  const [popupform, setpopupform] = useState({});
  let c = Cookies.get("token");
  dispatch(addToken(c));
  useEffect(() => {
    console.log(c);
    if (c != null) {
      getdata();
    }
    console.log(popupform);
  }, []);
  async function getdata() {
    let res = await fetch("https://sagarmart.herokuapp.com/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${c}`,
      },
    });
    let data = await res.json();
    setpopupform(data);
  }
  return (
    <div className="div2">
      <div className="menu1">
        <div>
          <HealthAndSafetyIcon
            style={{
              backgroundColor: "none",
              color: "white",
            }}
          />
        </div>
        <p className="navmenu">Covid Supplies</p>
        <div className="dropdown">
          <div className="drop">
            <table className="t1">
              <thead>
                <tr>
                  <th>
                    <a href="">
                      <PrecisionManufacturingIcon
                        style={{
                          color: "grey",
                          fontSize: "18px",
                          marginRight: "8px",
                        }}
                      />
                      Oxygen Supplies
                    </a>
                  </th>
                  <th>
                    <a href="">
                      <VaccinesIcon
                        style={{
                          color: "grey",
                          fontSize: "18px",
                          marginRight: "8px",
                        }}
                      />
                      Medicines
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="">Oxygen Cylinder</a>
                  </td>
                  <td>
                    <a href="">Tocilizumab</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Portable Oxygen Can</a>
                  </td>
                  <td>
                    <a href="">FabiFlu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Empty Oxygen Cylinder</a>
                  </td>
                  <td>
                    <a href="">Remdesvir</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Oxygen Concentrator</a>
                  </td>
                  <td>
                    <a href="">Dexamethasone Tablets</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">PSA Oxygen Gas Plants</a>
                  </td>
                  <td>
                    <a href="">Amphotericin B Injection</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Oxygen Flow Meter</a>
                  </td>
                  <td>
                    <a href="">Enoxaparin Injection</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Oxygen Mask</a>
                  </td>
                  <td>
                    <a href="">Baricitinib Tablets</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Oxygen Generator</a>{" "}
                  </td>
                  <td>
                    <a href="">Bevacizumab</a>
                  </td>
                </tr>
                <tr>
                  <td className="add">
                    <a href="">View All</a>
                  </td>
                  <td className="add">
                    <a href="">View All</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="t2">
              <thead>
                <tr>
                  <th>
                    <a href="">
                      <MasksIcon
                        style={{
                          color: "grey",
                          fontSize: "18px",
                          marginRight: "8px",
                        }}
                      />
                      Safety Essentials
                    </a>
                  </th>
                  <th className="th2">
                    <a href="">
                      <MedicalInformationIcon
                        style={{
                          color: "grey",
                          fontSize: "18px",
                          marginRight: "8px",
                        }}
                      />
                      Medical Supplies and Equipments
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="">Face Mask</a>
                  </td>
                  <td className="th2">
                    <a href="">Ventilator</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">PPE Kits</a>
                  </td>
                  <td className="th2">
                    <a href="">Pulse Oximeter</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Face Sheild</a>
                  </td>
                  <td className="th2">
                    <a href="">Thermometer</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Disposable Gloves</a>
                  </td>
                  <td className="th2">
                    <a href="">Steam vaporizer</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Sneeze Guard</a>
                  </td>
                  <td className="th2">
                    <a href="">Nebulizer</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Car Partition</a>
                  </td>
                  <td className="th2">
                    <a href="">Corona Test Kit</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Surgical Caps</a>
                  </td>
                  <td className="th2">
                    <a href="">CT Scan Machine</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Hand Sanitizer & Disinfectant</a>
                  </td>
                  <td className="th2">
                    <a href="">Rapid Test Kit</a>
                  </td>
                </tr>
                <tr>
                  <td className="add">
                    <a href="">View All</a>
                  </td>
                  <td className="add1">
                    <a href="">View All</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="foot">
            <a href="#">{/* <i class="fab fa-twitter fa-2x"></i> */}</a>
            <h3> Covid-19 Medical Supplies Search on Twitter</h3>
          </div>
        </div>
      </div>
      <div>
        <div>
          <StorefrontIcon style={{ backgroundColor: "none", color: "white" }} />
        </div>
        <p className="navmenu1">Sell</p>
      </div>
      <div className="menu2">
        <a href="#">
          <QuestionMarkIcon
            style={{ backgroundColor: "none", color: "white" }}
          />
        </a>
        <p className="navmenu2">Help</p>

        {/* <!-- drop list --> */}

        <div className="help">
          <p className="helphead">Find answers to your queries</p>
          <div>
            <p>
              <ShoppingCartIcon
                style={{ color: "grey", fontSize: "16px", marginRight: "8px" }}
              />
              For <a href="">Buying</a>
            </p>
            <p>
              <StorefrontIcon
                style={{ color: "grey", fontSize: "16px", marginRight: "8px" }}
              />
              For <a href="">Selling</a>
            </p>
          </div>

          <p>
            <ThumbUpOffAltIcon
              style={{ color: "grey", fontSize: "16px", marginRight: "8px" }}
            />
            Share your Feedback
          </p>
          <p>
            <SmsIcon
              style={{ color: "grey", fontSize: "16px", marginRight: "8px" }}
            />
            Raise a Complaint
          </p>
          <p>
            <MailIcon
              style={{ color: "grey", fontSize: "16px", marginRight: "8px" }}
            />
            Email us on
            <h4>customercare@indiamart.com</h4>
          </p>
          <p>
            <CallIcon
              style={{ color: "grey", fontSize: "16px", marginRight: "8px" }}
            />
            Call us at <a href=""> 096-9696-9696</a>
          </p>
          <p>
            <ChatIcon
              style={{ color: "grey", fontSize: "16px", marginRight: "8px" }}
            />
            Chat With us
          </p>
          <p>
            <MenuBookIcon
              style={{ color: "grey", fontSize: "16px", marginRight: "8px" }}
            />
            Seller Academy
          </p>
        </div>
      </div>
      <div>
        <a href="#">
          <MessageIcon style={{ backgroundColor: "none", color: "white" }} />
        </a>
        <p className="navmenu3">Messages</p>
      </div>
      <div className="up">
        <AccountCircleIcon
          style={{ backgroundColor: "none", color: "white" }}
        />

        <div className="menu3">
          <select className="optSign">
            <option className="UserName">Sign In</option>
          </select>

          {/* <!-- dropdown list --> */}

          <div
            className="signPop"
            style={{ height: c != null ? "500px" : "200px" }}
          >
            {c != null ? (
              <div className="signpopmain">
                {/* {c!=null? */}
                <div className="sig1">
                  <div style={{ fontSize: "20px" }}>
                    <p className="UserName2" style={{ fontSize: "20px" }}>
                      Hi {popupform.name}
                    </p>
                  </div>
                  <div className="ico">
                    <p className="UserNumb">{popupform.mobileno} verified</p>
                  </div>
                  <div style={{ fontSize: "20px" }}>
                    <ModeIcon
                      style={{
                        fontSize: "20px",
                        marginLeft: "-15px",
                        marginRight: "8px",
                      }}
                    />
                    View Profile
                  </div>
                </div>

                <div className="profile">
                  <p>
                    <HomeIcon
                      style={{
                        color: "grey",
                        fontSize: "18px",
                        marginRight: "8px",
                        marginLeft: "-150px",
                      }}
                    />
                    <a href="#">Home</a>
                  </p>
                  <p>
                    <PostAddIcon
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        marginRight: "8px",
                        marginLeft: "-40px",
                      }}
                    />
                    <a href="#">Post Your Requirement</a>
                  </p>
                  <p>
                    <VerifiedUserIcon
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        marginRight: "8px",
                        marginLeft: "-40px",
                      }}
                    />
                    <a href="#">Verified Business Buyer</a>
                  </p>
                  <p>
                    <Inventory2Icon
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        marginRight: "8px",
                        marginLeft: "-10px",
                      }}
                    />
                    <a href="#">Products/Services Directory</a>
                  </p>
                  <p>
                    <RateReviewIcon
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        marginRight: "8px",
                        marginLeft: "-120px",
                      }}
                    />
                    <a href="#">My Orders</a>
                  </p>
                  <p>
                    <LocalActivityIcon
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        marginRight: "8px",
                        marginLeft: "-90px",
                      }}
                    />
                    <a href="#">Recent Activity</a>
                  </p>
                  <p>
                    <SettingsApplicationsIcon
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        marginRight: "8px",
                        marginLeft: "-130px",
                      }}
                    />
                    <a href="#">Settings</a>
                  </p>
                </div>

                <div className="profile1">
                  <p>
                    <SendToMobileIcon
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        marginTop: "-50px",
                        marginLeft: "-80px",
                      }}
                    />
                    <a href="">Pay with IndiaMART</a>
                  </p>
                  <p className="p1">
                    <a href=""> Secre & hassle-free payements</a>
                  </p>
                  <p>
                    <MobileFriendlyIcon
                      style={{
                        color: "grey",
                        fontSize: "18px",
                        marginTop: "-30px",
                        marginLeft: "-110px",
                      }}
                    />
                    <a href="">Download App</a>
                  </p>
                </div>

                <div className="las">
                  <p
                    style={{ fontSize: "18px", marginLeft: "-20px" }}
                    onClick={() => {
                      Cookies.remove("token");
                    }}
                  >
                    <a href="">Sign In as Different User</a>
                  </p>
                </div>
              </div>
            ) : (
              <div className="signinpopupmain">
                <h3 className="newuserhead">New User?</h3>
                <Link to={"/login"}>
                  <button className="signinbutton">Signin</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavDiv2;
