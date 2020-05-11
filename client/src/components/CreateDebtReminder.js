import React, { Component } from 'react';
import './Menu.css'

class CreateDebtReminder extends Component {
    render() {
        return (
            <div className="mg-10">
                <form action="true">
                    <legend>TẠO NHẮC NỢ</legend>
                    <div className="form-group">
                        <label htmlFor="true">Thông tin người nhận hoặc gửi</label>
                        <input type="text" className="form-control" id="true" placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Số tiền</label>
                        <input type="text" className="form-control" id="true" placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Nội dung</label>
                        <input type="text" className="form-control" id="true" placeholder="Input field" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Gửi nhắc nợ
                    </button>
                    <button type="submit" className="btn btn-primary mg-10">
                        Nhắc mình nợ
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateDebtReminder;