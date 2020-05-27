import React, { Component } from 'react';
import AddReceiver from '../components/AddReceiver';
import SeeReceiverList from '../components/SeeReceiverList';

class NguoiNhanPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            accessToken: this.props.accessToken
        };
    }

    onHandleChange = (event) => {
        console.log(this.props.accessToken)
        console.log(this.props.id)
    }

    setidNguoiNhan = (params) => {
        this.props.onidNguoiNhan(params)
        console.log(params)
    }

    setSoTaiKhoanNN = (params) => {
        this.props.onSoTaiKhoanNN(params)
    }

    setTenGoiNho = (params) => {
        this.props.onTenGoiNho(params)
    }

    render() {
        return (
            <div>
                <AddReceiver
                    id={this.state.id}
                    accessToken={this.props.accessToken}
                />
                <SeeReceiverList
                    id={this.state.id}
                    accessToken={this.props.accessToken}
                    onidNguoiNhan={this.setidNguoiNhan}
                    onSoTaiKhoanNN={this.setSoTaiKhoanNN}
                    onTenGoiNho={this.setTenGoiNho}
                />
            </div>
        );
    }
}

export default NguoiNhanPage;