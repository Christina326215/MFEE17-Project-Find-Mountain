import React from 'react';
import '../../styles/MapStyle/mountain_index_H.css'; //高階Map樣式
import { Link } from 'react-router-dom'; //a標籤要變成link

//====== below pages components star ======//
import { map_btn } from './pages/MapBtn';
import { pages_btn } from './pages/PagesBtn';
import { productRec_H } from './pages/ProductRec_H';
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
import highMapPng from '../../img/mountain-img/highMap.png';
import highBearPng from '../../img/mountain-img/highBear.png';
import tapachienJpeg from '../../img/mountain-img/Tapachien.jpeg';
import wulingJpeg from '../../img/mountain-img/wuling.jpeg';
import mayangJpeg from '../../img/mountain-img/Mayang.jpeg';
//====== above img import end ======//

function MapH() {
  return (
    <>
      {/* <!-- =========content star========= --> */}
      <div>
        <div class="mountain_bg"></div>
        {/* <!-- =========part1 map start========= --> */}
        <h1 class="mountain_bg_box container mountain_container">
          <div class="mountain_maps">
            <div class="mountain_maps_item">
              <img class="mountain_low_map" src={highMapPng} alt="high_map" />
              {/* FIXME: Link 要連到大霸北稜線的文章 */}
              <Link to="#/" class="mountain_H_Xiangshan">
                <div class="mountain_H_Xiangshan_box mountain_circle"></div>

                <div class="mountain_H_Xiangshan_box_hover">
                  <div class="mountain_H_Xiangshan_hover mountain_H_triangle"></div>
                  <div class="mountain_H_Xiangshan_hover_pic">
                    <div class="mountain_H_Xiangshan_hover_pic_font d-flex justify-content-center align-items-center">
                      <p class="mountain_H_Xiangshan_hover_pic_font_title text-white mb-0 mr-2">
                        大霸北稜線
                      </p>
                      <p class="mountain_H_Xiangshan_hover_pic_font_star text-warning mb-0">
                        <span class="text-white mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* FIXME: Link 要連到武陵四秀登山步道的文章 */}
              <Link to="#/" class="mountain_H_Jinmian">
                <div class="mountain_H_Jinmian_box mountain_circle"></div>

                <div class="mountain_H_Jinmian_box_hover">
                  <div class="mountain_H_Jinmian_hover mountain_H_triangle"></div>
                  <div class="mountain_H_Jinmian_hover_pic">
                    <div class="mountain_H_Jinmian_hover_pic_font d-flex justify-content-center align-items-center">
                      <p class="mountain_H_Jinmian_hover_pic_font_title text-white mb-0 mr-2">
                        武陵四秀登山步道
                      </p>
                      <p class="mountain_H_Jinmian_hover_pic_font_star text-warning mb-0">
                        <span class="text-white mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* FIXME: Link 要連到馬洋山登山步道的文章 */}
              <Link to="#/" class="mountain_H_Chi-hsing">
                <div class="mountain_H_Chi-hsing_box mountain_circle"></div>

                <div class="mountain_H_Chi-hsing_box_hover">
                  <div class="mountain_H_Chi-hsing_hover mountain_H_triangle"></div>
                  <div class="mountain_H_Chi-hsing_hover_pic">
                    <div class="mountain_H_Chi-hsing_hover_pic_font d-flex justify-content-center align-items-center">
                      <p class="mountain_H_Chi-hsing_hover_pic_font_title text-white mb-0 mr-2">
                        馬洋山登山步道
                      </p>
                      <p class="mountain_H_Chi-hsing_hover_pic_font_star text-warning mb-0">
                        <span class="text-white mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <img class="highBear" src={highBearPng} alt="highBear" />
        </h1>
        {/* <!-- =========part1 map end========= --> */}

        <div class="container mountain_container">
          {/* <!-- =========map_btn start========= --> */}
          {map_btn}
          {/* <!-- =========map_btn end========= --> */}

          {/* <!-- =========map list start========= --> */}
          <div class="mountain_content_list">
            <h2>高階列表</h2>

            <div class="mountain_H_list">
              <div class="mountain_H_Xiangshan_list">
                <img
                  class="mountain_H_Xiangshan_pic"
                  src={tapachienJpeg}
                  alt="Xiangshan"
                />
              </div>
              <div class="mountain_H_list_detail">
                <div>
                  <div class="mountain_H_list_detail_box align-items-center">
                    <div class="mountain_H_list_font_box">
                      <p class="mountain_H_list_title mr-2">大霸北稜線</p>
                      <p class="mountain_H_list_star text-warning">
                        <span class="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div class="mountain_H_list_distance_title">
                      <p class="mountain_H_list_title mr-2">您距離此地</p>
                      <p class="mountain_H_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span class="mr-3">2.2公里</span>
                      </p>

                      <p class="mountain_H_list_title mr-2">天氣</p>
                      <p class="mountain_H_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span class="mr-3">晴天</span>
                      </p>

                      <p class="mountain_H_list_title mr-2">溫度</p>
                      <p class="mountain_H_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">難度</p>
                    <div class="mountain_H_progress-bg">
                      <div class="mountain_H_progress-bar-L-Xiangshan">
                        <p class="raised">Low</p>
                      </div>
                      <div class="mountain_H_progress-bar-M-Xiangshan">
                        <p class="raised">Middle</p>
                      </div>
                      <div class="mountain_H_progress-bar-H-Xiangshan">
                        <p class="raised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">公里</p>
                    <div class="mountain_H_progress-bg">
                      <span class="mountain_H_progress-bg-font-Xiangshan">
                        41.6km
                      </span>
                      <div class="mountain_H_progress_distance-bar"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">時間</p>
                    <div class="mountain_H_progress-bg">
                      <span class="mountain_H_progress-bg-font-Xiangshan mountain_H_progress-bg-font-Xiangshan_day">
                        4 days
                      </span>
                      <div class="mountain_H_progress_time-bar"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: 要連到大霸北稜線的文章 */}
                <Link
                  to="#/"
                  class="mountain_H_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>

            <div class="mountain_H_list">
              <div class="mountain_H_Jinmian_list">
                <img
                  class="mountain_H_Jinmian_pic"
                  src={wulingJpeg}
                  alt="wuling"
                />
              </div>
              <div class="mountain_H_list_detail">
                <div>
                  <div class="mountain_H_list_detail_box align-items-center">
                    <div class="mountain_H_list_font_box">
                      <p class="mountain_H_list_title mr-2">武陵四秀登山步道</p>
                      <p class="mountain_H_list_star text-warning">
                        <span class="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div class="mountain_H_list_distance_title">
                      <p class="mountain_H_list_title mr-2">您距離此地</p>
                      <p class="mountain_H_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span class="mr-3">2.2公里</span>
                      </p>

                      <p class="mountain_H_list_title mr-2">天氣</p>
                      <p class="mountain_H_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span class="mr-3">晴天</span>
                      </p>

                      <p class="mountain_H_list_title mr-2">溫度</p>
                      <p class="mountain_H_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">難度</p>
                    <div class="mountain_H_progress-bg">
                      <div class="mountain_H_progress-bar-L-Xiangshan">
                        <p class="raised">Low</p>
                      </div>
                      <div class="mountain_H_progress-bar-M-Xiangshan">
                        <p class="raised">Middle</p>
                      </div>
                      <div class="mountain_H_progress-bar-H-Xiangshan">
                        <p class="raised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">公里</p>
                    <div class="mountain_H_progress-bg">
                      <span class="mountain_H_progress-bg-font-Xiangshan">
                        29.2km
                      </span>
                      <div class="mountain_H_progress_distance-bar_Jinmian"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">時間</p>
                    <div class="mountain_H_progress-bg">
                      <span class="mountain_H_progress-bg-font-Xiangshan mountain_H_progress-bg-font-Xiangshan_day">
                        3 days
                      </span>
                      <div class="mountain_H_progress_time-bar_Jinmian"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: Link要連到武陵四秀登山步道的文章 */}
                <Link
                  to="#/"
                  class="mountain_H_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>

            <div class="mountain_H_list_last">
              <div class="mountain_H_Chi-hsing_list">
                <img
                  class="mountain_H_Chi-hsing_pic"
                  src={mayangJpeg}
                  alt="mayang"
                />
              </div>
              <div class="mountain_H_list_detail">
                <div>
                  <div class="mountain_H_list_detail_box align-items-center">
                    <div class="mountain_H_list_font_box">
                      <p class="mountain_H_list_title mr-2">馬洋山登山步道</p>
                      <p class="mountain_H_list_star text-warning">
                        <span class="text-dark mr-1">4.8</span>
                        <StarFill className="mb-1" />
                      </p>
                    </div>

                    <div class="mountain_H_list_distance_title">
                      <p class="mountain_H_list_title mr-2">您距離此地</p>
                      <p class="mountain_H_list_distance text-primary">
                        <FaShoePrints className="mr-1 mb-1" />
                        <span class="mr-3">2.2公里</span>
                      </p>

                      <p class="mountain_H_list_title mr-2">天氣</p>
                      <p class="mountain_H_list_distance text-primary">
                        <BrightnessHigh className="mr-1 mb-1" />
                        <span class="mr-3">晴天</span>
                      </p>

                      <p class="mountain_H_list_title mr-2">溫度</p>
                      <p class="mountain_H_list_distance text-primary">
                        <ThermometerHalf className="mr-1 mb-1" />
                        <span>30度</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Level bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">難度</p>
                    <div class="mountain_H_progress-bg">
                      <div class="mountain_H_progress-bar-L-Xiangshan">
                        <p class="raised">Low</p>
                      </div>
                      <div class="mountain_H_progress-bar-M-Xiangshan">
                        <p class="raised">Middle</p>
                      </div>
                      <div class="mountain_H_progress-bar-H-Xiangshan">
                        <p class="raised">High</p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Level bar end --> */}

                  {/* <!-- Distance bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">公里</p>
                    <div class="mountain_H_progress-bg">
                      <span class="mountain_H_progress-bg-font-Xiangshan">
                        33.6km
                      </span>
                      <div class="mountain_H_progress_distance-bar_Chi-hsing"></div>
                    </div>
                  </div>
                  {/* <!-- Distance bar end --> */}

                  {/* <!-- Time bar star --> */}
                  <div class="mountain_H_bar_list align-items-center">
                    <p class="mountain_H_list_title mr-2 mb-0">時間</p>
                    <div class="mountain_H_progress-bg">
                      <span class="mountain_H_progress-bg-font-Xiangshan">
                        2 days
                      </span>
                      <div class="mountain_H_progress_time-bar_Chi-hsing"></div>
                    </div>
                  </div>
                  {/* <!-- Time bar end --> */}
                </div>
                {/* FIXME: Link要連到馬洋山登山步道的文章 */}
                <Link
                  to="#/"
                  class="mountain_H_article_button btn btn-primary btn-lg"
                >
                  查看文章
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- =========map list end========= --> */}

          {/* <!-- =========pages_btn star========= --> */}
          {pages_btn}
          {/* <!-- =========pages_btn end========= --> */}
          <div class="ountain_content_line"></div>
          {/* <!-- =========推薦商品 start========= --> */}
          {productRec_H}
          {/* <!-- =========推薦商品 end========= --> */}
        </div>
      </div>
      {/* <!-- =========content end========= --> */}
    </>
  );
}

export default MapH;
