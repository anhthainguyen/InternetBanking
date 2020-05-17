import React, { Component } from 'react';
//import axios from 'axios';
import CallApi from '../utils/ApiCaller';

class SavingAccount extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    
    componentDidMount() {
        //var id = 2
        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:4200/api/taikhoantietkiem',
        //     data: null

        // }).then(res => {
        //     //console.log(res);
        //     this.setState({ users: res.data });
        // }).catch(err => {
        //     console.log(err);
        // });
        if(this.props.id)
        {
            CallApi('taikhoantietkiem/' + this.props.id , 'GET', null).then(res => {
                console.log(res);
                this.setState({ users: res.data });
            });
        }
        
    }

    renderSavingAccount = () => {
        let users = this.state.users.map((data, index) =>
            <tr key={data.idTKTietKiem}>
                <td>{data.TenTaiKhoan}</td>
                <td>{data.SoTien}</td>
            </tr>
        );
        return users;
    }

    render() {
        return (
            <div className="container">
                <h3>TÀI KHOẢN TIẾT KIỆM</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Tên tài Khoản</th>
                            <th scope="col">Số Tiền</th>
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

export default SavingAccount;