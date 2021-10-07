import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import { pages_btn } from '../MapPage/pages/PagesBtn'; //分頁按鈕
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style
import { shopURL, IMAGE_URL } from '../../utils/config';
import { useAuth } from '../../context/auth'; // 取得setCartChange狀態
import Swal from 'sweetalert2';

import axios from 'axios';

//====== below icon star ======//
import { BsPlus, BsDash, BsTrash, BsCheck } from 'react-icons/bs';
//====== below icon end ======//

function ShopCartDetail() {
  const { setCartChange, auth, member } = useAuth(); // 取得navbar偵測購物車變化用的狀態 會員登入狀態
  //shopCartData為購物車local storage接完資料庫的整體一筆一筆的資料
  const [shopCartData, setShopCartData] = useState([]);
  //historyItems為瀏覽紀錄local storage接完資料庫的整體一筆一筆的資料
  const [historyItems, setHistoryItems] = useState([]);
  //cartLocal為購物車的local storage
  const [cartLocal, setCartLocal] = useState([]);
  const [randomProduct, setRandomProduct] = useState([]);
  //取得local storage轉為陣列的資料 ProductOrder
  function getCartFromLocalStorage() {
    const ProductOrder =
      JSON.parse(localStorage.getItem('ProductOrderDetail')) || '[]';
    // console.log(ProductOrder);
    setCartLocal(ProductOrder);
  }
  //一進畫面先讀取local storage
  useEffect(() => {
    getCartFromLocalStorage();
    // console.log('cartLocal', cartLocal);
  }, []);
  //刪除商品
  const deleteItem = (items) => {
    const currentProductOrder =
      JSON.parse(localStorage.getItem('ProductOrderDetail')) || '[]';
    //抓這裡的商品ID
    // console.log(items.id, items.size);
    //找到對應資料的index
    const deleteIndex = currentProductOrder.findIndex(
      (v) => v.id === items.id && v.size === items.size
    );
    if (deleteIndex > -1) {
      Swal.fire({
        title: '確定要刪除此商品嗎？',
        text: '可以再稍微考慮一下呦',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6da77f',
        cancelButtonColor: '#BDC0BA',
        confirmButtonText: '刪除！',
      }).then((result) => {
        if (result.isConfirmed) {
          //if 有找到一樣id一樣尺寸的local storage
          //把想刪除的商品資料從陣列中刪除
          // console.log('deleteIndex', deleteIndex);
          currentProductOrder.splice(deleteIndex, 1);
          // console.log('splicedProductOrder', currentProductOrder);
          //把處理好的資料塞回local storage
          localStorage.setItem(
            'ProductOrderDetail',
            JSON.stringify(currentProductOrder)
          );
          // console.log('有這個訂購資料');
          setCartChange(true);
          setCartLocal(currentProductOrder);
          Swal.fire('已刪除商品', '歡迎繼續選購好物', 'success');
        }
      });
      //刪除後重整頁面
    } else {
      console.log('哎呦沒有東西可以刪耶');
    }
  };
  //清空購物車
  const clearCart = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '確定要清空購物車嗎？',
      text: '將無法回復購物車資料',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6da77f',
      cancelButtonColor: '#BDC0BA',
      confirmButtonText: '清空！',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('ProductOrderDetail');
        setCartChange(true);
        setCartLocal([]);
        Swal.fire('已清空購物車', '您的購物車已被清空', 'success');
      }
    });
  };
  //更新購物車數量
  const UpdateAmounts = (items, isAdded) => {
    const newProductOrder = JSON.parse(
      localStorage.getItem('ProductOrderDetail')
    );
    //找到對應資料的index
    const amountIndex = newProductOrder.findIndex(
      (v) => v.id === items.id && v.size === items.size
    );
    // console.log('amountIndex', amountIndex);
    if (amountIndex > -1) {
      if (isAdded) {
        //限制可以選擇的數量
        if (newProductOrder[amountIndex].num < 10) {
          newProductOrder[amountIndex].num++;
        } else {
          return;
        }
      } else {
        if (newProductOrder[amountIndex].num > 1) {
          newProductOrder[amountIndex].num--;
        } else {
          return;
        }
      }
    }
    localStorage.setItem('ProductOrderDetail', JSON.stringify(newProductOrder));
    setCartChange(true);
    setCartLocal(newProductOrder);
  };
  // 計算總價用的函式
  const sum = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].num * items[i].price;
    }
    return total;
  };
  // 隨機打亂陣列函式
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  //更多推薦 api
  useEffect(() => {
    //FIXME:應該要在隨機排序商品資料中，刪除購物車中有的品項 (little bug)
    async function getAllRandomProductData() {
      try {
        const allProductData = await axios.get(`${shopURL}/`);
        const RandomProductData = shuffle(allProductData.data).slice(0, 5);
        // console.log('RandomProductData', RandomProductData);
        setRandomProduct(RandomProductData);
      } catch (e) {
        console.log(e);
      }
    }
    getAllRandomProductData();
  }, []);
  //local storage接API --> shopCartData
  useEffect(() => {
    var ProductOrder = JSON.parse(localStorage.getItem('ProductOrderDetail'));
    //api
    if (ProductOrder !== [] && ProductOrder !== null) {
      async function getProductData() {
        try {
          //抓瀏覽紀錄資料
          var ProductViewHistory = JSON.parse(
            localStorage.getItem('ProductViewHistory')
          );
          if (ProductViewHistory !== null && ProductViewHistory.length > 0) {
            var historyArray = [];
            for (let i = 0; i < ProductViewHistory.length; i++) {
              // console.log('ProductViewHistory[i]', ProductViewHistory[i]);
              const productHistoryData = await axios.get(
                `${shopURL}/product-detail/${ProductViewHistory[i]}`
              );
              // console.log(productHistoryData.data[0]);
              historyArray.unshift(productHistoryData.data[0]);
            }
            // console.log('historyArray', historyArray);
            setHistoryItems(historyArray);
          }
          //抓購物車的商品資料
          var orderArray = [];
          for (let i = 0; i < ProductOrder.length; i++) {
            //對應尺寸剩餘庫存及售出量的api
            const productOrderData = await axios.get(
              `${shopURL}/size-storage/${ProductOrder[i].id}/${ProductOrder[i].size}`
            );
            //productOrderData.data[0]為資料庫商品資料 ProductOrder[i]為localstorage的購物車資料
            // console.log(productOrderData.data[0], ProductOrder[i]);
            //合併物件Object.assign 合併後原物件也會被改變
            let assignedObj = Object.assign(
              productOrderData.data[0],
              ProductOrder[i]
            );
            // console.log('productOrderData.data[0]', productOrderData.data[0]);
            // console.log('assignedObj', assignedObj);
            orderArray.unshift(productOrderData.data[0]);
          }
          // console.log('orderArray', orderArray);
          setShopCartData(orderArray);
        } catch (e) {
          console.log(e);
        }
      }
      getProductData();
    } else {
      //如果購物車為空 還是要抓瀏覽紀錄
      async function getProductData() {
        try {
          //抓瀏覽紀錄資料
          var ProductViewHistory = JSON.parse(
            localStorage.getItem('ProductViewHistory')
          );
          if (ProductViewHistory !== null && ProductViewHistory.length > 0) {
            var historyArray = [];
            for (let i = 0; i < ProductViewHistory.length; i++) {
              // console.log('ProductViewHistory[i]', ProductViewHistory[i]);
              const productHistoryData = await axios.get(
                `${shopURL}/product-detail/${ProductViewHistory[i]}`
              );
              // console.log(productHistoryData.data[0]);
              historyArray.unshift(productHistoryData.data[0]);
            }
            // console.log('historyArray', historyArray);
            setHistoryItems(historyArray);
          }
        } catch (e) {
          console.log(e);
        }
      }
      getProductData();
      console.log('沒有商品');
      setShopCartData([]);
    }
  }, [cartLocal]);
  //進行結帳btn
  const checkout = (e) => {
    const ProductOrderForCheckout = JSON.parse(
      localStorage.getItem('ProductOrderDetail')
    );
    // console.log('ProductOrderForCheckout', ProductOrderForCheckout);
    console.log('member', member);
    if (member === null) {
      e.preventDefault();
      console.log('請先進行登入');
      Swal.fire({
        icon: 'error',
        title: '需要先登入才能進行結帳喔',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (
      ProductOrderForCheckout === null ||
      ProductOrderForCheckout === []
    ) {
      e.preventDefault();
      console.log('no product in cart');
      Swal.fire({
        icon: 'warning',
        title: '你的購物車內還沒有商品喔',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  //FIXME:一些待整理的東西
  useEffect(() => {
    // progress-bar
    $('.shopcart-btn-next').on('click', function () {
      var currentStepNum = $('#shopcart-checkout-progress').data(
        'current-step'
      );
      var nextStepNum = currentStepNum + 1;
      var currentStep = $('.shopcart-step.shopcart-step-' + currentStepNum);
      var nextStep = $('.shopcart-step.shopcart-step-' + nextStepNum);
      var progressBar = $('#shopcart-checkout-progress');
      $('.shopcart-btn-prev').removeClass('shopcart-disabled');
      // eslint-disable-next-line eqeqeq
      if (currentStepNum == 5) {
        return false;
      }
      // eslint-disable-next-line eqeqeq
      if (nextStepNum == 5) {
        $(this).addClass('shopcart-disabled');
      }
      $('.shopcart-checkout-progress')
        .removeClass('.shopcart-step-' + currentStepNum)
        .addClass('.shopcart-step-' + (currentStepNum + 1));

      currentStep.removeClass('shopcart-active').addClass('shopcart-valid');
      currentStep.find('span').addClass('shopcart-opaque');
      currentStep
        .find('.shopcart-fa.shopcart-fa-check')
        .removeClass('shopcart-opaque');

      nextStep.addClass('shopcart-active');
      progressBar
        .removeAttr('className')
        .addClass('shopcart-step-' + nextStepNum)
        .data('current-step', nextStepNum);
    });

    $('.shopcart-btn-prev').on('click', function () {
      var currentStepNum = $('#shopcart-checkout-progress').data(
        'current-step'
      );
      var prevStepNum = currentStepNum - 1;
      var currentStep = $('.shopcart-step.shopcart-step-' + currentStepNum);
      var prevStep = $('.shopcart-step.shopcart-step-' + prevStepNum);
      var progressBar = $('#shopcart-checkout-progress');
      $('.shopcart-btn-next').removeClass('shopcart-disabled');
      // eslint-disable-next-line eqeqeq
      if (currentStepNum == 1) {
        return false;
      }
      // eslint-disable-next-line eqeqeq
      if (prevStepNum == 1) {
        $(this).addClass('shopcart-disabled');
      }
      $('.shopcart-checkout-progress')
        .removeClass('.shopcart-step-' + currentStepNum)
        .addClass('.shopcart-step-' + prevStepNum);

      currentStep.removeClass('shopcart-active');
      prevStep.find('span').removeClass('shopcart-opaque');
      prevStep
        .find('.shopcart-fa.shopcart-fa-check')
        .addClass('shopcart-opaque');

      prevStep.addClass('shopcart-active').removeClass('shopcart-valid');
      progressBar
        .removeAttr('className')
        .addClass('shopcart-step-' + prevStepNum)
        .data('current-step', prevStepNum);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="shopcart-progress-adj">
          {/* <!-- progress-bar-step start --> */}
          {/* <!-- className change to current "step-2" --> */}
          <div
            className="shopcart-step-1"
            id="shopcart-checkout-progress"
            data-current-step="1"
          >
            <div className="shopcart-progress-bar1">
              {/* <!-- "active" change to "valid" --> */}
              <div className="shopcart-step shopcart-step-1 shopcart-active">
                <span className="shopcart-step-num"> 1</span>
                {/* <!-- "opaque" change to "" --> */}
                <BsCheck className="shopcart-fa shopcart-fa-check shopcart-opaque" />
                <div className="shopcart-step-label">確認購物車</div>
              </div>
              {/* <!-- add className "active" --> */}
              <div className="shopcart-step shopcart-step-2">
                <span className="shopcart-step-num"> 2</span>
                <BsCheck className="shopcart-fa shopcart-fa-check shopcart-opaque" />
                <div className="shopcart-step-label">付款與運送方式</div>
              </div>
              <div className="shopcart-step shopcart-step-3">
                <span className="shopcart-step-num"> 3</span>
                <BsCheck className="shopcart-fa shopcart-fa-check shopcart-opaque" />
                <div className="shopcart-step-label">資料確認</div>
              </div>
              <div className="shopcart-step shopcart-step-4">
                <span className="shopcart-step-num"> 4</span>
                <BsCheck className="shopcart-fa shopcart-fa-check shopcart-opaque" />
                <div className="shopcart-step-label">完成訂單</div>
              </div>
            </div>
          </div>
          {/* <!-- progress-bar-step end --> */}
        </div>

        <div className="row">
          <div className="col-lg-12 mt-3">
            <h3 className="text-center mt-4">購物車明細</h3>
            <hr />
            {cartLocal.length > 0 && cartLocal !== '[]' ? (
              <div>
                <div className="d-flex justify-content-end">
                  <button className="btn-primary btn" onClick={clearCart}>
                    清空購物車
                  </button>
                </div>
                {/* abby */}
                {shopCartData.map((items, index) => {
                  return (
                    <div
                      className="shopcart-product-infobox row my-3"
                      key={`${items.id}${items.size}`}
                    >
                      <div className="col-4 col-lg-3">
                        <figure className="shopcart-product-infobox-img p-2">
                          <Link to={`/shop/product-detail/${items.id}`}>
                            <img
                              src={`${IMAGE_URL}/img/product-img/${items.pic}`}
                              alt={items.name}
                              title={items.name}
                              className="shopcart-product-infobox-cover-fit"
                            />
                          </Link>
                        </figure>
                      </div>
                      <div className="col-5">
                        <div className="shopcart-product-infobox-name">
                          <input
                            type="text"
                            value={items.name}
                            name="name"
                            readOnly
                            className="my-3 form-control"
                          />
                        </div>
                        <div className="my-3">
                          <p>所選尺寸</p>
                          {items.type === '2' ? (
                            <select value="F" className="form-control" readOnly>
                              <option value="F">F</option>
                            </select>
                          ) : items.size === 'S' ? (
                            <select value="S" className="form-control" readOnly>
                              <option value="S">S</option>
                            </select>
                          ) : items.size === 'M' ? (
                            <select value="M" className="form-control" readOnly>
                              <option value="M">M</option>
                            </select>
                          ) : (
                            <select value="L" className="form-control" readOnly>
                              <option value="L">L</option>
                            </select>
                          )}
                        </div>
                        <div className="shopcart-product-infobox-storage">
                          <p className="m-0">庫存剩餘：{items.size_storage}</p>
                        </div>
                      </div>
                      <div className="col-3 col-lg-4">
                        <div className="d-flex align-items-end flex-column bd-highlight shopcart-product-infobox-right">
                          <div className="bd-highlight">
                            <p className="my-3">數量</p>
                            <button
                              className="btn shopcart-minus-btn"
                              onClick={() => {
                                UpdateAmounts(items, false);
                              }}
                            >
                              <BsDash size={24} />
                            </button>
                            {items.num}
                            <button
                              className="btn shopcart-add-btn"
                              onClick={() => {
                                UpdateAmounts(items, true);
                              }}
                            >
                              <BsPlus size={24} />
                            </button>
                            <hr className="my-0" />
                          </div>
                          <div className="bd-highlight">
                            <p className="shopcart-product-infobox-price">
                              NT${' '}
                              {(
                                parseInt(items.price) * items.num
                              ).toLocaleString()}
                            </p>
                          </div>
                          <div className="mt-auto mb-2 bd-highlight">
                            <button
                              className="shopcart-delete-btn"
                              onClick={() => {
                                deleteItem(items);
                              }}
                            >
                              <BsTrash size={20} className="text-white" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* abby */}
              </div>
            ) : (
              <div className="d-flex shopcart-noproduct-box text-center justify-content-center align-items-center">
                <p className="p-0">購物車內沒有商品呦</p>
              </div>
            )}
            {/* <!-- 分頁 start  --> */}
            {/* FIXME: page btn 功能 */}
            {pages_btn}
            {/* <!-- 分頁 end  --> */}
            <div className="text-right mt-3 text-right">
              <p className="shopcart-total">
                商品總計： NT$ {sum(shopCartData).toLocaleString()}
              </p>
            </div>
            {/* <!-- button --> */}
            <div className="shopcart-button-container text-right mb-5">
              <Link
                type="button"
                to="/shoppingcart/step2-pay"
                className="shopcart-btn btn-next btn btn-primary"
                onClick={checkout}
              >
                進行結帳
              </Link>
            </div>

            <div>
              {/* FIXME:樣式設計再改一下 */}
              <h5>更多推薦</h5>
              <hr />
              <div className="row">
                {randomProduct.map((randomItems, index) => {
                  return (
                    <Link
                      to={`/shop/product-detail/${randomItems.id}`}
                      key={`${randomItems.id}`}
                    >
                      <figure className="shopcart-more-product-img-box ml-5">
                        <img
                          src={`${IMAGE_URL}/img/product-img/${randomItems.pic}`}
                          alt={randomItems.name}
                          title={randomItems.name}
                          className="shopcart-cover-fit"
                        />
                      </figure>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <h5 className="mt-5">瀏覽紀錄</h5>
              <hr />
              {historyItems === [] || historyItems.length === 0 ? (
                <div className="d-flex shopcart-no-historyproduct text-center justify-content-center align-items-center my-3">
                  <p className="p-0">尚未有瀏覽紀錄</p>
                </div>
              ) : (
                <div className="row">
                  {historyItems.slice(0, 7).map((hisItems, hisIndex) => {
                    return (
                      <Link
                        to={`/shop/product-detail/${hisItems.id}`}
                        key={`${hisItems.id}00`}
                      >
                        <figure className="shopcart-more-product-img-box ml-5 mb-5">
                          <img
                            src={`${IMAGE_URL}/img/product-img/${hisItems.pic}`}
                            alt={hisItems.name}
                            title={hisItems.name}
                            className="shopcart-cover-fit"
                          />
                        </figure>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ShopCartDetail);
