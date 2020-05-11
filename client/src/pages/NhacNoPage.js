import React from 'react';
import CreateDebtReminder from '../components/CreateDebtReminder';
import SeeDebtList from '../components/SeeDebtList';

class NhacNoPage extends React.Component {
  render() {
    return (
      <div>
        <CreateDebtReminder/>
        <SeeDebtList/>
      </div>
    )
  }
}

export default NhacNoPage;
