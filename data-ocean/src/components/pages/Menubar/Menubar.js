import React, { useState } from "react";
import "../Menubar/Menubar.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function Menubar() {
  const [state, setstate] = useState(false);
  const showDropDown = () => {
    setstate(true);
  };
  const hideDropDown = () => {
    setstate(false);
  };
  return (
    <div className="dropdown">
      <div
        className="dropdown-menu"
        onMouseEnter={showDropDown}
        onMouseLeave={hideDropDown}
      >
        Dropdown
        {state ? (
          <ul className="dropdown-list" onMouseEnter={showDropDown}>
            <li>Müzik Kanalları</li>
            <li>Haber Kanalları</li>
            <li>Teknoloji Kanalları</li>
            <li>Popüler Kültür Kanalları</li>
            <li>Belgesel Kanalları</li>
            <li>Eğitim Kanalları</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default Menubar;
