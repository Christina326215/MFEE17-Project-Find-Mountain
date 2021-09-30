import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link .
import $ from 'jquery';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick.min.js';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
// import 'slick-carousel';
import Swal from 'sweetalert2';
import '../../styles/product.css';
import RankingItems from './components/RankingItems';
import SelectedItems from './components/SelectedItems';
import { CartFill, HeartFill } from 'react-bootstrap-icons';
//api s
import axios from 'axios';
import { shopURL } from '../../utils/config';
//api e

import display1 from '../../img/display-photo1.jpeg';
import display2 from '../../img/display-photo2.jpeg';
import display3 from '../../img/display-photo3.jpeg';
import bagsPic2 from '../../img/product-img/bags-pic2.jpeg';
import bagsPic8 from '../../img/product-img/bags-pic8.jpeg';
import shoesPic8 from '../../img/product-img/shoes-pic8.jpeg';
import clothesPic5 from '../../img/product-img/clothes-pic5.jpeg';
import xiangshan from '../../img/article-img/xiangshan.jpeg';
import Yangmingshan from '../../img/article-img/Yangmingshan.jpeg';
import Tapachien from '../../img/article-img/Tapachien.jpeg';

function ShopMain(props) {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    //api
    async function getProductData() {
      try {
        const productData = await axios.get(shopURL);
        console.log(productData.data); //for check
        setProductData(productData.data);
      } catch (e) {
        console.log(e);
      }
    }
    getProductData();
    //slick
    $('.shopmain-display-photo-box').slick({
      dots: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 3500,
    });
    $('.shopmain-heart-icon-bkg').on('click', function () {
      $(this).toggleClass('shopmain-heart-icon-bkg-click');
    });
    $('.shopmain-cart-icon-bkg').on('click', () => {
      //display none -> block
      let cartDisplay = $('.cart-num').css('display');
      if (cartDisplay === 'none') {
        $('.cart-num').css('display', 'block');
      }
      // alert("已將商品加入購物車！");
      Swal.fire({
        icon: 'success',
        title: '已將商品加入購物車！',
        showConfirmButton: false,
        timer: 1500,
      });
      //cart-num ++
      let cartNum = parseInt($('.cart-num').text());
      //限制一次加進購物車數量
      if (cartNum >= 10) {
        Swal.fire({
          icon: 'error',
          title: '一次最多只能放入10樣商品喔',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        cartNum++;
        $('.cart-num').text(cartNum);
      }
    });
  }, []);
  return (
    <>
      <main>
        <div className="container">
          {/* <!-- =========search bar start========= --> */}
          <form className="form my-4">
            <div className="form-row justify-content-center">
              <input
                type="search"
                placeholder="搜尋"
                className="form-control search-bar col-5"
              />
            </div>
          </form>
          {/* <!-- =========search bar end========= --> */}
          {/* <!-- =========category bar start========= --> */}
          <div className="shopmain-category-bar">
            <ul className="d-flex justify-content-center list-unstyled">
              <div className="row">
                <li className="col-3 px-0">
                  <Link className="shopmain-active" to="/shop">
                    商城首頁
                  </Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="/shop/bags">機能背包</Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="/shop/shoes">登山鞋</Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="/shop/clothes">衣服</Link>
                </li>
              </div>
            </ul>
          </div>
          {/* <!-- =========category bar end========= --> */}
          {/* <!-- =========vegas start========= --> */}
          <div className="shopmain-display-photo-box position-relative row">
            <div className="shopmain-slick-photo-box">
              <img
                src={display1}
                alt=""
                title=""
                className="shopmain-cover-fit"
              />
            </div>
            <div className="shopmain-slick-photo-box">
              <img
                src={display2}
                alt=""
                title=""
                className="shopmain-cover-fit"
              />
            </div>
            <div className="shopmain-slick-photo-box">
              <img
                src={display3}
                alt=""
                title=""
                className="shopmain-cover-fit"
              />
            </div>
          </div>
          {/* <!-- =========vegas end========= --> */}
          {/* <!-- =========編輯嚴選 start========= --> */}
          <SelectedItems />
          {/* <!-- =========編輯嚴選 end========= --> */}
          {/* <!-- =========熱銷不敗(本月暢銷排行) start========= --> */}
          <RankingItems />
          {/* <!-- =========熱銷不敗(本月暢銷排行) end========= --> */}
          {/* <!-- =========熱門登山攻略 start========= --> */}
          <div>
            <div className="position-relative shopmain-title-box">
              <h3 className="shopmain-selected-title text-center">
                熱門登山攻略
              </h3>
              <div className="shopmain-title-underline position-absolute"></div>
            </div>
            <div className="row my-4">
              {/* <!--象山親山步道--> */}
              <div className="col-lg-4 px-0">
                <div className="shopmain-article-card">
                  <div className="shopmain-article-img-box">
                    <Link to="/recommend/detail/1">
                      <img
                        className="shopmain-cover-fit"
                        src={xiangshan}
                        alt="象山親山步道"
                        title="象山親山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail/1"
                    className="shopmain-article-name"
                  >
                    象山親山步道
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link
                      to="/recommend/detail/1"
                      className="shopmain-see-more-btn"
                    >
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--陽明山東西大縱走--> */}
              <div className="col-lg-4 px-0">
                <div className="shopmain-article-card">
                  <div className="shopmain-article-img-box">
                    <Link to="/recommend/detail/2">
                      <img
                        className="shopmain-cover-fit"
                        src={Yangmingshan}
                        alt="陽明山東西大縱走"
                        title="陽明山東西大縱走"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail/2"
                    className="shopmain-article-name"
                  >
                    陽明山東西大縱走
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link
                      to="/recommend/detail/2"
                      className="shopmain-see-more-btn"
                    >
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--大霸北稜線--> */}
              <div className="col-lg-4 px-0">
                <div className="shopmain-article-card">
                  <div className="shopmain-article-img-box">
                    <Link to="/recommend/detail/3">
                      <img
                        className="shopmain-cover-fit"
                        src={Tapachien}
                        alt="大霸北稜線"
                        title="大霸北稜線"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail/3"
                    className="shopmain-article-name"
                  >
                    大霸北稜線
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link
                      to="/recommend/detail/3"
                      className="shopmain-see-more-btn"
                    >
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========熱門登山攻略 end========= --> */}
        </div>
      </main>
    </>
  );
}

export default ShopMain;
