import React from "react";
import "./Home.css";
import { useState } from "react";
import logo from "../Pictures/logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

export default function Home(props) {
  const indexOfbutton = [0, 1, 2, 3, 4, 5, 6];
  const [experience1, setexp1] = useState("");
  const [experience2, setexp2] = useState("");
  const [experience3, setexp3] = useState("");
  const [experience4, setexp4] = useState("");
  const [experience5, setexp5] = useState("");
  
  const [expertise, setexpertise] = useState("");
  const [expertise2, setexpertise2] = useState("");

  const chanecolor = (element) => {
      let el = document.getElementById(element);
      console.log("elemet is  ", el);
      el.classList.remove("expbutton");
      el.classList.add("active");
    
  };
  const chanecolor2 = (element) => {
      let el = document.getElementById(element);
      console.log("elemet is  ", el);
      el.classList.remove("expbutton");
      el.classList.add("active");
    };

  return (
    <div className="home">
      <nav className="logo2">
        <img src={logo} alt="logo" />
        <p><a href="#section5" style={{color:"white"}}> Contact</a></p>
      </nav>
      <div className="container">
        <div className="row texts">
          <motion.div
            className="col-md-4 mx-auto"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "simple", delay: 0 }}
          >
            <h1>Technology solutions and Services</h1>
          </motion.div>
          <motion.div
            className="col-md-5 mx-auto ml-5"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "simple", delay: 0 }}
          >
            <b>We're geared to help your business:</b>
            <p style={{width:"180px"}}>Save time and money Engage target audiences increase revnue</p>
          </motion.div>
          <motion.div
            className="col-md-3 mx-auto "
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "simple", delay: 0 }}
          >
            <p>Access and protect information Make Tect-use easy</p>
          </motion.div>
        </div>
      </div>
      <div className="container p">
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "simple", delay: 0 }}
        >
          So we can best-tailor your experience, please tell us a little bit
          about your primary interest in:
        </motion.p>
      </div>
      <div className="container">
        <hr className="hr" />
        <div className="row">
          <motion.div
            className="col-md-6 exp hr2"
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            transition={{ type: "simple", delay: 0 }}
            id="exper"
          >
            <h4 >our experience</h4>
            <button
              className="btn expbutton"
              id={indexOfbutton[0]}
              onClick={() => {
                chanecolor(indexOfbutton[0]);
                !experience1 && setexp1("healthcare");
                experience1 && !experience2 && setexp2("healthcare");
                experience1 &&
                  experience2 &&
                  !experience3 &&
                  setexp3("healthcare");
                experience1 &&
                  experience2 &&
                  experience3 &&
                  !experience4 &&
                  setexp4("healthcare");
                experience1 &&
                  experience2 &&
                  experience3 &&
                  experience4 &&
                  !experience5 &&
                  setexp5("healthcare");
              }}
            >
              Healthcare
            </button>
            <button
              className="btn expbutton"
              id={indexOfbutton[1]}
              onClick={() => {
                chanecolor(indexOfbutton[1]);
                !experience1 && setexp1("manufacturing");
                experience1 && !experience2&& setexp2("manufacturing");
                experience1 && experience2 && !experience3 && setexp3("manufacturing");
                experience1 && experience2 && experience3 && !experience4 && setexp4("manufacturing");
                experience1 && experience2 && experience3 && experience4 && !experience5 && setexp5("manufacturing");
              
              }}
            >
              Manufacturing
            </button>
            <button
              className="btn expbutton"
              id={indexOfbutton[2]}
              onClick={() => {
                chanecolor(indexOfbutton[2]);
                !experience1 && setexp1("marketing");
                experience1 && !experience2 && setexp2("marketing");
                experience1 && experience2 && !experience3 && setexp3("marketing");
                experience1 && experience2 && experience3 && !experience4 && setexp4("marketing");
                experience1 && experience2 && experience3 && experience4 && !experience5 && setexp4("marketing");
              
              }}
            >
              Marketing
            </button>
            <button
              className="btn expbutton"
              id={indexOfbutton[3]}
              onClick={() => {
                chanecolor(indexOfbutton[3]);
                !experience1 && setexp1("municipalities");
                experience1 && !experience2 && setexp2("municipalities");
                experience1 && experience2&& !experience3 && setexp3("municipalities");
                experience1 && experience2&& experience3 &&!experience4 && setexp4("municipalities");
                experience1 && experience2&& experience3 && experience4 && !experience5 && setexp5("municipalities");

              }}
            >
              Municipalities
            </button>
            <button
              className="btn expbutton"
              id={indexOfbutton[4]}
              onClick={() => {
                chanecolor(indexOfbutton[4]);
                !experience1 && setexp1("retail");
                experience1 && !experience2 && setexp2("retail");
                experience1 && experience2 && !experience3 && setexp3("retail");
                experience1 && experience2 && experience3 &&!experience4 && setexp4("retail");
                experience1 && experience2 && experience3 && experience4 && !experience5 && setexp5("retail");
              }}
            >
              Retail
            </button>
          </motion.div>
          <motion.div
            className="col-md-6  mx-auto exp"
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            transition={{ type: "simple", delay: 0 }}
          >
            <h4 className="smallh4">our expertise</h4>
            <button
              className="btn expbutton"
              id={indexOfbutton[5]}
              onClick={() => {
                chanecolor2(indexOfbutton[5]);
                !expertise && setexpertise("softwaredevelopment");
                expertise && !expertise2 && setexpertise2("softwaredevelopment");
              
              }}
            >
              Software Developmyent
            </button>
            <button
              className="btn expbutton"
              id={indexOfbutton[6]}
              onClick={() => {
                chanecolor2(indexOfbutton[6]);
                !expertise && setexpertise("itsolutionsservices");
                expertise && !expertise2 && setexpertise2("itsolutionsservices");
              }}
            >
              IT Solutions & Services
            </button>
          </motion.div>
        </div>

        {experience1 && expertise && (
            <div
              className="container letsgo"
              onClick={() => {
                props.passvalue(experience1,experience2,experience3,experience4,experience5, expertise,expertise2);
                props.setnextpages(true);
                props.settogglehome(false)
              }}
            >
              <h3>Let's Go</h3>
              <i className="bi bi-caret-down-fill"></i>
              
            </div>
          ) 
      }
      </div>
    </div>
  );
}
