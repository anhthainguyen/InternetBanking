import React from 'react';
import TransactionSend from '../components/TransactionSend';
import TransactionsReceived from '../components/TransactionsReceived';

class GiaoDichPage extends React.Component {
  render() {
    return (
      <div>
        <TransactionSend
          sotaikhoan={this.props.sotaikhoan}
        />
        <TransactionsReceived
          sotaikhoan={this.props.sotaikhoan}
        />
      </div>
    )
  }
}

export default GiaoDichPage;
