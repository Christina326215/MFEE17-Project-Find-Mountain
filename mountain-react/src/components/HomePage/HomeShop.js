import React, { useEffect } from 'react';
import $ from 'jquery';
import 'sweetalert';
import '../../styles/HomeShop.scss';
import { Link } from 'react-router-dom'; //a標籤要變成link

//images
import product from '../../img/contentShop/Mask Group.png';
import Blobs2 from '../../img/contentShop/Vector-1.png';
//icon
import { Cart, PersonCircle, HeartFill } from 'react-bootstrap-icons';
function HomeShop(props) {
  let heartStyle = { color: '#eea9a9', fontSize: '20px', position: 'absolute' };

  return (
    <>
      {/* <!-- =========電商 star========= --> */}
      <div className="homepage-shop">
        <div className="container">
          <div className="homepage-blobs2 position-absolute">
            <img src={Blobs2} alt="" />
          </div>
          <div className="homepage-contentShop">
            <h2 className="text-center pb-5">經典熱銷</h2>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="homepage-product-card">
                  <div className="homepage-product-img-box position-relative">
                    <Link to="./product-detail.html">
                      <img
                        className="cover-fit"
                        src={product}
                        alt="The North Face 黑灰色休閒後背包"
                        title="The North Face 黑灰色休閒後背包"
                      />
                    </Link>
                    <a
                      role="button"
                      className="position-absolute heart-icon-bkg position-relative"
                    >
                      <i className="bi bi-heart-fill position-absolute heart-icon"></i>
                    </a>
                    <a
                      role="button"
                      className="position-absolute cart-icon-bkg position-relative"
                    >
                      <i className="bi bi-cart-fill position-absolute cart-icon"></i>
                    </a>
                    <Link
                      to="./product-detail.html"
                      className="text-left homepage-product-name"
                    >
                      brand
                      <br />
                      阿空加瓜牛皮冰攀靴
                    </Link>
                    <p className="text-right homepage-product-price">
                      NT $8,980
                    </p>
                  </div>
                </div>
              </div>

              <div className="homepage-btnMore">
                <button className="btn btn-primary homepage-more">
                  更多產品
                </button>
              </div>
            </div>
            <div className="homepage-contentShop">
              <h2 className="text-center pb-5">編輯嚴選</h2>
              <div className="row">
                <div className="col-6 col-md-4 col-lg-3 px-0">
                  <div className="homepage-product-card">
                    <div className="homepage-product-img-box position-relative">
                      <Link to="./product-detail.html">
                        <img
                          className="cover-fit"
                          src={product}
                          title="The North Face 黑灰色休閒後背包"
                        />
                      </Link>

                      <a
                        role="button"
                        className="position-absolute heart-icon-bkg position-relative"
                      >
                        {/* <HeartFill style={heartStyle} /> */}
                        {/* <i className="bi bi-heart-fill position-absolute heart-icon"></i> */}
                      </a>
                      <a
                        role="button"
                        className="position-absolute cart-icon-bkg position-relative"
                      >
                        <i className="bi bi-cart-fill position-absolute cart-icon"></i>
                      </a>
                      <Link
                        to="./product-detail.html"
                        className="text-left homepage-product-name"
                      >
                        brand
                        <br />
                        阿空加瓜牛皮冰攀靴
                      </Link>
                      <p className="text-right homepage-product-price">
                        NT $8,980
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homepage-btnMore">
                <button className="btn btn-primary homepage-more">
                  更多產品
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =========電商 end========= --> */}
    </>
  );
}
export default HomeShop;
