import React from "react";
import "./contact.css";
import RobotCheck from './RobotCheck';

export default function ContactUs() {
  return (
    <div className="main-footer"
      style={{ paddingTop: "40px" }}
      id="section5"
    >
      <div className="footer-container">

        <h3
          className="h3 text-center text-uppercase"
          style={{ color: "#ec893a" }}
        >
          contact us
        </h3>
        <p className="text-center c-footer-para">
          Want to learn more? Have a question? Or, need a quick ballpark budget
          estimate? We are here to help. Let's start a conversation.
        </p>
        <form action="">
          <div className="row">
            <div className="col-md-6 mb-md-0 mb-3">
              <input
                type="text"
                placeholder="First Name *"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Last Name *"
                className="form-control"
              />
            </div>
            <div className="col-12 my-3">
              <input
                type="email"
                placeholder="Email *"
                className="form-control"
              />
            </div>
            <div className="col-md-6 mb-md-0 mb-3">
              <input
                type="text"
                placeholder="Company Name *"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Phone Number *"
                className="form-control"
              />
            </div>
            <div className="col-md-6 mt-1">
              <div className="row">
                <p style={{ color: "#8d8d8d", marginTop: "20px" }}>
                  <b> Interested In</b>
                </p>
                <div className="col-lg-6">
                  <div class="control-group">
                    <label class="control control-checkbox">
                      Enterprise Software
                      <input type="checkbox" />
                      <div class="control_indicator"></div>
                    </label>
                    <label class="control control-checkbox">
                      Websites
                      <input type="checkbox" />
                      <div class="control_indicator"></div>
                    </label>
                    <label class="control control-checkbox">
                      Mobile Apps
                      <input type="checkbox" />
                      <div class="control_indicator"></div>
                    </label>

                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="control-group">
                    <label class="control control-checkbox">
                     IT/MSP Services
                      <input type="checkbox" />
                      <div class="control_indicator"></div>
                    </label>
                    <label class="control control-checkbox">
                     Technology Consulting
                      <input type="checkbox" />
                      <div class="control_indicator"></div>
                    </label>
                    <label class="control control-checkbox">
                     Other
                      <input type="checkbox" />
                      <div class="control_indicator"></div>
                    </label>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-2">
              <textarea
                className="form-control"
                placeholder="Message"
                style={{ outline: "0", width: "100%", height: "150px" }}
              ></textarea>
            </div>
          </div>
          <div className="container-fluid d-flex" style={{width:"80%"}}>
              { <RobotCheck /> }
              <div className="align-item-center justify-content-center mx-auto" style={{marginTop:"70px"}} >
                <button type="submit" className="c-footer-btn text-uppercase">
                  submit
                </button>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
}