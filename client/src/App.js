// import React from 'react';
// //import Menu from './components/Menu'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// //import RouterMenu from './router/RouterMenu';
// //import HomePage from './pages/HomePage';
// import Login from './components/Login';
// //import { PrivateRoute } from './router/PrivateRoute';
// import UserPage from './pages/UserPage';
// import Menu from './components/Menu';

// class App extends React.Component {





//   render() {
//     return (
//       <Router>
//         <div>
//           <Menu />
//           {/* <Route path="/home" exact >
//             <Menu />
//             <UserPage
//               id={this.state.id}
//               tendangnhap={this.state.tendangnhap}
//             // login={this.state.login} 
//             // //onRecevie={this.setRecevie}
//             />
//           </Route>
//           <Route path="/login" exact >
//             <Login
//               check={this.state}
//               id={this.state.id}
//               hovaten={this.state.hovaten}
//               login={this.state.login}
//               onId={this.setId}
//               onLogin={this.setLogin}
//               onTenDangNhap={this.setTenDangNhap}
//             />
//           </Route> */}
//         </div>

//       </Router>
//     );
//   }

//   // showContentMenu = (routes) => {
//   //   var result = null;
//   //   console.log(routes);
//   //     result = routes.map((route, index) => {
//   //       return (
//   //         <Route
//   //           key={index}
//   //           path={route.path}
//   //           exact={route.exact}
//   //           Component={route.main}
//   //         />
//   //       );
//   //     });
//   //   return <Switch>{result}</Switch>;
//   // }
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import RouterMenu from './router/RouterMenu';
import UserPage from './pages/UserPage';
import Login from './components/Login';
import PhanHeVN from './pages/PhanHeVN';
// import Menu from './components/Menu';
// import RouterMenu from './router/RouterMenu';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      tendangnhap: '',
      login: false,
      accessToken:'',
      phanhenv: false
    };
  }

  setId = (params) => {
    this.setState({ id: params })
    //console.log(this.state.id)
  }

  setLogin = (params) => {
    this.setState({ login: params })
  }

  setPhanHeNV = (params) => {
    this.setState({ phanhenv: params })
  }

  setTenDangNhap = (params) => {
    this.setState({ tendangnhap: params })
  }

  setAccessToken = (params) => {
    this.setState({ accessToken: params })
    console.log(this.state.accessToken)
  }

  // setAccessToken = (params) => {
  //   this.setState({ accessToken: params })
  //   console.log(params)
  //   console.log(this.setState.accessToken)
  // }

  render() {
    
    // if (this.state.login) {
    //   return (<Redirect to={'/login'} />);
    // }

    return (
      <Router>
        <div>
          {/* <Menu />
          <RouterMenu /> */}
          <Route path="/home" exact >
            <UserPage
              id={this.state.id}
              tendangnhap={this.state.tendangnhap}
              accessToken={this.state.accessToken}
            />
          </Route>
          <Route path="/login" >
            <Login
              id={this.state.id}
              tendangnhap={this.state.tendangnhap}
              login={this.state.login}
              phanhenv={this.state.phanhenv}
              onId={this.setId}
              onLogin={this.setLogin}
              onPhanHeNV={this.setPhanHeNV}
              onTenDangNhap={this.setTenDangNhap}
              onAccessToken={this.setAccessToken}
            />
          </Route>
          <Route path="/phanhenv" >
            <PhanHeVN
              id={this.state.id}
              tendangnhap={this.state.tendangnhap}
              login={this.state.login}
              phanhenv={this.state.phanhenv}
              onId={this.setId}
              onLogin={this.setLogin}
              onTenDangNhap={this.setTenDangNhap}
              onAccessToken={this.setAccessToken}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
