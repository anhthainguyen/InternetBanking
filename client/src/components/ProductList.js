import React from 'react';
import ProductItem from './ProductItem'

class PriductList extends React.Component {
    render() {
        return (
            <div className="panel-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Số tài Khoản</th>
                            <th>Số Tiền</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PriductList;