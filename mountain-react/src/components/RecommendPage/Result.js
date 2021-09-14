import React from 'react';
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useEffect } from 'react';
import bear from '../../img/article-img/bear.png';
import level from '../../img/article-img/level_low.svg';
import sevenstar from '../../img/article-img/sevenstar.jpeg';
import xiangshan from '../../img/article-img/xiangshan.jpeg';
import { FaShoePrints } from 'react-icons/fa';
import { BsHeartFill } from 'react-icons/bs';
import {
  BsStarFill,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
} from 'react-icons/bs';

function Result() {
  useEffect(() => {
    $('i').click(function () {
      $(this).toggleClass('active');
    });
  }, []);
  return (
    <div>
      <div className="container recommend-body">
        <div className="recommend-filter-wrapper mb-5">
          <h2 className="recommend-h2">推薦攻略</h2>
          <div className="recommend-chatbg">
            <div className="recommend-bg-filter">
              <div className="recommend-stepbox mb-5">
                <div className="recommend-qa animate__animated animate__zoomIn">
                  <div className="recommend-bearwrap">
                    <img className="recommend-bear" src={bear} alt="" />
                  </div>
                  <div className="recommend-chatbox">
                    <div className="recommend-chatBoxText">
                      哇～謝謝你的回答，
                      <br />
                      下面這些是推薦給你的專屬路線呦！
                      <br />
                      一起來了解山的美麗吧！
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="p-2 text-right text-white-50"
                href="https://www.freepik.com/vectors/tree"
              >
                Tree vector created by upklyak - www.freepik.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="recommend-recommendbg">
        <div className="recommend-filter">
          <div className="container recommend-body">
            <div className="recommend-bg-wrapper">
              <h2 className="recommend-body-content-big-bold inline">
                推薦路線
              </h2>
              <p className="inline ml-2">9筆資料</p>
              <div className="row-cols-1 mt-3 mb-3">
                <div className="recommend-card card">
                  <div className="row no-gutters">
                    <div className="col-md-4 recommend-pic-box">
                      <div className="recommend-pic-box-wrap">
                        <img
                          className="recommend-cardimg img-fluid"
                          src={sevenstar}
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="recommend-card-body card-body">
                        <div className="row">
                          <div className="recommend-cardFirstLine col-12">
                            <h5 className="recommend-cardTitle mr-3 recommend-h3 h3">
                              七星山主、東峰登山步道
                            </h5>
                            <p className="text-primary recommend-body-content mr-3 ">
                              <img className="mr-1" src={level} alt="..." />
                              難度低
                            </p>
                            <p className="text-primary recommend-body-content mr-3 ">
                              <i className="fas recommend-fa-shoe-prints mr-2">
                                <FaShoePrints size={20}></FaShoePrints>
                              </i>
                              5公里
                            </p>
                            <i className="bi recommend-bi-heart-fill mr-2 ml-auto">
                              <BsHeartFill></BsHeartFill>
                            </i>
                            <p className="recommend-body-content">加入收藏</p>
                          </div>
                          <div className="recommend-cardSecondLine col-12">
                            <div className="recommend-starGroup mr-3">
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                            </div>
                            <p className="recommend-body-content text-muted pt-2 m-0">
                              台北市北投區
                            </p>
                          </div>
                          <div className="recommend-textBox col-12">
                            <p className="recommend-card-text recommend-body-content">
                              七星山主峰高1120公尺，是台北市的最高峰。在台北市區朝北邊往上望，經常也可以望見它獨立偉岸的山影，尤其是山頂上因侵蝕而形成的七個大小不一的山頭，猶如北斗「七星」般聳立在台北上頭，山也因此得名。
                              由於受冬季東北季風影響，山南山北呈現全然不同的自然景觀。山北受強風吹拂，植物生長不易，白背芒與包籜矢竹成為優勢植物，每年秋季芒花開花時，甚是壯觀；山南則因有山頭遮去烈風，因此呈現典型的亞熱帶林相，林下豐富的多樣性生物，和山北截然不同。而七星山主、東峰步道貫穿山南北，走過步道，正好可以體驗兩種不同的生態景觀。
                              七星山還是天然的地質教室，小油坑、大油坑、夢幻湖、冷水坑，都是認識火山地形的絕佳處所。還有七星主峰上的展望，可以360度的全覽北市、北海岸等地，「登七星而小台北」，登臨的快意也使七星山備受山客喜愛。
                            </p>
                          </div>
                          <div className="recommend-cardLastLine col-12 mt-3 mb-0">
                            <small className="recommend-body-content-small text-muted align-self-end">
                              2人收藏
                            </small>
                            <Link to="/recommend/detail">
                              <button className="btn btn-primary">
                                查看更多
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-cols-1 mt-3 mb-3">
                <div className="recommend-card card">
                  <div className="row no-gutters">
                    <div className="col-md-4 recommend-pic-box">
                      <div className="recommend-pic-box-wrap">
                        <img
                          className="recommend-cardimg img-fluid"
                          src={xiangshan}
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="recommend-card-body card-body">
                        <div className="row">
                          <div className="recommend-cardFirstLine col-12">
                            <h5 className="recommend-cardTitle mr-3 recommend-h3 h3">
                              象山親山步道
                            </h5>
                            <p className="text-primary recommend-body-content mr-3">
                              <img className="mr-1" src={level} alt="..." />
                              難度低
                            </p>
                            <p className="text-primary recommend-body-content mr-3">
                              <i className="fas recommend-fa-shoe-prints mr-2">
                                <FaShoePrints size={20}></FaShoePrints>
                              </i>
                              2.2公里
                            </p>
                            <i className="bi recommend-bi-heart-fill mr-2 ml-auto">
                              <BsHeartFill></BsHeartFill>
                            </i>
                            <p className="recommend-body-content">加入收藏</p>
                          </div>
                          <div className="recommend-cardSecondLine col-12">
                            <div className="recommend-starGroup mr-3">
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                              <i className="bi recommend-bi-star-fill">
                                <BsStarFill></BsStarFill>
                              </i>
                            </div>
                            <p className="recommend-body-content text-muted pt-1 m-0">
                              台北市信義區
                            </p>
                          </div>
                          <div className="recommend-textBox col-12">
                            <p className="recommend-card-text recommend-body-content">
                              位於台北市信義區的象山，與附近的虎、豹、獅山並稱四獸山，因為外型似象頭而得此名。山頂雖僅有183公尺，但可清楚俯瞰台北盆地及台北地標101大樓，擁有極佳的視野，是許多攝影愛好者拍攝夜景與跨年煙火的最佳地點。
                              象山與虎山地質相同，主要由砂岩組成，步道中可見黃褐色或赭紅色的岩壁與巨石，十分特殊；除此之外，生態多樣豐富、精采可期，因此為大台北地區享受戶外綠林的好去處。
                            </p>
                          </div>
                          <div className="recommend-cardLastLine col-12 mt-3 mb-0">
                            <small className="recommend-body-content-small text-muted align-self-end">
                              2人收藏
                            </small>
                            <Link to="/recommend/detail">
                              <button className="btn btn-primary">
                                查看更多
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="btn-toolbar justify-content-center"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="Third group"
                >
                  <button type="button" className="btn btn-primary">
                    <BsChevronBarLeft></BsChevronBarLeft>
                  </button>
                </div>
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" className="btn btn-primary">
                    <BsChevronLeft></BsChevronLeft>
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
                    <BsChevronRight></BsChevronRight>
                  </button>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Third group"
                >
                  <button type="button" className="btn btn-primary">
                    <BsChevronBarRight></BsChevronBarRight>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a
            className="pr-2 pb-2 d-flex justify-content-end text-white-50"
            href="https://www.freepik.com/vectors/background"
          >
            Background vector created by pikisuperstar - www.freepik.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result;
