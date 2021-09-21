import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link .
import $ from 'jquery';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick.min.js';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
// import 'slick-carousel';
import Swal from 'sweetalert2';
import '../../styles/product.css';
import {
  CaretLeftFill,
  CaretRightFill,
  CartFill,
  HeartFill,
} from 'react-bootstrap-icons';
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
import shoesPic1 from '../../img/product-img/shoes-pic1.jpeg';
import clothesPic5 from '../../img/product-img/clothes-pic5.jpeg';
import clothesPic8 from '../../img/product-img/clothes-pic8v2.png';
import clothesPic4 from '../../img/product-img/clothes-pic4.jpeg';
import bagsPic6 from '../../img/product-img/bags-pic6.png';
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
    $('.shopmain-product-slider').slick({
      dots: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3500,
      nextArrow: $('.shopmain-next'),
      prevArrow: $('.shopmain-prev'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 753,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
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
          <div>
            <div className="position-relative shopmain-title-box">
              <h3 className="shopmain-selected-title text-center">編輯嚴選</h3>
              <div className="shopmain-title-underline position-absolute"></div>
            </div>
            <div className="row shopmain-product-list my-4">
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="shopmain-product-card">
                  <div className="shopmain-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="shopmain-cover-fit"
                        src={bagsPic2}
                        alt="The North Face 黑灰色休閒後背包"
                        title="The North Face 黑灰色休閒後背包"
                      />
                    </Link>
                    <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute shopmain-heart-icon" />
                    </button>
                    <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute shopmain-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left shopmain-product-name">
                    The North Face
                    <br />
                    黑灰色休閒後背包
                  </Link>
                  <p className="text-right shopmain-product-price">NT $2,180</p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="shopmain-product-card">
                  <div className="shopmain-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="shopmain-cover-fit"
                        src={bagsPic8}
                        alt="The North Face 藍色專業登山後背包"
                        title="The North Face 藍色專業登山後背包"
                      />
                    </Link>
                    <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute shopmain-heart-icon" />
                    </button>
                    <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute shopmain-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left shopmain-product-name">
                    The North Face
                    <br />
                    藍色專業登山後背包
                  </Link>
                  <p className="text-right shopmain-product-price">NT $8,380</p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="shopmain-product-card">
                  <div className="shopmain-product-img-box position-relative">
                    <Link to="/shop/product-detail">
                      <img
                        className="shopmain-cover-fit"
                        src={shoesPic8}
                        alt="ASOLO 阿空加瓜牛皮冰攀靴"
                        title="ASOLO 阿空加瓜牛皮冰攀靴"
                      />
                    </Link>
                    <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute shopmain-heart-icon" />
                    </button>
                    <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute shopmain-cart-icon" />
                    </button>
                  </div>
                  <Link
                    to="/shop/product-detail"
                    className="text-left shopmain-product-name"
                  >
                    ASOLO
                    <br />
                    阿空加瓜牛皮冰攀靴
                  </Link>
                  <p className="text-right shopmain-product-price">NT $8,980</p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="shopmain-product-card">
                  <div className="shopmain-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="shopmain-cover-fit"
                        src={clothesPic5}
                        alt="The North Face 戶外保暖羽絨外套"
                        title="The North Face 戶外保暖羽絨外套"
                      />
                    </Link>
                    <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute shopmain-heart-icon" />
                    </button>
                    <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute shopmain-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left shopmain-product-name">
                    The North Face
                    <br />
                    戶外保暖羽絨外套
                  </Link>
                  <p className="text-right shopmain-product-price">NT $8,310</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========編輯嚴選 end========= --> */}
          {/* <!-- =========熱銷不敗(本月暢銷排行) start========= --> */}
          <div>
            <div className="position-relative shopmain-title-box">
              <h3 className="shopmain-selected-title text-center">
                熱銷不敗(本月暢銷排行)
              </h3>
              <div className="shopmain-title-underline position-absolute"></div>
            </div>
            <div className="shopmain-product-list my-4 position-relative">
              <Link
                to="#/"
                className="position-absolute shopmain-slider-arrows-left text-center shopmain-prev"
              >
                {/* <i className="bi bi-chevron-left"></i> */}
                <CaretLeftFill className="shopmain-slider-arrows-left-height" />
              </Link>
              <Link
                to="#/"
                className="position-absolute shopmain-slider-arrows-right text-center shopmain-next"
              >
                {/* <i className="bi bi-chevron-right"></i> */}
                <CaretRightFill className="shopmain-slider-arrows-right-height" />
              </Link>
              <div className="shopmain-product-slider row">
                <div className="col-3 px-0">
                  <div className="shopmain-product-card">
                    <div className="shopmain-product-img-box position-relative">
                      <Link to="#/">
                        <img
                          className="shopmain-cover-fit"
                          src={clothesPic8}
                          alt="The North Face Summit L5 FUTURELIGHT"
                          title="The North Face Summit L5 FUTURELIGHT"
                        />
                      </Link>
                      <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                        <HeartFill className="position-absolute shopmain-heart-icon" />
                      </button>
                      <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                        <CartFill className="position-absolute shopmain-cart-icon" />
                      </button>
                    </div>
                    <Link to="#/" className="text-left shopmain-product-name">
                      The North Face
                      <br />
                      Summit L5 FUTURELIGHT
                    </Link>
                    <p className="text-right shopmain-product-price">
                      NT $18,200
                    </p>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="shopmain-product-card">
                    <div className="shopmain-product-img-box position-relative">
                      <Link to="#/">
                        <img
                          className="shopmain-cover-fit"
                          src={clothesPic4}
                          alt="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                          title="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                        />
                      </Link>
                      <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                        <HeartFill className="position-absolute shopmain-heart-icon" />
                      </button>
                      <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                        <CartFill className="position-absolute shopmain-cart-icon" />
                      </button>
                    </div>
                    <Link to="#/" className="text-left shopmain-product-name">
                      Arcteryx 始祖鳥
                      <br />
                      Cerium SV 保暖羽絨連帽外套
                    </Link>
                    <p className="text-right shopmain-product-price">
                      NT $8,380
                    </p>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="shopmain-product-card">
                    <div className="shopmain-product-img-box position-relative">
                      <Link to="#/">
                        <img
                          className="shopmain-cover-fit"
                          src={bagsPic6}
                          alt="Arcteryx 始祖鳥 徒步背包 Brize 32"
                          title="Arcteryx 始祖鳥 徒步背包 Brize 32"
                        />
                      </Link>
                      <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                        <HeartFill className="position-absolute shopmain-heart-icon" />
                      </button>
                      <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                        <CartFill className="position-absolute shopmain-cart-icon" />
                      </button>
                    </div>
                    <Link to="#/" className="text-left shopmain-product-name">
                      Arcteryx 始祖鳥
                      <br />
                      徒步背包 Brize 32
                    </Link>
                    <p className="text-right shopmain-product-price">
                      NT $8,341
                    </p>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="shopmain-product-card">
                    <div className="shopmain-product-img-box position-relative">
                      <Link to="#/">
                        <img
                          className="shopmain-cover-fit"
                          src={shoesPic1}
                          alt="MERRELL Tetrex Crest Wrap 女水陸三棲鞋"
                          title="MERRELL Tetrex Crest Wrap 女水陸三棲鞋"
                        />
                      </Link>
                      <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                        <HeartFill className="position-absolute shopmain-heart-icon" />
                      </button>
                      <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                        <CartFill className="position-absolute shopmain-cart-icon" />
                      </button>
                    </div>
                    <Link to="#/" className="text-left shopmain-product-name">
                      MERRELL Tetrex Crest Wrap
                      <br />
                      女水陸三棲鞋
                    </Link>
                    <p className="text-right shopmain-product-price">
                      NT $2,680
                    </p>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="shopmain-product-card">
                    <div className="shopmain-product-img-box position-relative">
                      <Link to="#/">
                        <img
                          className="shopmain-cover-fit"
                          src={clothesPic5}
                          alt="The North Face 戶外保暖羽絨外套"
                          title="The North Face 戶外保暖羽絨外套"
                        />
                      </Link>
                      <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                        <HeartFill className="position-absolute shopmain-heart-icon" />
                      </button>
                      <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                        <CartFill className="position-absolute shopmain-cart-icon" />
                      </button>
                    </div>
                    <Link to="#/" className="text-left shopmain-product-name">
                      The North Face
                      <br />
                      戶外保暖羽絨外套
                    </Link>
                    <p className="text-right shopmain-product-price">
                      NT $8,310
                    </p>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="shopmain-product-card">
                    <div className="shopmain-product-img-box position-relative">
                      <Link to="#/">
                        <img
                          className="shopmain-cover-fit"
                          src={bagsPic2}
                          alt="The North Face 黑灰色休閒後背包"
                          title="The North Face 黑灰色休閒後背包"
                        />
                      </Link>
                      <button className="position-absolute shopmain-heart-icon-bkg position-relative">
                        <HeartFill className="position-absolute shopmain-heart-icon" />
                      </button>
                      <button className="position-absolute shopmain-cart-icon-bkg position-relative">
                        <CartFill className="position-absolute shopmain-cart-icon" />
                      </button>
                    </div>
                    <Link to="#/" className="text-left shopmain-product-name">
                      The North Face
                      <br />
                      黑灰色休閒後背包
                    </Link>
                    <p className="text-right shopmain-product-price">
                      NT $2,180
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    <Link to="/recommend/detail">
                      <img
                        className="shopmain-cover-fit"
                        src={xiangshan}
                        alt="象山親山步道"
                        title="象山親山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail"
                    className="shopmain-article-name"
                  >
                    象山親山步道
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link
                      to="/recommend/detail"
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
                    <Link to="/recommend/detail">
                      <img
                        className="shopmain-cover-fit"
                        src={Yangmingshan}
                        alt="陽明山東西大縱走"
                        title="陽明山東西大縱走"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail"
                    className="shopmain-article-name"
                  >
                    陽明山東西大縱走
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link
                      to="/recommend/detail"
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
                    <Link to="/recommend/detail">
                      <img
                        className="shopmain-cover-fit"
                        src={Tapachien}
                        alt="大霸北稜線"
                        title="大霸北稜線"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail"
                    className="shopmain-article-name"
                  >
                    大霸北稜線
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link
                      to="/recommend/detail"
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
