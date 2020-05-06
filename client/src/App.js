import React from 'react';
import Menu from './components/Menu'
//import ProductList from './components/ProductList'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterMenu from './router/RouterMenu';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <RouterMenu/>
          {/* <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn-info mb-10">Thêm</button>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Danh sach</h3>
                    </div>
                </div>
                <ProductList/>
              </div>
              {this.showContentMenu(routes)}
              
            </div>
          </div> */}
        </div>
      </Router>
    );
  }

  // showContentMenu = (routes) => {
  //   var result = null;
  //   console.log(routes);
  //     result = routes.map((route, index) => {
  //       return (
  //         <Route
  //           key={index}
  //           path={route.path}
  //           exact={route.exact}
  //           Component={route.main}
  //         />
  //       );
  //     });
  //   return <Switch>{result}</Switch>;
  // }
}

export default App;
