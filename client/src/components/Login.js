import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import CallApi from '../utils/ApiCaller';
import { ReCaptcha } from 'react-recaptcha-google';
import {
  // BrowserRouter as Router,
  // Route,
  Redirect,
} from "react-router-dom";
// import UserPage from './../pages/UserPage';

class Login extends React.Component {

  // constructor( props, context ) {
  //   super( props, context );
  //   this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
  //   this.verifyCallback = this.verifyCallback.bind(this);
  // }

  // componentDidMount() {
  //   if (this.captchaDemo) {
  //       console.log("started, just a second...")
  //       this.captchaDemo.reset();
  //   }
  // }

  // onLoadRecaptcha() {
  //   if (this.captchaDemo) {
  //       this.captchaDemo.reset();
  //   }
  // }

  // verifyCallback(recaptchaToken) {
  //   // Here you will get the final recaptchaToken!!!  
  //   console.log(recaptchaToken, "<= your recaptcha token")
  // }

  constructor(props) {
    super(props);
    this.state = {
      txtTenDangNhap: '',
      txtMatKhau: '',
    };
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    var { txtTenDangNhap, txtMatKhau } = this.state;
    //console.log(this.props.HoVaTen)
    if (txtTenDangNhap === '') {
      confirm('Bạn chưa nhập tên đăng nhập.')//eslint-disable-line
    }
    else if (txtMatKhau === '') {
      confirm('Bạn chưa nhập password.')//eslint-disable-line
    }
    else {
      CallApi('auth', 'POST', {
        "TenDangNhap": txtTenDangNhap,
        "MatKhau": txtMatKhau
      }).then(res => {
        if (res.data.accessToken) {
          console.log(res)
          this.props.onId(res.data.data.idTKDangNhap)
          this.props.onTenDangNhap(res.data.data.TenDangNhap)
          this.props.onLogin(true)
          //console.log(this.props.login)
          // this.setState({
          //   login: true
          // })
        } else {
          confirm('Tên đăng nhập hoặc password sai.')//eslint-disable-line
        }
      });
    }
  }

  // checkLogin = (event) => {
  //   console.log('Login Works!');
  //   // if (this.state.login) {
  //   //   // return (
  //   //   //   console.log('Login Works!');
  //   //   //   // <Redirect to="/home" />
  //   //   //   // <Router>
  //   //   //   //   <Route>
  //   //   //   //     <Redirect to="/home" />
  //   //   //   //   </Route>
  //   //   //   // </Router>
  //   //   // )

  //   // }
  // }

  render() {

    if (this.props.login) {
      return (<Redirect to={'/home'} />);
    }

    return (
      <div className="login">
        <header className="login-header" >
          <form onSubmit={this.onHandleSubmit} action="true">
            <h3>ĐĂNG NHẬP AK BANK</h3>

            <div className="form-group">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                name="txtTenDangNhap"
                className="form-control"
                placeholder="Enter email"
                onChange={this.onHandleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="txtMatKhau"
                className="form-control"
                placeholder="Enter password"
                onChange={this.onHandleChange}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>
            <ReCaptcha
              // ref={(el) => {this.captchaDemo = el;}}
              size="normal"
              render="explicit"
              sitekey="6LfPHNQUAAAAALqSDV5Hc-gf9qiVQt0Ii9TTOPGK"
            // onloadCallback={this.onLoadRecaptcha}
            // verifyCallback={this.verifyCallback}
            />
            <button type="submit" className="btn btn-primary btn-block" onClick={this.checkLogin}>Submit</button>
            <p className="forgot-password text-right">
              Forgot <a href="/forgotpassword">password?</a>
            </p>
          </form>
        </header>
      </div>
    )
  }
}

export default Login;
