import React from 'react';
import UserInformation from '../components/UserInformation';
import SavingAccount from '../components/SavingAccount';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      //sotaikhoan:this.props.sotaikhoan,
    };
  }

  setSoTaiKhoan = (params) => {
    this.props.onSoTaiKhoan(params)
  }

  render() {
    return (
      <div>
        <UserInformation
          id={this.state.id}
          sotaikhoan={this.props.sotaikhoan}
          onSoTaiKhoan={this.setSoTaiKhoan}
        />
        <SavingAccount
          id={this.state.id}
        />
      </div>
    )
  }
}

export default HomePage;