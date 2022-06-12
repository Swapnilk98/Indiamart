import React from "react";
import "./Navbar.css";
import NavDiv1 from "./NavDiv1/NavDiv1";
import NavDiv2 from "./NavDiv2/NavDiv2";

export const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <NavDiv1 />
        <NavDiv2 />
      </div>
    </div>
  );
};
