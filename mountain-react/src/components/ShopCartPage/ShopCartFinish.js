import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style

import { shopcartURL, shopURL } from '../../utils/config';
import axios from 'axios';

//====== below icon star ======//
import { BsCheck } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import ViewImg from '../../img/shoes-pic2.jpeg';
//====== above img import end ======//

function ShopCartFinish() {
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

  return (
    <>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
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
                  {/* <div className="form-group">
                  <label for="cc-payment" className="control-label mb-1">
                    Payment amount
                  </label>
                  <input
                    id="cc-payment"
                    name="cc-payment"
                    type="text"
                    className="form-control"
                    aria-required="true"
                    aria-invalid="false"
                    required
                    // value="NT$ {sum(shopCartData).toLocaleString()}"
                  />
                  <span className="invalid-feedback">
                    Enter the payment amount
                  </span>
                </div> */}
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
                    <label for="cc-number" className="control-label mb-1">
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
                        <label for="cc-exp" className="control-label mb-1">
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
                      <label for="x_card_code" className="control-label mb-1">
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
                    <Link
                      id="payment-button"
                      to="/shoppingcart/step4-final"
                      className="btn btn-lg btn-info btn-block"
                    >
                      <i className="fa fa-lock fa-lg"></i>&nbsp;
                      <span id="payment-button-amount">
                        Pay NT$ {sum(shopCartData).toLocaleString()}
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ShopCartFinish);
