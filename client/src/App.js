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
// import Menu from './components/Menu';
// import RouterMenu from './router/RouterMenu';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      tendangnhap: '',
      login: false
    };
  }

  setId = (params) => {
    this.setState({ id: params })
    //console.log(this.state.id)
  }

  setLogin = (params) => {
    this.setState({ login: params })
  }

  setTenDangNhap = (params) => {
    this.setState({ tendangnhap: params })
  }

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
            />
          </Route>
          <Route path="/login" >
            <Login
              id={this.state.id}
              tendangnhap={this.state.tendangnhap}
              login={this.state.login}
              onId={this.setId}
              onLogin={this.setLogin}
              onTenDangNhap={this.setTenDangNhap}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
