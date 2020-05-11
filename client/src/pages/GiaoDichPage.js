import React from 'react';
import TransactionSend from '../components/TransactionSend';
import TransactionsReceived from '../components/TransactionsReceived';

class GiaoDichPage extends React.Component {
  render() {
    return (
      <div>
        <TransactionSend/>
        <TransactionsReceived/>
      </div>
    )
  }
}

export default GiaoDichPage;
