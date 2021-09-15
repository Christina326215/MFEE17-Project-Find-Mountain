import React from 'react';
import { withRouter } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { recommendURL } from '../../utils/config';
///////////////////////////////////////////連接資料庫
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useGoogleMaps } from 'react-hook-google-maps';
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

// GoogleMap
function GoogleMap() {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    'AIzaSyDBUIlb9yFsQRGYz1_BEy8ISajpzCnBS3A',
    // NOTE: even if you change options later
    {
      center: { lat: 25.027042456861643, lng: 121.57440456837543 },
      zoom: 15,
    }
  );
  // console.log('map', map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  // console.log('google', google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return (
    <div
      ref={ref}
      style={{ maxWidth: 1110, height: 300, marginTop: 15, borderRadius: 10 }}
    />
  );
}
// GoogleMap

function DetailContent(props) {
  const [detail, setDetail] = useState([
    {
      id: 0,
      name: '',
      status: 0,
      city: '',
      season: '0',
      time: 0,
      height: 0,
      level: 0,
      distance: 0,
      mountain_type: 0,
      apply: 0,
      gap: 0,
      road_status: '',
      traffic: '',
      pic: '',
      content: '',
      level_name: '',
      mountain_type_name: '',
      apply_name: '',
    },
  ]);

  useEffect(() => {
    // js
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
    // js

    // 連線資料庫
    async function recommendData() {
      try {
        const recommendData = await axios.get(recommendURL);
        // console.log(recommendData.data); //for check
        const totalDetail = recommendData.data;
        // 抓網址id 並將string轉成number
        // console.log(typeof id);
        const id = Number(props.match.params.id);

        // console.log('totalDetail', totalDetail);
        // console.log('id', id);

        // 全部資料用find尋找id一樣的資料
        const newDetail = totalDetail.find((v) => {
          return v.id === id;
        });
        console.log(newDetail);

        if (newDetail) setDetail(newDetail);
      } catch (e) {
        console.log(e);
      }
    }
    recommendData();
  }, [props.match.params.id]);

  return (
    <div>
      {/* "id": 1,
    "name": "象山親山步道",
    "status": 0,
    "city": "台北市信義區",
    "season": "1,3",
    "time": 100,
    "height": 183,
    "level": 1,
    "distance": 2.3,
    "mountain_type": 1,
    "apply": 1,
    "gap": 158,
    "road_status": "石板路、石階",
    "traffic": "【靈雲宮登山口登山口】\r\n可搭至捷運象山站，或搭乘台北市聯營公車前往「吳興國小」站，下車後沿松仁路215巷接信義路五段步行至150巷22弄即達登山口。\r\n\r\n【永春崗公園登山口】\r\n搭乘台北市聯營公車前往「松職」站或「永春高中」站，下車後步行松山路後接650巷再接656巷到底抵達。",
    "pic": "xiangshan.jpeg",
    "content": "位於台北市信義區的象山，與附近的虎、豹、獅山並稱四獸山，因為外型似象頭而得此名。山頂雖僅有183公尺，但可清楚俯瞰台北盆地及台北地標101大樓，擁有極佳的視野，是許多攝影愛好者拍攝夜景與跨年煙火的最佳地點。\r\n\r\n象山與虎山地質相同，主要由砂岩組成，步道中可見黃褐色或赭紅色的岩壁與巨石，十分特殊；除此之外，生態多樣豐富、精采可期，因此為大台北地區享受戶外綠林的好去處。",
    "status_name": "未上架",
    "level_name": "低",
    "mountain_type_name": "郊山步道",
    "apply_name": "否" */}

      <div className="container recommend-body">
        <div className="recommend-wrapper">
          <div className="d-flex justify-content-between">
            <h2 className="col-5 recommend-h2">{detail.name}</h2>
            <div className="col-7 row align-items-center">
              <div className="col-12">
                <div className="d-flex justify-content-end">
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
                  <p className="text-primary recommend-body-content mr-3 mt-1">
                    <img className="mr-2" src={level} alt="" />
                    難度{detail.level_name}
                  </p>
                  <p className="text-primary recommend-body-content mt-1">
                    <i className="fas recommend-fa-shoe-prints mr-2">
                      <FaShoePrints size={20}></FaShoePrints>
                    </i>
                    {detail.distance}公里
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex justify-content-end">
                  <i className="bi recommend-bi-heart-fill mr-2 ml-auto">
                    <BsHeartFill></BsHeartFill>
                  </i>
                  <p className="recommend-body-content mr-2">加入收藏</p>
                  <i className="bi recommend-bi-flag-fill mr-2">
                    <BsFlagFill size={25}></BsFlagFill>
                  </i>
                  <p className="mr-2">加入去過路線</p>
                  {/* =========about-membership-bubble start========= */}
                  <div className="recommend-about-membership">
                    <div
                      to="javascript:void(0)"
                      id="seeMember"
                      className="recommend-see-member"
                    >
                      <i className="bi recommend-bi-question-circle">
                        <BsQuestionCircle></BsQuestionCircle>
                      </i>
                    </div>
                    <div className="recommend-about-membership-bubble p-3 position-absolute">
                      <span className="recommend-about-membership-bubble-arrow"></span>
                      <span className="recommend-membership">
                        會員專區登記去過的路線以獲取積分{' '}
                      </span>
                      <br />
                      <span className="recommend-membership recommend-membership-low">
                        肉腳：結帳時95折優惠{' '}
                      </span>
                      <br />
                      <span className="recommend-membership recommend-membership-medium">
                        山友 ：結帳時93折優惠{' '}
                      </span>
                      <br />
                      <span className="recommend-membership recommend-membership-high">
                        山神 ：結帳時9折優惠
                      </span>
                    </div>
                    {/* =========about-membership-bubble end========= */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommend-detailBg">
            <div className="recommend-detailBgShow"></div>
            <div className="recommend-detailFilter">
              <div className="recommend-detailContnet">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center">
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">所在地</div>
                      <div className="recommend-tableBody col">
                        {detail.city}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">里程</div>
                      <div className="recommend-tableBody col">
                        {detail.distance}公里
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">申請入山</div>
                      <div className="recommend-tableBody col">
                        {detail.apply_name}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">最高海拔</div>
                      <div className="recommend-tableBody col">
                        {detail.height}公尺
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">高度落差</div>
                      <div className="recommend-tableBody col">
                        {detail.gap} 公尺
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">所需時間</div>
                      <div className="recommend-tableBody col">
                        1小時40分鐘 {detail.time}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">最適季節</div>
                      <div className="recommend-tableBody col">
                        {detail.season_name}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">步道類型</div>
                      <div className="recommend-tableBody col">
                        {detail.mountain_type_name}
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-12">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col-lg-6 col-md-3">
                        路面狀況
                      </div>
                      <div className="recommend-tableBody col-lg-6 col-md-9">
                        {detail.road_status}
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-12 col-md-12">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col-lg-2 col-md-3">
                        交通方式
                      </div>
                      <div className="recommend-tableBody col-lg-10 col-md-9 text-left">
                        {detail.traffic}
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-12 col-md-12 text-white text-left">
                    {detail.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* googlemap */}
          <GoogleMap></GoogleMap>
          {/* googlemap */}
          <h2 className="recommend-body-content-big-bold">此景點產品推薦</h2>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-md-3">
              <div className="recommend-productTagBg">
                <div className="recommend-tag-small">
                  {/* (導連頁還要調整) */}
                  <Link className="recommend-tag recommend-hatTag" to="/shop">
                    #tag 登山帽
                  </Link>
                </div>
                <div className="recommend-tag-big">
                  {/* (導連頁還要調整) */}
                  <Link
                    className="recommend-tagHover recommend-bagTag"
                    to="/shop"
                  >
                    <div className="row m-0">
                      <div className="col recommend-tagText">
                        <p className="recommend-tagName">
                          # The North Face 黑色舒適休閒後背包
                        </p>
                        <p className="recommend-tagPrice">$ 5,292</p>
                      </div>
                      <div className="recommend-productTagWrap col p-0">
                        <img
                          className="img-fluid recommend-productTagHover"
                          src={bag}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-md-3">
              <div className="recommend-productTagBg">
                <div className="recommend-tag-small">
                  {/* (導連頁還要調整) */}
                  <Link className="recommend-tag recommend-hatTag" to="/shop">
                    #tag 登山帽
                  </Link>
                </div>
                <div className="recommend-tag-big">
                  {/* (導連頁還要調整) */}
                  <Link
                    className="recommend-tagHover recommend-bagTag"
                    to="/shop"
                  >
                    <div className="row m-0">
                      <div className="col recommend-tagText">
                        <p className="recommend-tagName">
                          # The North Face 黑色舒適休閒後背包
                        </p>
                        <p className="recommend-tagPrice">$ 5,292</p>
                      </div>
                      <div className="recommend-productTagWrap col p-0">
                        <img
                          className="img-fluid recommend-productTagHover"
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
      <div className="recommend-commentBg">
        <div className="recommend-commentFilter">
          <div className="container recommend-body">
            <div className="recommend-wrapper">
              <h2 className="recommend-body-content-big-bold">景點評論</h2>
              <div className="recommend-commentWhiteBox">
                <div className="recommend-commentContent d-flex flex-column">
                  <div className="d-flex justify-content-end">
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn btn-warning mb-lg-3 mb-md-2 text-white"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      data-whatever="@mdo"
                    >
                      新增評論
                      {/* <i className="bi recommend-bi-plus-square"> */}
                      <BsPlusSquare className="ml-2 mb-1 bi recommend-bi-plus-square"></BsPlusSquare>
                      {/* </i> */}
                    </button>

                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              新增評論
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  會員名稱：
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="recipient-name"
                                  value="會員登入後才帶入資料"
                                  disabled
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="message-text"
                                  className="col-form-label"
                                >
                                  評論訊息：
                                </label>
                                <textarea
                                  className="form-control"
                                  id="message-text"
                                ></textarea>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  取消
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-warning text-white"
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
                  <div className="d-flex flex-column">
                    <div className="recommend-commentBox">
                      <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex">
                          <div className="recommend-memberLevel1">
                            <i className="bi recommend-bi-person-circle">
                              <BsPeopleCircle></BsPeopleCircle>
                            </i>
                          </div>
                          <div className="">
                            <div className="recommend-memberLevel1">
                              <p className="recommend-body-content-bold mt-1 mb-0 ml-1">
                                肉腳 臺灣黑熊
                              </p>
                            </div>
                            <p className="recommend-body-content-small m-0 ml-1">
                              2021-08-18 14:21
                            </p>
                          </div>
                        </div>
                        <p className="m-0">這裡風景好美～</p>
                      </div>
                      <div className="d-flex ml-auto">
                        <div className="recommend-commentPic">
                          <img className="img-fluid" src={xiangshan} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="recommend-commentBox">
                      <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex">
                          <div className="recommend-memberLevel2">
                            <i className="bi recommend-bi-person-circle">
                              <BsPeopleCircle></BsPeopleCircle>
                            </i>
                          </div>
                          <div>
                            <div className="recommend-memberLevel2">
                              <p className="recommend-body-content-bold mt-1 mb-0 ml-1">
                                山友 南美洲樹懶
                              </p>
                            </div>
                            <p className="recommend-body-content-small m-0 ml-1">
                              2021-08-18 14:21
                            </p>
                          </div>
                        </div>
                        <p className="m-0">這裡風景好美～</p>
                      </div>
                      <div className="d-flex ml-auto">
                        <div className="recommend-commentPic">
                          <img className="img-fluid" src={tapachien} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="recommend-commentBox">
                      <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex">
                          <div className="recommend-memberLevel3">
                            <i className="bi recommend-bi-person-circle">
                              <BsPeopleCircle></BsPeopleCircle>
                            </i>
                          </div>
                          <div>
                            <div className="recommend-memberLevel3">
                              <p className="recommend-body-content-bold mt-1 mb-0 ml-1">
                                山神 高山小兔
                              </p>
                            </div>
                            <p className="recommend-body-content-small m-0 ml-1">
                              2021-08-18 14:21
                            </p>
                          </div>
                        </div>
                        <p className="m-0">這裡風景好美～</p>
                      </div>
                      <div className="d-flex ml-auto">
                        <div className="recommend-commentPic">
                          <img className="img-fluid" src={xiangshan} alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="btn-toolbar justify-content-center mt-md-2"
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
        <div className="recommend-sloth_big animate__animated animate__pulse">
          <img src={slothBig} alt="" />
        </div>
        <div className="recommend-sloth_small animate__animated animate__pulse">
          <img src={slothSmall} alt="" />
        </div>
      </div>
      <div className="container recommend-body">
        <div className="recommend-wrapper">
          <h2 className="recommend-body-content-big-bold">查看其他文章</h2>
          <div>
            <div className="row my-4">
              {/* 象山親山步道 */}
              <div className="col-lg-4 px-0">
                <div className="recommend-article-card">
                  <div className="recommend-article-img-box">
                    <Link to="#/">
                      <img
                        className="recommend-cover-fit"
                        src={xiangshan}
                        alt=""
                      />
                    </Link>
                  </div>
                  <Link to="#/" className="recommend-article-name">
                    象山親山步道
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link to="#/" className="recommend-see-more-btn">
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
              {/* 陽明山東西大縱走 */}
              <div className="col-lg-4 px-0">
                <div className="recommend-article-card">
                  <div className="recommend-article-img-box">
                    <Link to="#/">
                      <img
                        className="recommend-cover-fit"
                        src={yangmingshan}
                        alt=""
                      />
                    </Link>
                  </div>
                  <Link to="#/" className="recommend-article-name">
                    陽明山東西大縱走
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link to="#/" className="recommend-see-more-btn">
                      查看更多
                    </Link>
                  </p>
                </div>
              </div>
              {/* 大霸北稜線 */}
              <div className="col-lg-4 px-0">
                <div className="recommend-article-card">
                  <div className="recommend-article-img-box">
                    <Link to="#/">
                      <img
                        className="recommend-cover-fit"
                        src={tapachien}
                        alt=""
                      />
                    </Link>
                  </div>
                  <Link to="#/" className="recommend-article-name">
                    大霸北稜線
                  </Link>
                  <br />
                  <p className="text-right">
                    <Link to="#/" className="recommend-see-more-btn">
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

export default withRouter(DetailContent);
