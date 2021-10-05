import React from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link

//====== below img import start ======//
import highMapPng from '../../../img/mountain-img/highMap.png';
import highBearPng from '../../../img/mountain-img/highBear.png';
//====== above img import end ======//

//====== below icon start ======//
import { StarFill } from 'react-bootstrap-icons';
//====== below icon end ======//

function Map_H(props) {
  const { listData } = props;
  // console.log('listData map:', listData); //for check
  return (
    <>
      <h1 className="mountain_bg_box container mountain_container">
        <div className="mountain_maps">
          <div className="mountain_maps_item">
            <img className="mountain_low_map" src={highMapPng} alt="high_map" />
            {/* Link 要連到大霸北稜線的文章 */}
            <Link to="/recommend/detail/3" className="mountain_H_Xiangshan">
              <div className="mountain_H_Xiangshan_box mountain_circle"></div>

              <div className="mountain_H_Xiangshan_box_hover">
                <div className="mountain_H_Xiangshan_hover mountain_H_triangle"></div>
                <div className="mountain_H_Xiangshan_hover_pic">
                  <div className="mountain_H_Xiangshan_hover_pic_font d-flex justify-content-center align-items-center">
                    <p className="mountain_H_Xiangshan_hover_pic_font_title text-white mb-0 mr-2">
                      大霸北稜線
                    </p>
                    <p className="mountain_H_Xiangshan_hover_pic_font_star text-warning mb-0">
                      {/* FIXME: 需要特別注意資料庫改這邊要手動改 */}
                      {listData.map((list) =>
                        list.name === '大霸北稜線' ? (
                          list.starAverage === 0 ? (
                            <span key={list.id} className="text-white mr-1">
                              暫無星級評分
                            </span>
                          ) : (
                            <span key={list.id} className="text-white mr-1">
                              {list.starAverage}
                            </span>
                          )
                        ) : (
                          ''
                        )
                      )}
                      <StarFill className="mb-1" />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            {/* Link 要連到武陵四秀登山步道的文章 */}
            <Link to="/recommend/detail/6" className="mountain_H_Jinmian">
              <div className="mountain_H_Jinmian_box mountain_circle"></div>

              <div className="mountain_H_Jinmian_box_hover">
                <div className="mountain_H_Jinmian_hover mountain_H_triangle"></div>
                <div className="mountain_H_Jinmian_hover_pic">
                  <div className="mountain_H_Jinmian_hover_pic_font d-flex justify-content-center align-items-center">
                    <p className="mountain_H_Jinmian_hover_pic_font_title text-white mb-0 mr-2">
                      武陵四秀登山步道
                    </p>
                    <p className="mountain_H_Jinmian_hover_pic_font_star text-warning mb-0">
                      {/* FIXME: 需要特別注意資料庫改這邊要手動改 */}
                      {listData.map((list) =>
                        list.name === '武陵四秀登山步道' ? (
                          list.starAverage === 0 ? (
                            <span key={list.id} className="text-white mr-1">
                              暫無星級評分
                            </span>
                          ) : (
                            <span key={list.id} className="text-white mr-1">
                              {list.starAverage}
                            </span>
                          )
                        ) : (
                          ''
                        )
                      )}
                      <StarFill className="mb-1" />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            {/* FIXME: Link 要連到馬洋山登山步道的文章 */}
            <Link to="/recommend/detail/9" className="mountain_H_Chi-hsing">
              <div className="mountain_H_Chi-hsing_box mountain_circle"></div>

              <div className="mountain_H_Chi-hsing_box_hover">
                <div className="mountain_H_Chi-hsing_hover mountain_H_triangle"></div>
                <div className="mountain_H_Chi-hsing_hover_pic">
                  <div className="mountain_H_Chi-hsing_hover_pic_font d-flex justify-content-center align-items-center">
                    <p className="mountain_H_Chi-hsing_hover_pic_font_title text-white mb-0 mr-2">
                      馬洋山登山步道
                    </p>
                    <p className="mountain_H_Chi-hsing_hover_pic_font_star text-warning mb-0">
                      {/* FIXME: 需要特別注意資料庫改這邊要手動改 */}
                      {listData.map((list) =>
                        list.name === '馬洋山登山步道' ? (
                          list.starAverage === 0 ? (
                            <span key={list.id} className="text-white mr-1">
                              暫無星級評分
                            </span>
                          ) : (
                            <span key={list.id} className="text-white mr-1">
                              {list.starAverage}
                            </span>
                          )
                        ) : (
                          ''
                        )
                      )}
                      <StarFill className="mb-1" />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <img className="highBear" src={highBearPng} alt="highBear" />
      </h1>
    </>
  );
}

export default Map_H;
