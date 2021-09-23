import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberMapRoute.scss'; //member map and route style

import { memberRouteURL, IMAGE_URL } from '../../utils/config';
import axios from 'axios';

//====== below pages star ======//
import { pages_btn } from '../MapPage/pages/PagesBtn'; //分頁按鈕
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
import MemberMapAddRoute from './pages/MemberMapAddRoute';
//====== below pages end ======//

//====== below icon star ======//
import { BsStarFill } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
// import { log } from 'fabric/fabric-impl';
//====== above img import end ======//

function MemberMapRoute() {
  //=== 彈跳視窗開關 star ===//
  const [show, setShow] = useState(false);
  //=== 彈跳視窗開關 end ===//
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  const starIcon = (e) => {
    $(e.currentTarget).toggleClass('active');
  };

  // $('.member-map-route-star').click(function () {
  //   $(this).toggleClass('active');
  // });

  useEffect(() => {
    async function getRouteData() {
      try {
        const RouteData = await axios.get(memberRouteURL);
        // console.log(RouteData.data.result); //for check
        setData(RouteData.data.result);
        setInfo(RouteData.data.totalInfo);
      } catch (e) {
        console.log(e);
      }
    }
    getRouteData();

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
    console.log('testhi123');
  }, [show]);

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
                <tr className="member-table-active">
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
                <tr>
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
            <h2 className="member-map-route-title-main">我的成就</h2>
            <div className="wrapper">
              <div className="tab">
                <div
                  className="btn-group member-map-route-switch-category"
                  role="group"
                  aria-label="Basic example"
                >
                  {/* <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu active"
                    click=""
                    to="#/"
                  >
                    地圖
                  </Link>
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu"
                    click=""
                    to="#/"
                  >
                    路線
                  </Link> */}
                  <button
                    id="menu"
                    className="btn btn-outline-primary menu active"
                  >
                    地圖
                  </button>
                  <button id="menu" className="btn btn-outline-primary menu">
                    路線
                  </button>
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
                          {info.totalDistance} 公里
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
                          {info.totalHeight} 公尺
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
                          {info.totalPoints} 分
                          {/* <!-- progress bar star --> */}
                          <div className="member-map-route-bar_list align-items-center">
                            <div className="member-map-route-progress-bg">
                              <span className="member-map-route-progress-bg-font"></span>
                              <div
                                style={{ width: `${info.totalPoints}%` }}
                                className="member-map-route-progress_achievement-bar"
                              ></div>
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
                      <tr>
                        <th
                          scope="col-2"
                          className="member-map-route-text-weight align-middle"
                        >
                          <h5 className="mt-2">去過：</h5>
                        </th>
                        <th scope="col-3"></th>
                        <th scope="col-5"></th>
                        <th scope="col-2">
                          {/* FIXME: 給舊會員選擇去過路線 */}
                          <MemberMapAddRoute show={show} setShow={setShow} />
                        </th>
                      </tr>
                    </thead>
                    {data.length === 0 ? (
                      <tbody>
                        <tr>
                          <td className="member-map-route-picture-img-wrapper"></td>
                          <td className="member-map-route-text-weight align-middle"></td>
                          <td className="member-map-route-star-group member-map-route-text-weight align-middle"></td>
                          <td className="member-map-route-text-weight align-middle"></td>
                        </tr>
                      </tbody>
                    ) : (
                      data.map((items, i) => (
                        <tbody key={i}>
                          <tr>
                            <td className="member-map-route-picture-img-wrapper">
                              <div className="member-map-route-picture-img-box">
                                <img
                                  src={`${IMAGE_URL}/img/article-img/${items.article_pic}`}
                                  alt=""
                                  className="member-map-route-picture-img"
                                />
                              </div>
                            </td>
                            <td className="member-map-route-text-weight align-middle">
                              {items.article_name}
                            </td>
                            {/* 分已評分＆未評分 FIXME: 未評分點星星後可點送出紐加評分 */}
                            {items.star !== undefined ? (
                              items.star === 5 ? (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                </td>
                              ) : items.star === 4 ? (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                </td>
                              ) : items.star === 3 ? (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                </td>
                              ) : items.star === 2 ? (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                </td>
                              ) : (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <i className="bi member-map-route-starNo active">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                  <i className="bi member-map-route-starNo">
                                    <BsStarFill></BsStarFill>
                                  </i>
                                </td>
                              )
                            ) : (
                              <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                <i
                                  className="bi member-map-route-star"
                                  onClick={starIcon}
                                >
                                  <BsStarFill></BsStarFill>
                                </i>
                                <i
                                  className="bi member-map-route-star"
                                  onClick={starIcon}
                                >
                                  <BsStarFill></BsStarFill>
                                </i>
                                <i
                                  className="bi member-map-route-star"
                                  onClick={starIcon}
                                >
                                  <BsStarFill></BsStarFill>
                                </i>
                                <i
                                  className="bi member-map-route-star"
                                  onClick={starIcon}
                                >
                                  <BsStarFill></BsStarFill>
                                </i>
                                <i
                                  className="bi member-map-route-star"
                                  onClick={starIcon}
                                >
                                  <BsStarFill></BsStarFill>
                                </i>
                              </td>
                            )}
                            {items.star !== undefined ? (
                              <td className="member-map-route-text-weight align-middle">
                                給評{items.star}分
                              </td>
                            ) : (
                              <td className="member-map-route-text-weight align-middle">
                                未評分
                              </td>
                            )}
                            {/* <td className="member-map-route-text-weight align-middle">
                            未評分
                          </td> */}
                          </tr>
                        </tbody>
                      ))
                    )}
                  </table>
                  {/* <!-- 分頁 start  --> */}
                  {pages_btn}
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
