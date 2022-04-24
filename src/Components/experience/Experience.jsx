import React from "react";
import "./Exp.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export default function   Experience(props) {
  var flag=true;
  console.log("props : ", props.exp2);
  console.log("props : ", props.exp3);
  console.log("props : ", props.exp4);
  console.log("props : ", props.exp5);
  console.log(props.experiences[2].p1);
  const [goto, setgoto] = useState(true);
  
  // const setexppages = (val) => {
  //   setexppagesorg(val);
  // };

  return (

    <div className="Experience text-center" id="section3"
  
    >
      <div className="container text-center">
        <h2>Our<span>Experience</span> </h2>
        
        <div className=" text-center " style={{marginTop:"30px"}}>
          <span
            className="text-uppercase expabout-border"
            onClick={() => {
              props.setexppages(0)
              props.setoneTimeScroll(false)
            }}
          >
            {props.experiences[0].exp}
          </span>
          <span
            className="text-uppercase expabout-border"
            onClick={() => {
              props.setexppages(1)
              props.setoneTimeScroll(false)
            }}>
            {props.experiences[1].exp}
          </span>
          <span
            className="text-uppercase expabout-border"
            style={{ color: "#ea7726" }}
            onClick={() => {
              props.setexppages(2)
              props.setoneTimeScroll(false)
            }}
          >
            {props.experiences[2].exp}
          </span>
          <span
            className="text-uppercase expabout-border"
            onClick={() => {
              props.setexppages(3)
              props.setoneTimeScroll(false)
            }}
          >
            {props.experiences[3].exp}
          </span>
          <span
            className="text-uppercase expabout-border-2"
            onClick={() => {
              props.setexppages(4)
              props.setoneTimeScroll(false)
            }}
          >
            {props.experiences[4].exp}
          </span>
        </div>
        <div className="container ptext text-center">
            <div>
              <p>{props.experiences[2].p1}</p>
              <p>{props.experiences[2].p2}</p>
              <p>{props.experiences[2].p3}</p>
            </div>
          
        </div>
      </div>
    </div>
  );
}

// <motion.div
// className="Experience text-center"
// initial={{ y: "100vw" }}
// animate={{ y: 0 }}
// transition={{ type: "simple", delay: 0 }}
// >
