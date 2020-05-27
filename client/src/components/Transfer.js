import React, { Component } from 'react';
import './Menu.css'
import CallApi from '../utils/ApiCaller';
//import bcrypt from './../../node_modules/bcrypt';

// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

const moment = require('moment');
const axios = require('axios');
const CryptoJS = require("crypto-js");
const openpgp = require('openpgp');


class Transfer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSoTaiKhoan: '',
            txtSoTien: '',
            txtNoiDung: '',
            txtnganhang: 'AKBank',
            check: false,
            sign: ''
        };
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    componentDidMount = async () => {
        console.log('vao được')
        const privateKeyArmored = '-----BEGIN PGP PRIVATE KEY BLOCK-----\n' +
            'Version: Keybase OpenPGP v1.0.0\n' +
            'Comment: https://keybase.io/crypto\n' +
            '\n' +
            'xcFFBF5Y89wBBAC5/tZ+blVXW5cA/JImCtcw6pHq0WorKWj5vGHZGUuok8ImO9Tg\n' +
            'gAmnRwehzvFjMfDqRKhGLW0CF5UD49kCJvwwPcR3bV9v4MXee+yMicJ8sBE05KVL\n' +
            'EfnYtB5rGzYc4A7Afi4BjsgfVlxSUXsWYdJWuu3XQ4x2TwdF8hM849hXrwARAQAB\n' +
            '/gkDCAIE5Zg+RMQ5YLOIv86tq9oP7snP1g3ZNzh1q38FoFSq4QdEoNo191My8O7M\n' +
            'alIiyZVaP69fMpkC0Dk0oY6LMoZoclUrmTJSevQLOWC1fYiwbp9Tm3aDzqfGvw7c\n' +
            'WVcnTz7cZ6Bjkzi95l08WsfQsojsM6ROO/q2DLLT+8Y6lNz8nphuRLzbqjdp5FLr\n' +
            'dF14WkdUUBOy3DSpk1Zx0siMZiDgQ4C1SSMGTfqioXo7Xx+evhdmPylE5Cv7KZ2X\n' +
            'FH5BWWiPQF19BIPie8SF9u1tLpHZ9VFjBPUYmvrITjcC4/D6eWHOphMjur/LOpn4\n' +
            'mS6r/xTo8tx7veiNQG0t7unq80lYMzInXx6wG8vNyh7TKm92qL6jb3HdfHk1WBX0\n' +
            'e55dKWCX/iTsRxiwgu5b9xze6nQxxOkwTUQEUIZctDrMFKmJosTz/HX1yaGPkZ8j\n' +
            'L4PnmKkil0vqRfn3TR1kB9BnJOxcnJMowbvjk1QZKatYCJ1S5FFo0s0oVGjDoWkg\n' +
            'UXVhbmcgS2jhuqNpIDx2bnRoYWkwODRAZ21haWwuY29tPsKtBBMBCgAXBQJeWPPc\n' +
            'AhsvAwsJBwMVCggCHgECF4AACgkQY6z37okX+TDu7wQAk+SOLuHzIGl05piygHKt\n' +
            'gma98oEICt5Oukcz6HPH5WABAdiWqBK7owYJf/OjFW84TbgukHMzR4VmlC6EVzKJ\n' +
            'DndUeAAhvQxg/C/edTfmrszgPZMYbCkAZGKFwHzEfC4zSzzzn4IL+ATzMztUypsX\n' +
            'cn3ZXXydJsuf9rAD1Syq89/HwUYEXljz3AEEALtUSJg3Q/aTeMS4gvT3aChOBLuG\n' +
            'XowuoLBKzVINlMFb8LO3+wMkLVal9QBFb3/SmSw58VMXEa7cIx7Q7hWIzkwGC3kP\n' +
            '4OzjSp4Q303Z67bFwTCmhcjKYyBAjXalyx0w8P+wIwQctNOrhYVjY6sr+P6ze60G\n' +
            '4FLy9fZBgcHqgOZdABEBAAH+CQMIM3erTB23pF5gnogVeoAWNXaCbOSnDLe5I+uh\n' +
            'mefT8chbBaE5PIeatSZC3Yq67ooRJ2e7gU6jCRfGVefiyizBk39Vlyq+GtXD8Lky\n' +
            '9ROmWN743PeoQ8ZDRiGq+YDKtWb84HL9X7R9wIvTJiGj1JJMZk/NB/r2xGN1G5fq\n' +
            'actujHUQRIVWfGM7A8av06Cif3WGNUDWKnSzp/xUcAZwLvYNTp6jfK8yAgw7IgIk\n' +
            'BJ6MxvEi6vziIwAR2aBWwfMn++WFLoTqoev7ANtADTlhoF3voSeVBadsQbwG00Ko\n' +
            '2NWxOYO5lehcUgMd7B/QEL1c9Ofbr3gOuzA/0kn7AfNH6ZXioUqNb5plnbo28SsG\n' +
            'Ip/haNDYxl/6F8KFtdPp3LatLJ97XmkXKMlfCP1WpkDqFqyVcHCd88EI2nvZ1Fpq\n' +
            'MzKU5woJ/vFqRZOcgX+Oh1h8x4xSVlMfSvE9QqzaemqCzbCy5IToj9sKrckXP0ej\n' +
            'EOcijpFLH15B3cLAgwQYAQoADwUCXljz3AUJDwmcAAIbLgCoCRBjrPfuiRf5MJ0g\n' +
            'BBkBCgAGBQJeWPPcAAoJEOtp18gJ2ygaQvkD/0zm9SCgjw6LzjAwriV7umpryVVh\n' +
            'AEjxSzljBVFEqRUYnx26h2skwYfXVEyd3UPEj1Y3iQ5cAO56v/WcngcbIuKvlpBY\n' +
            'BRysmKa1HSwIaX52qj5VzMqKi7Xx7GUwDnjedNaWN49fswu1woJeE2VhgFAHzgla\n' +
            'gvWuyZw20GrHApU5blID/0ZCb2mcLJOiGyXxSARC//ouY6G9R1e7F7RGG05/theI\n' +
            'HlfmiLZ/DfMEjYCOgTNs/4B21m3+huMFkFKceDoxLoo/Z+P5H5YFGmNswdrCNYbt\n' +
            '+S2y5xgoKrJVJEFK6GX3J7Xitj8cOOZqNzTWWYI+oY6/1w48/jMVoLxMKFnkGcQB\n' +
            'x8FFBF5Y89wBBACap5ILSVKUJ3rDgktlCxbLyN5vSrpKqCKoMR1UAfArQs1NfcpT\n' +
            'vtb+aWmLEVLbjjIaoFTqbvu88WGhPOyNMkWHT4+BD15wYH9MdoHa2mrsCy6ySvyR\n' +
            'F9FrUBRzLFm2oaDd2gbCTboX58kA9iaNwtf8SziWc2XLc0KJW32aQ7Hz5QARAQAB\n' +
            '/gkDCN1I/U1Vl3N1YLh841c8M96YrxBfXpgey8BwTavvcfvR5CqDkf6YHLTYWDmt\n' +
            'gqn/5B+JR4qr3C1WZZcrqlQlJtoBTu85v+epw/UK70W45OlRI3k8Jt/DmUPfNWZN\n' +
            'JimmtNPGIZjuEeLS4l8PQm4Vu+J0nm9soUD3yoS9NCJFUHc8KBTXRd3hhnmrqorB\n' +
            'psr5yRgqGmseDXD33a8dW3QutRIncN8DQomtBxMWC7A0H8SW/4dibBR/C+jRWc+v\n' +
            'yh8ocxvycsNO0Ej5CPMLXuNVd9pzMVVFUOqLC8dzrZjMTKnU83Te3RBlrIVTScDH\n' +
            'h/wfeZve1HGc+tMdAqhTeFMqyvNuTrSj0a+m5ZDKvLI5eDc+C6RKzGGmUV76J6lS\n' +
            'yoV3wx27WdNuS//73ayoxM6s9Dz1p3or8HmPTUgCSeU087FDtfd2gw7/c1yRtHau\n' +
            'bI0cBGOwOk/c9HtJN8+l/QSE7ss6NJomu9cSfVRB/11ejG2pgio4xcLAgwQYAQoA\n' +
            'DwUCXljz3AUJDwmcAAIbLgCoCRBjrPfuiRf5MJ0gBBkBCgAGBQJeWPPcAAoJEPnV\n' +
            'fWhrAuc5NbkD/igOkMwfopAEBu27vYPcO0pHwyQb7Vgu3LJf3pK6Fs+LOssghnVL\n' +
            'am9tRoZT+TDZKU3h3sjvJWSlQYqovSd7K9z6XA+pgFpd9b/ly3Obdzf/pUD09z4W\n' +
            'SrBQVVBmQTVtn1UGq8m7/PiSMcRMZ1G6WFX+3LcbkbkBX8pqpTlEw5fAJJMD/15C\n' +
            '/mZia+hW6iNKvI6V5XS024o5fRnoCTiBvZ8Aub/dlBiIppQXwQwLnR6CdEMRLhzO\n' +
            'UX1yG4D0zd+e4mZ/VNjnXfX/WS7182E1Wxqtj9qXTIfc3GRO+kXkJhuo8MUsM9YV\n' +
            '9EY2wtXN/b0fyxmPdOHpxqHCQdbS6igQO6WB/qsw\n' +
            '=c9ND\n' +
            '-----END PGP PRIVATE KEY BLOCK-----'; // encrypted private key
        const passphrase = `12345`; // what the private key is encrypted with

        const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
        await privateKey.decrypt(passphrase);

        const { data: cleartext } = await openpgp.sign({
            message: openpgp.cleartext.fromText('nhom 7'), // CleartextMessage or Message object
            privateKeys: [privateKey]                             // for signing
        });
        //console.log(cleartext);
        const wordArray = CryptoJS.enc.Utf8.parse(cleartext);
        const chuKyBase64 = CryptoJS.enc.Base64.stringify(wordArray);

        this.setState({
            sign: chuKyBase64
        });
        //console.log(this.state.sign)
    };



    onHandleSubmit = (event) => {

        event.preventDefault();
        //console.log(this.state.sign)
        //console.log(this.state);
        //const SoTaiKhoan = '234567890';
        var { txtSoTaiKhoan, txtSoTien, txtNoiDung, txtnganhang, check, sign } = this.state;
        if (txtSoTaiKhoan === '') {
            confirm('Bạn chưa nhập thông tin người nhận.')//eslint-disable-line
        }
        else if (txtSoTien === '') {
            confirm('Bạn chưa nhập số tiền.')//eslint-disable-line
        }
        else if (txtNoiDung === '') {
            confirm('Bạn chưa nhập nội dung.')//eslint-disable-line
        }
        else {
            const now = moment().format("YYYY-MM-DD HH:mm:ss");
            if (txtnganhang === 'AKBank') {
                CallApi(`khachhang/sotaikhoan/${txtSoTaiKhoan}`, 'GET', null).then(res => {
                    if (res.status === 200) {
                        const txtTenGoiNho = res.data[0].HoVaTen
                        // const data = {
                        //     SoTaiKhoanG: this.props.sotaikhoan,
                        //     SoTaiKhoanN: txtSoTaiKhoan,
                        //     NganHang: txtnganhang,
                        //     SoTien: txtSoTien,
                        //     NoiDung: txtNoiDung,
                        //     NgayGio: now
                        // }
                        // const body={
                        //     token:this.props.accessToken,
                        //     data:data
                        // }
                        CallApi('giaodich/add', 'POST', {
                            SoTaiKhoanG: this.props.sotaikhoan,
                            SoTaiKhoanN: txtSoTaiKhoan,
                            NganHang: txtnganhang,
                            SoTien: txtSoTien,
                            NoiDung: txtNoiDung,
                            NgayGio: now
                        }).then(res => {
                            if (res.data) {
                                confirm('Bạn đã chuyển tiền thành công.')//eslint-disable-line
                                this.setState({
                                    txtSoTaiKhoan: '',
                                    txtSoTien: '',
                                    txtNoiDung: '',
                                    txtnganhang: 'AKBank'
                                })
                                if (check === true) {
                                    //txtTenGoiNho = res.data[0].HoVaTen
                                    //confirm('Bạn đã thêm người nhận thành công.')//eslint-disable-line
                                    console.log(this.props.id)
                                    console.log(txtSoTaiKhoan)
                                    CallApi('nguoinhan/add', 'POST', {
                                        idKhachHang: this.props.id,
                                        SoTaiKhoan: txtSoTaiKhoan,
                                        TenGoiNho: txtTenGoiNho
                                    }).then(res => {
                                        if (res.data) {
                                            confirm('Bạn đã thêm người nhận thành công.')//eslint-disable-line
                                            this.setState({
                                                txtSoTaiKhoan: '',
                                                txtTenGoiNho: '',
                                            })
                                            console.log(res);
                                        }

                                    });
                                }
                                console.log(res);
                            }
                        });

                        this.setState.check = false

                        document.getElementById("myForm").reset();
                    } else {
                        confirm('Bạn nhập số tài khoản không đúng.')//eslint-disable-line
                    }
                });
            } else if (txtnganhang === 'PGPBank') {
                console.log('PGPBank')
                const time = Date.now();

                const datachecksum = {
                    soTK: txtSoTaiKhoan,
                    timestamp: time,
                    partnerCode: "1234", //là code nhóm ông để t check xem có đúng người đã liên kết
                    secretKey: 'Stay strong'
                }

                //Serialize JavaScript object into JSON string
                const text = JSON.stringify(datachecksum);

                //tạo checksum
                const checksum = CryptoJS.SHA256(text);

                //xem checksum
                //console.log(checksum.toString(CryptoJS.enc.Hex));

                const data = {
                    soTK: txtSoTaiKhoan,
                    timestamp: time,
                    partnerCode: "1234", //là code nhóm ông để t check xem có đúng người đã liên kết
                    checksum: checksum.toString(CryptoJS.enc.Hex)
                }
                console.log(data)
                axios({
                    method: 'post',
                    url: 'https://student-ib.herokuapp.com/api/hkl/taikhoan/thongtin',
                    data: data
                }).then(res => {
                    console.log(res)
                    if (res.status) {
                        console.log('vaotrong')
                        const datanoptien = {
                            soTKGui: this.props.sotaikhoan,
                            soTKNhan: txtSoTaiKhoan,
                            giaoDich: txtSoTien,
                            noiDung: txtNoiDung,
                            partnerCode: "1234",
                            timestamp: time,
                            checksum: checksum.toString(CryptoJS.enc.Hex),
                            signature: sign
                        }
                        console.log(datanoptien)
                        axios({
                            method: 'post',
                            url: 'https://student-ib.herokuapp.com/api/hkl/chuyenkhoan/noptien',
                            data: datanoptien
                        }).then(res => {
                            console.log(res);
                        }).catch(err => {
                            console.log(err);
                        });
                    }

                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });

            } else if (txtnganhang === 'RSABank') {
                // console.log('RSABank')
                // var date = new Date();
                // var sotk = "02180002324"
                // var time = date.getFullYear().toString() + "0" + (date.getMonth() + 1).toString() + date.getDate().toString() + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString()

                // var stringhash = sotk + time + "nhom21"
                // var bcrypt = require('bcrypt');
                // bcrypt.genSalt(12, function (err, salt, sotk, time) {
                //     var sotk2=sotk;
                //     var time2=time;
                //     bcrypt.hash(stringhash, salt, function (err, hash, sotk2, time2) {
                //         const data={
                //             soTK: sotk2,
                //             time: time2,
                //             hash:hash
                //         }
                //         axios({
                //             method: 'post',
                //             url: 'https://122.41.175.115:3000/api/ib-hn/info-account',
                //             data: data
                //         }).then(res => {
                //             console.log(res);
                //         }).catch(err => {
                //             console.log(err);
                //         });
                //         //console.log("hash moi:" + a);
                //     });
                // });

                //const time = Date.now();
            }
            this.setState.check = false
            document.getElementById("myForm").reset();
        }
    }

    resetText = (event) => {
        this.setState({
            txtSoTaiKhoan: '',
            txtSoTien: '',
            txtNoiDung: '',
            txtnganhang: 'AKBank'
        })
    }

    render() {
        return (
            <div className="mg-10" method="POST" role="form">
                <form id="myForm" onSubmit={this.onHandleSubmit} action="true">
                    <legend>THÔNG TIN CHUYỂN KHOẢNG</legend>
                    <div className="form-group">
                        <label htmlFor="true">Thông tin người nhận</label>



                        <input
                            type="number"
                            className="form-control"
                            //id="input"
                            placeholder="Số tài khoản"
                            name="txtSoTaiKhoan"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Số tiền chuyển</label>
                        <input
                            type="number"
                            className="form-control"
                            //id="true"
                            placeholder="Việt Nam đồng"
                            name="txtSoTien"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Nội dung Chuyển</label>
                        <input
                            type="text"
                            className="form-control"
                            // id="true"
                            placeholder="Nội dung Chuyển"
                            name="txtNoiDung"
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Ngân hàng</label>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name="txtnganhang"
                                    value="AKBank"
                                    //id="input"
                                    //defaultValue ="AKBank"
                                    //defaultChecked="checked" 
                                    checked={this.state.txtnganhang === "AKBank"}
                                    onChange={this.onHandleChange}
                                />
                                    AKBank
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name="txtnganhang"
                                    value="PGPBank"
                                    //id="input"
                                    //defaultValue = "PGPBank"
                                    checked={this.state.txtnganhang === "PGPBank"}
                                    onChange={this.onHandleChange}
                                />
                                PGPBank
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name="txtnganhang"
                                    value="RSABank"
                                    //id="input"
                                    checked={this.state.txtnganhang === "RSABank"}
                                    //defaultValue ="RSABank" 
                                    onChange={this.onHandleChange}
                                />
                                RSABank
                            </label>
                        </div>
                    </div>



                    <div className="form-group">
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    value=""
                                    name="check"
                                    onChange={this.onHandleChange}
                                    checked={this.state.check} />
                                Lưu người nhận
                            </label>
                        </div>

                        {/* <input
                            type="text"
                            className="form-control"
                            id="true"
                            placeholder="Nội dung Chuyển"
                            name="txtNoiDung"
                            onChange={this.onHandleChange}
                        /> */}
                        <label htmlFor="true" color="red">Lưu người nhận chỉ áp dụng cho ngân hàng AKBank</label>
                    </div>
                    <button type="submit" className="btn btn-primary" >
                        Submit
                    </button>
                </form>

            </div>
        );
    }
}

export default Transfer;