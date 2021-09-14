import React from 'react';
import '../../styles/MapStyle/mountain_index_M.css'; //中階Map樣式
import { Link } from 'react-router-dom'; //a標籤要變成link

//====== below pages components star ======//
import { map_btn } from './pages/MapBtn';
import { pages_btn } from './pages/PagesBtn';
import { productRec_M } from './pages/ProductRec_M';
//====== below pages components end ======//

//====== below icon star ======//
import {
  StarFill,
  BrightnessHigh,
  ThermometerHalf,
} from 'react-bootstrap-icons';
import { FaShoePrints } from 'react-icons/fa';
//====== below icon end ======//

//====== below img import start ======//
import middleMapPng from '../../img/mountain-img/middleMap.png';
import middleBearPng from '../../img/mountain-img/middleBear.png';
import matchaJpeg from '../../img/mountain-img/matcha.jpeg';
import yangmingshanJpeg from '../../img/mountain-img/Yangmingshan.jpeg';
import northmountainJpeg from '../../img/mountain-img/northmountain.jpeg';
//====== above img import end ======//

function MapM() {
  return (
    <>
      {/* <!-- =========content star========= --> */}
      <div>
        <div className="mountain_bg"></div>
        {/* <!-- =========part1 map start========= --> */}
        <h1 className="mountain_bg_box container mountain_container">
          <div className="mountain_maps">
            <div className="mountain_maps_item">
              <img
                className="mountain_low_map"
                src={middleMapPng}
                alt="middle_map"
              />
              {/* FIXME: Link 要連到抹茶山的文章 */}
              <Link to="#/" className="mountain_M_Xiangshan">
                <div className="mountain_M_Xiangshan_box mountain_circle"></div>

                <div className="mountain_M_Xiangshan_box_hover">
                  <div className="mountain_M_Xiangshan_hover mountain_triangle"></div>
                  <div className="mountain_M_Xiangshan_hover_pic">
                    <div className="mountain_M_Xiangshan_hover_pic_font d-flex justify-content-center align-items-center">
                      <p className="mountain_M_Xiangshan_hover_pic_font_title text-white mb-0 mr-2">
                        抹茶山步道
                      </p>
                      <p className="mountain_M_Xiangshan_hover_pic_font_star text-warning mb-0">
                        <span className="text-white mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* FIXME: Link 要連到陽明山東西大縱走的文章 */}
              <Link to="#/" className="mountain_M_Jinmian">
                <div className="mountain_M_Jinmian_box mountain_circle"></div>

                <div className="mountain_M_Jinmian_box_hover">
                  <div className="mountain_M_Jinmian_hover mountain_triangle"></div>
                  <div className="mountain_M_Jinmian_hover_pic">
                    <div className="mountain_M_Jinmian_hover_pic_font d-flex justify-content-center align-items-center">
                      <p className="mountain_M_Jinmian_hover_pic_font_title text-white mb-0 mr-2">
                        陽明山東西大縱走
                      </p>
                      <p className="mountain_M_Jinmian_hover_pic_font_star text-warning mb-0">
                        <span className="text-white mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* FIXME: Link 要連到北插天山的文章 */}
              <Link to="#/" className="mountain_M_Chi-hsing">
                <div className="mountain_M_Chi-hsing_box mountain_circle"></div>

                <div className="mountain_M_Chi-hsing_box_hover">
                  <div className="mountain_M_Chi-hsing_hover mountain_triangle"></div>
                  <div className="mountain_M_Chi-hsing_hover_pic">
                    <div className="mountain_M_Chi-hsing_hover_pic_font d-flex justify-content-center align-items-center">
                      <p className="mountain_M_Chi-hsing_hover_pic_font_title text-white mb-0 mr-2">
                        北插天山登山步道
                      </p>
                      <p className="mountain_M_Chi-hsing_hover_pic_font_star text-warning mb-0">
                        <span className="text-white mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <img className="middleBear" src={middleBearPng} alt="middleBear" />
        </h1>
        {/* <!-- =========part1 map end========= --> */}

        <div className="container mountain_container">
          {/* <!-- =========map_btn start========= --> */}
          {map_btn}
          {/* <!-- =========map_btn end========= --> */}

          {/* <!-- =========map list start========= --> */}
          <div className="mountain_content_list">
            <h2>中階列表</h2>
            {/* 抹茶山 list star */}
            <div className="mountain_M_list">
              <div className="mountain_M_Xiangshan_list">
                <img
                  className="mountain_M_Xiangshan_pic"
                  src={matchaJpeg}
                  alt="Xiangshan"
                />
              </div>
              <div className="mountain_M_list_detail">
                <div>
                  <div className="mountain_M_list_detail_box align-items-center">
                    <div className="mountain_M_list_font_box">
                      <p className="mountain_M_list_title mr-2">抹茶山步道</p>
                      <p className="mountain_M_list_star text-warning">
                        <span className="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div className="mountain_M_list_distance_title">
                      <p className="mountain_M_list_title mr-2">您距離此地</p>
                      <p className="mountain_M_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span className="mr-3">2.2公里</span>
                      </p>

                      <p className="mountain_M_list_title mr-2">天氣</p>
                      <p className="mountain_M_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span className="mr-3">晴天</span>
                      </p>

                      <p className="mountain_M_list_title mr-2">溫度</p>
                      <p className="mountain_M_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">難度</p>
                    <div className="mountain_M_progress-bg">
                      <div className="mountain_M_progress-bar-L-Xiangshan">
                        <p className="raised">Low</p>
                      </div>
                      <div className="mountain_M_progress-bar-M-Xiangshan">
                        <p className="raised">Middle</p>
                      </div>
                      <div className="mountain_M_progress-bar-H-Xiangshan">
                        <p className="unraised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">公里</p>
                    <div className="mountain_M_progress-bg">
                      <span className="mountain_M_progress-bg-font-Xiangshan">
                        5.33km
                      </span>
                      <div className="mountain_M_progress_distance-bar"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">時間</p>
                    <div className="mountain_M_progress-bg">
                      <span className="mountain_M_progress-bg-font-Xiangshan">
                        5 hr
                      </span>
                      <div className="mountain_M_progress_time-bar"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: 要連到抹茶山的文章 */}
                <Link
                  to="#/"
                  className="mountain_M_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>
            {/* 抹茶山 list end */}

            {/* 陽明山東西大縱走 list star */}
            <div className="mountain_M_list">
              <div className="mountain_M_Jinmian_list">
                <img
                  className="mountain_M_Jinmian_pic"
                  src={yangmingshanJpeg}
                  alt="yangmingshan"
                />
              </div>
              <div className="mountain_M_list_detail">
                <div>
                  <div className="mountain_M_list_detail_box align-items-center">
                    <div className="mountain_M_list_font_box">
                      <p className="mountain_M_list_title mr-2">
                        陽明山東西大縱走
                      </p>
                      <p className="mountain_M_list_star text-warning">
                        <span className="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div className="mountain_M_list_distance_title">
                      <p className="mountain_M_list_title mr-2">您距離此地</p>
                      <p className="mountain_M_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span className="mr-3">2.2公里</span>
                      </p>

                      <p className="mountain_M_list_title mr-2">天氣</p>
                      <p className="mountain_M_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span className="mr-3">晴天</span>
                      </p>

                      <p className="mountain_M_list_title mr-2">溫度</p>
                      <p className="mountain_M_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">難度</p>
                    <div className="mountain_M_progress-bg">
                      <div className="mountain_M_progress-bar-L-Xiangshan">
                        <p className="raised">Low</p>
                      </div>
                      <div className="mountain_M_progress-bar-M-Xiangshan">
                        <p className="raised">Middle</p>
                      </div>
                      <div className="mountain_M_progress-bar-H-Xiangshan">
                        <p className="unraised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">公里</p>
                    <div className="mountain_M_progress-bg">
                      <span className="mountain_M_progress-bg-font-Xiangshan">
                        23.8km
                      </span>
                      <div className="mountain_M_progress_distance-bar_Jinmian"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">時間</p>
                    <div className="mountain_M_progress-bg">
                      <span className="mountain_M_progress-bg-font-Xiangshan">
                        11 hr
                      </span>
                      <div className="mountain_M_progress_time-bar_Jinmian"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: Link要連到陽明山東西大縱走的文章 */}
                <Link
                  to="#/"
                  className="mountain_M_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>
            {/* 陽明山東西大縱走 list star */}

            {/* 北插天山 list star */}
            <div className="mountain_M_list_last">
              <div className="mountain_M_Chi-hsing_list">
                <img
                  className="mountain_M_Chi-hsing_pic"
                  src={northmountainJpeg}
                  alt="Chi-hsing"
                />
              </div>
              <div className="mountain_M_list_detail">
                <div>
                  <div className="mountain_M_list_detail_box align-items-center">
                    <div className="mountain_M_list_font_box">
                      <p className="mountain_M_list_title mr-2">
                        北插天山登山步道
                      </p>
                      <p className="mountain_M_list_star text-warning">
                        <span className="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div className="mountain_M_list_distance_title">
                      <p className="mountain_M_list_title mr-2">您距離此地</p>
                      <p className="mountain_M_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span className="mr-3">2.2公里</span>
                      </p>

                      <p className="mountain_M_list_title mr-2">天氣</p>
                      <p className="mountain_M_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span className="mr-3">晴天</span>
                      </p>

                      <p className="mountain_M_list_title mr-2">溫度</p>
                      <p className="mountain_M_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">難度</p>
                    <div className="mountain_M_progress-bg">
                      <div className="mountain_M_progress-bar-L-Xiangshan">
                        <p className="raised">Low</p>
                      </div>
                      <div className="mountain_M_progress-bar-M-Xiangshan">
                        <p className="raised">Middle</p>
                      </div>
                      <div className="mountain_M_progress-bar-H-Xiangshan">
                        <p className="unraised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">公里</p>
                    <div className="mountain_M_progress-bg">
                      <span className="mountain_M_progress-bg-font-Xiangshan">
                        13km
                      </span>
                      <div className="mountain_M_progress_distance-bar_Chi-hsing"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div className="mountain_M_bar_list align-items-center">
                    <p className="mountain_M_list_title mr-2 mb-0">時間</p>
                    <div className="mountain_M_progress-bg">
                      <span className="mountain_M_progress-bg-font-Xiangshan">
                        8 hr 20 m
                      </span>
                      <div className="mountain_M_progress_time-bar_Chi-hsing"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: Link要連到北插天山的文章 */}
                <Link
                  to="#/"
                  className="mountain_M_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>
            {/* 北插天山 list end */}
          </div>
          {/* <!-- =========map list end========= --> */}

          {/* <!-- =========pages_btn star========= --> */}
          {pages_btn}
          {/* <!-- =========pages_btn end========= --> */}
          <div className="mountain_content_line"></div>
          {/* <!-- =========推薦商品 start========= --> */}
          {productRec_M}
          {/* <!-- =========推薦商品 end========= --> */}
        </div>
      </div>
      {/* <!-- =========content end========= --> */}
    </>
  );
}

export default MapM;
