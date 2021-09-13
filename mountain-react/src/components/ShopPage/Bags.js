import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Swal from 'sweetalert2';
import '../../styles/productbag.css';
import { CartFill, HeartFill } from 'react-bootstrap-icons';
import bagPic1 from '../../img/product-img/bags-pic1.jpeg';
import bagPic2 from '../../img/product-img/bags-pic2.jpeg';
import bagPic3 from '../../img/product-img/bags-pic3.jpeg';
import bagPic4 from '../../img/product-img/bags-pic4.jpeg';
import bagPic5 from '../../img/product-img/bags-pic5.jpeg';
import bagPic6 from '../../img/product-img/bags-pic6.png';
import bagPic7 from '../../img/product-img/bags-pic7.jpeg';
import bagPic8 from '../../img/product-img/bags-pic8.jpeg';
import bagPic9 from '../../img/product-img/bags-pic9.jpeg';

function Bags(props) {
  useEffect(() => {
    $('.productbag-heart-icon-bkg').on('click', function () {
      $(this).toggleClass('productbag-heart-icon-bkg-click');
    });
    $('.productbag-cart-icon-bkg').on('click', () => {
      // alert("已將商品加入購物車！");
      Swal.fire({
        icon: 'success',
        title: '已將商品加入購物車！',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  });
  return (
    <>
      <main>
        <div className="container">
          {/* <!-- =========search bar start========= --> */}
          <form className="form my-4">
            <div className="form-row justify-content-center">
              <input
                type="search"
                placeholder="搜尋"
                className="form-control search-bar col-5"
              />
            </div>
          </form>
          {/* <!-- =========search bar end========= --> */}
          {/* <!-- =========category bar start========= --> */}
          <div className="productbag-category-bar">
            <ul className="d-flex justify-content-center list-unstyled">
              <div className="row">
                <li className="col-3 px-0">
                  <Link to="/shop">商城首頁</Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="/shop/bags" className="productbag-active">
                    機能背包
                  </Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="#/">登山鞋</Link>
                </li>
                <li className="col-3 px-0">
                  <Link to="#/">衣服</Link>
                </li>
              </div>
            </ul>
          </div>
          {/* <!-- =========category bar end========= --> */}
          {/* <!-- =========product start========= --> */}
          <div>
            <div className="row productbag-product-list my-4">
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic1}
                        alt="The North Face 黑色便捷休閒腰包"
                        title="The North Face 黑色便捷休閒腰包"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left productbag-product-name">
                    The North Face
                    <br />
                    黑色便捷休閒腰包
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $1,780
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic2}
                        alt="The North Face 黑灰色休閒後背包"
                        title="The North Face 黑灰色休閒後背包"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left productbag-product-name">
                    The North Face
                    <br />
                    黑灰色休閒後背包
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $2,180
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic3}
                        alt="The North Face 黑色舒適休閒後背包"
                        title="The North Face 黑色舒適休閒後背包"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left productbag-product-name">
                    The North Face
                    <br />
                    黑色舒適休閒後背包
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $5,292
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic4}
                        alt="Karrimor sector 25 休閒登山後背包"
                        title="Karrimor sector 25 休閒登山後背包"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left productbag-product-name">
                    Karrimor
                    <br />
                    sector 25 休閒登山後背包
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $3,510
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic5}
                        alt="MAMMUT長毛象 Lithium Speed 20L"
                        title="MAMMUT長毛象 Lithium Speed 20L"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left productbag-product-name">
                    MAMMUT長毛象
                    <br />
                    Lithium Speed 20L
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $4,480
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="shop/product-detail">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic6}
                        alt="Arcteryx 始祖鳥 徒步背包 Brize 32"
                        title="Arcteryx 始祖鳥 徒步背包 Brize 32"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link
                    href="./product-detail.html"
                    className="text-left productbag-product-name"
                  >
                    Arcteryx 始祖鳥
                    <br />
                    徒步背包 Brize 32
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $8,341
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic7}
                        alt="GREGORY JADE 38 登山背包"
                        title="GREGORY JADE 38 登山背包"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left productbag-product-name">
                    GREGORY
                    <br />
                    JADE 38 登山背包
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $6,070
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic8}
                        alt="The North Face 藍色專業登山後背包"
                        title="The North Face 藍色專業登山後背包"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left productbag-product-name">
                    The North Face
                    <br />
                    藍色專業登山後背包
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $8,380
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 px-0">
                <div className="productbag-product-card">
                  <div className="productbag-product-img-box position-relative">
                    <Link to="#/">
                      <img
                        className="productbag-cover-fit"
                        src={bagPic9}
                        alt="The North Face 黑色舒適防護專業後背包"
                        title="The North Face 黑色舒適防護專業後背包"
                      />
                    </Link>
                    <button className="position-absolute productbag-heart-icon-bkg position-relative">
                      <HeartFill className="position-absolute productbag-heart-icon" />
                    </button>
                    <button className="position-absolute productbag-cart-icon-bkg position-relative">
                      <CartFill className="position-absolute productbag-cart-icon" />
                    </button>
                  </div>
                  <Link to="#/" className="text-left productbag-product-name">
                    The North Face
                    <br />
                    黑色舒適防護專業後背包
                  </Link>
                  <p className="text-right productbag-product-price">
                    NT $4,923
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========product end========= --> */}
        </div>
      </main>
    </>
  );
}

export default Bags;
