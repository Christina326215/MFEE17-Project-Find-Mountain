import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; //a標籤要變成link
import { useAuth } from '../../context/auth'; // 取得setCartChange狀態
// import { withRouter } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import Swal from 'sweetalert2';
import '../../styles/productdetail.css';
import { shopURL, IMAGE_URL } from '../../utils/config';
import ProductCard from './components/ProductCard';
import { Dash, Plus, QuestionCircle, HeartFill } from 'react-bootstrap-icons';
import shop from '../../img/product-img/illustration/shop.svg';
import bearbear from '../../img/product-img/illustration/bearbear.png';

function ProductDetail(props) {
  const { setCartChange } = useAuth(); // 取得購物車數字狀態
  const [productData, setProductData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [orderNum, setOrderNum] = useState(1);
  const [orderSize, setOrderSize] = useState('');
  const [orderInfo, setOrderInfo] = useState([]);
  //同等級商品及文章
  const [sameLevelP, setSameLevelP] = useState([]);
  const [sameLevelA, setSameLevelA] = useState([]);
  const { id } = useParams();
  // 隨機打亂陣列函式
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  useEffect(() => {
    const ProductOrder =
      JSON.parse(localStorage.getItem('ProductOrderDetail')) || [];
    // console.log('ProductOrder', ProductOrder);
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
        //抓當頁商品資料
        const productData = await axios.get(`${shopURL}/product-detail/${id}`);
        // console.log(productData.data[0]); //for check
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
        // console.log(historyArray);
        setHistoryData(historyArray);
        //抓同等級商品資料
        const productLevel = productData.data[0].level;
        const sameLevelProduct = await axios.get(
          `${shopURL}/product-detail/level/${productLevel}`
        );
        //過濾掉當前頁面商品資料 避免推薦其他商品出現自己
        function ClearDuplicatedItem(value) {
          //value.id為數字 id為string
          return value.id !== parseInt(id);
        }
        const lastSameLevelP =
          sameLevelProduct.data.filter(ClearDuplicatedItem);
        // console.log('lastSameLevelP', lastSameLevelP);
        const randomSameLevelP = shuffle(lastSameLevelP).slice(0, 3);
        // console.log('randomSameLevelP', randomSameLevelP);
        setSameLevelP(randomSameLevelP);
        //抓同等級文章資料
        const sameLevelArticle = await axios.get(
          `${shopURL}/product-detail/article/level/${productLevel}`
        );
        const randomSameLevelA = shuffle(sameLevelArticle.data).slice(0, 3);
        // console.log('randomSameLevelA', randomSameLevelA);
        setSameLevelA(randomSameLevelA);
      } catch (e) {
        console.log(e);
      }
    }
    getProductData();
    setOrderInfo(ProductOrder);
    setOrderSize('');
    setOrderNum(1);
  }, [id]);
  //加入購物車
  const addCart = () => {
    //確認是否有選擇尺寸
    let sizeChosen = Boolean(orderSize !== '');
    if (!sizeChosen) {
      Swal.fire({
        icon: 'error',
        title: '請選擇尺寸！',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    let orderDetail = { id: id, size: orderSize, num: orderNum };
    console.log(orderDetail);
    //localstorage for order detail start//
    const index = orderInfo.findIndex(
      (v) => v.id === orderDetail.id && v.size === orderDetail.size
    );
    if (index > -1) {
      //改變同款項訂購數量
      orderInfo[index].num += orderNum;
      localStorage.setItem('ProductOrderDetail', JSON.stringify(orderInfo));
      console.log('這個商品已經加過了');
      // return;
    } else {
      orderInfo.push(orderDetail);
      localStorage.setItem('ProductOrderDetail', JSON.stringify(orderInfo));
      console.log('哎呦還沒喔');
    }
    //localstorage for order detail end//
    Swal.fire({
      icon: 'success',
      title: '已將商品加入購物車！',
      showConfirmButton: false,
      timer: 1500,
    });
    setCartChange(true);
  };
  //會員泡泡顯示
  const showMemberBubble = () => {
    $('.productdetail-about-membership-bubble').toggle('display');
  };

  //FIXME:待整理
  useEffect(() => {
    //like-icon
    $('.productdetail-like-btn').on('click', function () {
      $(this).toggleClass('productdetail-active');
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
                  <div className="productdetail-button-box m-3">
                    {productData.type === '2' ? (
                      <select
                        value={orderSize}
                        name="order-size"
                        className="form-control"
                        onChange={(e) => {
                          setOrderSize(e.target.value);
                        }}
                      >
                        <option value="">請選擇尺寸</option>
                        <option value="F">F</option>
                      </select>
                    ) : (
                      <select
                        value={orderSize}
                        name="order-size"
                        className="form-control"
                        onChange={(e) => {
                          setOrderSize(e.target.value);
                        }}
                      >
                        <option value="">請選擇尺寸</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                      </select>
                    )}
                  </div>
                </div>
                <div className="productdetail-number-box">
                  <p>數量</p>
                  <div className="productdetail-number-input-box m-3 d-flex align-items-center">
                    <button
                      className="btn productdetail-minus-btn"
                      onClick={() => {
                        if (orderNum > 1) {
                          setOrderNum(orderNum - 1);
                        }
                      }}
                      // onClick={UpdateOrderNum(false)}
                    >
                      <Dash className="mb-1" />
                    </button>
                    <p className="productdetail-order-number py-1 m-0">
                      {orderNum}
                    </p>
                    <button
                      className="btn productdetail-add-btn"
                      onClick={() => {
                        if (orderNum < 10) {
                          setOrderNum(orderNum + 1);
                        }
                      }}
                      // onClick={UpdateOrderNum(true)}
                    >
                      <Plus className="mb-1" />
                    </button>
                  </div>
                </div>
                <div className="productdetail-line-box my-4"></div>
                <div className="productdetail-price-box text-right pb-5 d-flex justify-content-between">
                  <p>總計</p>
                  <p>
                    NT $
                    {parseInt(productData.price * orderNum).toLocaleString()}
                  </p>
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
                  <button
                    className="productdetail-add-cart-btn mx-1 btn"
                    onClick={addCart}
                  >
                    加入購物車
                  </button>
                  <div className="position-absolute productdetail-about-membership position-relative">
                    <button
                      id="seeMember"
                      className="productdetail-see-member"
                      onClick={showMemberBubble}
                    >
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
              {sameLevelA.map((itemA, indexA) => {
                return (
                  <div className="col-6 col-lg-3 px-0" key={itemA.id}>
                    <div className="productdetail-article-card">
                      <div className="productdetail-article-img-box">
                        <Link to={`/recommend/detail/${itemA.id}`}>
                          <img
                            className="productdetail-cover-fit"
                            src={`${IMAGE_URL}/img/article-img/${itemA.pic}`}
                            alt={itemA.name}
                            title={itemA.name}
                          />
                        </Link>
                      </div>
                      <Link
                        to={`/recommend/detail/${itemA.id}`}
                        className="productdetail-article-name"
                      >
                        {itemA.name}
                      </Link>
                    </div>
                  </div>
                );
              })}
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
              {sameLevelP.map((item, index) => {
                return (
                  <ProductCard
                    productId={item.id}
                    brand={item.product_brand}
                    name={item.product_name}
                    price={item.price}
                    picture={item.pic}
                    type={item.type}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
          {/* <!-- =========recommended items end========= --> */}
          {/* <!-- =========outfit start========= --> */}
          <div className="my-4 productdetail-outfit-box position-relative">
            <div className="position-absolute position-relative productdetail-shop-svg">
              <Link
                to="/outfit"
                onMouseEnter={(e) => {
                  // e.target.className += 'animate__heartBeat';
                  $(e.target).addClass('animate__heartBeat');
                }}
                onMouseLeave={(e) => {
                  // e.target.className -= 'animate__heartBeat';
                  $(e.target).removeClass('animate__heartBeat');
                }}
              >
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
