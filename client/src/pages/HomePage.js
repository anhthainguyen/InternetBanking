import React from 'react';
import UserInformation from '../components/UserInformation';
import SavingAccount from '../components/SavingAccount';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <UserInformation/>
        <SavingAccount/>
      </div>
    )
  }
}

export default HomePage;