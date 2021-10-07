import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter, Redirect } from 'react-router-dom'; //可以獲取history,location,match,來使用
import { useAuth } from '../../context/auth'; // 取得會員資料
import $ from 'jquery';
import Swal from 'sweetalert2';
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style
import '../../styles/MemberPage/MemberPersonal.scss';
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

function ShopCartCheck(props) {
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
  //historyItems為瀏覽紀錄local storage接完資料庫的整體一筆一筆的資料
  const [historyItems, setHistoryItems] = useState([]);
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
    // console.log('cartLocal', cartLocal);
  }, []);

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].num * items[i].price;
    }
    return total;
  };

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
      // console.log('沒有商品');
      setShopCartData([]);
    }
  }, [cartLocal]);
  /* 購物車明細local storage end */

  /* 若選擇信用卡支付，就會有彈出視窗填寫信用卡資料才會將資料送出。 start */
  const [showCreditCard, setShowCreditCard] = useState(false);
  const handleClose = () => setShowCreditCard(false);
  const creditCardPay = () => setShowCreditCard(true);
  /* 若選擇信用卡支付，就會有彈出視窗填寫信用卡資料才會將資料送出。 end */

  const validSubmit = (e) => {
    var form = $(e.currentTarget).parent().siblings('.modal-body').find('form');
    if (form[0].checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      console.log('格式ok');
      handleSubmit();
    }
    form.addClass('was-validated');
  };

  /* 準備 INSERT INTO 資料庫 start */
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      console.log('所有pay資料：', pay);
      let responsePayInfo = await axios.post(
        `${shopcartPayURL}/pay-info`,
        { ...pay, cartLocal },
        {
          withCredentials: true,
        }
      );

      //清空購物車
      localStorage.removeItem('ProductOrderDetail');
      setCartChange(true);
      setCartLocal([]);

      setShowCreditCard(false);

      Swal.fire({
        icon: 'success',
        title: '付款成功',
        showConfirmButton: false,
        timer: 1500,
      });

      props.history.replace('/shoppingcart/step4-final');
    } catch (e) {
      console.error(e.response);
    }
  };
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
                        <td>{item.name}</td>
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
                    <td>
                      <del>NT$ {sum(shopCartData).toLocaleString()}</del>
                    </td>
                  </tr>
                  <tr>
                    {member &&
                      (member.level === '1' ? (
                        <th scope="row" className="member-membership-low h5">
                          會員肉腳優惠價(95折)：
                        </th>
                      ) : member.level === '2' ? (
                        <th scope="row" className="member-membership-medium h5">
                          會員山友優惠價(90折)：
                        </th>
                      ) : (
                        <th scope="row" className="member-membership-high h5">
                          會員山神優惠價(85折)：
                        </th>
                      ))}
                    {member &&
                      (member.level === '1' ? (
                        <td className="member-membership-low h5">
                          NT${' '}
                          {Math.round(
                            sum(shopCartData) * 0.95
                          ).toLocaleString()}
                        </td>
                      ) : member.level === '2' ? (
                        <td className="member-membership-medium h5">
                          NT${' '}
                          {Math.round(sum(shopCartData) * 0.9).toLocaleString()}
                        </td>
                      ) : (
                        <td className="member-membership-high h5">
                          NT${' '}
                          {Math.round(
                            sum(shopCartData) * 0.85
                          ).toLocaleString()}
                        </td>
                      ))}
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
                {pay && pay.pay_way == 1 ? (
                  <Button
                    variant="primary"
                    onClick={creditCardPay}
                    className="shopcart-btn btn-next btn btn-primary mr-3"
                  >
                    是，進行付款
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={handleSubmit}
                    className="shopcart-btn btn-next btn btn-primary mr-3"
                  >
                    是，訂單成立
                  </Button>
                )}

                <Modal show={showCreditCard} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      本筆訂單需支付金額：
                      {member &&
                        (member.level === '1' ? (
                          <td className="member-membership-low h5">
                            NT${' '}
                            {Math.round(
                              sum(shopCartData) * 0.95
                            ).toLocaleString()}
                          </td>
                        ) : member.level === '2' ? (
                          <td className="member-membership-medium h5">
                            NT${' '}
                            {Math.round(
                              sum(shopCartData) * 0.9
                            ).toLocaleString()}
                          </td>
                        ) : (
                          <td className="member-membership-high h5">
                            NT${' '}
                            {Math.round(
                              sum(shopCartData) * 0.85
                            ).toLocaleString()}
                          </td>
                        ))}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div id="pay-invoice" className="card">
                      <div className="card-body">
                        <div className="card-title">
                          <h5 className="text-center">請填寫您的信用卡資訊</h5>
                        </div>
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
                              持卡人姓名
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
                              pattern="[^0-9]+"
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
                              信用卡號(16碼)
                            </label>
                            <input
                              id="cc-number"
                              name="cc-number"
                              type="tel"
                              className="form-control cc-number identified visa"
                              required
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
                                  信用卡有效月年(MMYY)
                                </label>
                                <input
                                  id="cc-exp"
                                  name="cc-exp"
                                  type="tel"
                                  className="form-control cc-exp"
                                  required
                                  placeholder="MMYY"
                                  autocomplete="cc-exp"
                                  pattern="[0-9]{4}"
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
                                信用卡背面末三碼
                              </label>
                              <div className="input-group">
                                <input
                                  id="x_card_code"
                                  name="x_card_code"
                                  type="tel"
                                  className="form-control cc-cvc"
                                  required
                                  autocomplete="off"
                                  pattern="[0-9]{3}"
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
                      id="payment-button"
                      onClick={validSubmit}
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
