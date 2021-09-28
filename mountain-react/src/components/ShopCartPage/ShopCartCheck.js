import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import { useAuth } from '../../context/auth'; // 取得會員資料
import $ from 'jquery';
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style

import { shopcartPayURL } from '../../utils/config';
import axios from 'axios';

//====== below icon star ======//
import { BsCheck } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//

//====== above img import end ======//

function ShopCartCheck() {
  const { pay } = useAuth(); // 取得會員資料
  const [navbarLocalCart, setNavbarLocalCart] = useState([]);

  console.log('pay', pay);

  //取得local storage轉為陣列的資料 ProductOrder
  function getCartFromLocalStorage() {
    const ProductOrder =
      JSON.parse(localStorage.getItem('ProductOrderDetail')) || '[]';
    console.log('ProductOrder', ProductOrder);
    setNavbarLocalCart(ProductOrder);
  }
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  // 準備 INSERT INTO 資料庫 start
  const handleSubmit = async (e) => {
    const moment = require('moment');
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append('ship', pay.ship);
      formData.append('pay_way', pay.pay_way);
      formData.append('zip_code', pay.zip_code);
      formData.append('addr', pay.addr);
      formData.append('invoice', pay.invoice);
      formData.append('name', pay.name);
      formData.append('phone', pay.phone);
      formData.append('time', moment().format('YYYY/MM/DD HH:mm:ss'));
      let response = await axios.post(`${shopcartPayURL}`, formData, {
        withCredentials: true,
      });
      console.log(response);
    } catch (e) {
      console.error(e.response);
    }
  };
  // 準備 INSERT INTO 資料庫 end

  useEffect(() => {
    // progress-bar
    $('.shopcart-btn-next').on('click', function () {
      var currentStepNum = $('#shopcart-checkout-progress').data(
        'current-step'
      );
      var nextStepNum = currentStepNum + 1;
      var currentStep = $('.shopcart-step.step-' + currentStepNum);
      var nextStep = $('.step.step-' + nextStepNum);
      var progressBar = $('#shopcart-checkout-progress');
      $('.shopcart-btn-prev').removeClass('shopcart-disabled');
      if (currentStepNum == 5) {
        return false;
      }
      if (nextStepNum == 5) {
        $(this).addClass('shopcart-disabled');
      }
      $('.shopcart-checkout-progress')
        .removeClass('.step-' + currentStepNum)
        .addClass('.step-' + (currentStepNum + 1));

      currentStep.removeClass('shopcart-active').addClass('shopcart-valid');
      currentStep.find('span').addClass('shopcart-opaque');
      currentStep
        .find('.shopcart-fa.shopcart-fa-check')
        .removeClass('shopcart-opaque');

      nextStep.addClass('shopcart-active');
      progressBar
        .removeAttr('className')
        .addClass('step-' + nextStepNum)
        .data('current-step', nextStepNum);
    });

    $('.shopcart-btn-prev').on('click', function () {
      var currentStepNum = $('#shopcart-checkout-progress').data(
        'current-step'
      );
      var prevStepNum = currentStepNum - 1;
      var currentStep = $('.step.step-' + currentStepNum);
      var prevStep = $('.step.step-' + prevStepNum);
      var progressBar = $('#shopcart-checkout-progress');
      $('.shopcart-btn-next').removeClass('shopcart-disabled');
      if (currentStepNum == 1) {
        return false;
      }
      if (prevStepNum == 1) {
        $(this).addClass('shopcart-disabled');
      }
      $('.shopcart-checkout-progress')
        .removeClass('.step-' + currentStepNum)
        .addClass('.step-' + prevStepNum);

      currentStep.removeClass('shopcart-active');
      prevStep.find('span').removeClass('shopcart-opaque');
      prevStep
        .find('.shopcart-fa.shopcart-fa-check')
        .addClass('shopcart-opaque');

      prevStep.addClass('shopcart-active').removeClass('shopcart-valid');
      progressBar
        .removeAttr('className')
        .addClass('step-' + prevStepNum)
        .data('current-step', prevStepNum);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="shopcart-progress-adj">
          {/* <!-- progress-bar-step start --> */}
          {/* <!-- class change to current "step-2" --> */}
          <div
            className="shopcart-step-3"
            id="shopcart-checkout-progress"
            data-current-step="3"
          >
            <div className="shopcart-progress-bar1">
              {/* <!-- "active" change to "valid" --> */}
              <div className="shopcart-step shopcart-step-1 shopcart-valid">
                <span className="shopcart-step-num"> 1</span>
                {/* <!-- "opaque" change to "" --> */}
                <BsCheck className="shopcart-fa shopcart-fa-check" />
                {/* <div className="shopcart-fa shopcart-fa-check"></div> */}
                <div className="shopcart-step-label">確認購物車</div>
              </div>
              {/* <!-- add class "active" --> */}
              <div className="shopcart-step shopcart-step-2 shopcart-valid">
                <span className="shopcart-step-num"> 2</span>
                <BsCheck className="shopcart-fa shopcart-fa-check" />
                {/* <div className="shopcart-fa shopcart-fa-check"></div> */}
                <div className="shopcart-step-label">付款與運送方式</div>
              </div>
              <div className="shopcart-step shopcart-step-3 shopcart-active">
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
          <div className="col-12 mt-3">
            <h3 className="text-center mt-4 shopcart-title-dash">資料確認</h3>
            <h5 className="text-center mt-4">請確認以下資料是否正確？</h5>
            <form onSubmit={handleSubmit}>
              <table className="table table-borderless d-flex justify-content-center">
                <tbody>
                  <tr>
                    <th scope="row">收件人姓名：</th>
                    <td>{pay && pay.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">收件人聯絡電話：</th>
                    <td>{pay && pay.phone}</td>
                  </tr>
                  <tr>
                    <th scope="row">收件地址（收件超商）：</th>
                    <td>{pay && pay.addr}</td>
                  </tr>
                  <tr>
                    <th scope="row">發票類型：</th>
                    <td>{pay && pay.invoice}</td>
                  </tr>
                  <tr>
                    <th scope="row">付款方式：</th>
                    <td>{pay && pay.pay_way}</td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- button --> */}
              <div className="shopcart-button-container text-right my-5">
                <Link
                  to="/shoppingcart/step2-pay"
                  className="shopcart-btn btn-prev btn btn-outline-primary mr-3"
                >
                  上一步
                </Link>
                <div></div>
                <button
                  type="submit"
                  to="/shoppingcart/step4-finish"
                  className="shopcart-btn btn-next btn btn-primary mr-3"
                >
                  下一步
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ShopCartCheck);
