import React from "react";
import { useState } from "react";
import icon5 from '../Pictures/icon5.PNG'
import {motion} from 'framer-motion'

export default function EnterpriseData() {
  const [toggle1, settoggle1] = useState(false)
  const [toggle2, settoggle2] = useState(false)
  const [toggle3, settoggle3] = useState(false)
  const [toggle4, settoggle4] = useState(false)
  const [toggle5, settoggle5] = useState(false)
  const [toggle6, settoggle6] = useState(false)
  const [toggle7, settoggle7] = useState(false)
  const [toggle8, settoggle8] = useState(false)
  const [toggle9, settoggle9] = useState(false)
  const [toggle10, settoggle10] = useState(false)
  const [toggle11, settoggle11] = useState(false)



    return (
    <motion.div className="container-fluid text-center " style={{padding:"2%",width:"100%",background:"white"}}
    initial={{y:"100vh"}}
    animate={{y:0}}
    transition={{type:"simple", delay:0}}
    >
      <div className="container-fluid enterprise">
        <img src={icon5} alt="" />
        <h1 className="h1" style={{color:"black",fontWeight:"600",textTransform:"lowercase",marginTop:"20px"}}>enterprise software</h1>
      </div>
      <div className="container penter">
        <p>
          We develop the type of wide-reaching, highly-reliable and
          built-to-scale software products that keep your company in business.
        </p>
      </div>
      <div className="row" style={{marginTop:"35px"}}>
        <div className="col-sm-6 mx-auto">
          <div className="line" onClick={()=>settoggle1(!toggle1)}>
            <i className="bi bi-caret-down"></i>
            <h3>Enterprise Resource planning</h3>
          </div>
          {
            toggle1&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
          <div className="line" onClick={()=>settoggle2(!toggle2)}>
            <i class="bi bi-caret-down"></i>
            <h3>Customer Relationship planning</h3>
          </div>
          {
            toggle2&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
          <div className="line" onClick={()=>settoggle3(!toggle3)}>
            <i class="bi bi-caret-down"></i>
            <h3>Project Management</h3>
          </div>
          {
            toggle3&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
          
          <div className="line" onClick={()=>settoggle4(!toggle4)}>
            <i class="bi bi-caret-down"></i>
            <h3>Content Management</h3>
          </div>
          {
            toggle4&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
          
          <div className="line" onClick={()=>settoggle5(!toggle5)}>
            <i class="bi bi-caret-down"></i>
            <h3>Marketing Automation</h3>
          </div>
          {
            toggle5&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
          
          <div className="line" onClick={()=>settoggle6(!toggle6)}>
            <i class="bi bi-caret-down"></i>
            <h3>Human resource management</h3>
          </div>
          {
            toggle6&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
        </div>
        <div className="col-sm-6 mx-auto">
        <div className="line" onClick={()=>settoggle7(!toggle7)}>
            <i class="bi bi-caret-down"></i>
            <h3>Assets Management</h3>
          </div>
          {
            toggle7&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
         
          <div className="line" onClick={()=>settoggle8(!toggle8)}>
            <i class="bi bi-caret-down"></i>
            <h3>Mobile Management</h3>
          </div>
          {
            toggle8&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
          <div className="line" onClick={()=>settoggle9(!toggle9)}>
            <i class="bi bi-caret-down"></i>
            <h3>Business Intelligence</h3>
          </div>
          {
            toggle9&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
         
          <div className="line" onClick={()=>settoggle10(!toggle10)}>
            <i class="bi bi-caret-down"></i>
            <h3>internal Communication Management</h3>
          </div>
          {
            toggle10&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
         
          <div className="line" onClick={()=>settoggle11(!toggle11)}>
            <i class="bi bi-caret-down"></i>
            <h3>Supply Chain Management</h3>
          </div>
          {
            toggle11&&
              <div className="linedata">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, sunt mollitia fugit inventore perspiciatis alias odit
                  maiores ipsa! Veritatis, vel.
                </p>
              </div>
          }
          <hr className="borderhr"/>
         
        </div>
      </div>
    </motion.div>
  );
}
