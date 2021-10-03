import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import Swal from 'sweetalert2';
import '../../styles/MemberPage/MemberOrder.scss'; //member map and route style
import {
  memberOrderURL,
  IMAGE_URL,
  authURL,
  zipCodeURL,
} from '../../utils/config';
import axios from 'axios';

//====== below pages star ======//
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

//====== below icon star ======//
import { BsTrash } from 'react-icons/bs';
//====== below icon end ======//

//====== below catch member info star ======//
import { useAuth } from '../../context/auth';
//====== above catch member info end ======//

function MemberOrder() {
  const [zipCode, setZipCode] = useState(null);
  const [overAllData, setOverAllData] = useState([]);
  const [detailDatas, setDetailDatas] = useState([]);
  const [productDatas, setProductDatas] = useState([]);
  const { setAuth } = useAuth();

  useEffect(() => {
    // 從靜態檔案抓資料
    async function getZipCode() {
      try {
        const zipCodeRes = await axios.get(zipCodeURL, {
          withCredentials: true,
        });
        setZipCode(zipCodeRes.data);
      } catch (e) {
        console.log(e);
      }
    }
    getZipCode();
    async function getOrders() {
      try {
        const OrderDatas = await axios.get(`${memberOrderURL}/order-product`, {
          withCredentials: true,
        });
        // console.log('product:', OrderDatas.data.datas[0].details);
        setOverAllData(OrderDatas.data.totalInfo);
        setDetailDatas(OrderDatas.data.datas);
        setProductDatas(OrderDatas.data.datas[0].details);
      } catch (e) {
        console.log(e);
      }
    }
    getOrders();

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
                <tr>
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
                          {overAllData.number}
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單時間：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          {overAllData.time}
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
                          NT$ {parseInt(overAllData.price).toLocaleString()}
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
                          {overAllData.status}
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
                        </tr>
                      </thead>
                      {productDatas.map((items, i) => (
                        <tbody className="tbody-tr-border">
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-picture-img-wrapper align-middle"
                            >
                              <div className="member-comment-picture-img-box">
                                <img
                                  src={`${IMAGE_URL}/img/product-img/${items.product_pic}`}
                                  alt=""
                                  className="member-comment-picture-img"
                                />
                              </div>
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              {items.product_name}
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              <span>{items.size}</span>
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              NT${' '}
                              {parseInt(items.product_price).toLocaleString()}
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              <span>{items.num}</span>
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              NT${' '}
                              {(
                                parseInt(items.product_price) * items.num
                              ).toLocaleString()}
                            </td>
                          </tr>
                        </tbody>
                      ))}
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
                              {overAllData.name}
                            </td>
                          </tr>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              收件地址：
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              {zipCode &&
                                overAllData &&
                                overAllData.zip_code &&
                                zipCode[overAllData.zip_code].city}
                              {zipCode &&
                                overAllData &&
                                overAllData.zip_code &&
                                zipCode[overAllData.zip_code].district}
                              {overAllData && overAllData.addr}
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
                              {overAllData.phone}
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
                              {overAllData.payWay}
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
                          {overAllData.number}
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          訂單時間：
                        </td>
                        <td
                          scope="row"
                          className="member-comment-text-weight-top"
                        >
                          {overAllData.time}
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
                          NT$ {parseInt(overAllData.price).toLocaleString()}
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
                        </tr>
                      </thead>
                      {productDatas.map((items, i) => (
                        <tbody className="tbody-tr-border">
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-picture-img-wrapper align-middle"
                            >
                              <div className="member-comment-picture-img-box">
                                <img
                                  src={`${IMAGE_URL}/img/product-img/${items.product_pic}`}
                                  alt=""
                                  className="member-comment-picture-img"
                                />
                              </div>
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              {items.product_name}
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              <span>{items.size}</span>
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              NT${' '}
                              {parseInt(items.product_price).toLocaleString()}
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              <span>{items.num}</span>
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              NT${' '}
                              {(
                                parseInt(items.product_price) * items.num
                              ).toLocaleString()}
                            </td>
                          </tr>
                        </tbody>
                      ))}
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
                              {overAllData.name}
                            </td>
                          </tr>
                          <tr>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              收件地址：
                            </td>
                            <td
                              scope="row"
                              className="member-comment-text-weight-middle align-middle"
                            >
                              {zipCode &&
                                overAllData &&
                                overAllData.zip_code &&
                                zipCode[overAllData.zip_code].city}
                              {zipCode &&
                                overAllData &&
                                overAllData.zip_code &&
                                zipCode[overAllData.zip_code].district}
                              {overAllData && overAllData.addr}
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
                              {overAllData.phone}
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
                              {overAllData.payWay}
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
