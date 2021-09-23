import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import { pages_btn } from '../MapPage/pages/PagesBtn'; //分頁按鈕
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style
import { shopURL, IMAGE_URL } from '../../utils/config';

import axios from 'axios';

//====== below icon star ======//
import { BsPlus, BsDash, BsTrash, BsCheck } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import ShopCartImg from '../../img/shoes-pic7.jpeg';
//====== above img import end ======//

function ShopCartDetail() {
  const [shopCartData, setShopCartData] = useState([]);
  const [num, setNum] = useState();
  const handleChange = (event) => {
    setShopCartData({
      ...shopCartData,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    var ProductOrder = JSON.parse(localStorage.getItem('ProductOrderDetail'));
    console.log(ProductOrder);
    //api
    async function getProductData() {
      try {
        //抓購物車的商品資料
        var orderArray = [];
        for (let i = 0; i < ProductOrder.length; i++) {
          const productOrderData = await axios.get(
            `${shopURL}/product-detail/${ProductOrder[i].id}`
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
          setNum(Array(orderArray.length).fill(0));
          console.log('num',num);
        }
        console.log('orderArray', orderArray);
        setShopCartData(orderArray);
      } catch (e) {
        console.log(e);
      }
    }
    getProductData();
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
      if (currentStepNum == 5) {
        return false;
      }
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
      if (currentStepNum == 1) {
        return false;
      }
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
    //product order 數量部分
    // $('.shopcart-add-btn').on('click', function () {
    //   let number = $(this).parent().find('.shopcart-order-number');
    //   let num = parseInt(number.val());
    //   num += 1;
    //   number.val(num);
    //   console.log(num);
    // });
    $('.shopcart-minus-btn').on('click', function () {
      let number = $(this).parent().find('.shopcart-order-number');
      let num = parseInt(number.val());
      if (num > 1) {
        num -= 1;
        number.val(num);
      }
      // console.log(num);
    });
    //product order size選擇
    $('.shopcart-size-btn').on('click', function () {
      $(this).toggleClass('shopcart-active');
      $(this).siblings().removeClass('shopcart-active');
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
                {/* <div className="shopcart-fa shopcart-fa-check shopcart-opaque"></div> */}
                <div className="shopcart-step-label">確認購物車</div>
              </div>
              {/* <!-- add className "active" --> */}
              <div className="shopcart-step shopcart-step-2">
                <span className="shopcart-step-num"> 2</span>
                <BsCheck className="shopcart-fa shopcart-fa-check shopcart-opaque" />
                {/* <div className="shopcart-fa shopcart-fa-check shopcart-opaque"></div> */}
                <div className="shopcart-step-label">付款與運送方式</div>
              </div>
              <div className="shopcart-step shopcart-step-3">
                <span className="shopcart-step-num"> 3</span>
                <BsCheck className="shopcart-fa shopcart-fa-check shopcart-opaque" />
                {/* <div className="shopcart-fa shopcart-fa-check shopcart-opaque"></div> */}
                <div className="shopcart-step-label">資料確認</div>
              </div>
              <div className="shopcart-step shopcart-step-4">
                <span className="shopcart-step-num"> 4</span>
                <BsCheck className="shopcart-fa shopcart-fa-check shopcart-opaque" />
                {/* <div className="shopcart-fa shopcart-fa-check shopcart-opaque"></div> */}
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
            {/* abby */}
            {shopCartData.map((items, index) => {
              return (
                <div className="shopcart-product-infobox row my-3">
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
                      <input type="text" value="productId" hidden />
                    </div>
                    {items.type === '2' ? (
                      <div className="button-box my-3">
                        <p>尺寸選擇</p>
                        <input
                          type="button"
                          value="F"
                          name="size"
                          className="shopcart-size-btn mx-1 shopcart-active"
                        />
                      </div>
                    ) : items.size === 'S' ? (
                      <div className="button-box my-3">
                        <p>尺寸選擇</p>
                        <input
                          type="button"
                          value="S"
                          name="size"
                          className="shopcart-size-btn mx-1 shopcart-active"
                        />
                        <input
                          type="button"
                          value="M"
                          name="size"
                          className="shopcart-size-btn mx-1"
                        />
                        <input
                          type="button"
                          value="L"
                          name="size"
                          className="shopcart-size-btn mx-1"
                        />
                      </div>
                    ) : items.size === 'M' ? (
                      <div className="button-box my-3">
                        <p>尺寸選擇</p>
                        <input
                          type="button"
                          value="S"
                          name="size"
                          className="shopcart-size-btn mx-1"
                        />
                        <input
                          type="button"
                          value="M"
                          name="size"
                          className="shopcart-size-btn mx-1 shopcart-active"
                        />
                        <input
                          type="button"
                          value="L"
                          name="size"
                          className="shopcart-size-btn mx-1"
                        />
                      </div>
                    ) : (
                      <div className="button-box my-3">
                        <p>尺寸選擇</p>
                        <input
                          type="button"
                          value="S"
                          name="size"
                          className="shopcart-size-btn mx-1"
                        />
                        <input
                          type="button"
                          value="M"
                          name="size"
                          className="shopcart-size-btn mx-1"
                        />
                        <input
                          type="button"
                          value="L"
                          name="size"
                          className="shopcart-size-btn mx-1 shopcart-active"
                        />
                      </div>
                    )}
                    <div className="shopcart-product-infobox-storage">
                      <p className="m-0">庫存剩餘：10</p>
                    </div>
                  </div>
                  <div className="col-3 col-lg-4">
                    <div className="d-flex align-items-end flex-column bd-highlight shopcart-product-infobox-right">
                      <div className="bd-highlight">
                        <p className="my-3">數量</p>
                        <button className="btn shopcart-minus-btn">
                          <BsDash size={24} />
                        </button>
                        <input
                          type="text"
                          className="shopcart-order-number"
                          // defaultValue={items.num}
                          value={num[index]}
                          name="num"
                          // onChange={handleChange}
                        />
                        <button
                          className="btn shopcart-add-btn"
                          onClick={() => {
                            const newNum = parseInt(num[index]) + 1;
                            setNum(newNum);
                          }}
                        >
                          <BsPlus size={24} />
                        </button>
                        <hr className="my-0" />
                      </div>
                      <div className="bd-highlight">
                        <p className="shopcart-product-infobox-price">
                          NT${' '}
                          {(parseInt(items.price) * items.num).toLocaleString()}
                        </p>
                      </div>
                      <div className="mt-auto mb-2 bd-highlight">
                        <Link to="/#">
                          <BsTrash size={24} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* abby */}
            {/* <!-- 分頁 start  --> */}
            {pages_btn}
            {/* <!-- 分頁 end  --> */}
            <div className="text-right mt-3 text-right">
              <p className="shopcart-total">商品總計： NT$ 5,000</p>
            </div>
            {/* <!-- button --> */}
            <div className="shopcart-button-container text-right mb-5">
              <Link
                type="button"
                to="/shoppingcart/step2-pay"
                className="shopcart-btn btn-next btn btn-primary"
              >
                進行結帳
              </Link>
            </div>

            <div>
              <h5>更多推薦</h5>
              <hr />
              <div className="row">
                <Link to="/#">
                  <figure className="shopcart-more-product-img-box ml-5">
                    <img
                      src={ShopCartImg}
                      alt=""
                      className="shopcart-cover-fit"
                    />
                  </figure>
                </Link>
                <Link to="/#">
                  <figure className="shopcart-more-product-img-box ml-5">
                    <img
                      src={ShopCartImg}
                      alt=""
                      className="shopcart-cover-fit"
                    />
                  </figure>
                </Link>
              </div>
            </div>
            <div>
              <h5 className="mt-5">瀏覽紀錄</h5>
              <hr />
              <div className="row">
                <Link to="/#">
                  <figure className="shopcart-more-product-img-box ml-5 mb-5">
                    <img
                      src={ShopCartImg}
                      alt=""
                      className="shopcart-cover-fit"
                    />
                  </figure>
                </Link>
                <Link to="/#">
                  <figure className="shopcart-more-product-img-box ml-5 mb-5">
                    <img
                      src={ShopCartImg}
                      alt=""
                      className="shopcart-cover-fit"
                    />
                  </figure>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ShopCartDetail);
