import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import { pages_btn } from '../MapPage/pages/PagesBtn'; //分頁按鈕
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style

import { shopcartURL } from '../../utils/config';
import axios from 'axios';

//====== below icon star ======//
import { BsPlus, BsDash, BsTrash, BsCheck } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import ShopCartImg from '../../img/shoes-pic7.jpeg';
//====== above img import end ======//

function ShopCartDetail() {
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
    $('.shopcart-add-btn').click(function () {
      let number = $(this).parent().find('.shopcart-order-number');
      let num = parseInt(number.val());
      num += 1;
      number.val(num);
      // console.log(num);
    });
    $('.shopcart-minus-btn').click(function () {
      let number = $(this).parent().find('.shopcart-order-number');
      let num = parseInt(number.val());
      if (num > 1) {
        num -= 1;
        number.val(num);
      }
      // console.log(num);
    });
    //product order size選擇
    $('.shopcart-size-btn').each(function () {
      $(this).click(function () {
        $(this).toggleClass('shopcart-active');
        $(this).siblings().removeClass('shopcart-active');
      });
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
            <table className="table table-borderless mt-4 text-center">
              <thead className="shopcart-thead-tr-border">
                <tr>
                  <th scope="col">商品照片</th>
                  <th scope="col" className="shopcart-product-name">
                    商品名稱
                  </th>
                  <th scope="col" className="shopcart-product-size">
                    尺寸
                  </th>
                  <th scope="col" className="shopcart-product-perprice">
                    單價
                  </th>
                  <th scope="col" className="shopcart-product-count">
                    數量
                  </th>
                  <th scope="col" className="shopcart-product-storage">
                    庫存
                  </th>
                  <th scope="col" className="shopcart-product-subtotal">
                    小計
                  </th>
                  <th scope="col" className="shopcart-product-delete">
                    刪除
                  </th>
                </tr>
              </thead>
              <tbody className="shopcart-tbody-tr-border">
                <tr>
                  <td scope="row">
                    <div className="shopcart-product-img-box">
                      <Link to="/#">
                        <img
                          src={ShopCartImg}
                          alt=""
                          className="shopcart-cover-fit"
                        />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="shopcart-size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn shopcart-minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="shopcart-order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn shopcart-add-btn">
                      <BsPlus size={24} />
                    </button>
                  </td>
                  <td scope="row">10</td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <Link to="/#">
                      <BsTrash size={24} />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <div className="shopcart-product-img-box">
                      <Link to="/#">
                        <img
                          src={ShopCartImg}
                          alt=""
                          className="shopcart-cover-fit"
                        />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="shopcart-size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn shopcart-minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="shopcart-order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn shopcart-add-btn">
                      <BsPlus size={24} />
                    </button>
                  </td>
                  <td scope="row">10</td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <Link to="/#">
                      <BsTrash size={24} />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <div className="shopcart-product-img-box">
                      <Link to="/#">
                        <img
                          src={ShopCartImg}
                          alt=""
                          className="shopcart-cover-fit"
                        />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="shopcart-size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn shopcart-minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="shopcart-order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn shopcart-add-btn">
                      <BsPlus size={24} />
                    </button>
                  </td>
                  <td scope="row">10</td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <Link to="/#">
                      <BsTrash size={24} />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <div className="shopcart-product-img-box">
                      <Link to="/#">
                        <img
                          src={ShopCartImg}
                          alt=""
                          className="shopcart-cover-fit"
                        />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="shopcart-size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn shopcart-minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="shopcart-order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn shopcart-add-btn">
                      <BsPlus size={24} />
                    </button>
                  </td>
                  <td scope="row">10</td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <Link to="/#">
                      <BsTrash size={24} />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <div className="shopcart-product-img-box">
                      <Link to="/#">
                        <img
                          src={ShopCartImg}
                          alt=""
                          className="shopcart-cover-fit"
                        />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="shopcart-size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="shopcart-size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn shopcart-minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="shopcart-order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn shopcart-add-btn">
                      <BsPlus size={24} />
                    </button>
                  </td>
                  <td scope="row">10</td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <Link to="/#">
                      <BsTrash size={24} />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
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
