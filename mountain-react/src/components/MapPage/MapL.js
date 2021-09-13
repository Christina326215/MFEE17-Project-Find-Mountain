import React from 'react';
import $ from 'jquery';
import '../../styles/MapStyle/mountain_index.css'; //初階Map樣式
import { Link } from 'react-router-dom'; //a標籤要變成link

//====== below icon star ======//
import {
  StarFill,
  BrightnessHigh,
  ThermometerHalf,
  HeartFill,
  CartFill,
} from 'react-bootstrap-icons';
import { FaShoePrints } from 'react-icons/fa';
//====== below icon end ======//

//====== below img import start ======//
import lowMapPng from '../../img/mountain-img/lowMap.png';
import lowBearPng from '../../img/mountain-img/lowBear.png';
import xiangshanJpeg from '../../img/mountain-img/xiangshan.jpeg';
import jinmianshanJpeg from '../../img/mountain-img/jinmianshan.jpeg';
import sevenstarJpeg from '../../img/mountain-img/sevenstar.jpeg';
import bags_pic1Jpeg from '../../img/product-img/bags-pic1.jpeg';
import bags_pic2Jpeg from '../../img/product-img/bags-pic2.jpeg';
import shoes_pic1Jpeg from '../../img/product-img/shoes-pic1.jpeg';
import clothes_pic1Jpeg from '../../img/product-img/clothes-pic1.jpeg';
//====== above img import end ======//

function MapL() {
  const heartIcon = () => {
    $('a.mountain_heart-icon-bkg').each(function () {
      $(this).click(function () {
        $(this).toggleClass('mountain_heart-icon-bkg-click');
      });
    });
  };

  const cartIcon = () => {
    alert('已將商品加入購物車！');
  };

  return (
    <>
      {/* <!-- =========content star========= --> */}
      <div>
        <div className="mountain_bg"></div>
        {/* <!-- =========part1 map start========= --> */}
        <h1 className="mountain_bg_box container mountain_container">
          <div className="mountain_maps">
            <div className="mountain_maps_item">
              <img className="mountain_low_map" src={lowMapPng} alt="low_map" />
              {/* FIXME: Link 要連到象山的文章 */}
              <Link to="#/" className="mountain_Xiangshan">
                <div className="mountain_Xiangshan_box mountain_circle"></div>

                <div className="mountain_Xiangshan_box_hover">
                  <div className="mountain_Xiangshan_hover mountain_triangle"></div>
                  <div className="mountain_Xiangshan_hover_pic">
                    <div className="mountain_Xiangshan_hover_pic_font d-flex justify-content-center align-items-center">
                      <p className="mountain_Xiangshan_hover_pic_font_title text-white mb-0 mr-2">
                        象山步道
                      </p>
                      <p className="mountain_Xiangshan_hover_pic_font_star text-warning mb-0">
                        <span className="text-white mr-1">4.8</span>
                        <StarFill />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* FIXME: Link 要連到金面的文章 */}
              <Link to="#/" className="mountain_Jinmian">
                <div className="mountain_Jinmian_box mountain_circle"></div>

                <div className="mountain_Jinmian_box_hover">
                  <div className="mountain_Jinmian_hover mountain_triangle"></div>
                  <div className="mountain_Jinmian_hover_pic">
                    <div className="mountain_Jinmian_hover_pic_font d-flex justify-content-center align-items-center">
                      <p className="mountain_Jinmian_hover_pic_font_title text-white mb-0 mr-2">
                        金面步道
                      </p>
                      <p className="mountain_Jinmian_hover_pic_font_star text-warning mb-0">
                        <span className="text-white mr-1">4.8</span>
                        <StarFill />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* FIXME: Link 要連到七星的文章 */}
              <Link to="#/" className="mountain_Chi-hsing">
                <div className="mountain_Chi-hsing_box mountain_circle"></div>

                <div className="mountain_Chi-hsing_box_hover">
                  <div className="mountain_Chi-hsing_hover mountain_triangle"></div>
                  <div className="mountain_Chi-hsing_hover_pic">
                    <div className="mountain_Chi-hsing_hover_pic_font d-flex justify-content-center align-items-center">
                      <p className="mountain_Chi-hsing_hover_pic_font_title text-white mb-0 mr-2">
                        七星步道
                      </p>
                      <p className="mountain_Chi-hsing_hover_pic_font_star text-warning mb-0">
                        <span className="text-white mr-1">4.8</span>
                        <StarFill />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <img className="mountain_lowBear" src={lowBearPng} alt="lowBear" />
        </h1>
        {/* <!-- =========part1 map end========= --> */}

        <div className="container mountain_container">
          {/* <!-- =========map_btn start========= --> */}
          <div className="mountain_map_btn">
            <Link
              to="/map"
              className="mountain_low_button btn btn-primary btn-lg"
            >
              初階
            </Link>
            <Link
              to="/map/levelM"
              className="mountain_middle_button btn btn-primary btn-lg"
            >
              中階
            </Link>
            <Link
              to="/map/levelH"
              className="mountain_high_button btn btn-primary btn-lg"
            >
              高階
            </Link>
          </div>
          {/* <!-- =========map_btn end========= --> */}

          {/* <!-- =========map list start========= --> */}
          <div className="mountain_content_list">
            <h2>初階列表</h2>

            <div className="mountain_list">
              <div className="mountain_Xiangshan_list">
                <img
                  className="mountain_Xiangshan_pic"
                  src={xiangshanJpeg}
                  alt="Xiangshan"
                />
              </div>
              <div className="mountain_list_detail">
                <div>
                  <div className="mountain_list_detail_box align-items-center">
                    <div className="mountain_list_font_box">
                      <p className="mountain_list_title mr-2">象山步道</p>
                      <p className="mountain_list_star text-warning">
                        <span className="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div className="mountain_list_distance_title">
                      <p className="mountain_list_title mr-2">您距離此地</p>
                      <p className="mountain_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span className="mr-3">2.2公里</span>
                      </p>

                      <p className="mountain_list_title mr-2">天氣</p>
                      <p className="mountain_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span className="mr-3">晴天</span>
                      </p>

                      <p className="mountain_list_title mr-2">溫度</p>
                      <p className="mountain_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">難度</p>
                    <div className="mountain_progress-bg">
                      <div className="mountain_progress-bar-L-Xiangshan">
                        <p className="raised">Low</p>
                      </div>
                      <div className="mountain_progress-bar-M-Xiangshan">
                        <p className="unraised">Middle</p>
                      </div>
                      <div className="mountain_progress-bar-H-Xiangshan">
                        <p className="unraised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">公里</p>
                    <div className="mountain_progress-bg">
                      <span className="mountain_progress-bg-font-Xiangshan">
                        2.3km
                      </span>
                      <div className="mountain_progress_distance-bar"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">時間</p>
                    <div className="mountain_progress-bg">
                      <span className="mountain_progress-bg-font-Xiangshan">
                        1 hr 40 m
                      </span>
                      <div className="mountain_progress_time-bar"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: Link要連到象山的文章 */}
                <Link
                  to="#/"
                  className="mountain_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>
            <div className="mountain_list">
              <div className="mountain_Jinmian_list">
                <img
                  className="mountain_Jinmian_pic"
                  src={jinmianshanJpeg}
                  alt="Jinmian"
                />
              </div>
              <div className="mountain_list_detail">
                <div>
                  <div className="mountain_list_detail_box align-items-center">
                    <div className="mountain_list_font_box">
                      <p className="mountain_list_title mr-2">金面步道</p>
                      <p className="mountain_list_star text-warning">
                        <span className="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div className="mountain_list_distance_title">
                      <p className="mountain_list_title mr-2">您距離此地</p>
                      <p className="mountain_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span className="mr-3">2.2公里</span>
                      </p>

                      <p className="mountain_list_title mr-2">天氣</p>
                      <p className="mountain_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span className="mr-3">晴天</span>
                      </p>

                      <p className="mountain_list_title mr-2">溫度</p>
                      <p className="mountain_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">難度</p>
                    <div className="mountain_progress-bg">
                      <div className="mountain_progress-bar-L-Xiangshan">
                        <p className="raised">Low</p>
                      </div>
                      <div className="mountain_progress-bar-M-Xiangshan">
                        <p className="unraised">Middle</p>
                      </div>
                      <div className="mountain_progress-bar-H-Xiangshan">
                        <p className="unraised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">公里</p>
                    <div className="mountain_progress-bg">
                      <span className="mountain_progress-bg-font-Xiangshan">
                        3km
                      </span>
                      <div className="mountain_progress_distance-bar_Jinmian"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">時間</p>
                    <div className="mountain_progress-bg">
                      <span className="mountain_progress-bg-font-Xiangshan">
                        1 hr
                      </span>
                      <div className="mountain_progress_time-bar_Jinmian"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: Link要連到金面的文章 */}
                <Link
                  to="#/"
                  className="mountain_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>

            <div className="mountain_list_last">
              <div className="mountain_Chi-hsing_list">
                <img
                  className="mountain_Chi-hsing_pic"
                  src={sevenstarJpeg}
                  alt="Chi-hsing"
                />
              </div>
              <div className="mountain_list_detail">
                <div>
                  <div className="mountain_list_detail_box align-items-center">
                    <div className="mountain_list_font_box">
                      <p className="mountain_list_title mr-2">七星步道</p>
                      <p className="mountain_list_star text-warning">
                        <span className="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div className="mountain_list_distance_title">
                      <p className="mountain_list_title mr-2">您距離此地</p>
                      <p className="mountain_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span className="mr-3">2.2公里</span>
                      </p>

                      <p className="mountain_list_title mr-2">天氣</p>
                      <p className="mountain_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span className="mr-3">晴天</span>
                      </p>

                      <p className="mountain_list_title mr-2">溫度</p>
                      <p className="mountain_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">難度</p>
                    <div className="mountain_progress-bg">
                      <div className="mountain_progress-bar-L-Xiangshan">
                        <p className="raised">Low</p>
                      </div>
                      <div className="mountain_progress-bar-M-Xiangshan">
                        <p className="unraised">Middle</p>
                      </div>
                      <div className="mountain_progress-bar-H-Xiangshan">
                        <p className="unraised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">公里</p>
                    <div className="mountain_progress-bg">
                      <span className="mountain_progress-bg-font-Xiangshan">
                        5km
                      </span>
                      <div className="mountain_progress_distance-bar_Chi-hsing"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div className="mountain_bar_list align-items-center">
                    <p className="mountain_list_title mr-2 mb-0">時間</p>
                    <div className="mountain_progress-bg">
                      <span className="mountain_progress-bg-font-Xiangshan">
                        2 hr 30 m
                      </span>
                      <div className="mountain_progress_time-bar_Chi-hsing"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: Link要連到七星的文章 */}
                <Link
                  to="#/"
                  className="mountain_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- =========map list end========= --> */}

          {/* <!-- =========pages_btn star========= --> */}
          <div
            className="btn-toolbar justify-content-center mountain_btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="Third group"
            >
              <button type="button" className="btn btn-primary">
                |&lt;
              </button>
            </div>
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-primary">
                &lt;
              </button>
            </div>
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-primary">
                1
              </button>
            </div>
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="Third group"
            >
              <button type="button" className="btn btn-primary">
                &gt;
              </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-primary">
                &gt;|
              </button>
            </div>
          </div>
          {/* <!-- =========pages_btn end========= --> */}
          <div className="mountain_content_line"></div>
          {/* <!-- =========推薦商品 start========= --> */}
          <div className="mountain_product_box">
            <div className="mountain_product_title">
              <h3 className="h2">推薦商品</h3>
            </div>
            <div className="mountain_product-list my-4">
              <div className="px-0">
                <div className="mountain_product-card">
                  <div className="mountain_product-img-box position-relative">
                    {/* FIXME: 產品照或許從後端抓 */}
                    <img
                      className="mountain_cover-fit"
                      src={bags_pic1Jpeg}
                      alt=""
                    />
                    {/* FIXME: 將產品加到收藏裡 & Link */}
                    <Link
                      to="#/"
                      role="button"
                      className="position-absolute mountain_heart-icon-bkg position-relative"
                      onClick={heartIcon}
                    >
                      <i className="position-absolute mountain_heart-icon">
                        <HeartFill />
                      </i>
                    </Link>
                    {/* FIXME: 將產品加到購物車裡 & Link */}
                    <Link
                      to="#/"
                      role="button"
                      className="position-absolute mountain_cart-icon-bkg position-relative"
                      onClick={cartIcon}
                    >
                      <i className="position-absolute mountain_cart-icon">
                        <CartFill />
                      </i>
                    </Link>
                  </div>
                  {/* FIXME: Link將產品連到商品頁面 */}
                  <Link to="#/" className="text-left mountain_product-name">
                    The North Face
                    <br />
                    黑色便捷休閒腰包
                  </Link>
                  {/* FIXME: 價錢從後端抓 */}
                  <p className="text-left mountain_product-price">NT $1,780</p>
                </div>
              </div>
              <div className="px-0">
                <div className="mountain_product-card">
                  <div className="mountain_product-img-box position-relative">
                    {/* FIXME: 產品照或許從後端抓 */}
                    <img
                      className="mountain_cover-fit"
                      src={bags_pic2Jpeg}
                      alt=""
                    />
                    {/* FIXME: 將產品加到收藏裡 & Link */}
                    <Link
                      to="#/"
                      role="button"
                      className="position-absolute mountain_heart-icon-bkg position-relative"
                      onClick={heartIcon}
                    >
                      <i className="position-absolute mountain_heart-icon">
                        <HeartFill />
                      </i>
                    </Link>
                    {/* FIXME: 將產品加到購物車裡 & Link */}
                    <Link
                      to="#/"
                      role="button"
                      className="position-absolute mountain_cart-icon-bkg position-relative"
                      onClick={cartIcon}
                    >
                      <i className="position-absolute mountain_cart-icon">
                        <CartFill />
                      </i>
                    </Link>
                  </div>
                  {/* FIXME: Link將產品連到商品頁面 */}
                  <Link to="#/" className="text-left mountain_product-name">
                    The North Face
                    <br />
                    黑灰色休閒後背包
                  </Link>
                  {/* FIXME: 價錢從後端抓 */}
                  <p className="text-left mountain_product-price">NT $2,180</p>
                </div>
              </div>

              <div className="px-0">
                <div className="mountain_product-card">
                  <div className="mountain_product-img-box position-relative">
                    {/* FIXME: 產品照或許從後端抓 */}
                    <img
                      className="mountain_cover-fit"
                      src={shoes_pic1Jpeg}
                      alt=""
                    />
                    {/* FIXME: 將產品加到收藏裡 & Link */}
                    <Link
                      to="#/"
                      role="button"
                      className="position-absolute mountain_heart-icon-bkg position-relative"
                      onClick={heartIcon}
                    >
                      {/* FIXME: 將產品加到收藏裡 & Link */}
                      <i className="position-absolute mountain_heart-icon">
                        <HeartFill />
                      </i>
                    </Link>
                    {/* FIXME: 將產品加到購物車裡 & Link */}
                    <Link
                      to="#/"
                      role="button"
                      className="position-absolute mountain_cart-icon-bkg position-relative"
                      onClick={cartIcon}
                    >
                      <i className="position-absolute mountain_cart-icon">
                        <CartFill />
                      </i>
                    </Link>
                  </div>
                  {/* FIXME: Link將產品連到商品頁面 */}
                  <Link to="#/" className="text-left mountain_product-name">
                    MERRELL
                    <br />
                    女水陸三棲鞋
                  </Link>
                  {/* FIXME: 價錢從後端抓 */}
                  <p className="text-left mountain_product-price">NT $2,680</p>
                </div>
              </div>
              <div className="px-0">
                <div className="mountain_product-card">
                  <div className="mountain_product-img-box position-relative">
                    {/* FIXME: 產品照或許從後端抓 */}
                    <img
                      className="mountain_cover-fit"
                      src={clothes_pic1Jpeg}
                      alt=""
                    />
                    {/* FIXME: 將產品加到收藏裡 & Link */}
                    <Link
                      to="#/"
                      role="button"
                      className="position-absolute mountain_heart-icon-bkg position-relative"
                      onClick={heartIcon}
                    >
                      <i className="position-absolute mountain_heart-icon">
                        <HeartFill />
                      </i>
                    </Link>
                    {/* FIXME: 將產品加到購物車裡 & Link */}
                    <Link
                      to="#/"
                      role="button"
                      className="position-absolute mountain_cart-icon-bkg position-relative"
                      onClick={cartIcon}
                    >
                      <i className="position-absolute mountain_cart-icon">
                        <CartFill />
                      </i>
                    </Link>
                  </div>
                  {/* FIXME: Link將產品連到商品頁面 */}
                  <Link to="#/" className="text-left mountain_product-name">
                    Decathlon
                    <br />
                    男透氣休閒健行外套
                  </Link>
                  {/* FIXME: 價錢從後端抓 */}
                  <p className="text-rleft mountain_product-price">NT $499</p>
                </div>
              </div>

              <div className="mountain_downLowBear"></div>
              <div className="mountain_bearSpeak"></div>
            </div>
          </div>
          {/* <!-- =========推薦商品 end========= --> */}
        </div>
      </div>
    </>
  );
}

export default MapL;
