import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import { useAuth } from '../../context/auth'; // 取得會員資料
import $ from 'jquery';
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style

import {
  shopcartPayURL,
  shopURL,
  zipGroupURL,
  zipCodeURL,
} from '../../utils/config';
import axios from 'axios';

//====== below icon star ======//
import { BsCheck } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//

//====== above img import end ======//

function ShopCartCheck() {
  const { pay, member } = useAuth(); // 取得會員資料
  console.log('pay', pay);

  //shopCartData為購物車local storage接完資料庫的整體一筆一筆的資料
  const [shopCartData, setShopCartData] = useState([]);
  //cartLocal為購物車的local storage
  const [cartLocal, setCartLocal] = useState([]);

  //取得local storage轉為陣列的資料 ProductOrder
  function getCartFromLocalStorage() {
    const ProductOrder =
      JSON.parse(localStorage.getItem('ProductOrderDetail')) || '[]';
    console.log(ProductOrder);
    setCartLocal(ProductOrder);
  }
  //一進畫面先讀取local storage
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  //local storage接API --> shopCartData
  useEffect(() => {
    var ProductOrder = JSON.parse(localStorage.getItem('ProductOrderDetail'));
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
        }
        console.log('new_orderArray', orderArray);
        setShopCartData(orderArray);
      } catch (e) {
        console.log(e);
      }
    }
    getProductData();
  }, [cartLocal]);

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].num * items[i].price;
    }
    return total;
  };

  const [zipGroup, setZipGroup] = useState(null);
  const [zipCode, setZipCode] = useState(null);

  useEffect(() => {
    async function getZipGroup() {
      try {
        const zipGroupRes = await axios.get(zipGroupURL);
        let data = zipGroupRes.data;
        setZipGroup(data);
      } catch (e) {
        console.log(e);
      }
    }
    getZipGroup();

    async function getZipCode() {
      try {
        const zipCodeRes = await axios.get(zipCodeURL);
        let data2 = zipCodeRes.data;
        // 6.3 設定 setZipCode 狀態，取得 code.json 所有資料。
        setZipCode(data2);
      } catch (e) {
        console.log(e);
      }
    }
    getZipCode();
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
      formData.append('user_id', member.id);
      let response = await axios.post(`${shopcartPayURL}`, formData);
      console.log('submit:', response);
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
                    <th scope="row">收件地址：</th>
                    <td>
                      {pay &&
                        zipCode &&
                        zipCode[pay.zip_code].city +
                          zipCode[pay.zip_code].district +
                          pay.addr}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">發票類型：</th>
                    <td>
                      {pay && pay.invoice == 1 ? '二聯式發票' : '三聯式發票'}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">付款方式：</th>
                    <td>{pay && pay.pay_way == 1 ? '信用卡' : '貨到付款'}</td>
                  </tr>
                  {shopCartData.map((item, i) => (
                    <div>
                      <hr />
                      <tr>
                        <th scope="row">訂購商品名稱：</th>
                        <td>{item.product_name}</td>
                      </tr>
                      <tr>
                        <th scope="row">訂購單一品項數量：</th>
                        <td>{item.num}</td>
                      </tr>
                      <tr>
                        <th scope="row">訂購單一品項小計：</th>
                        {/* <td>NT$ {item.price.toLocaleString()}</td> */}
                        <td>
                          NT${' '}
                          {(parseInt(item.price) * item.num).toLocaleString()}
                        </td>
                      </tr>
                      <hr />
                    </div>
                  ))}
                  <hr />
                  <tr>
                    <th scope="row">訂購商品總額：</th>
                    <td>NT$ {sum(shopCartData).toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- button --> */}
              <div className="shopcart-button-container text-right my-5">
                <Link
                  to="/shoppingcart/step2-pay"
                  className="shopcart-btn btn-prev btn btn-outline-primary mr-3"
                >
                  否，進行修改
                </Link>
                <div></div>
                <Link to="/shoppingcart/credit-card-pay">
                  <button
                    type="submit"
                    className="shopcart-btn btn-next btn btn-primary mr-3"
                  >
                    是，進行付款
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ShopCartCheck);
