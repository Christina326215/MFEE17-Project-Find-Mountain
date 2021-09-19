import { Link } from 'react-router-dom'; //a標籤要變成link
//====== below img import start ======//
import lowMapPng from '../../../img/mountain-img/lowMap.png';
import lowBearPng from '../../../img/mountain-img/lowBear.png';
//====== above img import end ======//

//====== below icon star ======//
import { StarFill } from 'react-bootstrap-icons';
//====== below icon end ======//

export const map = (
  <>
    <h1 className="mountain_bg_box container mountain_container">
      <div className="mountain_maps">
        <div className="mountain_maps_item">
          <img className="mountain_low_map" src={lowMapPng} alt="low_map" />
          {/* Link 要連到象山的文章 */}
          <Link to="/recommend/detail/1" className="mountain_Xiangshan">
            <div className="mountain_Xiangshan_box mountain_circle"></div>

            <div className="mountain_Xiangshan_box_hover">
              <div className="mountain_Xiangshan_hover mountain_triangle"></div>
              <div className="mountain_Xiangshan_hover_pic">
                <div className="mountain_Xiangshan_hover_pic_font d-flex justify-content-center align-items-center">
                  <p className="mountain_Xiangshan_hover_pic_font_title text-white mb-0 mr-2">
                    象山親山步道
                  </p>
                  <p className="mountain_Xiangshan_hover_pic_font_star text-warning mb-0">
                    <span className="text-white mr-1">4.8</span>
                    <StarFill className="mb-1" />
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* Link 要連到金面的文章 */}
          <Link to="/recommend/detail/4" className="mountain_Jinmian">
            <div className="mountain_Jinmian_box mountain_circle"></div>

            <div className="mountain_Jinmian_box_hover">
              <div className="mountain_Jinmian_hover mountain_triangle"></div>
              <div className="mountain_Jinmian_hover_pic">
                <div className="mountain_Jinmian_hover_pic_font d-flex justify-content-center align-items-center">
                  <p className="mountain_Jinmian_hover_pic_font_title text-white mb-0 mr-2">
                    金面山親山步道
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
          <Link to="/recommend/detail/7" className="mountain_Chi-hsing">
            <div className="mountain_Chi-hsing_box mountain_circle"></div>

            <div className="mountain_Chi-hsing_box_hover">
              <div className="mountain_Chi-hsing_hover mountain_triangle"></div>
              <div className="mountain_Chi-hsing_hover_pic">
                <div className="mountain_Chi-hsing_hover_pic_font d-flex justify-content-center align-items-center">
                  <p className="mountain_Chi-hsing_hover_pic_font_title text-white mb-0 mr-2">
                    七星山主、東峰登山步道
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
  </>
);
