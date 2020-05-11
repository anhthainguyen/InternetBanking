import React, { Component } from 'react';
import axios from 'axios';

class SeeDebtList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        //var id = SoTKNguoiNo
        axios({
            method: 'GET',
            url: 'http://localhost:4200/api/nhacno/SoTKNguoiNo/234567890',
            data: null

        }).then(res => {
            //console.log(res);
            this.setState({ users: res.data });
        }).catch(err => {
            console.log(err);
        });
        // CallApi('nhacno/SoTKNguoiNo/' + id, 'GET', null).then(res => {
        //     console.log(res);
        //     this.setState({ users: res.data });
        // });
    }

    renderSavingAccount = () => {
        let users = this.state.users.map((data, index) =>
            <tr key={data.idNhacNo}>
                <td>{data.SoTKChuNo}</td>
                <td>{data.SoTien}</td>
                <td>{data.NoiDungNo}</td>
                <td>{data.DaThanhToan}</td>
                <td>{data.NDXoaNo}</td>
            </tr>
        );
        return users;
    }

    render() {
        return (
            <div>
                <h3>DANH SÁCH NHẮC NỢ</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Số tài Khoản chủ nợ</th>
                            <th scope="col">Số Tiền</th>
                            <th scope="col">Nội dung nợ</th>
                            <th scope="col">Đã Thanh toán</th>
                            <th scope="col">Nội dung xóa nợ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSavingAccount()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SeeDebtList;