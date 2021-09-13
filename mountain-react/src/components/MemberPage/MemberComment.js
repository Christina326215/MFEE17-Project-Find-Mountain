import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/MemberPage/MemberComment.scss'; //member comment style

//====== below icon star ======//
import { BsQuestionCircle, BsExclamationTriangleFill } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import Avatar from '../../img/signin.jpg';
import MemberLevel from '../../img/low.svg';
import Xiangshan from '../../img/xiangshan.jpeg';
//====== above img import end ======//

function MemberComment() {
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
                <tr className="member-table-active">
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
                <tr>
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
            <h2 className="member-comment-title-main">我的評論管理</h2>
            {/* <!-- <div><h6>去過</h6></div> --> */}
            <table className="table member-comment-table-all text-center p-md-4 p-lg-5 mt-5">
              <thead>
                <tr>
                  <th
                    scope="col-4 col-md-2"
                    className="member-comment-text-weight-bold align-moddle"
                  >
                    分享照片
                  </th>
                  <th
                    scope="col-4 col-md-3"
                    className="member-comment-text-weight-bold align-moddle"
                  >
                    評論文章
                  </th>
                  <th
                    scope="col-4 col-md-6"
                    className="member-comment-text-weight-bold align-moddle"
                  >
                    評論內容
                  </th>
                  <th
                    scope="col-4 col-md-1"
                    className="member-comment-text-weight-bold align-moddle"
                  >
                    檢舉
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    scope="row"
                    className="member-comment-picture-img-wrapper"
                  >
                    <div className="member-comment-picture-img-box">
                      <img
                        src={Xiangshan}
                        alt=""
                        className="member-comment-picture-img"
                      />
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    象山步道
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    評論內容.......
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    <Link to="/#">
                      <BsExclamationTriangleFill
                        className="member-comment-warning-icon"
                        size={20}
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="member-comment-picture-img-wrapper"
                  >
                    <div className="member-comment-picture-img-box">
                      <img
                        src={Xiangshan}
                        alt=""
                        className="member-comment-picture-img"
                      />
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    象山步道
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    評論內容.......
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    <Link to="/#">
                      <BsExclamationTriangleFill
                        className="member-comment-warning-icon"
                        size={20}
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="member-comment-picture-img-wrapper"
                  >
                    <div className="member-comment-picture-img-box">
                      <img
                        src={Xiangshan}
                        alt=""
                        className="member-comment-picture-img"
                      />
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    象山步道
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    評論內容.......
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    <Link to="/#">
                      <BsExclamationTriangleFill
                        className="member-comment-warning-icon"
                        size={20}
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="member-comment-picture-img-wrapper"
                  >
                    <div className="member-comment-picture-img-box">
                      <img
                        src={Xiangshan}
                        alt=""
                        className="member-comment-picture-img"
                      />
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    象山步道
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    評論內容.......
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    <Link to="/#">
                      <BsExclamationTriangleFill
                        className="member-comment-warning-icon"
                        size={20}
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td
                    scope="row"
                    className="member-comment-picture-img-wrapper"
                  >
                    <div className="member-comment-picture-img-box">
                      <img
                        src={Xiangshan}
                        alt=""
                        className="member-comment-picture-img"
                      />
                    </div>
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    象山步道
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    評論內容.......
                  </td>
                  <td
                    scope="row"
                    className="member-comment-text-weight align-middle"
                  >
                    <Link to="/#">
                      <BsExclamationTriangleFill
                        className="member-comment-warning-icon"
                        size={20}
                      />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <!-- 分頁 start  --> */}
            {/* <div
            className="btn-toolbar justify-content-center mb-5"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div className="btn-group mr-2" role="group" aria-label="Third group">
              <button type="button" className="btn btn-primary">|<</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-primary"><</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-primary">1</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Third group">
              <button type="button" className="btn btn-primary">></button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-primary">>|</button>
            </div>
          </div> */}
            {/* <!-- 分頁 end  --> */}
          </div>
          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberComment);
