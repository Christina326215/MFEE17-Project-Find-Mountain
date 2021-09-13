import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/MemberPage/MemberPersonal.scss'; //member product and article style

//====== below icon star ======//
import { BsQuestionCircle } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import Avatar from '../../img/signin.jpg';
import MemberLevel from '../../img/low.svg';
//====== above img import end ======//

function MemberPersonal() {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <!-- manage-left-side start --> */}
          <div className="col-12 col-md-3 my-3">
            <table
              className="
              table table-hover table-bordered member-table-all-left
              p-md-4 p-lg-5
            "
            >
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    <div className="member-headshot-img-box">
                      <img src={Avatar} alt="" className="member-cover-fit" />
                    </div>
                    <h3 className="m-2 member-member-name">王小明</h3>
                    <img src={MemberLevel} alt="" />
                    <div className="position-relative member-level">
                      <span className="member-grade-icon">肉腳</span>
                      <Link
                        to="javascript:void(0)"
                        id="seeMember"
                        className="see-member see-member-style"
                      >
                        <BsQuestionCircle size={20} />
                      </Link>
                      {/* <!-- =========about-membership-bubble start========= --> */}
                      <div className="member-about-membership-bubble p-3 position-absolute">
                        <span className="member-about-membership-bubble-arrow"></span>
                        <span className="member-membership">
                          可至路線地圖之我的成就區，查看累積會員等級積分，享有商品優惠折扣哦！{' '}
                        </span>
                        <br />
                        <span className="member-membership member-membership-low">
                          肉腳：完成爬山積分3分以上{' '}
                        </span>
                        <br />
                        <span className="member-membership member-membership-medium">
                          山友 ：完成爬山積分20分以上{' '}
                        </span>
                        <br />
                        <span className="member-membership member-membership-high">
                          山神 ：完成爬山積分50分以上
                        </span>
                      </div>
                      {/* <!-- =========about-membership-bubble end========= --> */}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member-map-route"
                      className="member-left-href-color"
                    >
                      路線地圖
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member-product-article"
                      className="member-left-href-color"
                    >
                      收藏管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link
                      to="/member-comment"
                      className="member-left-href-color"
                    >
                      評論管理
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="/member-order" className="member-left-href-color">
                      訂單管理
                    </Link>
                  </td>
                </tr>
                <tr className="member-table-active">
                  <td scope="row" className="text-center">
                    <Link
                      to="/member-personal"
                      className="member-left-href-color"
                    >
                      帳號設定
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="text-center">
                    <Link to="/#" className="member-left-href-color">
                      登出
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- manage-left-side end --> */}
          {/* <!-- manage-right-side start--> */}
          <div className="col-12 col-md-9 mt-5">
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
