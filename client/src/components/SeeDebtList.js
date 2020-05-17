import React, { Component } from 'react';
//import axios from 'axios';
import CallApi from '../utils/ApiCaller';
import './Menu.css'

class SeeDebtList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [], isGoing: false, isGoing2: true };
    }

    componentDidMount() {
        //var id = 123456789
        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:4200/api/nhacno/SoTKNguoiNo/123456789',
        //     data: null

        // }).then(res => {
        //     console.log(res.data)
        //     console.log(res.data[0].DaThanhToan);
        //     this.setState({ users: res.data });
        // }).catch(err => {
        //     console.log(err);
        // });
        if (this.props.sotaikhoan) {
            CallApi('nhacno/SoTKNguoiNo/' + this.props.sotaikhoan, 'GET', null).then(res => {
                console.log(res);
                this.setState({ users: res.data });
            });
        }
    }

    renderSavingAccount = () => {
        let users = this.state.users.map((data, index) =>
            <tr key={data.idNhacNo}>
                <td>{data.SoTKChuNo}</td>
                <td>{data.SoTien}</td>
                <td>{data.NoiDungNo}</td>
                <td><input type="checkbox" checked={Boolean(data.DaThanhToan)} disabled /></td>
                <td>{data.NDXoaNo}</td>
                <td><input type="checkbox" checked={Boolean(data.NhacMinhNo)} disabled /></td>
            </tr>
        );
        return users;
    }

    // check(var1) {
    //     if(var1 == 1)
    //     {
    //         document.getElementById("checkbox1").checked = true;
    //     }
    // }

    // renderSavingAccountNN = () => {
    //     let users = this.state.users.map((data, index) =>
    //         <tr key={data.idNhacNo}>
    //             <td>{data.SoTKChuNo}</td>
    //             <td>{data.SoTien}</td>
    //             <td>{data.NoiDungNo}</td>
    //             <td>{data.DaThanhToan}</td>
    //             <td>{data.NDXoaNo}</td>
    //         </tr>
    //     );
    //     return users;
    // }

    render() {
        return (
            <div className="mg-10">
                <h3>DANH SÁCH NHẮC NỢ</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Số tài Khoản chủ nợ</th>
                            <th scope="col">Số Tiền</th>
                            <th scope="col">Nội dung nợ</th>
                            <th scope="col">Đã Thanh toán</th>
                            <th scope="col">Nội dung xóa nợ</th>
                            <th scope="col">Mình tạo</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSavingAccount()}
                    </tbody>
                </table>
                {/* <h3>DANH SÁCH NỢ</h3>
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
                </table> */}
            </div>
        );
    }
}

export default SeeDebtList;