import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberPersonal.scss'; //member product and article style
import { useAuth } from '../../context/auth';
import { zipCodeURL, zipGroupURL } from '../../utils/config';
import axios from 'axios';

//====== below pages star ======//
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

function MemberEdit() {
  const { member } = useAuth();
  const [zipGroup, setZipGroup] = useState(null);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [districts, setDistricts] = useState([]);
  // const [zipCode, setZipCode] = useState(null);

  //  當member改變的時候，要去setTempMember
  const [tempMember, setTempMember] = useState(null);
  useEffect(() => {
    if (member !== null) {
      setTempMember({ ...member });
    }
  }, [member]);

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    // console.log('onChange', e.target.name, e.target.value);
    setTempMember({ ...tempMember, [e.target.name]: e.target.value });
    // console.log('onChange After');
  }

  useEffect(() => {
    // console.log('useEffect for tempMember');
  }, [tempMember]);

  // 還沒input之前，出現兩次useEffect for tempMember：
  // useEffect for tempMember
  // useEffect for tempMember

  // 輸入input之後(使input欄位有變動)：
  // onChange name 王大明1
  // onChange After
  // useEffect for tempMember

  useEffect(() => {
    // 從靜態檔案抓資料
    async function getZipGroup() {
      try {
        const zipGroupRes = await axios.get(zipGroupURL);
        let data = zipGroupRes.data;
        // console.log(data);
        // key  ：zip_code
        // value：縣市名
        // member.zip_code當作key，要去對應到code.json取得縣市與區名。
        setZipGroup(data);
        setCities(Object.keys(data));
        setDistricts(Object.values(data));
        // console.log(Object.values(data));
      } catch (e) {
        console.log(e);
      }
    }
    getZipGroup();
  }, []);

  function changeCity(e) {
    setCity(e.target.value);
    setDistricts(zipGroup[e.target.value]);
  }

  function changeDistrict(e) {
    // setZipCode(e.target.value);
    setTempMember({ ...tempMember, [e.target.name]: e.target.value });
  }

  // useEffect(() => {
  // }, [cities]);

  return (
    <>
      <div className="container">
        <div className="row zindex">
          {/* <!-- manage-left-side start --> */}
          <div className="col-12 col-lg-3 my-3 zindex-height">
            <table
              className="
              table table-hover table-bordered member-table-all-left
              p-md-4 p-lg-5
            "
            >
              <thead>
                <MemberSideHead />
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/map-route"
                      className="member-left-href-color"
                    >
                      路線地圖
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/product-article"
                      className="member-left-href-color"
                    >
                      收藏管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/comment"
                      className="member-left-href-color"
                    >
                      評論管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="/member/order" className="member-left-href-color">
                      訂單管理
                    </Link>
                  </td>
                </tr>
                <tr className="member-table-active">
                  <td scope="row" className="text-center">
                    <Link
                      to="/member/personal"
                      className="member-left-href-color"
                    >
                      帳號設定
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="" className="member-left-href-color">
                      登出
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- manage-left-side end --> */}
          {/* <!-- manage-right-side start--> */}
          <div className="col-12 col-lg-9 mt-5 zindex-low">
            <h2 className="member-personal-title-main">我的會員資料</h2>
            <div className="member-personal-right-side mt-5">
              <div className="m-4">
                <div className="member-personal-text-weight-bold">
                  <label for="inputName" className="mt-2">
                    姓名：
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="name"
                    placeholder="請輸入收件人姓名"
                    value={tempMember && tempMember.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputPhone" className="mt-3">
                    電話：
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    name="phone"
                    placeholder="請輸入聯絡電話"
                    value={tempMember && tempMember.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputBirth" className="mt-3">
                    生日：
                  </label>
                  <input type="date" className="form-control" id="inputBirth" />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputAddress" className="mt-3">
                    地址：
                  </label>
                  {/* 請選擇縣市 */}
                  <select
                    className="form-control"
                    name="city"
                    value={city}
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
                    value={tempMember && tempMember.zip_code}
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
                  {/* 請選擇地址 */}
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="請輸入地址"
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputAccount" className="mt-3">
                    帳號：
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputAccount"
                    placeholder="請輸入您的email"
                  />
                </div>

                <div className="member-personal-text-weight-bold">
                  <label for="inputPassword" className="mt-3">
                    密碼：
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
            </div>
            <div className="border-bottom-left-radius my-5 mx-3 text-right">
              <Link type="button" className="btn btn-primary" to="">
                確定
              </Link>
            </div>
          </div>

          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberEdit);
