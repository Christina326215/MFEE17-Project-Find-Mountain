import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/MemberPage/MemberMapRoute.scss'; //member map and route style
import Swal from 'sweetalert2';

//====== below catch member info start ======//
import { useAuth } from '../../context/auth';
//====== above catch member info end ======//

//====== below api connect tool start ======//
import { memberRouteURL, IMAGE_URL, authURL } from '../../utils/config';
import axios from 'axios';
//====== above api connect tool end ======//

//====== below 星星評分 start ======//
import ReactStars from 'react-rating-stars-component';
//====== above 星星評分 end ======//

//====== below pages start ======//
import { pages_btn } from '../MapPage/pages/PagesBtn'; //分頁按鈕
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
import MemberMapAddRoute from './pages/MemberMapAddRoute';
//====== above pages end ======//

//====== below icon start ======//
import { BsStarFill, BsXSquareFill } from 'react-icons/bs';
//====== above icon end ======//

//====== below img import start ======//
// import { log } from 'fabric/fabric-impl';
//====== above img import end ======//

function MemberMapRoute() {
  const { member, setAuth, auth, mapRouteShow, setMapRouteShow } = useAuth(); //把 member 從 useContext中拿出來
  //=== 彈跳視窗開關 start ===//
  const [show, setShow] = useState(false);
  //=== 彈跳視窗開關 end ===//
  const [star, setStar] = useState();
  const [updateStar, setUpdateStar] = useState();
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  //====== 接星星評分的資料 start ======//
  useEffect(() => {
    if (star === undefined) {
      return;
    }
    if (member === null) {
      return;
    }
    async function getStarData() {
      try {
        // console.log('star:', star); //for check
        // console.log('star memberID:', member); //for check
        // const starData =
        await axios.post(memberRouteURL + '/catchStar', {
          member,
          star,
        });
        //console.log('starData:', starData); //for check
      } catch (e) {
        console.log(e);
      }
    }
    getStarData();
  }, [star, member]);
  //====== 接星星評分的資料 end ======//

  //====== renew星星評分的資料 start ======//
  useEffect(() => {
    if (updateStar === undefined) {
      return;
    }
    if (member === null) {
      return;
    }
    async function getStarData() {
      try {
        // console.log('updateStar:', updateStar); //for check
        // console.log('updateStar memberID:', member); //for check
        // const updateStarData =
        await axios.post(memberRouteURL + '/updateStar', {
          member,
          updateStar,
        });
        //console.log('updateStarData:', updateStarData); //for check
      } catch (e) {
        console.log(e);
      }
    }
    getStarData();
  }, [updateStar, member]);
  //====== renew星星評分的資料 end ======//

  //====== 移除去過路線 start ======//
  const deletePast = async (e) => {
    const delArticleId = e.currentTarget.id;
    console.log('delArticleId', delArticleId); //for check
    await axios.post(memberRouteURL + '/deletePast', {
      member,
      delArticleId,
    });
    if (mapRouteShow === false) {
      setMapRouteShow(true);
    } else {
      setMapRouteShow(false);
    }

    // 彈跳視窗
    Swal.fire({
      icon: 'error',
      title: '已移除去過路線及評分',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  //====== 移除去過路線 end ======//

  useEffect(() => {
    if (member === null) {
      return;
    }
    async function getRouteData() {
      try {
        // console.log('memberID:', member); //for check
        const RouteData = await axios.post(memberRouteURL, member);
        // console.log('RouteData:', RouteData.data.result); //for check
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
  }, [show, member, star, auth, updateStar, mapRouteShow]);

  //====== 登出 start ======//
  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.get(authURL + '/logout', {
      withCredentials: true,
    });
    setAuth(false);
  };
  //====== 登出 end ======//

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
                    <Link to="/member" className="member-left-href-color">
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
                    <button
                      onClick={handleLogout}
                      className="member-left-href-color btn border-0 p-0"
                    >
                      登出
                    </button>
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
                        <th scope="col-4"></th>
                        <th scope="col-2"></th>
                        <th scope="col-1">
                          {/* 給新(舊)會員選擇去過路線 */}
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
                            {/* 分已評分＆未評分點星星後可加評分 */}
                            {items.star !== undefined ? (
                              items.star === 5 ? (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <ReactStars
                                    classNames="mx-auto"
                                    count={5}
                                    value={items.star}
                                    emptyIcon={
                                      <BsStarFill className="bi member-map-route-star" />
                                    }
                                    filledIcon={
                                      <BsStarFill className="bi member-map-route-star active" />
                                    }
                                    onChange={(newValue) => {
                                      setUpdateStar(
                                        items.article_id + ':' + newValue
                                      );
                                    }}
                                    size={24}
                                  />
                                </td>
                              ) : items.star === 4 ? (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <ReactStars
                                    classNames="mx-auto"
                                    count={5}
                                    value={items.star}
                                    emptyIcon={
                                      <BsStarFill className="bi member-map-route-star" />
                                    }
                                    filledIcon={
                                      <BsStarFill className="bi member-map-route-star active" />
                                    }
                                    onChange={(newValue) => {
                                      setUpdateStar(
                                        items.article_id + ':' + newValue
                                      );
                                    }}
                                    size={24}
                                  />
                                </td>
                              ) : items.star === 3 ? (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <ReactStars
                                    classNames="mx-auto"
                                    count={5}
                                    value={items.star}
                                    emptyIcon={
                                      <BsStarFill className="bi member-map-route-star" />
                                    }
                                    filledIcon={
                                      <BsStarFill className="bi member-map-route-star active" />
                                    }
                                    onChange={(newValue) => {
                                      setUpdateStar(
                                        items.article_id + ':' + newValue
                                      );
                                    }}
                                    size={24}
                                  />
                                </td>
                              ) : items.star === 2 ? (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <ReactStars
                                    classNames="mx-auto"
                                    count={5}
                                    value={items.star}
                                    emptyIcon={
                                      <BsStarFill className="bi member-map-route-star" />
                                    }
                                    filledIcon={
                                      <BsStarFill className="bi member-map-route-star active" />
                                    }
                                    onChange={(newValue) => {
                                      setUpdateStar(
                                        items.article_id + ':' + newValue
                                      );
                                    }}
                                    size={24}
                                  />
                                </td>
                              ) : (
                                <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                  <ReactStars
                                    classNames="mx-auto"
                                    count={5}
                                    value={items.star}
                                    emptyIcon={
                                      <BsStarFill className="bi member-map-route-star" />
                                    }
                                    filledIcon={
                                      <BsStarFill className="bi member-map-route-star active" />
                                    }
                                    onChange={(newValue) => {
                                      setUpdateStar(
                                        items.article_id + ':' + newValue
                                      );
                                    }}
                                    size={24}
                                  />
                                </td>
                              )
                            ) : (
                              <td className="member-map-route-star-group member-map-route-text-weight align-middle">
                                <ReactStars
                                  classNames="mx-auto"
                                  count={5}
                                  emptyIcon={
                                    <BsStarFill className="bi member-map-route-star" />
                                  }
                                  filledIcon={
                                    <BsStarFill className="bi member-map-route-star active" />
                                  }
                                  onChange={(newValue) => {
                                    setStar(items.article_id + ':' + newValue);
                                  }}
                                  size={24}
                                />
                              </td>
                            )}
                            {items.star !== undefined && items.star !== 0 ? (
                              <td className="member-map-route-text-weight align-middle">
                                給評{items.star}分
                              </td>
                            ) : (
                              <td className="member-map-route-text-weight align-middle text-danger">
                                未評分
                              </td>
                            )}
                            <td className="align-middle">
                              <p>刪除</p>
                              <BsXSquareFill
                                id={items.article_id}
                                className="member-product-article-cancel-icon"
                                size={28}
                                style={{ color: '#cc543a', cursor: 'pointer' }}
                                onClick={deletePast}
                              />
                            </td>
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
