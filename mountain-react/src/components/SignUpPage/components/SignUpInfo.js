import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../../../styles/SignUpStyle/SignUpInfo.css';
//api start
import { authURL } from '../../../utils/config';
import axios from 'axios';
//api end

function SignUpInfo(props) {
  const [signup, setSignup] = useState([]);
  const [name, setName] = useState('sasa');
  const [birthday, setBirth] = useState('2020-01-01');
  const [phone, setPhone] = useState('0912345678');
  const [addr, setAddr] = useState('桃園市桃園區中正路1號');

  //api
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`${authURL}/register`, {
        name,
        phone,
        birthday,
        addr,
      });
      console.log(response.data);
      setSignup(response.data);
    } catch (e) {
      console.log(e);
      //如何顯示錯誤訊息
    }
  };
  return (
    <>
      <div
        className="signUpInfo d-flex justify-content-center pt-5"
        id="registerContent"
      >
        {/* <!-- <div className=""> --> */}
        <form onSubmit={handleSubmit}>
          <div className="form-row d-flex justify-content-center">
            <div className="form-group col-7 mb-4">
              <label htmlFor="inputName">姓名</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="請輸入您的姓名"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="form-group col-7 mb-4 name">
              <label htmlFor="inputBirth">生日</label>
              <input
                type="date"
                className="form-control"
                id="inputBirth"
                name="birthday"
                value={birthday}
                onChange={(e) => {
                  setBirth(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-7 mb-4">
              <label htmlFor="inputTel">聯絡電話</label>
              <input
                type="text"
                className="form-control"
                id="inputTel"
                placeholder="請輸入您的手機號碼"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-7 mb-3">
              <label htmlFor="inputAddr">聯絡地址</label>
              <input
                type="text"
                className="form-control"
                id="inputAddr"
                placeholder="請輸入您的聯絡地址"
                name="addr"
                value={addr}
                onChange={(e) => {
                  setAddr(e.target.value);
                }}
              />
            </div>
          </div>
          {/* <!-- button --> */}
          <div className="signup-info-button-container text-right">
            <button className="signup-info-btn btn-next btn btn-primary">
              下一步
            </button>
          </div>
        </form>
        {/* <!-- </div> --> */}
      </div>
    </>
  );
}

export default SignUpInfo;
