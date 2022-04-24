import React from "react";
import "./Expertise.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import ExpertiseData from "./EnterpriseData";
import icon1 from "../Pictures/icon1.PNG";
import icon2 from "../Pictures/icon2.PNG";
import { motion } from "framer-motion";
import icon3 from "../Pictures/icon3.PNG";
import icon4 from "../Pictures/icon4.PNG";
export default function Expertise(props) {
  const [enterp, setenterp] = useState(false);
  const [enterp2, setenterp2] = useState(false);

  const [shiftData, setshift] = useState(0);

  console.log("Selcted Para : ", props.selectedpara1);
  console.log("Selcted Para2 : ", props.selectedpara2);

  return (
    <div className="">
      <motion.div
        className="container-fluid expertise p-md-4 p-0 py-3"
        // style={{paddingTop:"20px",paddingBottom:"20px"}}
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "simple", delay: 0 }}
      >
        <div className="container-fluid  ">
          <h1 className="text-center" style={{color:"white"}}>
            our
            <span>expertise</span>
          </h1>
          <div className="row">
            <div className="col-12 d-none d-md-block">
              <div className="container text-center mt-4">
                {props.selected === props.expertise[0].expertise ||
                props.selected2 === props.expertise[0].expertise ? (
                  <span
                    className="text-uppercase  expabout-border"
                    style={{
                      color: "white",
                      borderTop: "1px solid white",
                      fontSize: "10px",
                      borderRight: "1px solid white",
                    }}
                    onClick={() => setshift(0)}
                  >
                    {props.expertise[0].expertiseshow}
                  </span>
                ) : (
                  <span
                    className="text-uppercase   expabout-border"
                    style={{
                      borderTop: "1px solid white",
                      fontSize: "10px",
                      borderRight: "1px solid white",
                    }}
                  >
                    {props.expertise[0].expertiseshow}
                  </span>
                )}

                {props.selected === props.expertise[1].expertise ||
                props.selected2 === props.expertise[1].expertise ? (
                  <span
                    className="text-uppercase  expabout-border"
                    style={{
                      color: "white",
                      borderTop: "1px solid white",
                      fontSize: "10px",
                      borderRight: "1px solid white",
                    }}
                    onClick={() => setshift(1)}
                  >
                    {props.expertise[1].expertiseshow}
                  </span>
                ) : (
                  <span
                    className="text-uppercase   expabout-border"
                    style={{
                      borderTop: "1px solid white",
                      fontSize: "10px",
                      borderRight: "1px solid white",
                    }}
                  >
                    {props.expertise[1].expertiseshow}
                  </span>
                )}
                {props.selected === props.expertise[2].expertise ||
                props.selected2 === props.expertise[2].expertise ? (
                  <span
                    className="text-uppercase   expabout-border"
                    style={{
                      color: "white",
                      borderTop: "1px solid white",
                      fontSize: "10px",
                      borderRight: "1px solid white",
                    }}
                  >
                    {props.expertise[2].expertiseshow}
                  </span>
                ) : (
                  <span
                    className="text-uppercase  expabout-border"
                    style={{
                      borderTop: "1px solid white",
                      fontSize: "10px",
                      borderRight: "1px solid white",
                    }}
                  >
                    {props.expertise[2].expertiseshow}
                  </span>
                )}
                {props.selected === props.expertise[3].expertise ||
                props.selected2 === props.expertise[3].expertise ? (
                  <span
                    className="text-uppercase   expabout-border"
                    style={{
                      color: "white",
                      borderTop: "1px solid white",
                      fontSize: "10px",
                    }}
                  >
                    {props.expertise[3].expertiseshow}
                  </span>
                ) : (
                  <span
                    className="text-uppercase  expabout-border-2"
                    style={{ borderTop: "1px solid white", fontSize: "10px" }}
                  >
                    {props.expertise[3].expertiseshow}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12 mt-4 d-md-none d-block">
              <div className="row text-center" style={{fontWeight: "bold"}}>
                <div className="col-12">
                  {props.selected === props.expertise[0].expertise ||
                  props.selected2 === props.expertise[0].expertise ? (
                    <span
                      className="text-uppercase "
                      style={{ color: "white",borderBottom: "1px solid grey",boxShadow: "5px 0px 8px 3px rgba(61,59,59,1)",  padding: "5px" }}
                      onClick={() => setshift(0)}
                    >
                      {props.expertise[0].expertiseshow}
                    </span>
                  ) : (
                    <span className="text-uppercase" style={{ color: "grey",borderBottom: "1px solid grey",boxShadow: "5px 0px 8px 3px rgba(61,59,59,1)",  padding: "5px" }}>
                      {props.expertise[0].expertiseshow}
                    </span>
                  )}
                </div>
                <div className="col-12 mt-4">
                  {props.selected === props.expertise[1].expertise ||
                  props.selected2 === props.expertise[1].expertise ? (
                    <span
                      className="text-uppercase"
                      style={{ color: "white",borderBottom: "1px solid grey",boxShadow: "5px 0px 8px 3px rgba(61,59,59,1)",  padding: "5px" }}
                      onClick={() => setshift(1)}
                    >
                      {props.expertise[1].expertiseshow}
                    </span>
                  ) : (
                    <span className="text-uppercase " style={{ color: "grey",borderBottom: "1px solid grey",boxShadow: "5px 0px 8px 3px rgba(61,59,59,1)",  padding: "5px" }}>
                      {props.expertise[1].expertiseshow}
                    </span>
                  )}
                </div>
                <div className="col-12 mt-4">
                  {props.selected === props.expertise[2].expertise ||
                  props.selected2 === props.expertise[2].expertise ? (
                    <span className="text-uppercase" style={{ color: "white",borderBottom: "1px solid grey",boxShadow: "5px 0px 8px 3px rgba(61,59,59,1)",  padding: "5px" }}>
                      {props.expertise[2].expertiseshow}
                    </span>
                  ) : (
                    <span className="text-uppercase" style={{ color: "grey",borderBottom: "1px solid grey",boxShadow: "5px 0px 8px 3px rgba(61,59,59,1)",  padding: "5px" }}>
                      {props.expertise[2].expertiseshow}
                    </span>
                  )}
                </div>
                <div className="col-12 mt-4">
                  {props.selected === props.expertise[3].expertise ||
                  props.selected2 === props.expertise[3].expertise ? (
                    <span className="text-uppercase" style={{ color: "white",borderBottom: "1px solid grey",boxShadow: "5px 0px 8px 3px rgba(61,59,59,1)",  padding: "5px" }}>
                      {props.expertise[3].expertiseshow}
                    </span>
                  ) : (
                    <span className="text-uppercase" style={{ color: "grey",borderBottom: "1px solid grey",boxShadow: "5px 0px 8px 3px rgba(61,59,59,1)",  padding: "5px" }}>
                      {props.expertise[3].expertiseshow}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="container-fluid etext text-center mt-5">
              <p>
                {shiftData === 0 && props.expertise[0].p1}
                {shiftData === 1 && props.expertise[1].p1}
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 mx-auto econt" >
              <img src={icon1} alt="" />
              <h2>Enterprise Software</h2>
              <p>
                We develop the type of wide-reaching highly reliable and
                built-to-scale software products that keep your company in
                business.
              </p>
              {!enterp && (
                <button
                  onClick={() => setenterp(!enterp)}
                  className="d-md-none d-inline-block"
                  style={{marginBottom:"30px",marginTop:"20px"}}
                >
                  Learn More
                </button>
              )}
              {enterp && (
                <i
                  className="bi bi-caret-down d-md-none d-inline-block"
                  style={{ marginTop: "-22px" }}
                  onClick={() => setenterp(!enterp)}
                ></i>
              )}
            </div>
      {enterp && <ExpertiseData />}

            <div className="col-md-3 mx-auto econt">
              <img src={icon2} alt="" />
              <h2>Websites</h2>
              <p>
                From designing responsive websites to architecting backend
                databases, we are adept at custom website development
              </p>
              <button className="d-md-none d-inline-block" style={{marginBottom:"30px",marginTop:"20px"}}>Learn More</button>
            </div>
            <div className="col-md-3 mx-auto econt ">
              <img src={icon3} alt="" />
              <h2>Web Apps</h2>
              <p>
                Our Full-circle web application development is designed to cater
                to your business goals while delivering analytics,design,QA and
                testing.
              </p>
              <button className="d-md-none d-inline-block" style={{marginBottom:"30px",marginTop:"20px"}}>Learn More</button>
            </div>
            <div
              className="col-md-3 mx-auto econt "
              style={{ marginTop: "5 px" }}
            >
              <img src={icon4} alt="" />
              <h2>Mobile Apps</h2>
              <p>
                Our Passionate developers delivers reliable and scalable mobile
                apps that solve business problems and drive revenue.
              </p>
              <button className="d-md-none d-inline-block" style={{marginBottom:"30px",marginTop:"20px"}}>Learn More</button>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 d-flex justify-content-around d-md-block d-none">
              <div className="row">
                <div className="col-3 econt">
                  {!enterp2 && (
                    <button onClick={() => setenterp2(!enterp2)}>
                      Learn More
                    </button>
                  )}
                  {enterp2 && (
                    <i
                      className="bi bi-caret-down "
                      style={{ marginTop: "20px" }}
                      onClick={() => setenterp2(!enterp2)}
                    ></i>
                  )}
                </div>
                <div className="col-3 econt">
                  <button>Learn More</button>
                </div>
                <div className="col-3 econt">
                  <button>Learn More</button>
                </div>
                <div className="col-3 econt">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {enterp2 && <ExpertiseData />}
    </div>
  );
}
