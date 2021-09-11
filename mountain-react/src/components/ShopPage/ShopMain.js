import React from 'react';
import '../../styles/product.css';
import bagsPic2 from '../../img/product-img/bags-pic2.jpeg';
import bagsPic8 from '../../img/product-img/bags-pic8.jpeg';
import shoesPic8 from '../../img/product-img/shoes-pic8.jpeg';
import clothesPic5 from '../../img/product-img/clothes-pic5.jpeg';
import clothesPic8 from '../../img/product-img/clothes-pic8v2.png';

function ShopMain(props) {
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
          <div class="shopmain-category-bar">
            <ul class="d-flex justify-content-center list-unstyled">
              <div class="row">
                <li class="col-3 px-0">
                  <a class="shopmain-active" href="./product.html">
                    商城首頁
                  </a>
                </li>
                <li class="col-3 px-0">
                  <a href="./product-bag.html">機能背包</a>
                </li>
                <li class="col-3 px-0">
                  <a href="#/">登山鞋</a>
                </li>
                <li class="col-3 px-0">
                  <a href="#/">衣服</a>
                </li>
              </div>
            </ul>
          </div>
          {/* <!-- =========category bar end========= --> */}
          {/* <!-- =========vegas start========= --> */}
          <div class="shopmain-display-photo-box position-relative">
            <div class="position-absolute caret-left">
              <i class="bi bi-caret-left-fill" id="vegasPrev"></i>
            </div>
            <div class="position-absolute caret-right">
              <i class="bi bi-caret-right-fill" id="vegasNext"></i>
            </div>
          </div>
          {/* <!-- =========vegas end========= --> */}
          {/* <!-- =========編輯嚴選 start========= --> */}
          <div>
            <div class="position-relative shopmain-title-box">
              <h3 class="shopmain-selected-title text-center">編輯嚴選</h3>
              <div class="shopmain-title-underline position-absolute"></div>
            </div>
            <div class="row shopmain-product-list my-4">
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="shopmain-product-card">
                  <div class="shopmain-product-img-box position-relative">
                    <a href="#/">
                      <img
                        class="cover-fit"
                        src={bagsPic2}
                        alt="The North Face 黑灰色休閒後背包"
                        title="The North Face 黑灰色休閒後背包"
                      />
                    </a>
                    <a
                      role="button"
                      class="position-absolute shopmain-heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </a>
                    <a
                      role="button"
                      class="position-absolute shopmain-cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                    </a>
                  </div>
                  <a href="#/" class="text-left shopmain-product-name">
                    The North Face
                    <br />
                    黑灰色休閒後背包
                  </a>
                  <p class="text-right shopmain-product-price">NT $2,180</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="shopmain-product-card">
                  <div class="shopmain-product-img-box position-relative">
                    <a href="#/">
                      <img
                        class="cover-fit"
                        src={bagsPic8}
                        alt="The North Face 藍色專業登山後背包"
                        title="The North Face 藍色專業登山後背包"
                      />
                    </a>
                    <a
                      role="button"
                      class="position-absolute shopmain-heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute heart-icon"></i>
                    </a>
                    <a
                      role="button"
                      class="position-absolute shopmain-cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                    </a>
                  </div>
                  <a href="#/" class="text-left shopmain-product-name">
                    The North Face
                    <br />
                    藍色專業登山後背包
                  </a>
                  <p class="text-right shopmain-product-price">NT $8,380</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="shopmain-product-card">
                  <div class="shopmain-product-img-box position-relative">
                    <a href="./product-detail.html">
                      <img
                        class="cover-fit"
                        src={shoesPic8}
                        alt="ASOLO 阿空加瓜牛皮冰攀靴"
                        title="ASOLO 阿空加瓜牛皮冰攀靴"
                      />
                    </a>
                    <a
                      role="button"
                      class="position-absolute shopmain-heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute shopmain-heart-icon"></i>
                    </a>
                    <a
                      role="button"
                      class="position-absolute shopmain-cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                    </a>
                  </div>
                  <a
                    href="./product-detail.html"
                    class="text-left shopmain-product-name"
                  >
                    ASOLO
                    <br />
                    阿空加瓜牛皮冰攀靴
                  </a>
                  <p class="text-right shopmain-product-price">NT $8,980</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="shopmain-product-card">
                  <div class="shopmain-product-img-box position-relative">
                    <a href="#/">
                      <img
                        class="cover-fit"
                        src={clothesPic5}
                        alt="The North Face 戶外保暖羽絨外套"
                        title="The North Face 戶外保暖羽絨外套"
                      />
                    </a>
                    <a
                      role="button"
                      class="position-absolute shopmain-heart-icon-bkg position-relative"
                    >
                      <i class="bi bi-heart-fill position-absolute shopmain-heart-icon"></i>
                    </a>
                    <a
                      role="button"
                      class="position-absolute shopmain-cart-icon-bkg position-relative"
                    >
                      <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                    </a>
                  </div>
                  <a href="#/" class="text-left shopmain-product-name">
                    The North Face
                    <br />
                    戶外保暖羽絨外套
                  </a>
                  <p class="text-right shopmain-product-price">NT $8,310</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========編輯嚴選 end========= --> */}
          {/* <!-- =========熱銷不敗(本月暢銷排行) start========= --> */}
          <div>
            <div class="position-relative shopmain-title-box">
              <h3 class="shopmain-selected-title text-center">
                熱銷不敗(本月暢銷排行)
              </h3>
              <div class="shopmain-title-underline position-absolute"></div>
            </div>
            <div class="shopmain-product-list my-4 position-relative">
              <a
                href="#/"
                class="position-absolute shopmain-slider-arrows-left text-center shopmain-prev"
              >
                <i class="bi bi-chevron-left"></i>
              </a>
              <a
                href="#/"
                class="position-absolute shopmain-slider-arrows-right text-center shopmain-next"
              >
                <i class="bi bi-chevron-right"></i>
              </a>
              <div class="shopmain-product-slider row">
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <a href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src={clothesPic8}
                          alt="The North Face Summit L5 FUTURELIGHT"
                          title="The North Face Summit L5 FUTURELIGHT"
                        />
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <i class="bi bi-heart-fill position-absolute shopmain-heart-icon"></i>
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                      </a>
                    </div>
                    <a href="#/" class="text-left shopmain-product-name">
                      The North Face
                      <br />
                      Summit L5 FUTURELIGHT
                    </a>
                    <p class="text-right shopmain-product-price">NT $18,200</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <a href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src="./img/product-img/clothes-pic4.jpeg"
                          alt="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                          title="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                        />
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <i class="bi bi-heart-fill position-absolute shopmain-heart-icon"></i>
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                      </a>
                    </div>
                    <a href="#/" class="text-left shopmain-product-name">
                      Arcteryx 始祖鳥
                      <br />
                      Cerium SV 保暖羽絨連帽外套
                    </a>
                    <p class="text-right shopmain-product-price">NT $8,380</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <a href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src="./img/product-img/bags-pic6.png"
                          alt="Arcteryx 始祖鳥 徒步背包 Brize 32"
                          title="Arcteryx 始祖鳥 徒步背包 Brize 32"
                        />
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <i class="bi bi-heart-fill position-absolute shopmain-heart-icon"></i>
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                      </a>
                    </div>
                    <a href="#/" class="text-left shopmain-product-name">
                      Arcteryx 始祖鳥
                      <br />
                      徒步背包 Brize 32
                    </a>
                    <p class="text-right shopmain-product-price">NT $8,341</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <a href="#/">
                        <img
                          class="cover-fit"
                          src="./img/product-img/shoes-pic1.jpeg"
                          alt="MERRELL Tetrex Crest Wrap 女水陸三棲鞋"
                          title="MERRELL Tetrex Crest Wrap 女水陸三棲鞋"
                        />
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <i class="bi bi-heart-fill position-absolute shopmain-heart-icon"></i>
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                      </a>
                    </div>
                    <a href="#/" class="text-left shopmain-product-name">
                      MERRELL Tetrex Crest Wrap
                      <br />
                      女水陸三棲鞋
                    </a>
                    <p class="text-right shopmain-product-price">NT $2,680</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <a href="#/">
                        <img
                          class="cover-fit"
                          src="./img/product-img/clothes-pic5.jpeg"
                          alt="The North Face 戶外保暖羽絨外套"
                          title="The North Face 戶外保暖羽絨外套"
                        />
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <i class="bi bi-heart-fill position-absolute shopmain-heart-icon"></i>
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                      </a>
                    </div>
                    <a href="#/" class="text-left shopmain-product-name">
                      The North Face
                      <br />
                      戶外保暖羽絨外套
                    </a>
                    <p class="text-right shopmain-product-price">NT $8,310</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <a href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src="./img/product-img/bags-pic2.jpeg"
                          alt="The North Face 黑灰色休閒後背包"
                          title="The North Face 黑灰色休閒後背包"
                        />
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <i class="bi bi-heart-fill position-absolute shopmain-heart-icon"></i>
                      </a>
                      <a
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <i class="bi bi-cart-fill position-absolute shopmain-cart-icon"></i>
                      </a>
                    </div>
                    <a href="#/" class="text-left shopmain-product-name">
                      The North Face
                      <br />
                      黑灰色休閒後背包
                    </a>
                    <p class="text-right shopmain-product-price">NT $2,180</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========熱銷不敗(本月暢銷排行) end========= --> */}
          {/* <!-- =========熱門登山攻略 start========= --> */}
          <div>
            <div class="position-relative shopmain-title-box">
              <h3 class="shopmain-selected-title text-center">熱門登山攻略</h3>
              <div class="shopmain-title-underline position-absolute"></div>
            </div>
            <div class="row my-4">
              {/* <!--象山親山步道--> */}
              <div class="col-lg-4 px-0">
                <div class="shopmain-article-card">
                  <div class="shopmain-article-img-box">
                    <a href="../Article/article-detail.html">
                      <img
                        class="shopmain-cover-fit"
                        src="./img/article-img/xiangshan.jpeg"
                        alt="象山親山步道"
                        title="象山親山步道"
                      />
                    </a>
                  </div>
                  <a
                    href="../Article/article-detail.html"
                    class="shopmain-article-name"
                  >
                    象山親山步道
                  </a>
                  <br />
                  <p class="text-right">
                    <a
                      href="../Article/article-detail.html"
                      class="shopmain-see-more-btn"
                    >
                      查看更多
                    </a>
                  </p>
                </div>
              </div>
              {/* <!--陽明山東西大縱走--> */}
              <div class="col-lg-4 px-0">
                <div class="shopmain-article-card">
                  <div class="shopmain-article-img-box">
                    <a href="../Article/article-detail.html">
                      <img
                        class="shopmain-cover-fit"
                        src="./img/article-img/Yangmingshan.jpeg"
                        alt="陽明山東西大縱走"
                        title="陽明山東西大縱走"
                      />
                    </a>
                  </div>
                  <a
                    href="../Article/article-detail.html"
                    class="shopmain-article-name"
                  >
                    陽明山東西大縱走
                  </a>
                  <br />
                  <p class="text-right">
                    <a
                      href="../Article/article-detail.html"
                      class="shopmain-see-more-btn"
                    >
                      查看更多
                    </a>
                  </p>
                </div>
              </div>
              {/* <!--大霸北稜線--> */}
              <div class="col-lg-4 px-0">
                <div class="shopmain-article-card">
                  <div class="shopmain-article-img-box">
                    <a href="../Article/article-detail.html">
                      <img
                        class="shopmain-cover-fit"
                        src="./img/article-img/Tapachien.jpeg"
                        alt="大霸北稜線"
                        title="大霸北稜線"
                      />
                    </a>
                  </div>
                  <a
                    href="../Article/article-detail.html"
                    class="shopmain-article-name"
                  >
                    大霸北稜線
                  </a>
                  <br />
                  <p class="text-right">
                    <a
                      href="../Article/article-detail.html"
                      class="shopmain-see-more-btn"
                    >
                      查看更多
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========熱門登山攻略 end========= --> */}
        </div>
      </main>
    </>
  );
}

export default ShopMain;
