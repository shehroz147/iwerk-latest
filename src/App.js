import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Experience from "./Components/experience/Experience";
import Experience2 from "./Components/experience/Experience2";
import Experience3 from "./Components/experience/Experience3";
import Experience4 from "./Components/experience/Experience4";
import Experience5 from "./Components/experience/Experience5";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import Expertise from "./Components/Expertise/Expertise";
import ContactUs from "./Components/Contact/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import _ from "lodash";
import ScrollerExperiece from "./Components/experience/ScrollerExperience";

function App() {
  const [experience1, setexp1] = useState("");
  const [experience2, setexp2] = useState("");
  const [nextpages, setnextpages] = useState(false);
  const [navtoggle, setnavtoggle] = useState(false);
  const [experience3, setexp3] = useState("");
  const [experience4, setexp4] = useState("");
  const [experience5, setexp5] = useState("");

  const [exppages, setexppages] = useState(2);

  const [expert, setexpertise] = useState("");
  const [expert2, setexpertise2] = useState("");

  const [expertData, setexpertiseDate] = useState("");
  const [expert2Data, setexpertiseDate2] = useState("");

  const [orignalexp1, setexp] = useState([]);
  // const [orignalexp2, setexpo2] = useState([]);
  // const [orignalexp3, setexpo3] = useState([]);
  // const [orignalexp4, setexpo4] = useState([]);
  // const [orignalexp5, setexpo5] = useState([]);

  // const [expertise1, setexper] = useState([]);
  const [oneTimeScroll, setoneTimeScroll] = useState(true);

  const experiences = [
    {
      exp: "healthcare",
      p1: "We specialize in developing enterprise-level software and providing managed IT solutions for HEALTHCARE practitioners.We know how important healthcare workers are and understand the demands of the job.",
      p2: " That drives us to work hard and deliver our absolute best. By using the power of technology, we can simplify work flow, improve patient satisfaction scores, and help healthcare firms stay on top ofinformation and compliance-related issues.",
      p3: "Our healthcare expertise is garnered from working with Hospitals, Rehab Centers, and Senior Care facilities of all size, from newly expanding entities to well-established networks with thousands of providers.",
    },
    {
      exp: "manufacturing",
      p1: "We have a wealth of know-how and knowledge in building technology solutions for MANUFACTURING business.",
      p2: "We know the challenges the manufacturing industry faces when it comes to productivity and efficiency. Through the implementation of powerful tools, we lean in and help Manufacturers boost employee productivity, decrease down time, improve efficiencies and delivery times, and innovate and protect their IT networks. ",
      p3: "Our manufacturing industry knowledge is built from working with a diverse range and size of companies, including multinational automobile companies, sports equipment manufacturers, and auto parts distributors and manufacturers.",
    },
    {
      exp: "marketing",
      p1: "We have a wealth of valuable expertise in producing technology and delivering solutions for MARKETING AGENCIES.",
      p2: "We know that marketing agencies face the ever-increasing challenge of being more efficient while constantly improving results. As an industry leader built on a can-do attitude, we deliver solutions that free up your teams, deliver more traffic and eyeballs, save on costs, and amplify growth.",
      p3: "Our results-driven solutions for Marketing Agencies evolve from the experience of working with everything from global agencies and strategic communication firms to creative hot shops and start-ups.",
    },
    {
      exp: "municipalities",
      p1: "We have tremendous proficiency in developing on-budget technology solutions for MUNICIPALITIES.",
      p2: "We know that state and government employees are some of the hardest working people in society. We value that. And we understand how challenged they are to constantly do more with less. That’s why we make sure to deliver efficiency boosting tools and technology that help them modernize their infrastructure, achieve economies of scale, increased agility, and heightened cyber security.",
      p3: "Our innovative solutions for Municipalities are developed from the experience of working with everything from populous cities and school districts to national trade associations and large church organizations.",
    },
    {
      exp: "retail",
      p1: "We are deeply experienced in delivering technology solutions for goods and services RETAILERS.",
      p2: "We know retail businesses operate in a fast-paced environment where technology and connectivity has to keep up in order to be successful. Through the use of powerful tools and smart principles, we help Retailers manage day-to-day operations, improve logistics, increase customer traffic and loyalty, and remove unnecessary problems so they can stay ahead of the curve.",
      p3: "Our retail know-how is garnered from working with a range of categories and clients from Food Service and Airlines to Insurance and eCommerce.",
    },
  ];
  var expertise = [
    {
      expertise: "softwaredevelopment",
      expertiseshow: "software development",
      p1: "Our SOFTWARE DEVELOPMENT team excels building software off all sorts, from complex worklflow automations and integration solutions to websites, and Web and mobile apps.",
    },
    {
      expertise: "itsolutionsservices",
      expertiseshow: "it solution services",
      p1: "Our IT Solutons team excels building software off all sorts, from complex worklflow automations and integration solutions to websites, and Web and mobile apps.",
    },
    {
      expertise: "softwareskills",
      expertiseshow: "software skills",

      p1: "Our SOFTWARE Skills team excels building software off all sorts, from complex worklflow automations and integration solutions to websites, and Web and mobile apps.",
    },
    {
      expertise: "provenprocess",
      expertiseshow: "proven process",

      p1: "Our provenprocess team excels building software off all sorts, from complex worklflow automations and integration solutions to websites, and Web and mobile apps.",
    },
  ];
  const [i, seti] = useState(0);
  const [algo, setalgo] = useState(0);
  var ii = 0;
  const findindex = (array, data) => {
    array.map((ar, i) => {
      if (ar.exp === data) {
        ii = i;
      }
    });
  };
  function swapselecttocenter(exper, exp, exp2, exp3, exp4, exp5) {
    const deep = _.cloneDeep(exper);
    console.log("exp :  ", exp);
    if (exp === "marketing") {
      console.log("one");
      // findindex(deep, exp);
      // console.log("index 1 ", ii);
      // let temp = deep[2];
      // deep[2] = deep[ii];
      // deep[ii] = temp;
    }
    if (exp === "healthcare") {
      console.log("two");
      findindex(deep, exp);
      console.log("index 1 ", ii);
      let temp = deep[2];
      deep[2] = deep[ii];
      deep[ii] = temp;
      findindex(deep, exp);
      console.log("index 2 ", ii);
      let temp1 = deep[ii + 1];
      deep[ii + 1] = deep[ii - 1];
      deep[ii - 1] = temp1;
      findindex(deep, exp);
      console.log("index 2 ", ii);
      let temp2 = deep[ii + 2];
      deep[ii + 2] = deep[ii - 2];
      deep[ii - 2] = temp2;
    }
    if (exp === "manufacturing") {
      console.log("third");
      findindex(deep, exp);
      console.log("index 1 ", ii);
      let temp = deep[2];
      deep[2] = deep[ii];
      deep[ii] = temp;
      findindex(deep, exp);
      let temp1 = deep[ii - 2];
      deep[ii - 2] = deep[ii + 2];
      deep[ii + 2] = temp1;

      findindex(deep, exp);
      let temp2 = deep[ii - 1];
      deep[ii - 1] = deep[ii + 1];
      deep[ii + 1] = temp2;

      findindex(deep, exp);
      let temp3 = deep[ii - 1];
      deep[ii - 1] = deep[ii + 2];
      deep[ii + 2] = temp3;
    }
    if (exp === "municipalities") {
      console.log("fourth");
      findindex(deep, exp);
      console.log("index 1 ", ii);
      let temp = deep[2];
      deep[2] = deep[ii];
      deep[ii] = temp;
    }
    if (exp === "retail") {
      console.log("fifth");
      findindex(deep, exp);
      console.log("index 1 ", ii);
      let temp = deep[2];
      deep[2] = deep[ii];
      deep[ii] = temp;
      findindex(deep, exp);
      console.log("index 1 ", ii);
      let temp1 = deep[ii + 1];
      deep[ii + 1] = deep[ii + 2];
      deep[ii + 2] = temp1;
    }
    if (exp2) {
      findindex(deep, exp2);
      console.log("index 1 ", ii);
      let temp = deep[3];
      deep[3] = deep[ii];
      deep[ii] = temp;
    }
    if (exp3) {
      findindex(deep, exp3);
      console.log("index 1 ", ii);
      let temp = deep[4];
      deep[4] = deep[ii];
      deep[ii] = temp;
    }

    if (exp4) {
      findindex(deep, exp4);
      console.log("index 1 ", ii);
      let temp = deep[0];
      deep[0] = deep[ii];
      deep[ii] = temp;
    }

    if (exp5) {
      findindex(deep, exp5);
      console.log("index 1 ", ii);
      let temp = deep[1];
      deep[1] = deep[ii];
      deep[ii] = temp;
    }

    return deep;
  }

  const setExpertiseDataToShow = (e1, e2) => {
    expertise.map((exp) => {
      console.log(exp);
      exp.expertise === e1 && setexpertiseDate(exp.p1);
    });
    expertise.map((exp) => {
      exp.expertise === e2 && setexpertiseDate2(exp.p1);
    });
  };
  const passvalue = (exp1, exp2, exp3, exp4, exp5, expert1, expert2) => {
    console.log("Exp 1", exp1);
    console.log("Exp 2", exp2);
    console.log("Exp 3", exp3);
    console.log("Exp 4", exp4);
    console.log("Exp 5", exp5);
    console.log("Expert 2", expert1);
    console.log("Expert 2", expert2);
    setexp1(exp1);
    setexp2(exp2);
    setexp3(exp3);
    setexp4(exp4);
    setexp5(exp5);
    setexpertise(expert1);
    setexpertise2(expert2);

    // setexpertise(experti1);
    setexp(swapselecttocenter(experiences, exp1, exp2, exp3, exp4, exp5));
    setExpertiseDataToShow(expert1, expert2);
  };
  // Nav Bar Controlling
  // const toggleNavBar = () => {
  //   if (window.scrollY >= 130) {
  //     setnavtoggle(true);
  //   } else {
  //     setnavtoggle(false);
  //   }
  // };
  // window.addEventListener("scroll", toggleNavBar);
  const [togglehome, settogglehome] = useState(true);

  return (
    <div>
      <Router>
        <AnimatePresence>
          <Switch>
            <Route exact path="/">
              {togglehome && (
                <Home
                  passvalue={passvalue}
                  setnextpages={setnextpages}
                  nextpages={nextpages}
                  settogglehome={settogglehome}
                />
              )}
              {!nextpages && <Footer />}
              {nextpages && (
                <div>
                  <Navbar />
                  <div>
                     {exppages == 2 && oneTimeScroll && (
                      <ScrollerExperiece
                        experiences={orignalexp1}
                        exp1={experience1}
                        exp2={experience2}
                        exp3={experience3}
                        exp4={experience4}
                        exp5={experience5}
                        setexppages={setexppages}
                        exppages={exppages}
                      />
                    )}
                    {exppages == 2 && !oneTimeScroll && (
                      <Experience
                        experiences={orignalexp1}
                        exp1={experience1}
                        exp2={experience2}
                        exp3={experience3}
                        exp4={experience4}
                        exp5={experience5}
                        setexppages={setexppages}
                        setoneTimeScroll={setoneTimeScroll}
                        exppages={exppages}
                      />
                    )}
                    {exppages === 3 && (
                      <Experience2
                        experiences={orignalexp1}
                        exp1={experience1}
                        exp2={experience2}
                        exp3={experience3}
                        exp4={experience4}
                        exp5={experience5}
                        setexppages={setexppages}
                        setoneTimeScroll={setoneTimeScroll}
                        exppages={exppages}
                      />
                    )}
                    {exppages === 4 && (
                      <Experience3
                        experiences={orignalexp1}
                        exp1={experience1}
                        exp2={experience2}
                        exp3={experience3}
                        exp4={experience4}
                        exp5={experience5}
                        setexppages={setexppages}
                        setoneTimeScroll={setoneTimeScroll}
                        exppages={exppages}
                      />
                    )}
                    {exppages === 0 && (
                      <Experience4
                        experiences={orignalexp1}
                        exp1={experience1}
                        exp2={experience2}
                        exp3={experience3}
                        exp4={experience4}
                        exp5={experience5}
                        setexppages={setexppages}
                        setoneTimeScroll={setoneTimeScroll}
                        exppages={exppages}
                      />
                    )}
                  {exppages === 1 && (
                      <Experience5
                        experiences={orignalexp1}
                        exp1={experience1}
                        exp2={experience2}
                        exp3={experience3}
                        exp4={experience4}
                        exp5={experience5}
                        setexppages={setexppages}
                        setoneTimeScroll={setoneTimeScroll}
                        exppages={exppages}
                      />
                    )}

                    {expert && (
                      <Expertise
                        expertise={expertise}
                        selected={expert}
                        selected2={expert2}
                        selectedpara1={expertData}
                        selectedpara2={expert2Data}
                      />
                    )}
                    <ContactUs /> 
                      <Footer id="section6" />
                  </div>
                </div>
              )}
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
