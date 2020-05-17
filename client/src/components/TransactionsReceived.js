import React, { Component } from 'react';
// import axios from 'axios';
import CallApi from '../utils/ApiCaller';

class TransactionsReceived extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    componentDidMount() {
        //var id = 123456789
        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:4200/api/giaodich/SoTaiKhoanN/123456789',
        //     data: null

        // }).then(res => {
        //     console.log(res);
        //     this.setState({ users: res.data });
        // }).catch(err => {
        //     console.log(err);
        // });
        if (this.props.sotaikhoan) {
            CallApi('giaodich/SoTaiKhoanG/' + this.props.sotaikhoan, 'GET', null).then(res => {
                console.log(res);
                this.setState({ users: res.data });
            });
        }
    }

    renderTransactionsReceived = () => {
        let users = this.state.users.map((data, index) =>
            <tr key={data.idGiaoDich}>
                <td>{data.SoTaiKhoanG}</td>
                <td>{data.NganHang}</td>
                <td>{data.SoTien}</td>
                <td>{data.NoiDung}</td>
                <td>{data.NgayGio}</td>
            </tr>
        );
        return users;
    }

    render() {
        return (
            <div className="container">
                <h1>CÁC GIAO DỊCH NHẬN TIỀN</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Số tài Khoản Gửi</th>
                            <th scope="col">Ngân hàng</th>
                            <th scope="col">Số Tiền</th>
                            <th scope="col">Nội dung</th>
                            <th scope="col">Ngày giờ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTransactionsReceived()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TransactionsReceived;