import React from 'react';
import Transfer from '../components/Transfer';

class ChuyenKhoanPage extends React.Component {
  render() {
    return (
      <div>
        <Transfer
          sotaikhoan={this.props.sotaikhoan}
        />
      </div>
    )
  }
}

export default ChuyenKhoanPage;
