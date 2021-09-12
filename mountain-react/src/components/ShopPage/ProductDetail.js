import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import '../../styles/productdetail.css';
import { QuestionCircle, HeartFill } from 'react-bootstrap-icons';

import bagsPic2 from '../../img/product-img/bags-pic2.jpeg';
import bagsPic5 from '../../img/product-img/bags-pic5.jpeg';
import bagsPic6 from '../../img/product-img/bags-pic6.png';
import bagsPic8 from '../../img/product-img/bags-pic8.jpeg';
import shoesPic5 from '../../img/product-img/shoes-pic5.jpeg';
import shoesPic8 from '../../img/product-img/shoes-pic8.jpeg';
import clothesPic5 from '../../img/product-img/clothes-pic5.jpeg';
import Tapachien from '../../img/article-img/Tapachien.jpeg';
import wuling from '../../img/article-img/wuling.jpeg';
import Mayang from '../../img/article-img/Mayang.jpeg';
import shop from '../../img/product-img/illustration/shop.svg';
import bearbear from '../../img/product-img/illustration/bearbear.png';

function ProductDetail(props) {
  return (
    <>
      <main>
        <div class="container">
          {/* <!-- =========history start========= --> */}
          <div class="position-fixed history-box position-relative">
            <div class="position-absolute history-text">瀏覽紀錄</div>
            <figure class="history-img-box">
              <Link to="shop/product-detail">
                <img src={bagsPic5} alt="" class="cover-fit" />
              </Link>
            </figure>
            <figure class="history-img-box">
              <Link to="shop/product-detail">
                <img src={bagsPic6} alt="" class="cover-fit" />
              </Link>
            </figure>
            <figure class="history-img-box">
              <Link to="shop/product-detail">
                <img src={shoesPic5} alt="" class="cover-fit" />
              </Link>
            </figure>
          </div>
          {/* <!-- =========history end========= --> */}

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
                  <Link to="/shop/bags">機能背包</Link>
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
          {/* <!-- =========product order start========= --> */}
          <div class="my-4">
            <h3 class="product-title m-3">ASOLO 阿空加瓜牛皮冰攀靴</h3>
            <div class="row">
              <div class="col-lg-7 product-pic-box my-4">
                <figure>
                  <img
                    class="cover-fit"
                    src={shoesPic8}
                    alt="ASOLO 阿空加瓜牛皮冰攀靴"
                    title="ASOLO 阿空加瓜牛皮冰攀靴"
                  />
                </figure>
              </div>
              <div class="col-lg-5 product-order-box my-4 position-relative">
                <div class="simple-introduce-box">
                  <p>商品簡介</p>
                  <ul>
                    <li>類型Alpin高山靴/男款</li>
                    <li>冰爪卡槽〇</li>
                    <li>重量990g</li>
                    <li>顏色黑灰色</li>
                  </ul>
                </div>
                <div class="size-box">
                  <p>SIZE 選擇</p>
                  <div class="button-box m-3">
                    {/* <!-- <button class="size-btn active mx-1">S</button>
                  <button class="size-btn mx-1">M</button>
                  <button class="size-btn mx-1">L</button> --> */}
                    <input type="button" value="S" class="size-btn mx-1" />
                    <input type="button" value="M" class="size-btn mx-1" />
                    <input type="button" value="L" class="size-btn mx-1" />
                  </div>
                </div>
                <div class="number-box">
                  <p>數量</p>
                  <div class="number-input-box m-3">
                    <button class="btn minus-btn">
                      <i class="bi bi-dash"></i>
                    </button>
                    <input
                      type="text"
                      class="order-number"
                      value="1"
                      readonly
                    />
                    <button class="btn add-btn">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
                <div class="line-box my-4"></div>
                <div class="price-box text-right pb-5">
                  <p>NT $1,000</p>
                </div>
                <div
                  class="
                  addcart-box
                  position-absolute
                  text-center
                  d-flex
                  position-relative
                "
                >
                  <Link
                    href="javascript:void(0)"
                    role="button"
                    class="like-btn mx-1"
                  >
                    {/* <i class="bi bi-heart-fill"></i> */}
                    <HeartFill />
                  </Link>
                  {/* <!-- <Link href="#" role="button" class="add-cart-btn mx-1"
                  >加入購物車</Link
                > --> */}
                  <button class="add-cart-btn mx-1 btn">加入購物車</button>
                  <div class="position-absolute about-membership position-relative">
                    <Link
                      href="javascript:void(0)"
                      id="seeMember"
                      class="see-member"
                    >
                      了解會員積分折扣制度
                      <QuestionCircle />
                      {/* <i class="bi bi-question-circle"></i> */}
                    </Link>
                    {/* <!-- =========about-membership-bubble start========= --> */}
                    <div class="about-membership-bubble p-3 position-absolute">
                      <span class="about-membership-bubble-arrow"></span>
                      <span class="membership">
                        會員專區登記去過的路線以獲取積分
                      </span>
                      <br />
                      <span class="membership membership-low">
                        肉腳：結帳時95折優惠
                      </span>
                      <br />
                      <span class="membership membership-medium">
                        山友 ：結帳時93折優惠
                      </span>
                      <br />
                      <span class="membership membership-high">
                        山神 ：結帳時9折優惠
                      </span>
                    </div>
                    {/* <!-- =========about-membership-bubble end========= --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========product order end========= --> */}
          {/* <!-- =========product introduce start========= --> */}
          <div class="my-4">
            <div class="line-box">
              <div class="introduce-title text-center">商品介紹</div>
            </div>
            <div class="introduce-box">
              <div class="introduce m-5">
                <figure class="introduce-img-box">
                  <img
                    alt=""
                    src="https://www.asolo.com/modules/g_productinstagram/views/img/front/17940426415401752.jpg"
                    class="cover-fit"
                  />
                </figure>
                <p>超高 CP值，經典款專業高山雪靴</p>
                <p>
                  無論是初入雪地登山門徑或 是專業老手，這雙阿空加瓜
                  冰攀靴都可以成為您的最佳 夥伴。外部為一體式防水
                  Perwanger牛皮鞋面，具防 水、防刮、透氣及耐用等特 色;內部則為
                  GORE-TEX材 質，以及精研的人體工學鞋 墊，穿著與行走時的舒適度
                  無可挑惕。
                </p>
                <p>
                  搭配底部堅實的 Vibram Vertige大底，每個部位都有
                  專業雪登等級的配備，價格
                  卻只要萬元以內，堪稱高CP值首選。除了高山攀爬、重裝徒步旅行外，也可以穿上它進行冬季雪地工作，可說是一款相當實用的登山與工作兩用靴。
                </p>
              </div>
            </div>
          </div>
          {/* <!-- =========product introduce end========= --> */}
          {/* <!-- =========product end========= --> */}
          <div class="line-box my-4"></div>
          {/* <!-- =========guideline start========= --> */}
          <div class="my-4">
            <h4 class="guideline-title m-3">
              <i class="bi bi-chevron-right"></i>
              <span>商品相關攻略</span>
            </h4>
            <div class="guideline-box row">
              <div class="col-6 col-lg-3 px-0">
                <div class="article-card">
                  <div class="article-img-box">
                    <Link href="../Article/article-detail.html">
                      <img
                        class="cover-fit"
                        src={Tapachien}
                        alt="大霸北稜線"
                        title="大霸北稜線"
                      />
                    </Link>
                  </div>
                  <Link
                    href="../Article/article-detail.html"
                    class="article-name"
                  >
                    大霸北稜線
                  </Link>
                </div>
              </div>
              <div class="col-6 col-lg-3 px-0">
                <div class="article-card">
                  <div class="article-img-box">
                    <Link href="../Article/article-detail.html">
                      <img
                        class="cover-fit"
                        src={wuling}
                        alt="武陵四秀登山步道"
                        title="武陵四秀登山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    href="../Article/article-detail.html"
                    class="article-name"
                  >
                    武陵四秀登山步道
                  </Link>
                </div>
              </div>
              <div class="col-6 col-lg-3 px-0">
                <div class="article-card">
                  <div class="article-img-box">
                    <Link href="../Article/article-detail.html">
                      <img
                        class="cover-fit"
                        src={Mayang}
                        alt="馬洋山登山步道"
                        title="馬洋山登山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    href="../Article/article-detail.html"
                    class="article-name"
                  >
                    馬洋山登山步道
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========guideline end========= --> */}
          {/* <!-- =========recommended items start========= --> */}
          <div class="my-4">
            <h4 class="recommend-title m-3">
              <i class="bi bi-chevron-right"></i>
              <span>更多推薦好物</span>
            </h4>
            <div class="recommended-items-box row">
              <div class="col-6 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src={bagsPic2}
                        alt="The North Face 黑灰色休閒後背包"
                        title="The North Face 黑灰色休閒後背包"
                      />
                    </Link>
                    <Link
                      href="javascript:void(0)"
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
              <div class="col-6 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src={bagsPic8}
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
              <div class="col-6 col-lg-3 px-0">
                <div class="product-card">
                  <div class="product-img-box position-relative">
                    <Link href="#">
                      <img
                        class="cover-fit"
                        src={clothesPic5}
                        alt="The North Face 戶外保暖羽絨外套"
                        title="The North Face 戶外保暖羽絨外套"
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
                    戶外保暖羽絨外套
                  </Link>
                  <p class="text-right product-price">NT $8,310</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- =========recommended items end========= --> */}
          {/* <!-- =========outfit start========= --> */}
          <div class="my-4 outfit-box position-relative">
            <div class="position-absolute position-relative shop-svg">
              <Link to="/outfit">
                <img src={shop} alt="穿搭商店" title="穿搭商店" />
              </Link>
              <div class="position-absolute bearbear">
                <img src={bearbear} alt="吉祥物熊熊" title="吉祥物熊熊" />
                {/* <!-- =========about-membership-bubble start========= --> */}
                <div class="bear-bubble p-3 position-absolute">
                  <span class="bear-bubble-arrow"></span>
                  <span class="membership">
                    不知道該買什麼裝備
                    <br />
                    也可以到我們的推薦穿搭看看呦！
                  </span>
                </div>
                {/* <!-- =========about-membership-bubble end========= --> */}
              </div>
            </div>
          </div>
          {/* <!-- =========outfit end========= --> */}
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
