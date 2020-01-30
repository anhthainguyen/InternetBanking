import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import ReCAPTCHA from "react-google-recaptcha";
function onChange(value) {
  console.log("Captcha value:", value);
}
class Login extends React.Component {
  render() {
    return (
      <div className="login">
      <header className="login-header">
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>
        <ReCAPTCHA
          sitekey="6LcLG9QUAAAAANA0qrt1NlyVCZmO5yC6sBvuYVUn"
          onChange={onChange}
        />
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
      </header>
    </div>
    )
  }
}

export default Login;
