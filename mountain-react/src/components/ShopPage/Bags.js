import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/product-bag.css';

function Bags(props) {
  return (
    <>
      <main>
        <div class="container">
          {/* <!-- =========search bar start========= --> */}
          <form class="form my-4">
            <div class="form-row justify-content-center">
              <input
                type="search"
                placeholder="搜尋"
                class="form-control search-bar col-5"
              />
            </div>
          </form>
          {/* <!-- =========search bar end========= --> */}
          {/* <!-- =========category bar start========= --> */}
          <div class="category-bar">
            <ul class="d-flex justify-content-center list-unstyled">
              <div class="row">
                <li class="col-3 px-0">
                  <Link to="/shop">商城首頁</Link>
                </li>
                <li class="col-3 px-0">
                  <Link href="./product-bag.html" class="active">
                    機能背包
                  </Link>
                </li>
                <li class="col-3 px-0">
                  <Link href="#">登山鞋</Link>
                </li>
                <li class="col-3 px-0">
                  <Link href="#">衣服</Link>
                </li>
              </div>
            </ul>
          </div>
          {/* <!-- =========category bar end========= --> */}
          {/* <!-- =========product start========= --> */}
          <div>
            <div class="row product-list my-4">
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic1.jpeg"
                        alt="The North Face 黑色便捷休閒腰包"
                        title="The North Face 黑色便捷休閒腰包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link href="#" class="text-left product-name">
                    The North Face
                    <br />
                    黑色便捷休閒腰包
                  </Link>
                  <p class="text-right product-price">NT $1,780</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic2.jpeg"
                        alt="The North Face 黑灰色休閒後背包"
                        title="The North Face 黑灰色休閒後背包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link href="#" class="text-left product-name">
                    The North Face
                    <br />
                    黑灰色休閒後背包
                  </Link>
                  <p class="text-right product-price">NT $2,180</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic3.jpeg"
                        alt="The North Face 黑色舒適休閒後背包"
                        title="The North Face 黑色舒適休閒後背包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link href="#" class="text-left product-name">
                    The North Face
                    <br />
                    黑色舒適休閒後背包
                  </Link>
                  <p class="text-right product-price">NT $5,292</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic4.jpeg"
                        alt="Karrimor sector 25 休閒登山後背包"
                        title="Karrimor sector 25 休閒登山後背包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link href="#" class="text-left product-name">
                    Karrimor
                    <br />
                    sector 25 休閒登山後背包
                  </Link>
                  <p class="text-right product-price">NT $3,510</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic5.jpeg"
                        alt="MAMMUT長毛象 Lithium Speed 20L"
                        title="MAMMUT長毛象 Lithium Speed 20L"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link href="#" class="text-left product-name">
                    MAMMUT長毛象
                    <br />
                    Lithium Speed 20L
                  </Link>
                  <p class="text-right product-price">NT $4,480</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="./product-detail.html">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic6.png"
                        alt="Arcteryx 始祖鳥 徒步背包 Brize 32"
                        title="Arcteryx 始祖鳥 徒步背包 Brize 32"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link
                    href="./product-detail.html"
                    class="text-left product-name"
                  >
                    Arcteryx 始祖鳥
                    <br />
                    徒步背包 Brize 32
                  </Link>
                  <p class="text-right product-price">NT $8,341</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic7.jpeg"
                        alt="GREGORY JADE 38 登山背包"
                        title="GREGORY JADE 38 登山背包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link href="#" class="text-left product-name">
                    GREGORY
                    <br />
                    JADE 38 登山背包
                  </Link>
                  <p class="text-right product-price">NT $6,070</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic8.jpeg"
                        alt="The North Face 藍色專業登山後背包"
                        title="The North Face 藍色專業登山後背包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link href="#" class="text-left product-name">
                    The North Face
                    <br />
                    藍色專業登山後背包
                  </Link>
                  <p class="text-right product-price">NT $8,380</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src="./img/product-img/bags-pic9.jpeg"
                        alt="The North Face 黑色舒適防護專業後背包"
                        title="The North Face 黑色舒適防護專業後背包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute cart-icon"></i>
                    </Link>
                  </div>
                  <Link href="#" class="text-left product-name">
                    The North Face
                    <br />
                    黑色舒適防護專業後背包
                  </Link>
                  <p class="text-right product-price">NT $4,923</p>
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
