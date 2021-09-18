import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import $ from 'jquery';
import Swal from 'sweetalert2';
import '../../styles/productdetail.css';
import {
  Dash,
  Plus,
  QuestionCircle,
  CartFill,
  HeartFill,
} from 'react-bootstrap-icons';

import bagsPic2 from '../../img/product-img/bags-pic2.jpeg';
import bagsPic5 from '../../img/product-img/bags-pic5.jpeg';
import bagsPic6 from '../../img/product-img/bags-pic6.png';
import bagsPic8 from '../../img/product-img/bags-pic8.jpeg';
import shoesPic5 from '../../img/product-img/shoes-pic5.jpeg';
import shoesPic8 from '../../img/product-img/shoes-pic8.jpeg';
import clothesPic5 from '../../img/product-img/clothes-pic5.jpeg';
import Tapachien from '../../img/article-img/Tapachien.jpeg';
import wuling from '../../img/article-img/wuling.jpeg';
import Mayang from '../../img/article-img/Mayang.jpeg';
import shop from '../../img/product-img/illustration/shop.svg';
import bearbear from '../../img/product-img/illustration/bearbear.png';

function ProductDetail(props) {
  useEffect(() => {
    //heart icon
    $('.productdetail-heart-icon-bkg').on('click', function () {
      $(this).toggleClass('productdetail-heart-icon-bkg-click');
    });
    //cart icon
    $('.productdetail-cart-icon-bkg').on('click', () => {
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
      let orderNum = parseInt($('.productdetail-order-number').val());
      //限制一次加進購物車數量
      if (cartNum >= 10) {
        Swal.fire({
          icon: 'error',
          title: '一次最多只能放入10樣商品喔',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        cartNum += orderNum;
        $('.cart-num').text(cartNum);
      }
    });
    //會員制度泡泡
    $('.productdetail-see-member').on('click', function () {
      $('.productdetail-about-membership-bubble').toggle('display');
    });
    //like-icon
    $('.productdetail-like-btn').on('click', function () {
      $(this).toggleClass('productdetail-active');
    });
    //product order size選擇
    $('.productdetail-size-btn').on('click', function () {
      $(this).toggleClass('productdetail-active');
      $(this).siblings().removeClass('productdetail-active');
    });
    //product order 數量部分
    $('.productdetail-add-btn').on('click', function () {
      let num = parseInt($('.productdetail-order-number').val());
      num += 1;
      $('.productdetail-order-number').val(num);
      // console.log(num);
    });
    $('.productdetail-minus-btn').on('click', function () {
      let num = parseInt($('.productdetail-order-number').val());
      if (num > 1) {
        num -= 1;
        $('.productdetail-order-number').val(num);
      }
      // console.log(num);
    });
    //加入購物車
    $('.productdetail-add-cart-btn').on('click', function () {
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
      let orderNum = parseInt($('.productdetail-order-number').val());
      //限制一次加進購物車數量
      if (cartNum >= 10) {
        Swal.fire({
          icon: 'error',
          title: '一次最多只能放入10樣商品喔',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        cartNum += orderNum;
        $('.cart-num').text(cartNum);
      }
    });
  }, []);
  return (
    <>
      <main>
        <div className="container">
          {/* <!-- =========history start========= --> */}
          <div className="position-fixed productdetail-history-box position-relative">
            <div className="position-absolute productdetail-history-text">
              瀏覽紀錄
            </div>
            <figure className="productdetail-history-img-box">
              <Link to="shop/product-detail">
                <img
                  src={bagsPic5}
                  alt=""
                  className="productdetail-cover-fit"
                />
              </Link>
            </figure>
            <figure className="productdetail-history-img-box">
              <Link to="shop/product-detail">
                <img
                  src={bagsPic6}
                  alt=""
                  className="productdetail-cover-fit"
                />
              </Link>
            </figure>
            <figure className="productdetail-history-img-box">
              <Link to="shop/product-detail">
                <img
                  src={shoesPic5}
                  alt=""
                  className="productdetail-cover-fit"
                />
              </Link>
            </figure>
          </div>
          {/* <!-- =========history end========= --> */}

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
          <div className="productdetail-category-bar">
            <ul className="d-flex justify-content-center list-unstyled">
              <div className="row">
                <li className="col-3 px-0">
                  <Link to="/shop">商城首頁</Link>
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
          {/* <!-- =========product start========= --> */}
          {/* <!-- =========product order start========= --> */}
          <div className="my-4">
            <h3 className="productdetail-product-title m-3">
              ASOLO 阿空加瓜牛皮冰攀靴
            </h3>
            <div className="row">
              <div className="col-lg-7 productdetail-product-pic-box my-4">
                <figure>
                  <img
                    className="productdetail-cover-fit"
                    src={shoesPic8}
                    alt="ASOLO 阿空加瓜牛皮冰攀靴"
                    title="ASOLO 阿空加瓜牛皮冰攀靴"
                  />
                </figure>
              </div>
              <div className="col-lg-5 productdetail-product-order-box my-4 position-relative">
                <div className="productdetail-simple-introduce-box">
                  <p>商品簡介</p>
                  <ul>
                    <li>類型Alpin高山靴/男款</li>
                    <li>冰爪卡槽〇</li>
                    <li>重量990g</li>
                    <li>顏色黑灰色</li>
                  </ul>
                </div>
                <div className="productdetail-size-box">
                  <p>SIZE 選擇</p>
                  <div className="productdetail-button-box m-3">
                    <input
                      type="button"
                      value="S"
                      className="productdetail-size-btn mx-1 productdetail-active"
                    />
                    <input
                      type="button"
                      value="M"
                      className="productdetail-size-btn mx-1"
                    />
                    <input
                      type="button"
                      value="L"
                      className="productdetail-size-btn mx-1"
                    />
                  </div>
                </div>
                <div className="productdetail-number-box">
                  <p>數量</p>
                  <div className="productdetail-number-input-box m-3">
                    <button className="btn productdetail-minus-btn">
                      <Dash className="mb-1" />
                    </button>
                    <input
                      type="text"
                      className="productdetail-order-number"
                      value="1"
                      readOnly
                    />
                    <button className="btn productdetail-add-btn">
                      <Plus className="mb-1" />
                    </button>
                  </div>
                </div>
                <div className="productdetail-line-box my-4"></div>
                <div className="productdetail-price-box text-right pb-5">
                  <p>NT $1,000</p>
                </div>
                <div
                  className="
                  productdetail-addcart-box
                  position-absolute
                  text-center
                  d-flex
                  position-relative
                "
                >
                  <button className="productdetail-like-btn mx-1">
                    {/* <i className="bi bi-heart-fill"></i> */}
                    <HeartFill className="mb-2" />
                  </button>
                  {/* <!-- <Link to="#/" role="button" className="add-cart-btn mx-1"
                  >加入購物車</Link
                > --> */}
                  <button className="productdetail-add-cart-btn mx-1 btn">
                    加入購物車
                  </button>
                  <div className="position-absolute productdetail-about-membership position-relative">
                    <button id="seeMember" className="productdetail-see-member">
                      了解會員積分折扣制度
                      <QuestionCircle />
                      {/* <i className="bi bi-question-circle"></i> */}
                    </button>
                    {/* <!-- =========about-membership-bubble start========= --> */}
                    <div className="productdetail-about-membership-bubble p-3 position-absolute">
                      <span className="productdetail-about-membership-bubble-arrow"></span>
                      <span className="productdetail-membership">
                        會員專區登記去過的路線以獲取積分
                      </span>
                      <br />
                      <span className="productdetail-membership productdetail-membership-low">
                        肉腳：結帳時95折優惠
                      </span>
                      <br />
                      <span className="productdetail-membership productdetail-membership-medium">
                        山友 ：結帳時93折優惠
                      </span>
                      <br />
                      <span className="productdetail-membership productdetail-membership-high">
                        山神 ：結帳時9折優惠
                      </span>
                    </div>
                    {/* <!-- =========about-membership-bubble end========= --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========product order end========= --> */}
          {/* <!-- =========product introduce start========= --> */}
          <div className="my-4">
            <div className="productdetail-line-box">
              <div className="productdetail-introduce-title text-center">
                商品介紹
              </div>
            </div>
            <div className="productdetail-introduce-box">
              <div className="productdetail-introduce m-5">
                <figure className="productdetail-introduce-img-box">
                  <img
                    alt=""
                    src="https://www.asolo.com/modules/g_productinstagram/views/img/front/17940426415401752.jpg"
                    className="productdetail-cover-fit"
                  />
                </figure>
                <p>超高 CP值，經典款專業高山雪靴</p>
                <p>
                  無論是初入雪地登山門徑或 是專業老手，這雙阿空加瓜
                  冰攀靴都可以成為您的最佳 夥伴。外部為一體式防水
                  Perwanger牛皮鞋面，具防 水、防刮、透氣及耐用等特 色;內部則為
                  GORE-TEX材 質，以及精研的人體工學鞋 墊，穿著與行走時的舒適度
                  無可挑惕。
                </p>
                <p>
                  搭配底部堅實的 Vibram Vertige大底，每個部位都有
                  專業雪登等級的配備，價格
                  卻只要萬元以內，堪稱高CP值首選。除了高山攀爬、重裝徒步旅行外，也可以穿上它進行冬季雪地工作，可說是一款相當實用的登山與工作兩用靴。
                </p>
              </div>
            </div>
          </div>
          {/* <!-- =========product introduce end========= --> */}
          {/* <!-- =========product end========= --> */}
          <div className="productdetail-line-box my-4"></div>
          {/* <!-- =========guideline start========= --> */}
          <div className="my-4">
            <h4 className="productdetail-guideline-title m-3">
              <i className="bi bi-chevron-right"></i>
              <span>商品相關攻略</span>
            </h4>
            <div className="productdetail-guideline-box row">
              <div className="col-6 col-lg-3 px-0">
                <div className="productdetail-article-card">
                  <div className="productdetail-article-img-box">
                    <Link to="/recommend/detail">
                      <img
                        className="productdetail-cover-fit"
                        src={Tapachien}
                        alt="大霸北稜線"
                        title="大霸北稜線"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail"
                    className="productdetail-article-name"
                  >
                    大霸北稜線
                  </Link>
                </div>
              </div>
              <div className="col-6 col-lg-3 px-0">
                <div className="productdetail-article-card">
                  <div className="productdetail-article-img-box">
                    <Link to="/recommend/detail">
                      <img
                        className="productdetail-cover-fit"
                        src={wuling}
                        alt="武陵四秀登山步道"
                        title="武陵四秀登山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail"
                    className="productdetail-article-name"
                  >
                    武陵四秀登山步道
                  </Link>
                </div>
              </div>
              <div className="col-6 col-lg-3 px-0">
                <div className="productdetail-article-card">
                  <div className="productdetail-article-img-box">
                    <Link to="/recommend/detail">
                      <img
                        className="productdetail-cover-fit"
                        src={Mayang}
                        alt="馬洋山登山步道"
                        title="馬洋山登山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail"
                    className="productdetail-article-name"
                  >
                    馬洋山登山步道
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========guideline end========= --> */}
          {/* <!-- =========recommended items start========= --> */}
          <div className="my-4">
            <h4 className="productdetail-recommend-title m-3">
              <i className="bi bi-chevron-right"></i>
              <span>更多推薦好物</span>
            </h4>
            <div className="productdetail-recommended-items-box row">
              <div className="col-6 col-lg-3 px-0">
                <div className="productdetail-product-card">
                  <div className="productdetail-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productdetail-cover-fit"
                        src={bagsPic2}
                        alt="The North Face 黑灰色休閒後背包"
                        title="The North Face 黑灰色休閒後背包"
                      />
                    </Link>
                    <button className="position-absolute productdetail-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productdetail-heart-icon" />
                    </button>
                    <button className="position-absolute productdetail-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productdetail-cart-icon" />
                    </button>
                  </div>
                  <Link
                    to="#/"
                    className="text-left productdetail-product-name"
                  >
                    The North Face
                    <br />
                    黑灰色休閒後背包
                  </Link>
                  <p className="text-right productdetail-product-price">
                    NT $2,180
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3 px-0">
                <div className="productdetail-product-card">
                  <div className="productdetail-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productdetail-cover-fit"
                        src={bagsPic8}
                        alt="The North Face 藍色專業登山後背包"
                        title="The North Face 藍色專業登山後背包"
                      />
                    </Link>
                    <button className="position-absolute productdetail-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productdetail-heart-icon" />
                    </button>
                    <button className="position-absolute productdetail-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productdetail-cart-icon" />
                    </button>
                  </div>
                  <Link
                    to="#/"
                    className="text-left productdetail-product-name"
                  >
                    The North Face
                    <br />
                    藍色專業登山後背包
                  </Link>
                  <p className="text-right productdetail-product-price">
                    NT $8,380
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3 px-0">
                <div className="productdetail-product-card">
                  <div className="productdetail-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productdetail-cover-fit"
                        src={clothesPic5}
                        alt="The North Face 戶外保暖羽絨外套"
                        title="The North Face 戶外保暖羽絨外套"
                      />
                    </Link>
                    <button className="position-absolute productdetail-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productdetail-heart-icon" />
                    </button>
                    <button className="position-absolute productdetail-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productdetail-cart-icon" />
                    </button>
                  </div>
                  <Link
                    to="#/"
                    className="text-left productdetail-product-name"
                  >
                    The North Face
                    <br />
                    戶外保暖羽絨外套
                  </Link>
                  <p className="text-right productdetail-product-price">
                    NT $8,310
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========recommended items end========= --> */}
          {/* <!-- =========outfit start========= --> */}
          <div className="my-4 productdetail-outfit-box position-relative">
            <div className="position-absolute position-relative productdetail-shop-svg">
              <Link to="/outfit">
                <img src={shop} alt="穿搭商店" title="穿搭商店" />
              </Link>
              <div className="position-absolute productdetail-bearbear">
                <img src={bearbear} alt="吉祥物熊熊" title="吉祥物熊熊" />
                {/* <!-- =========about-membership-bubble start========= --> */}
                <div className="productdetail-bear-bubble p-3 position-absolute">
                  <span className="productdetail-bear-bubble-arrow"></span>
                  <span className="productdetail-membership">
                    不知道該買什麼裝備
                    <br />
                    也可以到我們的推薦穿搭看看呦！
                  </span>
                </div>
                {/* <!-- =========about-membership-bubble end========= --> */}
              </div>
            </div>
          </div>
          {/* <!-- =========outfit end========= --> */}
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
