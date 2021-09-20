import { Link } from 'react-router-dom'; //a標籤要變成link

//====== below img import start ======//
import highMapPng from '../../../img/mountain-img/highMap.png';
import highBearPng from '../../../img/mountain-img/highBear.png';
//====== above img import end ======//

//====== below icon star ======//
import { StarFill } from 'react-bootstrap-icons';
//====== below icon end ======//

export const map_H = (
  <>
    <h1 className="mountain_bg_box container mountain_container">
      <div className="mountain_maps">
        <div className="mountain_maps_item">
          <img className="mountain_low_map" src={highMapPng} alt="high_map" />
          {/* FIXME: Link 要連到大霸北稜線的文章 */}
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
                    <span className="text-white mr-1">4.8</span>
                    <StarFill className="mb-1" />
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* FIXME: Link 要連到武陵四秀登山步道的文章 */}
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
                    <span className="text-white mr-1">4.8</span>
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
                    <span className="text-white mr-1">4.8</span>
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
