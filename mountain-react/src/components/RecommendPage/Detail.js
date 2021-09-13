import React from 'react';
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useEffect } from 'react';
import level from '../../img/article-img/level_low.svg';
import slothBig from '../../img/article-img/sloth_big.svg';
import slothSmall from '../../img/article-img/sloth_small.svg';
import xiangshan from '../../img/article-img/xiangshan.jpeg';
import yangmingshan from '../../img/article-img/Yangmingshan.jpeg';
import tapachien from '../../img/article-img/Tapachien.jpeg';
import bag from '../../img/article-img/bags-pic1.jpeg';
import { FaShoePrints } from 'react-icons/fa';
import { BsHeartFill } from 'react-icons/bs';
import {
  BsStarFill,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
  BsFlagFill,
  BsQuestionCircle,
  BsPlusSquare,
  BsPeopleCircle,
} from 'react-icons/bs';

function Detail() {
  useEffect(() => {
    //  about-membership-bubble start
    $('.recommend-see-member').click((e) => {
      $('.recommend-about-membership-bubble').toggle('display');
    });
    //  about-membership-bubble end

    $('i').click(function () {
      $(this).toggleClass('active');
    });

    $('.recommend-tag-small').mouseover(function () {
      $('.recommend-tag-small').hide();
      $('.recommend-tag-big').show();
    });

    $('.recommend-tag-big').mouseout(function () {
      $('.recommend-tag-big').hide();
      $('.recommend-tag-small').show();
    });

    // modal新增評論
  }, []);
  return (
    <div>
      <div class="container recommend-body">
        <div class="recommend-wrapper">
          <div class="d-flex justify-content-between">
            <h2 class="col-5 recommend-h2">象山親山步道</h2>
            <div class="col-7 row align-items-center">
              <div class="col-12">
                <div class="d-flex justify-content-end">
                  <div class="recommend-starGroup mr-3">
                    <i class="bi recommend-bi-star-fill">
                      <BsStarFill></BsStarFill>
                    </i>
                    <i class="bi recommend-bi-star-fill">
                      <BsStarFill></BsStarFill>
                    </i>
                    <i class="bi recommend-bi-star-fill">
                      <BsStarFill></BsStarFill>
                    </i>
                    <i class="bi recommend-bi-star-fill">
                      <BsStarFill></BsStarFill>
                    </i>
                    <i class="bi recommend-bi-star-fill">
                      <BsStarFill></BsStarFill>
                    </i>
                  </div>
                  <p class="text-primary recommend-body-content mr-3 mt-1">
                    <img class="mr-2" src={level} alt="" />
                    難度低
                  </p>
                  <p class="text-primary recommend-body-content mt-1">
                    <i class="fas recommend-fa-shoe-prints mr-2">
                      <FaShoePrints size={20}></FaShoePrints>
                    </i>
                    5公里
                  </p>
                </div>
              </div>
              <div class="col-12">
                <div class="d-flex justify-content-end">
                  <i class="bi recommend-bi-heart-fill mr-2 ml-auto">
                    <BsHeartFill></BsHeartFill>
                  </i>
                  <p class="recommend-body-content mr-2">加入收藏</p>
                  <i class="bi recommend-bi-flag-fill mr-2">
                    <BsFlagFill size={25}></BsFlagFill>
                  </i>
                  <p class="mr-2">加入去過路線</p>
                  {/* =========about-membership-bubble start========= */}
                  <div class="recommend-about-membership">
                    <div
                      to="javascript:void(0)"
                      id="seeMember"
                      class="recommend-see-member"
                    >
                      <i class="bi recommend-bi-question-circle">
                        <BsQuestionCircle></BsQuestionCircle>
                      </i>
                    </div>
                    <div class="recommend-about-membership-bubble p-3 position-absolute">
                      <span class="recommend-about-membership-bubble-arrow"></span>
                      <span class="recommend-membership">
                        會員專區登記去過的路線以獲取積分{' '}
                      </span>
                      <br />
                      <span class="recommend-membership recommend-membership-low">
                        肉腳：結帳時95折優惠{' '}
                      </span>
                      <br />
                      <span class="recommend-membership recommend-membership-medium">
                        山友 ：結帳時93折優惠{' '}
                      </span>
                      <br />
                      <span class="recommend-membership recommend-membership-high">
                        山神 ：結帳時9折優惠
                      </span>
                    </div>
                    {/* =========about-membership-bubble end========= */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="recommend-detailBg">
            <div class="recommend-detailBgShow"></div>
            <div class="recommend-detailFilter">
              <div class="recommend-detailContnet">
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center">
                  <div class="col">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col">所在地</div>
                      <div class="recommend-tableBody col">台北市信義區</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col">里程</div>
                      <div class="recommend-tableBody col">2.3公里</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col">申請入山</div>
                      <div class="recommend-tableBody col">否</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col">最高海拔</div>
                      <div class="recommend-tableBody col">183 公尺</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col">高度落差</div>
                      <div class="recommend-tableBody col">158 公尺</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col">所需時間</div>
                      <div class="recommend-tableBody col">1小時40分鐘</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col">最適季節</div>
                      <div class="recommend-tableBody col">春季、夏季</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col">步道類型</div>
                      <div class="recommend-tableBody col">郊山步道</div>
                    </div>
                  </div>
                  <div class="col col-md-12">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col-lg-6 col-md-3">
                        路面狀況
                      </div>
                      <div class="recommend-tableBody col-lg-6 col-md-9">
                        石板路、石階
                      </div>
                    </div>
                  </div>
                  <div class="col col-lg-12 col-md-12">
                    <div class="d-flex recommend-table table">
                      <div class="recommend-tableHead col-lg-2 col-md-3">
                        交通方式
                      </div>
                      <div class="recommend-tableBody col-lg-10 col-md-9 text-left">
                        【靈雲宮登山口登山口】可搭至捷運象山站，或搭乘台北市聯營公車前往「吳興國小」站，下車後沿松仁路215巷接信義路五段步行至150巷22弄即達登山口。
                        【永春崗公園登山口】搭乘台北市聯營公車前往「松職」站或「永春高中」站，下車後步行松山路後接650巷再接656巷到底抵達。
                      </div>
                    </div>
                  </div>
                  <div class="col col-lg-12 col-md-12 text-white text-left">
                    位於台北市信義區的象山，與附近的虎、豹、獅山並稱四獸山，因為外型似象頭而得此名。山頂雖僅有183公尺，但可清楚俯瞰台北盆地及台北地標101大樓，擁有極佳的視野，是許多攝影愛好者拍攝夜景與跨年煙火的最佳地點。
                    象山與虎山地質相同，主要由砂岩組成，步道中可見黃褐色或赭紅色的岩壁與巨石，十分特殊；除此之外，生態多樣豐富、精采可期，因此為大台北地區享受戶外綠林的好去處。
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div id="myMap" className="google-map"></div> */}
          <h2 class="recommend-body-content-big-bold">此景點產品推薦</h2>
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-md-3">
              <div class="recommend-productTagBg">
                <div class="recommend-tag-small">
                  {/* (導連頁還要調整) */}
                  <Link class="recommend-tag recommend-hatTag" to="/shop">
                    #tag 登山帽
                  </Link>
                </div>
                <div class="recommend-tag-big">
                  {/* (導連頁還要調整) */}
                  <Link class="recommend-tagHover recommend-bagTag" to="/shop">
                    <div class="row m-0">
                      <div class="col recommend-tagText">
                        <p class="recommend-tagName">
                          # The North Face 黑色舒適休閒後背包
                        </p>
                        <p class="recommend-tagPrice">$ 5,292</p>
                      </div>
                      <div class="recommend-productTagWrap col p-0">
                        <img
                          class="img-fluid recommend-productTagHover"
                          src={bag}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-md-3">
              <div class="recommend-productTagBg">
                <div class="recommend-tag-small">
                  {/* (導連頁還要調整) */}
                  <Link class="recommend-tag recommend-hatTag" to="/shop">
                    #tag 登山帽
                  </Link>
                </div>
                <div class="recommend-tag-big">
                  {/* (導連頁還要調整) */}
                  <Link class="recommend-tagHover recommend-bagTag" to="/shop">
                    <div class="row m-0">
                      <div class="col recommend-tagText">
                        <p class="recommend-tagName">
                          # The North Face 黑色舒適休閒後背包
                        </p>
                        <p class="recommend-tagPrice">$ 5,292</p>
                      </div>
                      <div class="recommend-productTagWrap col p-0">
                        <img
                          class="img-fluid recommend-productTagHover"
                          src={bag}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend-commentBg">
        <div class="recommend-commentFilter">
          <div class="container recommend-body">
            <div class="recommend-wrapper">
              <h2 class="recommend-body-content-big-bold">景點評論</h2>
              <div class="recommend-commentWhiteBox">
                <div class="recommend-commentContent d-flex flex-column">
                  <div class="d-flex justify-content-end">
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      class="btn btn-warning mb-lg-3 mb-md-2 text-white"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      data-whatever="@mdo"
                    >
                      新增評論
                      {/* <i class="bi recommend-bi-plus-square"> */}
                      <BsPlusSquare className="ml-2 mb-1 bi recommend-bi-plus-square"></BsPlusSquare>
                      {/* </i> */}
                    </button>

                    {/* Modal */}
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              新增評論
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="form-group">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  會員名稱：
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="recipient-name"
                                  value="會員登入後才帶入資料"
                                  disabled
                                />
                              </div>
                              <div class="form-group">
                                <label
                                  for="message-text"
                                  class="col-form-label"
                                >
                                  評論訊息：
                                </label>
                                <textarea
                                  class="form-control"
                                  id="message-text"
                                ></textarea>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  取消
                                </button>
                                <button
                                  type="submit"
                                  class="btn btn-warning text-white"
                                >
                                  送出評論
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal */}
                  </div>
                  <div class="d-flex flex-column">
                    <div class="recommend-commentBox">
                      <div class="d-flex flex-column justify-content-between">
                        <div class="d-flex">
                          <div class="recommend-memberLevel1">
                            <i class="bi recommend-bi-person-circle">
                              <BsPeopleCircle></BsPeopleCircle>
                            </i>
                          </div>
                          <div class="">
                            <div class="recommend-memberLevel1">
                              <p class="recommend-body-content-bold mt-1 mb-0 ml-1">
                                肉腳 臺灣黑熊
                              </p>
                            </div>
                            <p class="recommend-body-content-small m-0 ml-1">
                              2021-08-18 14:21
                            </p>
                          </div>
                        </div>
                        <p class="m-0">這裡風景好美～</p>
                      </div>
                      <div class="d-flex ml-auto">
                        <div class="recommend-commentPic">
                          <img class="img-fluid" src={xiangshan} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="recommend-commentBox">
                      <div class="d-flex flex-column justify-content-between">
                        <div class="d-flex">
                          <div class="recommend-memberLevel2">
                            <i class="bi recommend-bi-person-circle">
                              <BsPeopleCircle></BsPeopleCircle>
                            </i>
                          </div>
                          <div>
                            <div class="recommend-memberLevel2">
                              <p class="recommend-body-content-bold mt-1 mb-0 ml-1">
                                山友 南美洲樹懶
                              </p>
                            </div>
                            <p class="recommend-body-content-small m-0 ml-1">
                              2021-08-18 14:21
                            </p>
                          </div>
                        </div>
                        <p class="m-0">這裡風景好美～</p>
                      </div>
                      <div class="d-flex ml-auto">
                        <div class="recommend-commentPic">
                          <img class="img-fluid" src={tapachien} alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="recommend-commentBox">
                      <div class="d-flex flex-column justify-content-between">
                        <div class="d-flex">
                          <div class="recommend-memberLevel3">
                            <i class="bi recommend-bi-person-circle">
                              <BsPeopleCircle></BsPeopleCircle>
                            </i>
                          </div>
                          <div>
                            <div class="recommend-memberLevel3">
                              <p class="recommend-body-content-bold mt-1 mb-0 ml-1">
                                山神 高山小兔
                              </p>
                            </div>
                            <p class="recommend-body-content-small m-0 ml-1">
                              2021-08-18 14:21
                            </p>
                          </div>
                        </div>
                        <p class="m-0">這裡風景好美～</p>
                      </div>
                      <div class="d-flex ml-auto">
                        <div class="recommend-commentPic">
                          <img class="img-fluid" src={xiangshan} alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      class="btn-toolbar justify-content-center mt-md-2"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        class="btn-group mr-2"
                        role="group"
                        aria-label="Third group"
                      >
                        <button type="button" class="btn btn-primary">
                          <BsChevronBarLeft></BsChevronBarLeft>
                        </button>
                      </div>
                      <div
                        class="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button type="button" class="btn btn-primary">
                          <BsChevronLeft></BsChevronLeft>
                        </button>
                      </div>
                      <div
                        class="btn-group mr-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <button type="button" class="btn btn-primary">
                          1
                        </button>
                      </div>
                      <div
                        class="btn-group mr-2"
                        role="group"
                        aria-label="Third group"
                      >
                        <button type="button" class="btn btn-primary">
                          <BsChevronRight></BsChevronRight>
                        </button>
                      </div>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Third group"
                      >
                        <button type="button" class="btn btn-primary">
                          <BsChevronBarRight></BsChevronBarRight>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="pr-2 pb-2 d-flex justify-content-end text-white-50"
            href="https://www.freepik.com/vectors/background"
          >
            Background vector created by pikisuperstar - www.freepik.com
          </a>
        </div>
        <div class="recommend-sloth_big animate__animated animate__pulse">
          <img src={slothBig} alt="" />
        </div>
        <div class="recommend-sloth_small animate__animated animate__pulse">
          <img src={slothSmall} alt="" />
        </div>
      </div>
      <div class="container recommend-body">
        <div class="recommend-wrapper">
          <h2 class="recommend-body-content-big-bold">查看其他文章</h2>
          <div>
            <div class="row my-4">
              {/* 象山親山步道 */}
              <div class="col-lg-4 px-0">
                <div class="recommend-article-card">
                  <div class="recommend-article-img-box">
                    <Link to="#/">
                      <img class="recommend-cover-fit" src={xiangshan} alt="" />
                    </Link>
                  </div>
                  <Link to="#/" class="recommend-article-name">
                    象山親山步道
                  </Link>
                  <br />
                  <p class="text-right">
                    <Link to="#/" class="recommend-see-more-btn">
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
              {/* 陽明山東西大縱走 */}
              <div class="col-lg-4 px-0">
                <div class="recommend-article-card">
                  <div class="recommend-article-img-box">
                    <Link to="#/">
                      <img
                        class="recommend-cover-fit"
                        src={yangmingshan}
                        alt=""
                      />
                    </Link>
                  </div>
                  <Link to="#/" class="recommend-article-name">
                    陽明山東西大縱走
                  </Link>
                  <br />
                  <p class="text-right">
                    <Link to="#/" class="recommend-see-more-btn">
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
              {/* 大霸北稜線 */}
              <div class="col-lg-4 px-0">
                <div class="recommend-article-card">
                  <div class="recommend-article-img-box">
                    <Link to="#/">
                      <img class="recommend-cover-fit" src={tapachien} alt="" />
                    </Link>
                  </div>
                  <Link to="#/" class="recommend-article-name">
                    大霸北稜線
                  </Link>
                  <br />
                  <p class="text-right">
                    <Link to="#/" class="recommend-see-more-btn">
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
