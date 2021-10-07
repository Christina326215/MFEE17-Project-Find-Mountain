import React, { useState, useEffect } from 'react';

import { Link, withRouter } from 'react-router-dom';

import '../../styles/SignUpStyle/SignUp.css';
//api start
import { authURL, zipGroupURL, zipCodeURL } from '../../utils/config';
import axios from 'axios';
//api end
// import { BsCheck } from 'react-icons/bs';

function SignUp(props) {
  // 設定zip_code狀態 start //
  const [zipGroup, setZipGroup] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [email, setEmail] = useState(null);
  const [cities, setCities] = useState([]); // 各縣市陣列
  const [districts, setDistricts] = useState([]); //各行政區陣列
  // 設定zip_code狀態 end //

  const [registerData, setRegisterData] = useState({
    name: '',
    birthday: '',
    phone: '',
    zip_code: null,
    addr: '',
    email: '',
    password: '',
    repassword: '',
    valid: 0,
    verification: '',
  });
  // 存入錯誤訊息用 start //
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    birthday: '',
    phone: '',
    zip_code: null,
    addr: '',
    email: '',
    password: '',
    repassword: '',
    verification: '',
  });
  // 存入錯誤訊息用 end //

  function handleChange(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    async function getZipGroup() {
      try {
        const zipGroupRes = await axios.get(zipGroupURL);
        let data = zipGroupRes.data;
        setZipGroup(data);
        setCities(Object.keys(data));
      } catch (e) {
        console.log(e);
      }
    }
    getZipGroup();

    async function getZipCode() {
      try {
        const zipCodeRes = await axios.get(zipCodeURL);
        let data2 = zipCodeRes.data;
        setZipCode(data2);
      } catch (e) {
        console.log(e);
      }
    }
    getZipCode();
  }, []);

  // === 當表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息的預設呈現的方式(popup)
    e.preventDefault();

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    };
    // 3. 設定回原狀態物件
    setFieldErrors(updatedFieldErrors);
  };

  // === 整個表單有變動時(ex.其中一個欄位有輸入時)
  // 認定使用者正在改正某個有錯誤的欄位
  // 清除某個欄位錯誤訊
  const handleFormChange = (e) => {
    console.log('目前更新欄位 ', e.target.name);
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    };

    // 3. 設定回原狀態物件
    setFieldErrors(updatedFieldErrors);
  };

  //===Zip 地址
  useEffect(() => {
    if (registerData && zipCode && zipGroup && cities.length > 0) {
      // 表示上述資料都已經有了！
      if (registerData.zip_code) {
        // 表示這個使用者的 zip code 已經設定過了
        // 城市的選單已經透過 value 的綁定處理好
        // 這時候要處理的是 districts
        setDistricts(zipGroup[zipCode[registerData.zip_code].city]);
      } else {
        // tempMember 沒有 zip_code
        // 想幫 tempMember 設定一個預設值
        // 第 0 個城市的第 0 個行政區
        // cities : ["台北市", "基隆市"]
        // cities[0] 台北市
        // zipGroup["台北市"][0] => {}
        setRegisterData({
          ...registerData,
          zip_code: zipGroup[cities[0]][0].zip_code,
        });
      }
    }
  }, [registerData, zipCode, zipGroup, cities]);

  function changeCity(e) {
    setDistricts(zipGroup[e.target.value]);

    // 預選好這組行政區中的第一個
    setRegisterData({
      ...registerData,
      zip_code: zipGroup[e.target.value][0].zip_code,
    });
  }

  function changeDistrict(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  // 準備 INSERT INTO 資料庫 start
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append('name', registerData.name);
      formData.append('birthday', registerData.birthday);
      formData.append('phone', registerData.phone);
      formData.append('zip_code', registerData.zip_code);
      formData.append('addr', registerData.addr);
      formData.append('verification', registerData.verification);
      formData.append('email', registerData.email);
      formData.append('password', registerData.password);
      formData.append('repassword', registerData.repassword);
      let response = await axios.post(`${authURL}/register`, formData);
      console.log(response);
    } catch (e) {
      console.error(e.response);
    }
  };
  // 準備 INSERT INTO 資料庫 end

  // 切換區域tab-switch
  let step1 = document.querySelector('#signup-menu1');
  let step2 = document.querySelector('#signup-menu2');
  let contentInfo = document.querySelector('#signup-contentInfo');
  let contentRegister = document.querySelector('#signup-contentRegister');
  let nextContent = document.querySelector('#clickNext');
  let prevContent = document.querySelector('#clickPrev');
  //=== 按了下一步
  function next() {
    contentInfo.style.display = 'none';
    contentRegister.style.display = 'block';
    step1.classList.remove('signup-active');
    step2.classList.add('signup-active');
  }
  //=== 按了上一步
  function prev() {
    contentInfo.style.display = 'block';
    contentRegister.style.display = 'none';
    step2.classList.remove('signup-active');
    step1.classList.add('signup-active');
  }
  if (nextContent) {
    nextContent.addEventListener('click', next, false);
  }
  if (prevContent) {
    prevContent.addEventListener('click', prev, false);
  }
  //=== 發送驗證碼
  const SendEmail = async (e) => {
    if (registerData.email) {
      console.log('registerData.email', registerData.email);
      setEmail(true);
    }
    try {
      let result = await axios.post(`${authURL}/ver`);
      console.log('result', result);
    } catch (e) {
      console.log(e);
      if (!email) {
        setEmail(false);
      }
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="signup-info-content-all">
              <div className="text-center">
                <h1 className="h2 signup-info-title">註冊會員</h1>
              </div>
              <div
                className="signup-step-1"
                id="signup-checkout-progress"
                data-current-step="1"
              >
                <div className="signup-progress-bar1">
                  {/* <!-- "active" change to "valid" --> */}
                  <div
                    className="signup-step signup-step-1 signup-active"
                    id="signup-menu1"
                  >
                    <span className="signup-step-num"> 1</span>
                    {/* <!-- "opaque" change to "" --> */}
                    {/* <BsCheck className="signup-fa signup-fa-check signup-opaque" /> */}
                    <div className="signup-step-label">會員資料</div>
                  </div>
                  {/* <!-- add className "active" --> */}
                  <div className="signup-step signup-step-2" id="signup-menu2">
                    <span className="signup-step-num"> 2</span>
                    {/* <BsCheck className="signup-fa signup-fa-check signup-opaque" /> */}
                    <div className="signup-step-label">帳號密碼</div>
                  </div>
                </div>
              </div>
              {/* <div className="signup-tab">
                <div
                  className="btn-group signup-switch-category"
                  role="group"
                  aria-label="Basic example"
                >
                  <div
                    id="signup-menu1"
                    className="signup-label btn-outline-primary active col-6"
                  >
                    會員資料
                  </div>
                  <div
                    id="signup-menu2"
                    className="btn btn-outline-primary col-6"
                  >
                    帳號密碼
                  </div>
                </div>
              </div> */}
              <div className="tab-content">
                <form
                  onSubmit={handleSubmit}
                  onInvalid={handleFormInvalid}
                  onChange={handleFormChange}
                  class="needs-validation"
                  novalidate
                >
                  <div id="signup-contentInfo">
                    <div className="signUpInfo d-flex pt-5">
                      <div className="form-row d-flex justify-content-center">
                        <div className="form-group sign-input col-7 mb-2">
                          <label htmlFor="signup-inputName">姓名</label>
                          <input
                            className="form-control"
                            id="signup-inputName"
                            placeholder="請輸入您的姓名"
                            name="name"
                            value={registerData && registerData.name}
                            onChange={handleChange}
                            required
                          />
                          {fieldErrors.name !== '' && (
                            <small className="login-error">
                              {fieldErrors.name}
                            </small>
                          )}
                        </div>

                        <div className="form-group  sign-input col-7 mb-2 name">
                          <label htmlFor="inputBirth">生日</label>
                          <input
                            type="date"
                            className="form-control"
                            id="inputBirth"
                            name="birthday"
                            value={registerData && registerData.birthday}
                            onChange={handleChange}
                            required
                          />
                          {fieldErrors.birthday !== '' && (
                            <small className="login-error">
                              {fieldErrors.birthday}
                            </small>
                          )}
                        </div>
                        <div className="form-group  sign-input col-7 mb-2">
                          <label htmlFor="inputTel">聯絡電話</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputTel"
                            placeholder="請輸入您的手機號碼"
                            pattern="^09[0-9]{8}$"
                            name="phone"
                            value={registerData && registerData.phone}
                            onChange={handleChange}
                            required
                          />
                          {fieldErrors.phone !== '' && (
                            <small className="login-error">
                              {fieldErrors.phone}
                            </small>
                          )}
                        </div>
                        <div className="form-group sign-input col-7 mb-2">
                          {/* 選擇地址 start */}
                          <div className="form-group">
                            {/* 請選擇縣市 */}
                            <label htmlFor="inputTel">地址</label>
                            <div className="d-flex">
                              <select
                                className="form-control col-6 mb-2"
                                name="city"
                                id="city"
                                value={
                                  zipCode &&
                                  registerData.zip_code &&
                                  zipCode[registerData.zip_code].city
                                }
                                onChange={changeCity}
                              >
                                {cities &&
                                  cities.map((city, i) => (
                                    <option key={i} value={city}>
                                      {city}
                                    </option>
                                  ))}
                              </select>
                              {/* 請選擇行政區 */}
                              <select
                                className="form-control col-6 mb-2"
                                value={registerData && registerData.zip_code}
                                id="zip_code"
                                onChange={changeDistrict}
                                name="zip_code"
                              >
                                {cities &&
                                  districts &&
                                  districts.map((item, i) => (
                                    <option key={i} value={item.zip_code}>
                                      {item.district}
                                    </option>
                                  ))}
                              </select>
                              {fieldErrors.zip_code !== '' && (
                                <small className="login-error">
                                  {fieldErrors.zip_code}
                                </small>
                              )}
                            </div>
                            {/* 輸入路名 */}
                            <input
                              type="text"
                              className="form-control"
                              id="addr"
                              placeholder="請輸入路名"
                              name="addr"
                              value={registerData && registerData.addr}
                              onChange={handleChange}
                              minLength="1"
                            />
                            {fieldErrors.addr !== '' && (
                              <small className="login-error">
                                {fieldErrors.addr}
                              </small>
                            )}
                          </div>
                          {/* 選擇地址 end */}
                        </div>
                      </div>
                      <div className="signup-info-button-container my-5 col-12">
                        <button
                          type="button"
                          className="btn btn-next btn-primary"
                          id="clickNext"
                        >
                          下一步
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="signup-contentRegister" className="signup-content2">
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
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                            value={registerData && registerData.email}
                            onChange={handleChange}
                            required
                          />
                          {fieldErrors.email !== '' && (
                            <small className="login-error">
                              {fieldErrors.email}
                            </small>
                          )}
                        </div>
                        <div className="form-group col-7 mb-4">
                          <div className="row">
                            <div className="col-6">
                              <input
                                type="text"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="請輸入驗證碼"
                                name="verification"
                                value={
                                  registerData && registerData.verification
                                }
                                onChange={handleChange}
                                required
                              />
                              {fieldErrors.verification !== '' && (
                                <small className="login-error">
                                  {fieldErrors.verification}
                                </small>
                              )}
                            </div>
                            <div className="col-6">
                              <button
                                type="button"
                                className="btn btn-outline-primary float-right"
                                onClick={SendEmail}
                                onInvalid={handleFormInvalid}
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
                            value={registerData && registerData.password}
                            onChange={handleChange}
                            minLength="6"
                            required
                          />
                          {fieldErrors.password !== '' && (
                            <small className="login-error">
                              {fieldErrors.password}
                            </small>
                          )}
                        </div>
                        <div className="form-group col-7">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword5"
                            placeholder="請再次輸入您的密碼"
                            name="repassword"
                            value={registerData && registerData.repassword}
                            onChange={handleChange}
                          />
                          {fieldErrors.repassword !== '' && (
                            <small className="login-error">
                              {fieldErrors.repassword}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="signup-info-button-container d-flex col-12">
                        <div className="my-5 col-6">
                          <button
                            type="button"
                            className="btn btn-next btn-primary"
                            id="clickPrev"
                          >
                            上一步
                          </button>
                        </div>
                        <div className="my-5 col-6">
                          <button
                            type="submit"
                            className="btn btn-next btn-primary"
                            // onClick={() => {
                            //   props.history.push('/login');
                            // }}
                            disabled={!registerData}
                          >
                            註冊
                          </button>
                        </div>
                      </div>
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

export default withRouter(SignUp);
