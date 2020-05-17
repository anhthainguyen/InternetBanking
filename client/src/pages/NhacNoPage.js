import React from 'react';
import CreateDebtReminder from '../components/CreateDebtReminder';
import SeeDebtList from '../components/SeeDebtList';

class NhacNoPage extends React.Component {
  render() {
    return (
      <div>
        <CreateDebtReminder
          sotaikhoan={this.props.sotaikhoan}
        />
        <SeeDebtList
          sotaikhoan={this.props.sotaikhoan}
        />
      </div>
    )
  }
}

export default NhacNoPage;
