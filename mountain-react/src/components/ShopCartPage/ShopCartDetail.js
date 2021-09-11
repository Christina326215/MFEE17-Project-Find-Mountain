import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import { withRouter } from 'react-router-dom'; //可以獲取history,location,match,來使用
import '../../styles/ShopCartPage/ShopCartPage.scss'; //shopping-cart style

//====== below icon star ======//
import { BsPlus, BsDash, BsTrash } from 'react-icons/bs';
//====== below icon end ======//

//====== below img import start ======//
import ShopCartImg from '../../img/shoes-pic7.jpeg';
//====== above img import end ======//

function ShopCartDetail() {
  return (
    <>
      <div className="container">
        <div className="progress-adj">
          {/* <!-- progress-bar-step start --> */}
          {/* <!-- className change to current "step-2" --> */}
          <div className="step-1" id="checkout-progress" data-current-step="1">
            <div className="progress-bar1">
              {/* <!-- "active" change to "valid" --> */}
              <div className="step step-1 active">
                <span> 1</span>
                {/* <!-- "opaque" change to "" --> */}
                <div className="fa fa-check opaque"></div>
                <div className="step-label">確認購物車</div>
              </div>
              {/* <!-- add className "active" --> */}
              <div className="step step-2">
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
          <div className="col-lg-12 mt-3">
            <h3 className="text-center mt-4">購物車明細</h3>
            <table className="table table-borderless mt-4 text-center">
              <thead className="thead-tr-border">
                <tr>
                  <th scope="col">商品照片</th>
                  <th scope="col" className="product-name">
                    商品名稱
                  </th>
                  <th scope="col" className="product-size">
                    尺寸
                  </th>
                  <th scope="col" className="product-perprice">
                    單價
                  </th>
                  <th scope="col" className="product-count">
                    數量
                  </th>
                  <th scope="col" className="product-storage">
                    庫存
                  </th>
                  <th scope="col" className="product-subtotal">
                    小計
                  </th>
                  <th scope="col" className="product-delete">
                    刪除
                  </th>
                </tr>
              </thead>
              <tbody className="tbody-tr-border">
                <tr>
                  <td scope="row">
                    <div className="product-img-box">
                      <Link to="/#">
                        <img src={ShopCartImg} alt="" className="cover-fit" />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn add-btn">
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
                    <div className="product-img-box">
                      <Link to="/#">
                        <img src={ShopCartImg} alt="" className="cover-fit" />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn add-btn">
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
                    <div className="product-img-box">
                      <Link to="/#">
                        <img src={ShopCartImg} alt="" className="cover-fit" />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn add-btn">
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
                    <div className="product-img-box">
                      <Link to="/#">
                        <img src={ShopCartImg} alt="" className="cover-fit" />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn add-btn">
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
                    <div className="product-img-box">
                      <Link to="/#">
                        <img src={ShopCartImg} alt="" className="cover-fit" />
                      </Link>
                    </div>
                  </td>
                  <td scope="row">MERRELL Tetrex Crest Wrap 女水陸三棲鞋</td>
                  <td scope="row">
                    <div className="button-box m-3">
                      <input
                        type="button"
                        value="S"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="M"
                        className="size-btn mx-1"
                      />
                      <input
                        type="button"
                        value="L"
                        className="size-btn mx-1"
                      />
                    </div>
                  </td>
                  <td scope="row">NT$ 5,000</td>
                  <td scope="row">
                    <button className="btn minus-btn">
                      <BsDash size={24} />
                    </button>
                    <input
                      type="text"
                      className="order-number"
                      value="1"
                      readonly
                    />
                    <button className="btn add-btn">
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
            {/* <div
            className="btn-toolbar justify-content-center"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div className="btn-group mr-2" role="group" aria-label="Third group">
              <button type="button" className="btn btn-primary">|<</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-primary"><</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-primary">1</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Third group">
              <button type="button" className="btn btn-primary">></button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-primary">>|</button>
            </div>
          </div> */}
            {/* <!-- 分頁 end  --> */}
            <div className="text-right mt-3 text-right">
              <p className="total">商品總計： NT$ 5,000</p>
            </div>
            {/* <!-- button --> */}
            <div className="button-container text-right mb-5">
              <Link
                type="button"
                to="/cart-step2-pay"
                className="btn btn-next btn btn-primary"
              >
                進行結帳
              </Link>
            </div>

            <div>
              <h5>更多推薦</h5>
              <hr />
              <div className="row">
                <Link to="/#">
                  <figure className="more-product-img-box ml-5">
                    <img src={ShopCartImg} alt="" className="cover-fit" />
                  </figure>
                </Link>
                <Link to="/#">
                  <figure className="more-product-img-box ml-5">
                    <img src={ShopCartImg} alt="" className="cover-fit" />
                  </figure>
                </Link>
              </div>
            </div>
            <div>
              <h5 className="mt-5">瀏覽紀錄</h5>
              <hr />
              <div className="row">
                <Link to="/#">
                  <figure className="more-product-img-box ml-5 mb-5">
                    <img src={ShopCartImg} alt="" className="cover-fit" />
                  </figure>
                </Link>
                <Link to="/#">
                  <figure className="more-product-img-box ml-5 mb-5">
                    <img src={ShopCartImg} alt="" className="cover-fit" />
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
