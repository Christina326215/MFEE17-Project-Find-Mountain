import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/ShopCartPage/ShopCartPage.scss'; //shopping-cart style

//====== below icon star ======//

//====== below icon end ======//

//====== below img import start ======//

//====== above img import end ======//

function ShopCartPay() {
  return (
    <>
      <div className="container">
        <div className="progress-adj">
          {/* <!-- progress-bar-step start --> */}
          {/* <!-- className change to current "step-2" --> */}
          <div className="step-2" id="checkout-progress" data-current-step="2">
            <div className="progress-bar1">
              {/* <!-- "active" change to "valid" --> */}
              <div className="step step-1 valid">
                <span> 1</span>
                {/* <!-- "opaque" change to "" --> */}
                {/* <!-- <div className="fa fa-check opaque"></div> --> */}
                <div className="fa fa-check"></div>
                <div className="step-label">確認購物車</div>
              </div>
              {/* <!-- add className "active" --> */}
              <div className="step step-2 active">
                <span> 2</span>
                <div className="fa fa-check opaque"></div>
                <div className="step-label">付款與運送方式</div>
              </div>
              <div className="step step-3">
                <span> 3</span>
                <div className="fa fa-check opaque"></div>
                <div className="step-label">資料確認</div>
              </div>
              <div className="step step-4">
                <span> 4</span>
                <div className="fa fa-check opaque"></div>
                <div className="step-label">完成訂單</div>
              </div>
            </div>
          </div>
          {/* <!-- progress-bar-step end --> */}
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <h3 className="text-center mt-4 title-dash">付款與運送方式</h3>
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
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios1"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    超商取貨
                  </label>

                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary ml-3"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    選擇門市
                  </button>
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
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="請輸入您的收件地址"
                  />
                </div>
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
            <div className="button-container text-right mb-5">
              <Link
                to="/shoppingcart-step1-detail"
                className="btn btn-prev btn btn-outline-primary mr-3"
              >
                上一步
              </Link>
              <Link
                to="/shoppingcart-step3-check"
                className="btn btn-next btn btn-primary mr-3"
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
