/* eslint-disable jsx-a11y/scope */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/MemberPage/MemberProductArticle.scss'; //member product and article style
import MemberHeartArticle from './MemberHeartArticle';

import { memberProductURL, IMAGE_URL } from '../../utils/config';
import axios from 'axios';

//====== below pages star ======//
import { pages_btn } from '../MapPage/pages/PagesBtn'; //分頁按鈕
import MemberSideHead from './pages/MemberSideHead'; //member Side Head
//====== below pages end ======//

//====== below icon star ======//
import { BsTrash, BsStar, BsStarFill, BsXSquareFill } from 'react-icons/bs';
import { Cart } from 'react-bootstrap-icons';
//====== below icon end ======//

function MemberProductArticle() {
  const [dataProduct, setProductData] = useState([]);

  useEffect(() => {
    async function getProductData() {
      try {
        const ProductData = await axios.get(memberProductURL, {
          withCredentials: true,
        });

        // console.log(ProductData.data); //for check

        setProductData(ProductData.data);

        // let dataProduct = ProductData.data;
      } catch (e) {
        console.log(e);
      }
    }
    getProductData();

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

    //product order 數量部分
    $('.add-btn').click(function () {
      let num = parseInt($('.order-number').val());
      num += 1;
      $('.order-number').val(num);
      // console.log(num);
    });
    $('.minus-btn').click(function () {
      let num = parseInt($('.order-number').val());
      if (num > 1) {
        num -= 1;
        $('.order-number').val(num);
      }
      // console.log(num);
    });
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
                    <Link to="/member" className="member-left-href-color">
                      路線地圖
                    </Link>
                  </td>
                </tr>
                <tr className="member-table-active">
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
            <h2 className="member-product-article-title-main">我的產品收藏</h2>
            <div className="wrapper">
              <div className="tab">
                <div
                  className="btn-group member-product-article-switch-category"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu active"
                    to="#/"
                  >
                    產品
                  </Link>
                  <Link
                    type="button"
                    id="menu"
                    className="btn btn-outline-primary menu"
                    to="#/"
                  >
                    文章
                  </Link>
                </div>
              </div>
              <div className="tab-content">
                <div id="content" className="content1">
                  {/* <!-- product table start--> */}
                  <table className="table member-product-article-table-all text-center p-md-4 p-lg-5">
                    <thead>
                      <tr>
                        <th
                          scope="col-1 col-md-1"
                          className="align-middle member-product-article-product-img"
                        >
                          產品照片
                        </th>
                        <th
                          scope="col-1 col-md-1"
                          className="align-middle member-product-article-product-name"
                        >
                          產品名稱
                        </th>
                        <th
                          scope="col-2 col-md-2"
                          className="align-middle member-product-article-product-size"
                        >
                          尺寸
                        </th>
                        <th
                          scope="col-4 col-md-4"
                          className="align-middle member-product-article-product-price"
                        >
                          單價
                        </th>
                        <th
                          scope="col-1 col-md-1"
                          className="align-middle member-product-article-product-buy"
                        >
                          加入購物車
                        </th>
                        <th
                          scope="col-1"
                          className="align-middle member-product-article-product-delete"
                        >
                          刪除
                        </th>
                      </tr>
                    </thead>
                    {dataProduct.map((items, i) => (
                      <tbody key={i}>
                        <tr>
                          <td
                            scope="row"
                            className="member-product-article-product-picture-img-wrapper"
                          >
                            <div className="member-product-article-product-picture-img-box">
                              <img
                                src={`${IMAGE_URL}/img/product-img/${items.product_pic}`}
                                alt=""
                                className="member-product-article-product-picture-img"
                              />
                            </div>
                          </td>
                          <td scope="row" className="align-middle">
                            {items.product_name}
                          </td>
                          <td scope="row" className="align-middle">
                            {items.product_size}
                          </td>
                          <td scope="row" className="align-middle">
                            {items.product_price}
                          </td>
                          <td scope="row" className="align-middle">
                            <Link to="">
                              <Cart size={20} />
                            </Link>
                          </td>
                          <td scope="row" className="align-middle">
                            <Link to="">
                              <BsTrash size={20} />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                  {/* <!-- 分頁 start  --> */}
                  {pages_btn}
                  {/* <!-- 分頁 end  --> */}
                  {/* <!-- product table end--> */}
                </div>
                <MemberHeartArticle></MemberHeartArticle>
              </div>
            </div>
          </div>
          {/* <!-- manage-right-side end--> */}
        </div>
      </div>
    </>
  );
}

export default withRouter(MemberProductArticle);
