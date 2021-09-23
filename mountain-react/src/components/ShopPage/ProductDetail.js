import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; //a標籤要變成link
// import { withRouter } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import Swal from 'sweetalert2';
import '../../styles/productdetail.css';
import { shopURL, IMAGE_URL } from '../../utils/config';
import {
  Dash,
  Plus,
  QuestionCircle,
  CartFill,
  HeartFill,
} from 'react-bootstrap-icons';

import bagsPic2 from '../../img/product-img/bags-pic2.jpeg';
import bagsPic8 from '../../img/product-img/bags-pic8.jpeg';
import clothesPic5 from '../../img/product-img/clothes-pic5.jpeg';
import Tapachien from '../../img/article-img/Tapachien.jpeg';
import wuling from '../../img/article-img/wuling.jpeg';
import Mayang from '../../img/article-img/Mayang.jpeg';
import shop from '../../img/product-img/illustration/shop.svg';
import bearbear from '../../img/product-img/illustration/bearbear.png';

function ProductDetail(props) {
  const [productData, setProductData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  // const [orderInfo, setOrderInfo] = useState([]);
  const { id } = useParams();
  // console.log('id', id);
  useEffect(() => {
    //local storage for 瀏覽紀錄
    var GetProductHistory = localStorage.getItem('ProductViewHistory');
    if (GetProductHistory === null) {
      //如果localstorage沒有product view history
      // console.log('zero');
      var ProductViewHistory = [];
      localStorage.setItem(
        'ProductViewHistory',
        JSON.stringify(ProductViewHistory)
      );
      ProductViewHistory = JSON.parse(
        localStorage.getItem('ProductViewHistory')
      );
      ProductViewHistory.push(id);
      localStorage.setItem(
        'ProductViewHistory',
        JSON.stringify(ProductViewHistory)
      );
    } else {
      //如果localstorage有product view history
      // console.log('okay');
      ProductViewHistory = JSON.parse(
        localStorage.getItem('ProductViewHistory')
      );
      //判斷陣列裡面有沒有這樣商品 有的話要刪除 不然會重複太多
      //寫一個function給filter用 過濾與之id相同的資料
      function productClearDuplicatedItem(value) {
        return value !== id;
      }
      ProductViewHistory = ProductViewHistory.filter(
        productClearDuplicatedItem
      );
      //再把他push回最尾端
      ProductViewHistory.push(id);
      localStorage.setItem(
        'ProductViewHistory',
        JSON.stringify(ProductViewHistory)
      );
    }
    //api
    async function getProductData() {
      try {
        const productData = await axios.get(`${shopURL}/product-detail/${id}`);
        console.log(productData.data[0]); //for check
        setProductData(productData.data[0]);
        //抓瀏覽紀錄的商品資料
        var historyArray = [];
        for (let i = 0; i < ProductViewHistory.length; i++) {
          // console.log(ProductViewHistory[i]);
          const productHistoryData = await axios.get(
            `${shopURL}/product-detail/${ProductViewHistory[i]}`
          );
          // console.log(productHistoryData.data[0]);
          historyArray.unshift(productHistoryData.data[0]);
        }
        console.log(historyArray);
        setHistoryData(historyArray);
      } catch (e) {
        console.log(e);
      }
    }
    getProductData();
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
      //確認是否有選擇尺寸
      let sizeChosen = Boolean($('.productdetail-active').length > 0);
      if (!sizeChosen) {
        Swal.fire({
          icon: 'error',
          title: '請選擇尺寸！',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      let orderDetailSize = $('.productdetail-active').val();
      let orderDetailNum = parseInt($('.productdetail-order-number').val());
      console.log(orderDetailNum);
      let orderDetail = { id: id, size: orderDetailSize, num: orderDetailNum };
      console.log(orderDetail);
      //localstorage for order detail start//
      const ProductOrder =
        JSON.parse(localStorage.getItem('ProductOrderDetail')) || [];
      const index = ProductOrder.findIndex(
        (v) => v.id === orderDetail.id && v.size === orderDetail.size
      );
      if (index > -1) {
        //currentCart[index].amount++
        console.log('這個商品已經加過了');
        return;
      } else {
        // ProductOrder.push(orderDetail);
        console.log('哎呦還沒喔');
      }

      // var GetProductOrder = localStorage.getItem('ProductOrderDetail');
      // if (GetProductOrder === null) {
      //   var ProductOrder = [];
      //   localStorage.setItem(
      //     'ProductOrderDetail',
      //     JSON.stringify(ProductOrder)
      //   );
      //   ProductOrder = JSON.parse(localStorage.getItem('ProductOrderDetail'));
      //   ProductOrder.push(orderDetail);
      //   localStorage.setItem(
      //     'ProductOrderDetail',
      //     JSON.stringify(ProductOrder)
      //   );
      // } else {
      //   //如果localstorage有product view history
      //   // console.log('okay');
      //   ProductOrder = JSON.parse(localStorage.getItem('ProductOrderDetail'));
      //   //判斷陣列裡面有沒有這樣商品 有的話要刪除 不然會重複太多
      //   //寫一個function給filter用 過濾與之id相同的資料
      //   // function productClearDuplicatedItem(value) {
      //   //   return value !== id;
      //   // }
      //   // ProductOrder = ProductOrder.filter(
      //   //   productClearDuplicatedItem
      //   // );
      //   //再把他push回最尾端
      //   ProductOrder.push(orderDetail);
      //   localStorage.setItem(
      //     'ProductOrderDetail',
      //     JSON.stringify(ProductOrder)
      //   );
      // }
      //localstorage for order detail end//

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
      if (orderNum + cartNum > 10) {
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
    // setOrderInfo(ProductOrder);
  }, [id]);
  return (
    <>
      <main>
        <div className="container">
          {/* <!-- =========history start========= --> */}
          <div className="position-fixed productdetail-history-box position-relative">
            <div className="position-absolute productdetail-history-text">
              瀏覽紀錄
            </div>
            {historyData.slice(0, 4).map((item, index) => {
              return (
                <figure className="productdetail-history-img-box" key={item.id}>
                  <Link to={`/shop/product-detail/${item.id}`}>
                    <img
                      src={`${IMAGE_URL}/img/product-img/${item.pic}`}
                      alt={item.name}
                      title={item.name}
                      className="productdetail-cover-fit"
                    />
                  </Link>
                </figure>
              );
            })}
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
              {productData.name}
            </h3>
            <div className="row">
              <div className="col-lg-7 productdetail-product-pic-box my-4">
                <figure>
                  <img
                    className="productdetail-cover-fit"
                    src={`${IMAGE_URL}/img/product-img/${productData.pic}`}
                    alt={productData.name}
                    title={productData.name}
                  />
                </figure>
              </div>
              <div className="col-lg-5 productdetail-product-order-box my-4 position-relative">
                <div className="productdetail-simple-introduce-box">
                  <p>商品簡介</p>
                  <ul
                    dangerouslySetInnerHTML={{
                      __html: productData.simple_intro,
                    }}
                  ></ul>
                </div>
                <div className="productdetail-size-box">
                  <p>SIZE 選擇</p>
                  {productData.type === '2' ? (
                    <div className="productdetail-button-box m-3">
                      <input
                        type="button"
                        value="F"
                        className="productdetail-size-btn mx-1 productdetail-active"
                      />
                    </div>
                  ) : (
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
                  )}
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
                  <p>NT ${parseInt(productData.price).toLocaleString()}</p>
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
                    <HeartFill className="mb-2" />
                  </button>
                  <button className="productdetail-add-cart-btn mx-1 btn">
                    加入購物車
                  </button>
                  <div className="position-absolute productdetail-about-membership position-relative">
                    <button id="seeMember" className="productdetail-see-member">
                      了解會員積分折扣制度
                      <QuestionCircle />
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
              <div
                className="productdetail-introduce m-5"
                dangerouslySetInnerHTML={{
                  __html: productData.introduction,
                }}
              ></div>
              {/* {orderInfo.map((item, index) => {
                return <p>{item.id}</p>;
              })} */}
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
                    <Link to="/recommend/detail/3">
                      <img
                        className="productdetail-cover-fit"
                        src={Tapachien}
                        alt="大霸北稜線"
                        title="大霸北稜線"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail/3"
                    className="productdetail-article-name"
                  >
                    大霸北稜線
                  </Link>
                </div>
              </div>
              <div className="col-6 col-lg-3 px-0">
                <div className="productdetail-article-card">
                  <div className="productdetail-article-img-box">
                    <Link to="/recommend/detail/6">
                      <img
                        className="productdetail-cover-fit"
                        src={wuling}
                        alt="武陵四秀登山步道"
                        title="武陵四秀登山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail/6"
                    className="productdetail-article-name"
                  >
                    武陵四秀登山步道
                  </Link>
                </div>
              </div>
              <div className="col-6 col-lg-3 px-0">
                <div className="productdetail-article-card">
                  <div className="productdetail-article-img-box">
                    <Link to="/recommend/detail/9">
                      <img
                        className="productdetail-cover-fit"
                        src={Mayang}
                        alt="馬洋山登山步道"
                        title="馬洋山登山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    to="/recommend/detail/9"
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
                    <Link to="/shop/product-detail/11">
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
                    to="/shop/product-detail/11"
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
                    <Link to="/shop/product-detail/17">
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
                    to="/shop/product-detail/17"
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
                    <Link to="/shop/product-detail/23">
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
                    to="/shop/product-detail/23"
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
