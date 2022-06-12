import "./Navbar2.css";

import React from "react";
import { Link } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
export const Navbar2 = () => {
  return (
    <div>
      <div className="Navbar2">
        <div className="Navbar2first">
          {/* <div className="Navbar2first1">Home</div> */}
          <Link to={"/"} className="Navbar2first1">
            Home
          </Link>
          <Link to={"/"} className="Navbar2first2">
            Products and Services
            <div className="dropdown1">
              <div className="drop1">
                <table className="t1">
                  <thead>
                    <tr>
                      <th>
                        <a href="">Oxygen Supplies</a>
                      </th>
                      <th>
                        <a href="">Medicines</a>
                      </th>
                      <th>
                        <a href="">Oxygen Supplies</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
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
                        <a href="">Oxygen Generator</a>
                      </td>
                      <td>
                        <a href="">Bevacizumab</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Link>
          {/* <div className="Navbar2first3">About Us</div> */}
          <Link to={"/aboutUs"} className="Navbar2first3">
            About Us
          </Link>
          {/* <div className="Navbar2first4">Contact Us</div> */}
          <Link to={"/contactus"} className="Navbar2first4">
            Contact Us
          </Link>
        </div>
        <div className="Navbar2second">
          <div>
            <EmailIcon
              style={{ color: "white", fontSize: "25px", marginRight: "8px" }}
            />
          </div>
          <div style={{ color: "white", fontSize: "18px" }}>Send Email</div>
        </div>
      </div>
    </div>
  );
};
