import React from 'react';
import './Menu.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// //import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
//import { NavLink, Switch, Route} from 'react-router-dom';
// import { Home } from './Home';
// import { ChuyenKhoan } from './ChuyenKhoan';
// import { GiaoDich } from './GiaoDich';
// import { NhacNo } from './NhacNo';
//import { BrowserRouter as Router } from 'react-router-dom'; 
import {
  //Router,
  NavLink,
  //HashRouter
} from "react-router-dom";
// import Home from "./Home";
// import ChuyenKhoan from "./ChuyenKhoan";
// import GiaoDich from "./GiaoDich";
// import NhacNo from "./NhacNo";


class Menu extends React.Component {
  
  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <a className="navbar-brand" href="#">Navbar</a>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item active">
      //         <a className="nav-link" href="#">
      //           Home <span className="sr-only">(current)</span>
      //         </a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="#">Link</a>
      //       </li>
      //       <li className="nav-item dropdown">
      //         <a
      //           className="nav-link dropdown-toggle"
      //           href="#"
      //           id="navbarDropdown"
      //           role="button"
      //           data-toggle="dropdown"
      //           aria-haspopup="true"
      //           aria-expanded="false"
      //         >
      //           Dropdown
      //         </a>
      //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      //           <a className="dropdown-item" href="#">
      //             Action
      //           </a>
      //           <a className="dropdown-item" href="#">
      //             Another action
      //           </a>
      //           <div className="dropdown-divider" />
      //           <a className="dropdown-item" href="#">
      //             Something else here
      //           </a>
      //         </div>
      //       </li>
      //       <li className="nav-item">
      //         <a
      //           className="nav-link disabled"
      //           href="#"
      //           tabIndex={-1}
      //           aria-disabled="true"
      //         >
      //           Disabled
      //         </a>
      //       </li>
      //     </ul>
      //     <form className="form-inline my-2 my-lg-0">
      //       <input
      //         className="form-control mr-sm-2"
      //         type="search"
      //         placeholder="Search"
      //         aria-label="Search"
      //       />
      //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
      //         Search
      //       </button>
      //     </form>
      //   </div>
      // </nav>

      // <Navbar bg="light" expand="lg">
      //   <Navbar.Brand>AKBank</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="mr-auto">
      //       <Nav.Link><Link to='/' >Home</Link></Nav.Link>
      //       <Nav.Link><Link to='/chuyekhoan' >Chuyển khoản</Link></Nav.Link>
      //       <Nav.Link><Link to='/giaodich' >Giao dịch</Link></Nav.Link>
      //       <Nav.Link><Link to='/nhacno' >Nhắc nợ</Link></Nav.Link>
      //     </Nav>
      //     <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button variant="outline-success">Search</Button>
      //     </Form>
      //   </Navbar.Collapse>
      // </Navbar>

      <div className="navbar navbar-default">
        <NavLink  className="navbar-brand" to='/home'>AKBank</NavLink >
        <ul className="nav navbar-nav">
          <li>
            <NavLink  to="/home" activeStyle={{ fontWeight: "bold", color: "blue" }}>Home</NavLink >
          </li>
          <li>
            <NavLink  to="/chuyekhoan" activeStyle={{ fontWeight: "bold", color: "blue" }}>Chuyển khoản</NavLink >
          </li>
          <li>
            <NavLink  to="/giaodich" activeStyle={{ fontWeight: "bold", color: "blue" }}>Giao dịch</NavLink >
          </li>
          <li>
            <NavLink  to="/nhacno" activeStyle={{ fontWeight: "bold", color: "blue" }}>Nhắc nợ</NavLink >
          </li>
          <li>
            <NavLink  to="/nguoinhan" activeStyle={{ fontWeight: "bold", color: "blue" }}>Người nhận</NavLink >
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right mgr-10">
          <li><a href="/home"><span className="glyphicon glyphicon-user"></span> {this.props.tendangnhap}</a></li>
          <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span>log out</a></li>
          {/* <li><NavLink to="/home"><span className="glyphicon glyphicon-user"></span> {this.props.tendangnhap}</NavLink></li>
          <li><NavLink to="/login" onClick={this.props.onLogin(false)}><span className="glyphicon glyphicon-log-in"></span>log out</NavLink></li> */}
        </ul>
      </div>

      // <Navbar bg="light" expand="lg">
      //   <Navbar.Brand>AKBank</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="mr-auto">
      //       <Nav.Link>Home</Nav.Link>
      //       <Nav.Link>Chuyển khoản</Nav.Link>
      //       <Nav.Link>Giao dịch</Nav.Link>
      //       <Nav.Link>Nhắc nợ</Nav.Link>
      //     </Nav>
      //     <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button variant="outline-success">Search</Button>
      //     </Form>
      //   </Navbar.Collapse>
      // </Navbar>
      // <div className="navbar navbar-default">
      //   <a className="navbar-brand" href="/home">AKBank</a>
      //   <ul className="nav navbar-nav">
      //     <li className="active">
      //       <a href="/Home">Home</a>
      //     </li>
      //     <li>
      //       <a href="/chuyekhoan">Chuyển khoản</a>
      //     </li>
      //     <li>
      //       <a href="/giaodich">Giao dịch</a>
      //     </li>
      //     <li>
      //       <a href="/nhacno">Nhắc nợ</a>
      //     </li>
      //   </ul>
      // </div>
      // <div className="navbar navbar-default">
      //   <a className="navbar-brand">AKBank</a>
      //   <ul className="nav navbar-nav">
      //     <li className="active">
      //       <a className="nav-link">Home</a>
      //     </li>
      //     <li>
      //       <a className="nav-link">Chuyển khoản</a>
      //     </li>
      //     <li>
      //       <a className="nav-link">Giao dịch</a>
      //     </li>
      //     <li>
      //       <a className="nav-link">Nhắc nợ</a>
      //     </li>
      //   </ul>
      // </div>
    )
  }
}

export default Menu;
