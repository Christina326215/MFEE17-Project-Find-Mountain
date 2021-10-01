import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter, Redirect } from 'react-router-dom'; //可以獲取history,location,match,來使用
import { useAuth } from '../../context/auth'; // 取得會員資料
import $ from 'jquery';
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style
import { Button, Modal } from 'react-bootstrap';

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
  const { pay, member, setCartChange } = useAuth(); // 取得會員資料
  // console.log('pay', pay);

  /* zip-code 靜態檔案 start*/
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
  /* zip-code 靜態檔案 end */

  /* 購物車明細local storage start */
  //shopCartData為購物車local storage接完資料庫的整體一筆一筆的資料
  const [shopCartData, setShopCartData] = useState([]);
  //cartLocal為購物車的local storage
  const [cartLocal, setCartLocal] = useState([]);

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
  /* 購物車明細local storage end */

  /* 信用卡彈出式視窗 start */
  const [showCreditCard, setShowCreditCard] = useState(false);
  const handleClose = () => setShowCreditCard(false);
  const creditCardPay = () => setShowCreditCard(true);

  useEffect(() => {
    $('#payment-button').click(function (e) {
      // Fetch form to apply Bootstrap validation
      var form = $(this).parents('form');

      if (form[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        // Perform ajax submit here
        // form.submit();
      }

      form.addClass('was-validated');
    });
  }, []);
  /* 信用卡彈出式視窗 end */

  /* 準備 INSERT INTO 資料庫 start */
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      // console.log('submit_pay:', pay);

      let responsePayInfo = await axios.post(
        `${shopcartPayURL}/pay-info`,
        { ...pay },
        {
          withCredentials: true,
        }
      );

      // let responseOrderDetail = await axios.post(
      //   `${shopcartPayURL}/order-detail`,
      //   { ...shopCartData },
      //   {
      //     withCredentials: true,
      //   }
      // );
      // console.log('submit:', response);
      // console.log('submit_pay:', pay);

      //清空購物車
      localStorage.removeItem('ProductOrderDetail');
      setCartChange(true);
      setCartLocal([]);

      setIsSubmit(true);
      <Redirect to="/shoppingcart/step4-final" />;
    } catch (e) {
      console.error(e.response);
    }
  };

  console.log('isSubmit:', isSubmit);

  // useEffect(() => {
  //   if (isSubmit === true) {
  //     console.log('hi is true');

  //     return <Redirect to="/shoppingcart/step4-final" />;
  //   }
  // }, [isSubmit]);
  /* 準備 INSERT INTO 資料庫 end */

  /* progress bar start */
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
  /* progress bar end */

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
                    <th scope="row">收件方式：</th>
                    <td>{pay && pay.ship == 1 ? '宅配到府' : '超商取貨'}</td>
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
                <Button
                  variant="primary"
                  onClick={creditCardPay}
                  className="shopcart-btn btn-next btn btn-primary mr-3"
                >
                  是，進行付款
                </Button>

                <Modal show={showCreditCard} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>信用卡支付</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* Woohoo, you're reading this text in a modal! */}
                    <div id="pay-invoice" className="card">
                      <div className="card-body">
                        <div className="card-title">
                          <h3 className="text-center">Credit Card</h3>
                        </div>
                        {/* <hr> */}
                        <form
                          action="/echo"
                          method="post"
                          novalidate="novalidate"
                          className="needs-validation"
                        >
                          <div className="form-group text-center">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="text-muted fa fa-cc-visa fa-2x"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-cc-mastercard fa-2x"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-cc-amex fa-2x"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-cc-discover fa-2x"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="form-group has-success">
                            <label for="cc-name" className="control-label mb-1">
                              Name on card
                            </label>
                            <input
                              id="cc-name"
                              name="cc-name"
                              type="text"
                              className="form-control cc-name"
                              required
                              autocomplete="cc-name"
                              aria-required="true"
                              aria-invalid="false"
                              aria-describedby="cc-name-error"
                            />
                            <span className="invalid-feedback">
                              Enter the name as shown on credit card
                            </span>
                          </div>
                          <div className="form-group">
                            <label
                              for="cc-number"
                              className="control-label mb-1"
                            >
                              Card number
                            </label>
                            <input
                              id="cc-number"
                              name="cc-number"
                              type="tel"
                              className="form-control cc-number identified visa"
                              required=""
                              pattern="[0-9]{16}"
                            />
                            <span className="invalid-feedback">
                              Enter a valid 16 digit card number
                            </span>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label
                                  for="cc-exp"
                                  className="control-label mb-1"
                                >
                                  Expiration
                                </label>
                                <input
                                  id="cc-exp"
                                  name="cc-exp"
                                  type="tel"
                                  className="form-control cc-exp"
                                  required
                                  placeholder="MM / YY"
                                  autocomplete="cc-exp"
                                />
                                <span className="invalid-feedback">
                                  Enter the expiration date
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <label
                                for="x_card_code"
                                className="control-label mb-1"
                              >
                                Security code
                              </label>
                              <div className="input-group">
                                <input
                                  id="x_card_code"
                                  name="x_card_code"
                                  type="tel"
                                  className="form-control cc-cvc"
                                  required
                                  autocomplete="off"
                                />
                                <span className="invalid-feedback order-last">
                                  Enter the 3-digit code on back
                                </span>
                                <div className="input-group-append">
                                  <div className="input-group-text">
                                    <span
                                      className="fa fa-question-circle fa-lg"
                                      data-toggle="popover"
                                      data-container="body"
                                      data-html="true"
                                      data-title="Security Code"
                                      data-content="<div className='text-center one-card'>The 3 digit code on back of the card..<div className='visa-mc-cvc-preview'></div></div>"
                                      data-trigger="hover"
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            {/* <Link className="btn btn-lg btn-info btn-block">
                              <i className="fa fa-lock fa-lg"></i>&nbsp;
                              <span id="payment-button-amount">
                                Pay NT$ {sum(shopCartData).toLocaleString()}
                              </span>
                            </Link> */}
                          </div>
                        </form>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      取消
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleSubmit}
                      id="payment-button"
                    >
                      確認支付
                    </Button>
                  </Modal.Footer>
                </Modal>

                {/* <button
                  type="submit"
                  className="shopcart-btn btn-next btn btn-primary mr-3"
                >
                  是，進行付款
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ShopCartCheck);
