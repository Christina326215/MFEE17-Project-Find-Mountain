import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberOrder.scss'; //member map and route style

//====== below pages star ======//
import { memberSideHead } from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

//====== below icon star ======//
import { BsTrash } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import MemberOrderImg from '../../img/shoes-pic2.jpeg';
//====== above img import end ======//

function MemberOrder() {
  useEffect(() => {
    // 切換區域tab-switch
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
                <tr className="member-table-active">
                  <td scope="row" className="text-center">
                    <Link to="/member/order" className="member-left-href-color">
                      訂單管理
                    </Link>
                  </td>
                </tr>
                <tr>
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
            <h2 className="member-comment-title-main">我的訂單狀態</h2>
            <div className="wrapper">
              <div className="tab">
                <div
                  className="btn-group member-comment-switch-category"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu active"
                    click=""
                    to="#/"
                  >
                    待完成
                  </Link>
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu"
                    click=""
                    to="#/"
                  >
                    已完成
                  </Link>
                </div>
              </div>
              <div className="tab-content">
                <div id="content" className="content1">
                  {/* <!-- order progress table start--> */}
                  <table
                    className="
                    table table-bordered member-comment-table-all
                    text-center
                    p-md-4 p-lg-5
                  "
                  >
                    <tbody>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單編號：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          20210621001
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單日期：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          2021/06/21
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單金額：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          $5,360
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top align-middle"
                        >
                          訂單狀態：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          <div className="progress_bar_inline_block">
                            {/* <!--FIXME:???沒用到此className--> */}
                            {/* <!-- class change to current "step-2" --> */}
                            <div
                              className="step-1"
                              id="member_order_checkout-progress"
                              data-current-step="1"
                            >
                              {/* <!--FIXME:???沒用到此className--> */}
                              <div className="member_order_progress-bar1">
                                {/* <!-- "active" change to "valid" --> */}
                                <div className="member_order_step step-1 member_order_active">
                                  {/* <!--FIXME:???沒用到此step-1 className--> */}
                                  <span></span>
                                  {/* <!-- "opaque" change to "" --> */}
                                  <div className="member_order_fa member_order_fa-check member_order_opaque"></div>
                                  <div className="member_order_step-label">
                                    未處理
                                  </div>
                                </div>
                                {/* <!-- add class "active" --> */}
                                <div className="member_order_step member_order_step-2">
                                  <span></span>
                                  <div className="member_order_fa member_order_fa-check member_order_opaque"></div>
                                  <div className="member_order_step-label">
                                    處理中
                                  </div>
                                </div>
                                <div className="member_order_step member_order_step-3">
                                  <span></span>
                                  <div className="member_order_fa member_order_fa-check member_order_opaque"></div>
                                  <div className="member_order_step-label">
                                    已完成
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* <!-- <hr /> --> */}
                  <div className="mt-5">
                    <h2>商品明細</h2>
                    <table
                      className="
                      table table-borderless
                      mt-2
                      text-center
                      p-md-4 p-lg-5
                    "
                    >
                      <thead className="thead-tr-border">
                        <tr>
                          <th
                            scope="col col-md-2"
                            className="member-comment-text-weight-top align-middle"
                          >
                            照片
                          </th>
                          <th
                            scope="col col-md-1"
                            className="member-comment-text-weight-top align-middle member-comment-product-name"
                          >
                            名稱
                          </th>
                          <th
                            scope="col col-md-2"
                            className="member-comment-text-weight-top align-middle member-comment-product-size"
                          >
                            尺寸
                          </th>
                          <th
                            scope="col col-md-3"
                            className="member-comment-text-weight-top align-middle member-comment-product-perprice"
                          >
                            單價
                          </th>
                          <th
                            scope="col col-md-2"
                            className="member-comment-text-weight-top align-middle member-comment-product-count"
                          >
                            數量
                          </th>
                          <th
                            scope="col col-md-2"
                            className="member-comment-text-weight-top align-middle member-comment-product-subtotal"
                          >
                            小計
                          </th>
                          <th
                            scope="col col-md-1"
                            className="member-comment-text-weight-top align-middle member-comment-product-delete"
                          >
                            刪除
                          </th>
                        </tr>
                      </thead>
                      <tbody className="tbody-tr-border">
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="/#">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="/#">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="/#">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <div className="">
                      <h2>配送資訊</h2>
                      <table className="table table-borderless mt-2 p-md-4 p-lg-5">
                        <tbody>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              收件人姓名：
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              王小明
                            </td>
                          </tr>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              收件地址（取件超商）：
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              中央大學
                            </td>
                          </tr>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              收件人電話
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              0900123456
                            </td>
                          </tr>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              付款方式
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              信用卡繳費
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* <!-- order progress table end--> */}
                </div>
                <div id="content" className="member-comment-content2">
                  {/* <!-- order complete table start--> */}
                  <table
                    className="
                    table table-bordered member-comment-table-all
                    text-center
                    p-md-4 p-lg-5
                  "
                  >
                    <tbody>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單編號：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          20210621001
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單日期：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          2021/06/21
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單金額：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          $5,360
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單狀態：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          已完成
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- <hr /> --> */}
                  <div className="mt-5">
                    <h2>商品明細</h2>
                    <table
                      className="
                      table table-borderless
                      mt-2
                      text-center
                      p-md-4 p-lg-5
                    "
                    >
                      <thead className="thead-tr-border">
                        <tr>
                          <th
                            scope="col col-md-2"
                            className="member-comment-text-weight-top align-middle"
                          >
                            照片
                          </th>
                          <th
                            scope="col col-md-1"
                            className="member-comment-text-weight-top align-middle member-comment-product-name"
                          >
                            名稱
                          </th>
                          <th
                            scope="col col-md-2"
                            className="member-comment-text-weight-top align-middle member-comment-product-size"
                          >
                            尺寸
                          </th>
                          <th
                            scope="col col-md-3"
                            className="member-comment-text-weight-top align-middle member-comment-product-perprice"
                          >
                            單價
                          </th>
                          <th
                            scope="col col-md-2"
                            className="member-comment-text-weight-top align-middle member-comment-product-count"
                          >
                            數量
                          </th>
                          <th
                            scope="col col-md-2"
                            className="member-comment-text-weight-top align-middle member-comment-product-subtotal"
                          >
                            小計
                          </th>
                          <th
                            scope="col col-md-1"
                            className="member-comment-text-weight-top align-middle member-comment-product-delete"
                          >
                            刪除
                          </th>
                        </tr>
                      </thead>
                      <tbody className="tbody-tr-border">
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="member-comment-picture-img-wrapper align-middle"
                          >
                            <div className="member-comment-picture-img-box">
                              <img
                                src={MemberOrderImg}
                                alt=""
                                className="member-comment-picture-img"
                              />
                            </div>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            MERRELL Tetrex Crest Wrap 女水陸三棲鞋
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>S</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <span>1</span>
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            NT$ 5,000
                          </td>
                          <td
                            scope="row"
                            className="member-comment-text-weight-middle align-middle"
                          >
                            <Link to="">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <div className="">
                      <h2>配送資訊</h2>
                      <table className="table table-borderless mt-2 p-md-4 p-lg-5">
                        <tbody>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              收件人姓名：
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              王小明
                            </td>
                          </tr>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              收件地址（取件超商）：
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              中央大學
                            </td>
                          </tr>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              收件人電話
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              0900123456
                            </td>
                          </tr>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              付款方式
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              信用卡繳費
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* <!-- order complete table end--> */}
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

export default withRouter(MemberOrder);
