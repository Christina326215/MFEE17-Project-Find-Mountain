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

  //  當member改變的時候，要去setTempMember

  const [tempMember, setTempMember] = useState(null);
  useEffect(() => {
    if (member !== null) {
      setTempMember({ ...member });
    }
  }, [member]);

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setTempMember({ ...tempMember, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    // 從靜態檔案抓資料
    async function getZipGroup() {
      try {
        const zipGroupRes = await axios.get(zipGroupURL);
        // console.log(zipCodeRes.data);
        // key  ：zip_code
        // value：縣市名
        // member.zip_code當作key，要去對應到code.json取得縣市與區名。
        setZipGroup(zipGroupRes.data);
        setCities(Object.keys(zipGroupRes.data));
        // console.log(Object.keys(zipGroupRes.data));
      } catch (e) {
        console.log(e);
      }
    }
    getZipGroup();
  }, []);
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
            <div className="member-personal-right-side my-4">
              <table className="table table-borderless m-5 p-md-4 p-lg-5">
                <tbody>
                  <tr className="col-xs-2">
                    <th className="member-personal-text-weight-bold">
                      <label for="inputName">姓名：</label>
                    </th>
                    <td scope="row" className="member-personal-text-weight">
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name="name"
                        placeholder="請輸入收件人姓名"
                        value={tempMember && tempMember.name}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">
                      <label for="inputName">電話：</label>
                    </th>
                    <td scope="row" className="member-personal-text-weight">
                      <input
                        type="text"
                        className="form-control mt-3"
                        id="inputPhone"
                        name="phone"
                        placeholder="請輸入聯絡電話"
                        value={tempMember && tempMember.phone}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">
                      <label for="inputName">生日：</label>
                    </th>
                    <td scope="row" className="member-personal-text-weight">
                      <input
                        type="date"
                        className="form-control"
                        id="inputBirth"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">
                      <label for="inputName">地址：</label>
                    </th>
                    <td scope="row" className="member-personal-text-weight">
                      {cities.map((city) => city)}
                      <select class="form-control">
                        <option value="">請選擇縣市</option>
                      </select>
                      <select class="form-control">
                        <option value="">請選擇行政區</option>
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="請輸入地址"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">
                      <label for="inputName">帳號：</label>
                    </th>
                    <td scope="row" className="member-personal-text-weight">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail2"
                        placeholder="請輸入您的email"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
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
