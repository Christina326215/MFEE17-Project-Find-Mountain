import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link

//====== below img import start ======//
import jinmianshanJpeg from '../../../img/mountain-img/jinmianshan.jpeg';
import sevenstarJpeg from '../../../img/mountain-img/sevenstar.jpeg';
import yangmingshanJpeg from '../../../img/mountain-img/Yangmingshan.jpeg';
import northmountainJpeg from '../../../img/mountain-img/northmountain.jpeg';
import wulingJpeg from '../../../img/mountain-img/wuling.jpeg';
import mayangJpeg from '../../../img/mountain-img/Mayang.jpeg';
//====== above img import end ======//

//====== below icon star ======//
import {
  StarFill,
  BrightnessHigh,
  ThermometerHalf,
} from 'react-bootstrap-icons';
import { FaShoePrints } from 'react-icons/fa';
//====== below icon end ======//

function Padding() {
  // //=== 金面 progress Bar star ===//
  // var JinmianDistanceWidth = document.querySelector(
  //   '.mountain_progress_distance-bar_Jinmian'
  // );
  // //FIXME: 導入後端資料 //
  // JinmianDistanceWidth.style.width = 'calc(3%)';
  // var JinmianTimeWidth = document.querySelector(
  //   '.mountain_progress_time-bar_Jinmian'
  // );
  // //FIXME: 導入後端資料 //
  // JinmianTimeWidth.style.width = 'calc(1 / 60 * 100%)';
  // //=== 金面 progress Bar star ===//

  // //=== 七星 progress Bar star ===//
  // var ChihsingDistanceWidth = document.querySelector(
  //   '.mountain_progress_distance-bar_Chi-hsing'
  // );
  // //FIXME: 導入後端資料 //
  // ChihsingDistanceWidth.style.width = 'calc(5%)';
  // var ChihsingTimeWidth = document.querySelector(
  //   '.mountain_progress_time-bar_Chi-hsing'
  // );
  // //FIXME: 導入後端資料 //
  // ChihsingTimeWidth.style.width = 'calc(2.3 / 60 * 100%)';
  // //=== 七星 progress Bar star ===//
  return (
    <div>
      {/* 金面 list star */}
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
                <span className="mountain_progress-bg-font-Xiangshan">3km</span>
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
      {/* 金面 list end */}

      {/* 七星 list star */}
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
                <span className="mountain_progress-bg-font-Xiangshan">5km</span>
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
      {/* 七星 list end */}

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
                <p className="mountain_M_list_title mr-2">陽明山東西大縱走</p>
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
                <p className="mountain_M_list_title mr-2">北插天山登山步道</p>
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

      {/* 武陵四秀登山步道 list star */}
      <div className="mountain_H_list">
        <div className="mountain_H_Jinmian_list">
          <img
            className="mountain_H_Jinmian_pic"
            src={wulingJpeg}
            alt="wuling"
          />
        </div>
        <div className="mountain_H_list_detail">
          <div>
            <div className="mountain_H_list_detail_box align-items-center">
              <div className="mountain_H_list_font_box">
                <p className="mountain_H_list_title mr-2">武陵四秀登山步道</p>
                <p className="mountain_H_list_star text-warning">
                  <span className="text-dark mr-1">4.8</span>
                  <StarFill className="mb-1" />
                </p>
              </div>

              <div className="mountain_H_list_distance_title">
                <p className="mountain_H_list_title mr-2">您距離此地</p>
                <p className="mountain_H_list_distance text-primary">
                  <FaShoePrints className="mr-1 mb-1" />
                  <span className="mr-3">2.2公里</span>
                </p>

                <p className="mountain_H_list_title mr-2">天氣</p>
                <p className="mountain_H_list_distance text-primary">
                  <BrightnessHigh className="mr-1 mb-1" />
                  <span className="mr-3">晴天</span>
                </p>

                <p className="mountain_H_list_title mr-2">溫度</p>
                <p className="mountain_H_list_distance text-primary">
                  <ThermometerHalf className="mr-1 mb-1" />
                  <span>30度</span>
                </p>
              </div>
            </div>

            {/* <!-- Level bar star --> */}
            <div className="mountain_H_bar_list align-items-center">
              <p className="mountain_H_list_title mr-2 mb-0">難度</p>
              <div className="mountain_H_progress-bg">
                <div className="mountain_H_progress-bar-L-Xiangshan">
                  <p className="raised">Low</p>
                </div>
                <div className="mountain_H_progress-bar-M-Xiangshan">
                  <p className="raised">Middle</p>
                </div>
                <div className="mountain_H_progress-bar-H-Xiangshan">
                  <p className="raised">High</p>
                </div>
              </div>
            </div>
            {/* <!-- Level bar end --> */}

            {/* <!-- Distance bar star --> */}
            <div className="mountain_H_bar_list align-items-center">
              <p className="mountain_H_list_title mr-2 mb-0">公里</p>
              <div className="mountain_H_progress-bg">
                <span className="mountain_H_progress-bg-font-Xiangshan">
                  29.2km
                </span>
                <div className="mountain_H_progress_distance-bar_Jinmian"></div>
              </div>
            </div>
            {/* <!-- Distance bar end --> */}

            {/* <!-- Time bar star --> */}
            <div className="mountain_H_bar_list align-items-center">
              <p className="mountain_H_list_title mr-2 mb-0">時間</p>
              <div className="mountain_H_progress-bg">
                <span className="mountain_H_progress-bg-font-Xiangshan mountain_H_progress-bg-font-Xiangshan_day">
                  3 days
                </span>
                <div className="mountain_H_progress_time-bar_Jinmian"></div>
              </div>
            </div>
            {/* <!-- Time bar end --> */}
          </div>
          {/* FIXME: Link要連到武陵四秀登山步道的文章 */}
          <Link
            to="#/"
            className="mountain_H_article_button btn btn-primary btn-lg"
          >
            查看文章
          </Link>
        </div>
      </div>
      {/* 武陵四秀登山步道 list star */}

      {/* 馬洋山登山步道 list star */}
      <div className="mountain_H_list_last">
        <div className="mountain_H_Chi-hsing_list">
          <img
            className="mountain_H_Chi-hsing_pic"
            src={mayangJpeg}
            alt="mayang"
          />
        </div>
        <div className="mountain_H_list_detail">
          <div>
            <div className="mountain_H_list_detail_box align-items-center">
              <div className="mountain_H_list_font_box">
                <p className="mountain_H_list_title mr-2">馬洋山登山步道</p>
                <p className="mountain_H_list_star text-warning">
                  <span className="text-dark mr-1">4.8</span>
                  <StarFill className="mb-1" />
                </p>
              </div>

              <div className="mountain_H_list_distance_title">
                <p className="mountain_H_list_title mr-2">您距離此地</p>
                <p className="mountain_H_list_distance text-primary">
                  <FaShoePrints className="mr-1 mb-1" />
                  <span className="mr-3">2.2公里</span>
                </p>

                <p className="mountain_H_list_title mr-2">天氣</p>
                <p className="mountain_H_list_distance text-primary">
                  <BrightnessHigh className="mr-1 mb-1" />
                  <span className="mr-3">晴天</span>
                </p>

                <p className="mountain_H_list_title mr-2">溫度</p>
                <p className="mountain_H_list_distance text-primary">
                  <ThermometerHalf className="mr-1 mb-1" />
                  <span>30度</span>
                </p>
              </div>
            </div>

            {/* <!-- Level bar star --> */}
            <div className="mountain_H_bar_list align-items-center">
              <p className="mountain_H_list_title mr-2 mb-0">難度</p>
              <div className="mountain_H_progress-bg">
                <div className="mountain_H_progress-bar-L-Xiangshan">
                  <p className="raised">Low</p>
                </div>
                <div className="mountain_H_progress-bar-M-Xiangshan">
                  <p className="raised">Middle</p>
                </div>
                <div className="mountain_H_progress-bar-H-Xiangshan">
                  <p className="raised">High</p>
                </div>
              </div>
            </div>
            {/* <!-- Level bar end --> */}

            {/* <!-- Distance bar star --> */}
            <div className="mountain_H_bar_list align-items-center">
              <p className="mountain_H_list_title mr-2 mb-0">公里</p>
              <div className="mountain_H_progress-bg">
                <span className="mountain_H_progress-bg-font-Xiangshan">
                  33.6km
                </span>
                <div className="mountain_H_progress_distance-bar_Chi-hsing"></div>
              </div>
            </div>
            {/* <!-- Distance bar end --> */}

            {/* <!-- Time bar star --> */}
            <div className="mountain_H_bar_list align-items-center">
              <p className="mountain_H_list_title mr-2 mb-0">時間</p>
              <div className="mountain_H_progress-bg">
                <span className="mountain_H_progress-bg-font-Xiangshan">
                  2 days
                </span>
                <div className="mountain_H_progress_time-bar_Chi-hsing"></div>
              </div>
            </div>
            {/* <!-- Time bar end --> */}
          </div>
          {/* FIXME: Link要連到馬洋山登山步道的文章 */}
          <Link
            to="#/"
            className="mountain_H_article_button btn btn-primary btn-lg"
          >
            查看文章
          </Link>
        </div>
      </div>
      {/* 馬洋山登山步道 list end */}
    </div>
  );
}

export default Padding;
