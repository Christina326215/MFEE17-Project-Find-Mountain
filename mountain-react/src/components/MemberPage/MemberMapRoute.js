import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberMapRoute.scss'; //member map and route style

//====== below icon star ======//
import { BsQuestionCircle, BsStar } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import Avatar from '../../img/signin.jpg';
import MemberLevel from '../../img/low.svg';
import Xiangshan from '../../img/xiangshan.jpeg';
//====== above img import end ======//

function MemberMapRoute() {
  useEffect(() => {
    let menu = document.querySelectorAll('#menu');
    let content = document.querySelectorAll('#content');
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
  }, []);
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
                <tr className="member-table-active">
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
            <h2 className="member-map-route-title-main">我的成就</h2>
            <div className="wrapper">
              <div className="tab">
                <div
                  className="btn-group member-map-route-switch-category"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu active"
                    click=""
                    to=""
                  >
                    地圖
                  </Link>
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu"
                    click=""
                    to=""
                  >
                    路線
                  </Link>
                </div>
              </div>
              <div className="tab-content">
                <div id="content" className="content1">
                  {/* <!-- map table start--> */}
                  <table className="table table-bordered member-right-table-all-map p-md-4 p-lg-5">
                    <tbody>
                      <tr>
                        <td
                          scope="row"
                          className="member-map-route-text-weight"
                        >
                          總累積里程(公里)：
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-map-route-text-weight-bold"
                        >
                          20 公里
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-map-route-text-weight"
                        >
                          總累積高度(公尺)：
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-map-route-text-weight-bold"
                        >
                          3,900 公尺
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-map-route-text-weight"
                        >
                          完成爬山積分：
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-map-route-text-weight-bold"
                        >
                          3 分{/* <!-- progress bar star --> */}
                          <div className="member-map-route-bar_list align-items-center">
                            <div className="member-map-route-progress-bg">
                              <span className="member-map-route-progress-bg-font"></span>
                              <div className="member-map-route-progress_achievement-bar"></div>
                            </div>
                          </div>
                          {/* <!-- progress bar end --> */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- map table end --> */}
                </div>
                <div id="content" className="member-map-route-content2">
                  {/* <!-- route table start --> */}
                  <table
                    className="
                    table table-borderless member-right-table-all-map-route
                    text-center
                    p-md-4 p-lg-5
                  "
                  >
                    <thead>
                      <th
                        scope="col-2"
                        className="member-map-route-text-weight align-middle"
                      >
                        <h5 className="mt-2">去過：</h5>
                      </th>
                      <th scope="col-3"></th>
                      <th scope="col-5"></th>
                      <th scope="col-2"></th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="member-map-route-picture-img-wrapper">
                          <div className="member-map-route-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-map-route-picture-img"
                            />
                          </div>
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          象山步道
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          未評分
                        </td>
                      </tr>
                      <tr>
                        <td className="member-map-route-picture-img-wrapper">
                          <div className="member-map-route-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-map-route-picture-img"
                            />
                          </div>
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          象山步道
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          未評分
                        </td>
                      </tr>
                      <tr>
                        <td className="member-map-route-picture-img-wrapper">
                          <div className="member-map-route-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-map-route-picture-img"
                            />
                          </div>
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          象山步道
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          未評分
                        </td>
                      </tr>
                      <tr>
                        <td className="member-map-route-picture-img-wrapper">
                          <div className="member-map-route-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-map-route-picture-img"
                            />
                          </div>
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          象山步道
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          未評分
                        </td>
                      </tr>
                      <tr>
                        <td className="member-map-route-picture-img-wrapper">
                          <div className="member-map-route-picture-img-box">
                            <img
                              src={Xiangshan}
                              alt=""
                              className="member-map-route-picture-img"
                            />
                          </div>
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          象山步道
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                          <BsStar size={20} />
                        </td>
                        <td className="member-map-route-text-weight align-middle">
                          未評分
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
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Third group"
                  >
                    <button type="button" className="btn btn-primary">|<</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button type="button" className="btn btn-primary"><</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <button type="button" className="btn btn-primary">1</button>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Third group"
                  >
                    <button type="button" className="btn btn-primary">></button>
                  </div>
                  <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-primary">>|</button>
                  </div>
                </div> */}
                  {/* <!-- 分頁 end  --> */}
                  {/* <!-- route table end --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberMapRoute);
