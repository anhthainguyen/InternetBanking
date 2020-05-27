import React, { Component } from 'react';
import UserCreating from '../components/UserCreating';
import CustomerCreating from '../components/CustomerCreating';

class PhanHeVN extends Component {
    render() {
        return (
            <div>
                <UserCreating/>
                <CustomerCreating/>
            </div>
        );
    }
}

export default PhanHeVN;