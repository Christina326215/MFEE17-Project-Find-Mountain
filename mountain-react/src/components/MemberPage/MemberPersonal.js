import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberPersonal.scss'; //member product and article style
import { useAuth } from '../../context/auth';
import { zipCodeURL } from '../../utils/config';
import axios from 'axios';

//====== below pages star ======//
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

function MemberPersonal() {
  // 把 member 從 useContext中拿出來
  const { member } = useAuth();
  const [zipCode, setZipCode] = useState(null);

  useEffect(() => {
    // 從靜態檔案抓資料
    async function getZipCode() {
      try {
        const zipCodeRes = await axios.get(zipCodeURL);
        // console.log(zipCodeRes.data);
        // key  ：zip_code
        // value：縣市、行政區
        // member.zip_code當作key，要去對應到code.json取得縣市與行政區。
        setZipCode(zipCodeRes.data);
      } catch (e) {
        console.log(e);
      }
    }
    getZipCode();
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
                      會員資料
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
                  <tr>
                    <th className="member-personal-text-weight-bold">姓名：</th>
                    <td scope="row" className="member-personal-text-weight">
                      {member && member.name}
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">電話：</th>
                    <td scope="row" className="member-personal-text-weight">
                      {member && member.phone}
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">生日：</th>
                    <td scope="row" className="member-personal-text-weight">
                      {member && member.birthday}
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">地址：</th>
                    <td scope="row" className="member-personal-text-weight">
                      {member && member.zip_code}
                      {zipCode &&
                        member &&
                        member.zip_code &&
                        zipCode[member.zip_code].city}
                      {zipCode &&
                        member &&
                        member.zip_code &&
                        zipCode[member.zip_code].district}
                      {member && member.addr}
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">帳號：</th>
                    <td scope="row" className="member-personal-text-weight">
                      {member && member.account}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-bottom-left-radius my-5 mx-3 text-right">
              <Link type="button" className="btn btn-primary" to="/member/edit">
                編輯
              </Link>
            </div>
          </div>

          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberPersonal);
