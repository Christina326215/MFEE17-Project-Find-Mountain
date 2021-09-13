import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link .
import $ from 'jquery';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick.min.js';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
// import SimpleImageSlider from 'react-simple-image-slider';
// import { vegas } from 'vegas';
// import '../../../node_modules/vegas/dist/vegas.js';
// import '../../../node_modules/vegas/dist/vegas.css';
import '../../styles/product.css';
import {
  ChevronLeft,
  ChevronRight,
  CartFill,
  HeartFill,
} from 'react-bootstrap-icons';

import display1 from '../../img/display-photo1.jpeg';
import display2 from '../../img/display-photo2.jpeg';
import display3 from '../../img/display-photo3.jpeg';
import bagsPic2 from '../../img/product-img/bags-pic2.jpeg';
import bagsPic8 from '../../img/product-img/bags-pic8.jpeg';
import shoesPic8 from '../../img/product-img/shoes-pic8.jpeg';
import shoesPic1 from '../../img/product-img/shoes-pic1.jpeg';
import clothesPic5 from '../../img/product-img/clothes-pic5.jpeg';
import clothesPic8 from '../../img/product-img/clothes-pic8v2.png';
import clothesPic4 from '../../img/product-img/clothes-pic4.jpeg';
import bagsPic6 from '../../img/product-img/bags-pic6.png';
import xiangshan from '../../img/article-img/xiangshan.jpeg';
import Yangmingshan from '../../img/article-img/Yangmingshan.jpeg';
import Tapachien from '../../img/article-img/Tapachien.jpeg';

// const images = [{ url: display1 }, { url: display2 }, { url: display3 }];
function ShopMain(props) {
  useEffect(() => {
    //   //vegasya
    //   $('.shopmain-display-photo-box').vegas({
    //     timer: false,
    //     delay: 3000,
    //     slides: [{ src: display1 }, { src: display2 }, { src: display3 }],
    //     transition: 'fade',
    //   });
    //   $('#vegasPrev').on('click', function () {
    //     $('.shopmain-display-photo-box').vegas('previous');
    //   });
    //   $('#vegasNext').on('click', function () {
    //     $('.shopmain-display-photo-box').vegas('next');
    //   });
    //slick
    $('.shopmain-display-photo-box').slick({
      rtl: true,
    });
    $('.shopmain-product-slider').slick({
      dots: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3500,
      nextArrow: $('.shopmain-next'),
      prevArrow: $('.shopmain-prev'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
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
                  <Link class="shopmain-active" to="/shop">
                    商城首頁
                  </Link>
                </li>
                <li class="col-3 px-0">
                  <Link to="/shop/bags">機能背包</Link>
                </li>
                <li class="col-3 px-0">
                  <Link href="#/">登山鞋</Link>
                </li>
                <li class="col-3 px-0">
                  <Link href="#/">衣服</Link>
                </li>
              </div>
            </ul>
          </div>
          {/* <!-- =========category bar end========= --> */}
          {/* <!-- =========vegas start========= --> */}
          <div class="shopmain-display-photo-box position-relative row">
            <img src={display1} alt="" title="" class="shopmain-cover-fit" />
            <img src={display2} alt="" title="" class="shopmain-cover-fit" />
            <img src={display3} alt="" title="" class="shopmain-cover-fit" />
            <div class="position-absolute caret-left">
              <i class="bi bi-caret-left-fill" id="vegasPrev"></i>
            </div>
            <div class="position-absolute caret-right">
              <i class="bi bi-caret-right-fill" id="vegasNext"></i>
            </div>
            {/* <div class="shopmain-slider-box col-12">
              <SimpleImageSlider
                showNavs={true}
                showBullets={true}
                width={1100}
                height={300}
                images={images}
              />
            </div> */}
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
                    <Link href="#/">
                      <img
                        class="shopmain-cover-fit"
                        src={bagsPic2}
                        alt="The North Face 黑灰色休閒後背包"
                        title="The North Face 黑灰色休閒後背包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute shopmain-heart-icon-bkg position-relative"
                    >
                      <HeartFill class="position-absolute shopmain-heart-icon" />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute shopmain-cart-icon-bkg position-relative"
                    >
                      <CartFill class="position-absolute shopmain-cart-icon" />
                    </Link>
                  </div>
                  <Link href="#/" class="text-left shopmain-product-name">
                    The North Face
                    <br />
                    黑灰色休閒後背包
                  </Link>
                  <p class="text-right shopmain-product-price">NT $2,180</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="shopmain-product-card">
                  <div class="shopmain-product-img-box position-relative">
                    <Link href="#/">
                      <img
                        class="shopmain-cover-fit"
                        src={bagsPic8}
                        alt="The North Face 藍色專業登山後背包"
                        title="The North Face 藍色專業登山後背包"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute shopmain-heart-icon-bkg position-relative"
                    >
                      <HeartFill class="position-absolute shopmain-heart-icon" />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute shopmain-cart-icon-bkg position-relative"
                    >
                      <CartFill class="position-absolute shopmain-cart-icon" />
                    </Link>
                  </div>
                  <Link href="#/" class="text-left shopmain-product-name">
                    The North Face
                    <br />
                    藍色專業登山後背包
                  </Link>
                  <p class="text-right shopmain-product-price">NT $8,380</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="shopmain-product-card">
                  <div class="shopmain-product-img-box position-relative">
                    <Link to="/shop/product-detail">
                      <img
                        class="shopmain-cover-fit"
                        src={shoesPic8}
                        alt="ASOLO 阿空加瓜牛皮冰攀靴"
                        title="ASOLO 阿空加瓜牛皮冰攀靴"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute shopmain-heart-icon-bkg position-relative"
                    >
                      <HeartFill class="position-absolute shopmain-heart-icon" />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute shopmain-cart-icon-bkg position-relative"
                    >
                      <CartFill class="position-absolute shopmain-cart-icon" />
                    </Link>
                  </div>
                  <Link
                    to="/shop/product-detail"
                    class="text-left shopmain-product-name"
                  >
                    ASOLO
                    <br />
                    阿空加瓜牛皮冰攀靴
                  </Link>
                  <p class="text-right shopmain-product-price">NT $8,980</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3 px-0">
                <div class="shopmain-product-card">
                  <div class="shopmain-product-img-box position-relative">
                    <Link href="#/">
                      <img
                        class="shopmain-cover-fit"
                        src={clothesPic5}
                        alt="The North Face 戶外保暖羽絨外套"
                        title="The North Face 戶外保暖羽絨外套"
                      />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute shopmain-heart-icon-bkg position-relative"
                    >
                      <HeartFill class="position-absolute shopmain-heart-icon" />
                    </Link>
                    <Link
                      role="button"
                      class="position-absolute shopmain-cart-icon-bkg position-relative"
                    >
                      <CartFill class="position-absolute shopmain-cart-icon" />
                    </Link>
                  </div>
                  <Link href="#/" class="text-left shopmain-product-name">
                    The North Face
                    <br />
                    戶外保暖羽絨外套
                  </Link>
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
              <Link
                href="#/"
                class="position-absolute shopmain-slider-arrows-left text-center shopmain-prev"
              >
                {/* <i class="bi bi-chevron-left"></i> */}
                <ChevronLeft class="shopmain-slider-arrows-left-height" />
              </Link>
              <Link
                href="#/"
                class="position-absolute shopmain-slider-arrows-right text-center shopmain-next"
              >
                {/* <i class="bi bi-chevron-right"></i> */}
                <ChevronRight class="shopmain-slider-arrows-right-height" />
              </Link>
              <div class="shopmain-product-slider row">
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <Link href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src={clothesPic8}
                          alt="The North Face Summit L5 FUTURELIGHT"
                          title="The North Face Summit L5 FUTURELIGHT"
                        />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <HeartFill class="position-absolute shopmain-heart-icon" />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <CartFill class="position-absolute shopmain-cart-icon" />
                      </Link>
                    </div>
                    <Link href="#/" class="text-left shopmain-product-name">
                      The North Face
                      <br />
                      Summit L5 FUTURELIGHT
                    </Link>
                    <p class="text-right shopmain-product-price">NT $18,200</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <Link href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src={clothesPic4}
                          alt="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                          title="Arcteryx 始祖鳥 Cerium SV 保暖羽絨連帽外套"
                        />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <HeartFill class="position-absolute shopmain-heart-icon" />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <CartFill class="position-absolute shopmain-cart-icon" />
                      </Link>
                    </div>
                    <Link href="#/" class="text-left shopmain-product-name">
                      Arcteryx 始祖鳥
                      <br />
                      Cerium SV 保暖羽絨連帽外套
                    </Link>
                    <p class="text-right shopmain-product-price">NT $8,380</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <Link href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src={bagsPic6}
                          alt="Arcteryx 始祖鳥 徒步背包 Brize 32"
                          title="Arcteryx 始祖鳥 徒步背包 Brize 32"
                        />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <HeartFill class="position-absolute shopmain-heart-icon" />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <CartFill class="position-absolute shopmain-cart-icon" />
                      </Link>
                    </div>
                    <Link href="#/" class="text-left shopmain-product-name">
                      Arcteryx 始祖鳥
                      <br />
                      徒步背包 Brize 32
                    </Link>
                    <p class="text-right shopmain-product-price">NT $8,341</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <Link href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src={shoesPic1}
                          alt="MERRELL Tetrex Crest Wrap 女水陸三棲鞋"
                          title="MERRELL Tetrex Crest Wrap 女水陸三棲鞋"
                        />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <HeartFill class="position-absolute shopmain-heart-icon" />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <CartFill class="position-absolute shopmain-cart-icon" />
                      </Link>
                    </div>
                    <Link href="#/" class="text-left shopmain-product-name">
                      MERRELL Tetrex Crest Wrap
                      <br />
                      女水陸三棲鞋
                    </Link>
                    <p class="text-right shopmain-product-price">NT $2,680</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <Link href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src={clothesPic5}
                          alt="The North Face 戶外保暖羽絨外套"
                          title="The North Face 戶外保暖羽絨外套"
                        />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <HeartFill class="position-absolute shopmain-heart-icon" />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <CartFill class="position-absolute shopmain-cart-icon" />
                      </Link>
                    </div>
                    <Link href="#/" class="text-left shopmain-product-name">
                      The North Face
                      <br />
                      戶外保暖羽絨外套
                    </Link>
                    <p class="text-right shopmain-product-price">NT $8,310</p>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="shopmain-product-card">
                    <div class="shopmain-product-img-box position-relative">
                      <Link href="#/">
                        <img
                          class="shopmain-cover-fit"
                          src={bagsPic2}
                          alt="The North Face 黑灰色休閒後背包"
                          title="The North Face 黑灰色休閒後背包"
                        />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-heart-icon-bkg position-relative"
                      >
                        <HeartFill class="position-absolute shopmain-heart-icon" />
                      </Link>
                      <Link
                        role="button"
                        class="position-absolute shopmain-cart-icon-bkg position-relative"
                      >
                        <CartFill class="position-absolute shopmain-cart-icon" />
                      </Link>
                    </div>
                    <Link href="#/" class="text-left shopmain-product-name">
                      The North Face
                      <br />
                      黑灰色休閒後背包
                    </Link>
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
                    <Link href="../Article/article-detail.html">
                      <img
                        class="shopmain-cover-fit"
                        src={xiangshan}
                        alt="象山親山步道"
                        title="象山親山步道"
                      />
                    </Link>
                  </div>
                  <Link
                    href="../Article/article-detail.html"
                    class="shopmain-article-name"
                  >
                    象山親山步道
                  </Link>
                  <br />
                  <p class="text-right">
                    <Link
                      href="../Article/article-detail.html"
                      class="shopmain-see-more-btn"
                    >
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--陽明山東西大縱走--> */}
              <div class="col-lg-4 px-0">
                <div class="shopmain-article-card">
                  <div class="shopmain-article-img-box">
                    <Link href="../Article/article-detail.html">
                      <img
                        class="shopmain-cover-fit"
                        src={Yangmingshan}
                        alt="陽明山東西大縱走"
                        title="陽明山東西大縱走"
                      />
                    </Link>
                  </div>
                  <Link
                    href="../Article/article-detail.html"
                    class="shopmain-article-name"
                  >
                    陽明山東西大縱走
                  </Link>
                  <br />
                  <p class="text-right">
                    <Link
                      href="../Article/article-detail.html"
                      class="shopmain-see-more-btn"
                    >
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
              {/* <!--大霸北稜線--> */}
              <div class="col-lg-4 px-0">
                <div class="shopmain-article-card">
                  <div class="shopmain-article-img-box">
                    <Link href="../Article/article-detail.html">
                      <img
                        class="shopmain-cover-fit"
                        src={Tapachien}
                        alt="大霸北稜線"
                        title="大霸北稜線"
                      />
                    </Link>
                  </div>
                  <Link
                    href="../Article/article-detail.html"
                    class="shopmain-article-name"
                  >
                    大霸北稜線
                  </Link>
                  <br />
                  <p class="text-right">
                    <Link
                      href="../Article/article-detail.html"
                      class="shopmain-see-more-btn"
                    >
                      查看更多
                    </Link>
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
