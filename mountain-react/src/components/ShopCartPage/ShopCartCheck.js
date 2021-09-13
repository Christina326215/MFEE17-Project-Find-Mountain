import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/ShopCartPage/ShopCartPage.scss'; //shopping-cart style

//====== below icon star ======//

//====== below icon end ======//

//====== below img import start ======//

//====== above img import end ======//

function ShopCartCheck() {
  return (
    <>
      <div className="container">
        <div className="progress-adj">
          {/* <!-- progress-bar-step start --> */}
          {/* <!-- className change to current "step-2" --> */}
          <div className="step-3" id="checkout-progress" data-current-step="3">
            <div className="progress-bar1">
              {/* <!-- "active" change to "valid" --> */}
              <div className="step step-1 valid">
                <span> 1</span>
                {/* <!-- "opaque" change to "" --> */}
                <div className="fa fa-check"></div>
                <div className="step-label">確認購物車</div>
              </div>
              {/* <!-- add className "active" --> */}
              <div className="step step-2 valid">
                <span> 2</span>
                <div className="fa fa-check"></div>
                <div className="step-label">付款與運送方式</div>
              </div>
              <div className="step step-3 active">
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
            <h3 className="text-center mt-4 title-dash">資料確認</h3>
            <h5 className="text-center mt-4">請確認以下資料是否正確？</h5>
            <table className="table table-borderless d-flex justify-content-center">
              <tbody>
                <tr>
                  <th scope="row">收件人姓名：</th>
                  <td>王小明</td>
                </tr>
                <tr>
                  <th scope="row">收件人聯絡電話：</th>
                  <td>0900123456</td>
                </tr>
                <tr>
                  <th scope="row">收件地址（收件超商）：</th>
                  <td>中央大學</td>
                </tr>
                <tr>
                  <th scope="row">發票類型：</th>
                  <td>二聯式</td>
                </tr>
                <tr>
                  <th scope="row">付款方式：</th>
                  <td>信用卡繳費</td>
                </tr>
              </tbody>
            </table>
            {/* <!-- button --> */}
            <div className="button-container text-right my-5">
              <Link
                to="/shoppingcart-step2-pay"
                className="btn btn-prev btn btn-outline-primary mr-3"
              >
                上一步
              </Link>
              <div></div>
              <Link
                to="/shoppingcart-step4-finish"
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

export default withRouter(ShopCartCheck);
