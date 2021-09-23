import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../../styles/SignUpStyle/SignUp.css';
//api start
import { authURL } from '../../utils/config';
import axios from 'axios';
import SignUpInfo from './components/SignUpInfo';
import SignUpAcct from './components/SignUpAcct';
//api end
//===icon start===
import { FaUser } from 'react-icons/fa';

function SignUp(props) {
  const [signup, setSignup] = useState([]);
  const [name, setName] = useState('sasa');
  const [birthday, setBirth] = useState('2020-01-01');
  const [phone, setPhone] = useState('0912345678');
  const [addr, setAddr] = useState('桃園市桃園區中正路1號');
  const [email, setEmail] = useState('sasa@gmail.com');
  const [password, setPassword] = useState('123456');
  const [repassword, setRepassword] = useState('123456');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`${authURL}/register`, {
        name,
        phone,
        birthday,
        addr,
        email,
        password,
        repassword,
      });
      console.log(response.data);
      setSignup(response.data);
    } catch (e) {
      console.log(e);
      //如何顯示錯誤訊息
    }
  };
  // 切換區域tab-switch
  let menu = document.querySelectorAll('#signup-menu');
  let content = document.querySelectorAll('#signup-content');
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function () {
      for (let k = 0; k < content.length; k++) {
        if (i === k) {
          content[k].style.display = 'block';
        } else {
          content[k].style.display = 'none';
        }
      }
      for (let j = 0; j < menu.length; j++) {
        menu[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }
  //api

  return (
    <>
      <main>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="signup-info-content-all">
              <div className="text-center">
                <h1 className="h2 signup-info-title">註冊會員</h1>
              </div>
              <div className="signup-tab">
                <div
                  className="btn-group signup-switch-category"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    type="button"
                    id="signup-menu"
                    className="btn btn-outline-primary signup-menu active"
                    click=""
                    to="#/"
                  >
                    會員資料
                  </Link>
                  <Link
                    type="button"
                    id="signup-menu"
                    className="btn btn-outline-primary signup-menu"
                    click=""
                    to="#/"
                  >
                    帳號密碼
                  </Link>
                </div>
              </div>
              <div className="tab-content">
                <form onSubmit={handleSubmit}>
                  <div id="signup-content">
                    <div className="signUpInfo d-flex pt-5">
                      <div className="form-row d-flex justify-content-center">
                        <div className="form-group sign-input col-7 mb-2">
                          <label htmlFor="signup-inputName">姓名</label>
                          <input
                            type="text"
                            className="form-control"
                            id="signup-inputName"
                            placeholder="請輸入您的姓名"
                            minLength="1"
                            name="name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>

                        <div className="form-group  sign-input col-7 mb-2 name">
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
                        <div className="form-group  sign-input col-7 mb-2">
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
                        <div className="form-group sign-input col-7 mb-3">
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
                    </div>
                  </div>
                  <div id="signup-content" className="signup-content2">
                    <div className="signUpInfo d-flex pt-5">
                      <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-7 mb-2 account">
                          <label htmlFor="inputEmail2">Email 帳號</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail2"
                            placeholder="請輸入您的email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group col-7 mb-4">
                          <div className="row">
                            <div className="col-7">
                              <input
                                type="text"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="請輸入驗證碼"
                              />
                            </div>
                            <div className="col-5">
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                              >
                                發送驗證碼
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-7 mb-2">
                          <label htmlFor="inputPassword4">密碼(至少六碼)</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="請輸入您的密碼"
                            name="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group col-7">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword5"
                            placeholder="請再次輸入您的密碼"
                            name="repassword"
                            value={repassword}
                            onChange={(e) => {
                              setRepassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="signup-info-button-container my-5 col-12">
                      <button
                        type="submit"
                        className="btn btn-next btn-primary"
                      >
                        註冊
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
