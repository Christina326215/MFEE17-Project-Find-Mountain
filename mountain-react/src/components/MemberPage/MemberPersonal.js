import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberPersonal.scss'; //member product and article style

//====== below pages star ======//
import { memberSideHead } from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

function MemberPersonal() {
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
              <thead>{memberSideHead}</thead>
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
                  <tr>
                    <th className="member-personal-text-weight-bold">姓名：</th>
                    <td scope="row" className="member-personal-text-weight">
                      王小明
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">性別：</th>
                    <td scope="row" className="member-personal-text-weight">
                      男
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">電話：</th>
                    <td scope="row" className="member-personal-text-weight">
                      0900123456
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">生日：</th>
                    <td scope="row" className="member-personal-text-weight">
                      1990/01/01
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">帳號：</th>
                    <td scope="row" className="member-personal-text-weight">
                      abc123@test.com
                    </td>
                  </tr>
                  <tr>
                    <th className="member-personal-text-weight-bold">密碼：</th>
                    <td
                      scope="row"
                      className="member-personal-text-weight"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-bottom-left-radius my-5 mx-3 text-right">
              <Link type="button" className="btn btn-primary" to="">
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
