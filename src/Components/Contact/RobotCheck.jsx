import React from "react";
import './Robot.css'

export default function RobotCheck() {
  return (
    <div className="captcha " >
      <div className="spinner d-flex">
        <label>
          <input
            type="checkbox"
            onClick="$(this).attr('disabled','disabled');"
          />
          <span className="checkmark">
            <span>&nbsp;</span>
          </span>
        </label>
      </div>
      <div className="text">I'm not a robot</div>
      <div className="logo">
        <img src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/" />
        <p>reCAPTCHA</p>
        <small>Privacy - Terms</small>
      </div>
    </div>
  );
}
