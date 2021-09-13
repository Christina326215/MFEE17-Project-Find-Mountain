import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/ShopCartPage/ShopCartPage.scss'; //shopping-cart style

//====== below icon star ======//

//====== below icon end ======//

//====== below img import start ======//
import ViewImg from '../../img/shoes-pic2.jpeg';
//====== above img import end ======//

function ShopCartFinish() {
  return (
    <>
      <div className="container">
        <div className="progress-adj">
          {/* <!-- progress-bar-step start --> */}
          {/* <!-- className change to current "step-2" --> */}
          <div className="step-4" id="checkout-progress" data-current-step="4">
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
              <div className="step step-3 valid">
                <span> 3</span>
                <div className="fa fa-check"></div>
                <div className="step-label">資料確認</div>
              </div>
              <div className="step step-4 active">
                <span> 4</span>
                <div className="fa fa-check opaque"></div>
                <div className="step-label">完成訂單</div>
              </div>
            </div>
          </div>
          {/* <!-- progress-bar-step end --> */}
        </div>
        <div className="row">
          <div className="col-12 mt-4">
            <h3 className="text-center mt-4 title-dash">
              結帳完成，訂單處理中。
            </h3>
            <div>
              <p>更多推薦</p>
              <hr />
              <div className="row">
                <Link to="/#">
                  <figure className="more-product-img-box ml-5">
                    <img src={ViewImg} alt="" className="cover-fit" />
                  </figure>
                </Link>
                <Link to="/#">
                  <figure className="more-product-img-box ml-5">
                    <img src={ViewImg} alt="" className="cover-fit" />
                  </figure>
                </Link>
              </div>
            </div>
            <div>
              <p>瀏覽紀錄</p>
              <hr />
              <div className="row">
                <Link to="/#">
                  <figure className="more-product-img-box ml-5">
                    <img src={ViewImg} alt="" className="cover-fit" />
                  </figure>
                </Link>
                <Link to="/#">
                  <figure className="more-product-img-box ml-5">
                    <img src={ViewImg} alt="" className="cover-fit" />
                  </figure>
                </Link>
              </div>
            </div>
            {/* <!-- button --> */}
            <div className="button-container text-right mb-5">
              <Link
                to="/shoppingcart-step2-pay"
                className="btn btn-prev btn btn-outline-primary mr-3"
              >
                上一步
              </Link>
              <Link to="/#" className="btn btn-next btn btn-primary mr-3">
                查看我的訂單
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(ShopCartFinish);
