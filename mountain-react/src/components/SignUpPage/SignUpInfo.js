import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SignUpStyle/SignUpInfo.css';
//api start
import { authURL } from '../../utils/config';
import axios from 'axios';
//api end

function SignUpInfo(props) {
  const [name, setName] = useState(null);
  const [birth, setBirth] = useState(null);
  const [phone, setPhone] = useState(null);
  useEffect(() => {}, []);
  return (
    <>
      <main>
        <div className="container">
          <div className="signup-info-progress-adj">
            {/* <!-- progress-bar-step start --> */}
            {/* <!-- className change to current "step-2" --> */}
            <div
              className="signup-info-step-1"
              id="signup-info-checkout-progress"
              data-current-step="1"
            >
              <div className="signup-info-progress-bar1">
                {/* <!-- "active" change to "valid" --> */}
                <div className="signup-info-step  active">
                  <span> 1</span>
                  {/* <!-- "opaque" change to "" --> */}
                  <div className="fa fa-check signup-info-opaque"></div>
                  <div className="signup-info-step-label">填寫會員資料</div>
                </div>
                {/* <!-- add className "active" --> */}
                <div className="signup-info-step signup-info-step-2">
                  <span> 2</span>
                  <div className="fa fa-check signup-info-opaque"></div>
                  <div className="signup-info-step-label">設定帳號密碼</div>
                </div>
              </div>
            </div>
            {/* <!-- progress-bar-step end --> */}
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="signup-info-content-all">
              <div className="text-center">
                <h1 className="h2 signup-info-title">註冊會員</h1>
              </div>
              <div className="signUpInfo d-flex justify-content-center pt-5">
                {/* <!-- <div className=""> --> */}
                <form>
                  <div className="form-row d-flex justify-content-center">
                    <div className="form-group col-7 mb-4">
                      <label for="inputName">姓名</label>
                      <input
                        type=""
                        className="form-control"
                        id="inputName"
                        placeholder="請輸入您的姓名"
                        name="name"
                        value={name}
                        
                      />
                    </div>
                    {/* <div className="form-group col-7 mb-3">
                      <span>性別</span>
                      <br />
                      <input
                        type="radio"
                        name="gender"
                        className="mr-1"
                        id="inputBoy"
                      />
                      <label for="inputBoy">男</label>
                      <input
                        type="radio"
                        name="gender"
                        className="mx-1"
                        id="signup-info-inputGirl"
                      />
                      <label for="inputGirl">女</label>
                    </div> */}
                    <div className="form-group col-7 mb-4 name">
                      <label for="inputBirth">生日</label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputBirth"
                      />
                    </div>
                    <div className="form-group col-7 mb-4">
                      <label for="inputTel">聯絡電話</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputTel"
                        placeholder="請輸入您的手機號碼"
                      />
                    </div>
                    <div className="form-group col-7 mb-3">
                      <label for="inputAddr">聯絡地址</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddr"
                        placeholder="請輸入您的聯絡地址"
                      />
                    </div>
                    <div className="form-group col-7 mb-3">
                      <div className="">
                        <input
                          type="checkbox"
                          className="signup-info-form-check-input mr-1"
                          id="checkLabel"
                        />
                        <label
                          for="checkLabel"
                          className="signup-info-form-check-label"
                        >
                          是否作為會員訂單收件地址
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <!-- button --> */}
                  <div className="signup-info-button-container text-right">
                    <Link
                      to="#/"
                      className="signup-info-btn btn-next btn btn-primary"
                    >
                      下一步
                    </Link>
                  </div>
                </form>
                {/* <!-- </div> --> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUpInfo;
