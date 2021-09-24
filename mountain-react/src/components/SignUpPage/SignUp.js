import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SignUpStyle/SignUp.css';
//api start
import { authURL, zipGroupURL, zipCodeURL } from '../../utils/config';
import axios from 'axios';
//api end

function SignUp(props) {
  // 設定zip_code狀態 start //
  const [zipGroup, setZipGroup] = useState(null);
  const [zipCode, setZipCode] = useState(null);
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
  });

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

  useEffect(() => {
    if (registerData && zipCode && zipGroup) {
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
                            value={registerData && registerData.name}
                            onChange={handleChange}
                          />
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
                            value={registerData && registerData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group sign-input col-7 mb-3">
                          {/* 選擇地址 start */}
                          <div className="form-group">
                            {/* 請選擇縣市 */}
                            <select
                              className="form-control"
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
                              className="form-control"
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
                            {/* 輸入路名 */}
                            <input
                              type="text"
                              className="form-control"
                              id="addr"
                              placeholder="請輸入路名"
                              name="addr"
                              value={registerData && registerData.addr}
                              onChange={handleChange}
                            />
                          </div>
                          {/* 選擇地址 end */}
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
                            value={registerData && registerData.email}
                            onChange={handleChange}
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
                            value={registerData && registerData.password}
                            onChange={handleChange}
                          />
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
