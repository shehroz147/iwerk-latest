import React from "react";
import "./Exp.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Experience4(props) {
  return (
    <div
      className="Experience text-center"
     >
      <div className="container text-center">
      <h2>Our<span>Experience</span> </h2>
        <div className="expabout-main-border text-center " style={{marginTop:"30px"}} >
          <span className="text-uppercase expabout-border" style={{ color: "#ea7726" }} 
          onClick={() => {
            props.setexppages(0)
            props.setoneTimeScroll(false)
          }}>
            {props.experiences[0].exp}
          </span>
          <span className="text-uppercase expabout-border"
          onClick={() => {
            props.setexppages(1)
            props.setoneTimeScroll(false)
          }}
          >
            {props.experiences[1].exp}
          </span>
          <span
            className="text-uppercase expabout-border"
            onClick={() => {
              props.setexppages(2)
              props.setoneTimeScroll(false)
            }}
          >
            {props.experiences[2].exp}
          </span>
          <span className="text-uppercase expabout-border" 
          onClick={() => {
            props.setexppages(3)
            props.setoneTimeScroll(false)
          }}>
            {props.experiences[3].exp}
          </span>
          <span className="text-uppercase expabout-border-2" onClick={() => {
            props.setexppages(4)
            props.setoneTimeScroll(false)
          }}>
            {props.experiences[4].exp}
          </span>
        </div>
        <div className="container ptext text-center">
          <p>{props.experiences[0].p1}</p>
          <p>{props.experiences[0].p2}</p>
          <p>{props.experiences[0].p3}</p>
        </div>
      </div>
        
    </div>
  );
}
