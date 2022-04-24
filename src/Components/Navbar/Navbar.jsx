import React from "react";
import "./Navbar.css";
import logo from "../Pictures/Logo2.PNG";
import { useState } from "react";

export default function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <div>

      <nav className="Nav fixed-top"
      initial={{y:"-100vh"}}
      animate={{y:0}}
      transition={{type:"simple",delay:0.5}}>
        <div className="Navlogo">
          <img src={logo} alt="" />
        </div>
        {

          !toggle&&
        <ul className="ul">
          <li>About</li>
          <li>Services</li>
          <li>Werk</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      }
        <i
          className="bi bi-list listicon"
          onClick={() => settoggle(!toggle)}
        ></i>
        {toggle && (
          <div className="downlist" initial={{y:"-100vh"}}
          animate={{y:0}}
          transition={{type:"simple",delay:0}}>
          <ul className="Tul">
            <li>About</li>
            <li>Services</li>
            <li>Werk</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          </div>
        )}
  
        </nav>
          </div>
  );
}
