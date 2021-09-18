import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import $ from 'jquery';
import '../../styles/ShopCartPage/ShopCartPage.css'; //shopping-cart style
import { useAuth } from '../../context/auth'; // 取得會員資料
import { shopcartURL, zipGroupURL, zipCodeURL } from '../../utils/config';
import axios from 'axios';

//====== below icon star ======//
import { BsCheck } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//

//====== above img import end ======//

function ShopCartPay() {
  const [data, setData] = useState([]);
  // 1. 首先，建立好 html 在 return(<>...</>)。
  // 2. 設定狀態，關於共用會員資料使用useAuth()，關於地址資料放在靜態檔案中則使用useState()。
  const { member } = useAuth();
  const [zipGroup, setZipGroup] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [cities, setCities] = useState([]); // 各縣市陣列
  const [city, setCity] = useState(null); // 選擇的唯一縣市
  const [districts, setDistricts] = useState([]); //各行政區陣列
  const [codes, setCodes] = useState([]);

  // 3. 因為不能直接去改動member的資料，需要先設定一個tempMember變數，將由資料庫而來的member放進setTempMember中改變狀態，最後才會把改變後的狀態存進資料庫。
  const [cartData, setCartData] = useState({
    ship: 1,
    pay_way: 1,
    zip_code: null,
    addr: '',
  });

  // 5. 填入原始member資料後，當Html input欄位有輸入變動時，onChange呼叫handleChange函式，將react的變數tempMember，轉換成html上偵測的變數與其值([e.target.name]: e.target.value)，其中[e.target.name]為key。
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    // console.log('onChange', e.target.name, e.target.value);
    setCartData({ ...cartData, [e.target.name]: e.target.value });
    // console.log('onChange After');
  }

  // 還沒input之前，出現兩次useEffect for tempMember，結果如下：
  // useEffect for tempMember
  // useEffect for tempMember
  // 是因為第一次render原本是空的，第二次render才有東西。

  // 輸入input之後(使input欄位有變動)，結果如下：
  // onChange name 王大明1
  // onChange After
  // useEffect for tempMember
  // 因為setXXX是非同步且Single Thread，所以會把setTempMember丟給quere，先繼續下一行console.log('useEffect for tempMember');

  // 6. 從靜態檔案抓資料，取得 group.json 與 code.json 地址相關資料。
  useEffect(() => {
    async function getZipGroup() {
      try {
        const zipGroupRes = await axios.get(zipGroupURL);
        let data = zipGroupRes.data;
        // 6.1 設定 setZipGroup 狀態，取得 group.json 所有資料。
        setZipGroup(data);
        // 6.2 設定 setCities 狀態，取得物件的key值，處理成各縣市的陣列。
        setCities(Object.keys(data));
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
        console.log(data2[100].city);
        // 6.4 設定 setCodes 狀態，取得物件的key值，處理成各個郵遞區號的陣列。
        setCodes(Object.keys(data2));
      } catch (e) {
        console.log(e);
      }
    }
    getZipCode();
  }, []);

  useEffect(() => {
    if (cartData && zipCode && zipGroup) {
      // 表示上述資料都已經有了！
      if (cartData.zip_code) {
        // 表示這個使用者的 zip code 已經設定過了
        // 城市的選單已經透過 value 的綁定處理好
        // 這時候要處理的是 districts
        setDistricts(zipGroup[zipCode[cartData.zip_code].city]);
      } else {
        // tempMember 沒有 zip_code
        // 想幫 tempMember 設定一個預設值
        // 第 0 個城市的第 0 個行政區
        // cities : ["台北市", "基隆市"]
        // cities[0] 台北市
        // zipGroup["台北市"][0] => {}
        setCartData({
          ...cartData,
          zip_code: zipGroup[cities[0]][0].zip_code,
        });
      }
    }
  }, [cartData, zipCode, zipGroup, cities]);

  // 7. 當html select選單有onChange時，呼叫changeCity函式，此時選擇到的是唯一的值(e.target.value)，利用setCity來將原始狀態的null，改變成select到的value。
  function changeCity(e) {
    // 7.2 當city有選擇時，就會自動列出該縣市的所有行政區，此時的districts也是一陣列，可利用剛剛選擇到的city作為key值，在group.json裡面找到該city的districts，並且設定到option中讓使用者選擇行政區。
    setDistricts(zipGroup[e.target.value]);

    // 預選好這組行政區中的第一個
    setCartData({
      ...cartData,
      zip_code: zipGroup[e.target.value][0].zip_code,
    });
  }

  // 8. 當實際選擇了一個行政區後，會改變此行政區狀態。不過因為郵遞區號=縣市+行政區，成為連動關係，所以一但選擇了行政區，就等於知道了郵遞區號，於是改變member資料庫之前，先將該tempMember.zip_code用setTempMember改變狀態。
  function changeDistrict(e) {
    setCartData({ ...cartData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    async function getAddrData() {
      try {
        let AddrData = await axios.get(zipGroupURL);
        let data = AddrData.data;
        console.log(data); //for check
        // console.log(AddrData); //for check

        setData(data);
      } catch (e) {
        console.log(e);
      }
    }
    getAddrData();

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
            className="shopcart-step-2"
            id="shopcart-checkout-progress"
            data-current-step="2"
          >
            <div className="shopcart-progress-bar1">
              {/* <!-- "active" change to "valid" --> */}
              <div className="shopcart-step shopcart-step-1 shopcart-valid">
                <span className="shopcart-step-num"> 1</span>
                {/* <!-- "opaque" change to "" --> */}
                {/* <!-- <div class="fa fa-check opaque"></div> --> */}
                <BsCheck className="shopcart-fa shopcart-fa-check" />
                {/* <div className="shopcart-fa shopcart-fa-check"></div> */}
                <div className="shopcart-step-label">確認購物車</div>
              </div>
              {/* <!-- add class "active" --> */}
              <div className="shopcart-step shopcart-step-2 shopcart-active">
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
          <div className="col-12 mt-3">
            <h3 className="text-center mt-4 shopcart-title-dash">
              付款與運送方式
            </h3>
            <fieldset className="form-group row mt-4">
              <legend className="col-form-label col-sm-2 float-sm-left pt-0 mb-4">
                請選擇收件方式：
              </legend>
              <div className="col-sm-10 mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios1"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    宅配到府
                  </label>
                </div>
                <div className="form-check">
                  {/* <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios1"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    超商取貨
                  </label> */}

                  {/* <!-- Button trigger modal --> */}
                  {/* <button
                    type="button"
                    className="btn btn-primary ml-3"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    選擇門市
                  </button> */}
                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            付款運送方式
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body"></div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            取消
                          </button>
                          <button type="button" className="btn btn-primary">
                            確定
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <legend className="col-form-label col-sm-2 float-sm-left pt-0 mb-4">
                請填寫收件地址：
              </legend>
              <div className="col-sm-10 mb-4">
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" for="gridCheck1">
                    自動填入會員聯絡地址
                  </label>
                </div>
                {/* 選擇地址 start */}
                <div className="form-group">
                  {/* 請選擇縣市 */}
                  <select
                    className="form-control"
                    name="city"
                    value={
                      cartData &&
                      zipCode &&
                      cartData.zip_code &&
                      zipCode[cartData.zip_code].city
                    }
                    onChange={changeCity}
                  >
                    {cities &&
                      cities.map((city, i) => (
                        <option key={i} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
                  {/* 請選擇行政區 */}
                  <select
                    className="form-control"
                    value={cartData && cartData.zip_code}
                    onChange={changeDistrict}
                    name="zip_code"
                  >
                    {cities &&
                      districts &&
                      districts.map((item, i) => (
                        <option key={i} value={item.zip_code}>
                          {item.district}
                        </option>
                      ))}
                  </select>
                  {/* 輸入地址 */}
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="請輸入地址"
                  />
                </div>
                {/* 選擇地址 end */}
              </div>

              <legend className="col-form-label col-sm-2 float-sm-left pt-0 mb-4">
                請填寫收件人資訊：
              </legend>
              <div className="col-sm-10 mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="請輸入收件人姓名"
                  />
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="inputPhone"
                    placeholder="請輸入聯絡電話"
                  />
                </div>
              </div>

              <legend className="col-form-label col-sm-2 float-sm-left pt-0 mb-4">
                請選擇發票類型：
              </legend>
              <div className="col-sm-10 mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios2"
                    id="gridRadios3"
                    value="option3"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios3">
                    二聯式
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios2"
                    id="gridRadios4"
                    value="option4"
                  />
                  <label className="form-check-label" for="gridRadios4">
                    開立統編
                  </label>
                </div>
              </div>

              <legend className="col-form-label col-sm-2 float-sm-left pt-0 mb-4">
                請選擇付款方式：
              </legend>
              <div className="col-sm-10 mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios3"
                    id="gridRadios5"
                    value="option5"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios5">
                    信用卡
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios3"
                    id="gridRadios6"
                    value="option6"
                  />
                  <label className="form-check-label" for="gridRadios6">
                    貨到付款
                  </label>
                </div>
              </div>
            </fieldset>
            {/* <!-- button --> */}
            <div className="shopcart-button-container text-right mb-5">
              <Link
                to="/shoppingcart/step1-detail"
                className="shopcart-btn btn-prev btn btn-outline-primary mr-3"
              >
                上一步
              </Link>
              <Link
                to="/shoppingcart/step3-check"
                className="shopcart-btn btn-next btn btn-primary mr-3"
              >
                下一步
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ShopCartPay);
