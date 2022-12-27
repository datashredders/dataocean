import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [state, setstate] = useState(false);
  const showDropDown = () => {
    setstate(true);
  };
  const hideDropDown = () => {
    setstate(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* /* menü ikonunun rengini beyaz yapmak için  */}
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/* onClick={closeMobileMenu} diyerek logoya tıklayınca menüyü kapatsın diyoruz  */}

              <span className="baslik">
                <span>Data</span>
                <span>Ocean</span>
              </span>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Anasayfa
                </Link>
              </li>
              {/*  <li className="nav-item">
                <Link
                  to="/kanalbazliistatistikler"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Kanal Bazlı İstatistikler
                </Link>
              </li>
              */}

              <Link
                className="dropdown-menu"
                onMouseEnter={showDropDown}
                onMouseLeave={hideDropDown}
              >
                Genel İstatistikler
                {state ? (
                  <ul
                    className="dropdown-list"
                    onMouseEnter={showDropDown}
                    onMouseLeave={hideDropDown}
                  >
                    <li>
                      <Link to="/MuzikData" className="linkler">
                        {" "}
                        Müzik Kanalları
                      </Link>
                    </li>
                    <li>
                      <Link to="/HaberData" className="linkler">
                        Haber Kanalları
                      </Link>
                    </li>
                    <li>
                      <Link to="/Data" className="linkler">
                        Teknoloji Kanalları
                      </Link>
                    </li>
                    <li>
                      <Link to="/KulturData" className="linkler">
                        Spor Kanalları
                      </Link>
                    </li>
                    <li>
                      <Link to="/BelgeselData" className="linkler">
                        Belgesel Kanalları
                      </Link>
                    </li>
                    <li>
                      <Link to="/EgitimData" className="linkler">
                        Eğitim Kanalları
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </Link>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
// rfce diyerek otomatik doldurma yapabiliriz
