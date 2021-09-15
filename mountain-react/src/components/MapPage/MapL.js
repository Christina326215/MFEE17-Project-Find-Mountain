import React, { useState, useEffect } from 'react';
import '../../styles/MapStyle/mountain_index.css'; //初階Map樣式
import { Link } from 'react-router-dom'; //a標籤要變成link

//====== below api connect tool star ======//
import axios from 'axios';
import { mapURL } from '../../utils/config';
//====== below api connect tool end ======//

//====== below pages components star ======//
import { map_btn } from './pages/MapBtn';
import { pages_btn } from './pages/PagesBtn';
import { productRec } from './pages/ProductRec';
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
import lowMapPng from '../../img/mountain-img/lowMap.png';
import lowBearPng from '../../img/mountain-img/lowBear.png';
import xiangshanJpeg from '../../img/mountain-img/xiangshan.jpeg';
import jinmianshanJpeg from '../../img/mountain-img/jinmianshan.jpeg';
import sevenstarJpeg from '../../img/mountain-img/sevenstar.jpeg';
//====== above img import end ======//

function MapL() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    //=== Api star ===//
    async function mapLData() {
      try {
        const mapData = await axios.get(mapURL);
        console.log(mapData.data); //for check
        setListData(mapData.data);
      } catch (e) {
        console.log(e);
      }
    }
    mapLData();
    //=== Api end ===//

    //=== 象山 progress Bar star ===//
    var XiangshanDistanceWidth = document.querySelector(
      '.mountain_progress_distance-bar'
    );
    //FIXME: 導入後端資料 //
    XiangshanDistanceWidth.style.width = 'calc(2.3%)';
    var XiangshanTimeWidth = document.querySelector(
      '.mountain_progress_time-bar'
    );
    //FIXME: 導入後端資料 //
    XiangshanTimeWidth.style.width = 'calc(1.4 / 60 * 100%)';
    //=== 象山 progress Bar star ===//

    //=== 金面 progress Bar star ===//
    var JinmianDistanceWidth = document.querySelector(
      '.mountain_progress_distance-bar_Jinmian'
    );
    //FIXME: 導入後端資料 //
    JinmianDistanceWidth.style.width = 'calc(3%)';
    var JinmianTimeWidth = document.querySelector(
      '.mountain_progress_time-bar_Jinmian'
    );
    //FIXME: 導入後端資料 //
    JinmianTimeWidth.style.width = 'calc(1 / 60 * 100%)';
    //=== 金面 progress Bar star ===//

    //=== 七星 progress Bar star ===//
    var ChihsingDistanceWidth = document.querySelector(
      '.mountain_progress_distance-bar_Chi-hsing'
    );
    //FIXME: 導入後端資料 //
    ChihsingDistanceWidth.style.width = 'calc(5%)';
    var ChihsingTimeWidth = document.querySelector(
      '.mountain_progress_time-bar_Chi-hsing'
    );
    //FIXME: 導入後端資料 //
    ChihsingTimeWidth.style.width = 'calc(2.3 / 60 * 100%)';
    //=== 七星 progress Bar star ===//
  }, []);

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
                        <StarFill className="mb-1" />
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
                        <StarFill className="mb-1" />
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
                        <StarFill className="mb-1" />
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
          {map_btn}
          {/* <!-- =========map_btn end========= --> */}

          {/* <!-- =========map list start========= --> */}
          <div className="mountain_content_list">
            <h2>初階列表</h2>
            {/* 象山 list star */}
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
            {/* 象山 list end */}

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
            {/* 七星 list end */}
          </div>
          {/* <!-- =========map list end========= --> */}

          {/* <!-- =========pages_btn star========= --> */}
          {pages_btn}
          {/* <!-- =========pages_btn end========= --> */}
          <div className="mountain_content_line"></div>
          {/* <!-- =========推薦商品 start========= --> */}
          {productRec}
          {/* <!-- =========推薦商品 end========= --> */}
        </div>
      </div>
    </>
  );
}

export default MapL;
