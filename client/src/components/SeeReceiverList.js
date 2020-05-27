import React, { Component } from 'react';
import './Menu.css'
import CallApi from '../utils/ApiCaller';
import {
    //Router,
    NavLink,
    //HashRouter
} from "react-router-dom";

class SeeReceiverList extends Component {

    // onHandleChange = (event) => {
    //     console.log(this.props.accessToken)
    // }

    constructor(props) {
        super(props);
        this.state = { users: [] };
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
        //console.log(this.props.id)
        if (this.props.id) {
            CallApi(`nguoinhan/${this.props.id}`, 'GET', null).then(res => {
                console.log(res);
                this.setState({ users: res.data });
            });
        }
        else {
            confirm('Bạn chưa đăng nhập')//eslint-disable-line
        }
    }

    onDelete = (id) => {
        var { users } = this.state;
        if (confirm('Bạn chắc chấn muốn xóa.')) {//eslint-disable-line
            // CallApi('nguoinhan/' + id, 'DELETE', null).then(res => {
            //     console.log(res);
            // });

            var index = this.findIndex(users, id);
            if (index !== -1) {
                users.splice(index, 1);
                this.setState({
                    users: users
                })
            }
        }
    }

    findIndex = (users, id) => {
        var result = -1

        users.forEach((users, index) => {
            if (users.idNguoiNhan === id) {
                result = index;
            }
        });
        return result;
    }

    // onUpdate = (id) => {
    //     console.log(id)
    // }

    onUpdate = (idNguoiNhan,SoTaiKhoan,TenGoiNho) => {
        this.props.onidNguoiNhan(idNguoiNhan)
        this.props.onSoTaiKhoanNN(SoTaiKhoan)
        this.props.onTenGoiNho(TenGoiNho)
        // console.log(idNguoiNhan)
        // console.log(SoTaiKhoan)
        // console.log(TenGoiNho)
    }

    renderSavingAccount = () => {
        let users = this.state.users.map((data, index) =>
            <tr key={data.idNguoiNhan}>
                <td>{data.SoTaiKhoan}</td>
                <td>{data.TenGoiNho}</td>
                <td>
                    <NavLink to={`/nguoinhan/${data.idNguoiNhan}/edit`}
                        className="btn btn-default mgr-10"
                        onClick={() => this.onUpdate(data.idNguoiNhan, data.SoTaiKhoan, data.TenGoiNho)}
                    >
                        Sủa
                    </NavLink>
                    <button
                        type="button"
                        className="btn btn-default mgr-10"
                        onClick={() => this.onDelete(data.idNguoiNhan)}>
                        Xóa
                    </button>
                </td>
            </tr>
        );
        return users;
    }

    render() {
        return (
            <div className="mg-10">
                <h3>DANH SÁCH NGƯỜI NHẬN</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Số tài Khoản</th>
                            <th scope="col">Tên gợi nhớ</th>
                            <th scope="col">Hành động</th>
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

export default SeeReceiverList;