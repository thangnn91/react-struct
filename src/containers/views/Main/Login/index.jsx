import React, { useEffect, useState } from 'react'
import '../../../../resources/styles/login.css';
//import '../../../../js/login.js';
export default () => {

  let x, y, z;
  useEffect(() => {
    x = document.getElementById("login");
    y = document.getElementById("register");
    z = document.getElementById("btn");
  }, []);

  const handle = (action) => {
    if (action === 0) {
      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0px";
    }
    else if (action === 1) {
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
    }
  };

  return (
    <div id='login-form' className="hero">
      <div className="form-box">
        <div className="div button-box">
          <div id="btn"></div>
          <button id='bt-login' onClick={() => {handle(0)}} type="button" className="toggle-btn">Log In</button>
          <button id='bt-register' type="button" onClick={() => {handle(1)}} className="toggle-btn">Register</button>
        </div>

        <div className="social-icons">
          <img src='images/IG.png' alt="" />
          <img src='images/FB.png' alt="" />
          <img src='images/YT.png' alt="" />
        </div>

        <form id="login" className="input-group">
          <input type="text" className="input-field" placeholder="Username" required />
          <input type="password" className="input-field" placeholder="Password" required />
          <input id='rmb-pw' type="checkbox" className="check-box" /><label htmlFor="rmb-pw">Remember Password</label>
          <button className="submit-btn" type="submit">Log In</button>
        </form>

        <form id="register" className="input-group">
          <input type="text" className="input-field" placeholder="Username" required />
          <input type="password" className="input-field" placeholder="Password" required />
          <input type="password" className="input-field" placeholder="Confirm password" required />
          <input id='cb-term' type="checkbox" className="check-box" /><label htmlFor='cb-term'>I agree to the terms & conditions</label>
          <button className="submit-btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}