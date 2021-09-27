import React from 'react';
import { withRouter } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { recommendURL, IMAGE_URL } from '../../utils/config';
///////////////////////////////////////////連接資料庫
import Comment from './Comment';
import RecommendCard from './RecommendCard';
import ProductTag from './ProductTag';
import '../../styles/article.css';
import $ from 'jquery';
import levelLow from '../../img/article-img/level_low.svg';
import levelMiddle from '../../img/article-img/level_medium.svg';
import levelHigh from '../../img/article-img/level_high.svg';
import { FaShoePrints } from 'react-icons/fa';
import { BsHeartFill } from 'react-icons/bs';
import { BsStarFill, BsFlagFill, BsQuestionCircle } from 'react-icons/bs';

function DetailContent(props) {
  // 推薦文章卡片
  const [levelCard, setLevelCard] = useState([]);
  // 當頁文章資料
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
  // 當頁文章星星評分
  const [star, setStar] = useState(0);
  // 新增收藏文章狀態
  const [likeUserId, setLikeUserId] = useState('');
  const [likeArticleId, setLikeArticleId] = useState('');
  const [likeArticlePast, setLikeArticlePast] = useState('');

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

    // 連線當頁的資料庫
    async function recommendData() {
      try {
        // 全部文章資料
        const recommendData = await axios.get(recommendURL);
        const totalDetail = recommendData.data;

        // 網址id判斷此篇文章資料
        const id = Number(props.match.params.id);
        const newDetail = totalDetail.find((v) => {
          return v.id === id;
        });
        if (newDetail) setDetail(newDetail);

        // 推薦同等級文章
        const RecommentCard = totalDetail.filter((v) => {
          return v.level === newDetail.level;
        });
        if (RecommentCard) setLevelCard(RecommentCard);

        // 全部文章星星資料
        const totalStarData = await axios.get(`${recommendURL}/star`);
        const starData = totalStarData.data;
        // 當篇文章星星資料
        //計算星星平均分數
        let stararray = [];
        starData.filter((e) => {
          if (e.article_id === id) {
            stararray.push(e.star_grade);
          }
        });
        // console.log('stararray', stararray);
        const total = stararray.reduce((acc, cur) => {
          return acc + cur;
        });
        // console.log('tota/l', total);
        // 分數四捨五入
        let starResult = Math.round(total / stararray.length);
        console.log('starResult', starResult);
        setStar(starResult);

        //加入收藏功能
        //FIXME:帶入使用者ID
        // FIXME:問去過路線的資料
        setLikeUserId(1);
        setLikeArticleId(id);
        setLikeArticlePast(id);
      } catch (e) {
        console.log(e);
      }
    }
    recommendData();
  }, [props.match.params.id]);

  // 判斷有沒有收藏過的狀態 true收藏 fasle沒收藏
  const [heartHandle, setHeartHandle] = useState(true);

  // 移除收藏功能
  const deletHeart = async (e) => {
    setHeartHandle(false);
    $(e.currentTarget.firstChild).css('color', '#e2e3e1');

    let response = await axios.post(`${recommendURL}/deleteLikeArticle`, {
      likeUserId,
      likeArticleId,
    });
    console.log('response', response);
  };

  //加入收藏功能
  const addHeart = async (e) => {
    setHeartHandle(true);
    $(e.currentTarget.firstChild).css('color', '#cc543a');

    let response = await axios.post(`${recommendURL}/likeArticle`, {
      likeUserId,
      likeArticleId,
      likeArticlePast,
    });
    console.log('response', response);
  };

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
            <div className="col-7 row align-items-center my-1">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="mr-3">
                    {star === 0 ? (
                      <>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>{' '}
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                      </>
                    ) : (
                      ''
                    )}
                    {star === 1 ? (
                      <>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                      </>
                    ) : (
                      ''
                    )}
                    {star === 2 ? (
                      <>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                      </>
                    ) : (
                      ''
                    )}
                    {star === 3 ? (
                      <>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill mr-1"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                      </>
                    ) : (
                      ''
                    )}
                    {star === 4 ? (
                      <>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill
                          className="bi recommend-bi-star-fill"
                          style={{ color: '#e2e3e1' }}
                        ></BsStarFill>
                      </>
                    ) : (
                      ''
                    )}
                    {star === 5 ? (
                      <>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
                        <BsStarFill className="bi recommend-bi-star-fill"></BsStarFill>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="text-primary recommend-body-content mr-3">
                    {detail.level_name === '低' ? (
                      <img className="mr-1" src={levelLow} alt="..." />
                    ) : (
                      ''
                    )}
                    {detail.level_name === '中' ? (
                      <img className="mr-1" src={levelMiddle} alt="..." />
                    ) : (
                      ''
                    )}
                    {detail.level_name === '高' ? (
                      <img className="mr-1" src={levelHigh} alt="..." />
                    ) : (
                      ''
                    )}
                    難度{detail.level_name}
                  </div>
                  <div className="text-primary recommend-body-content">
                    <i className="fas recommend-fa-shoe-prints mr-2">
                      <FaShoePrints size={20}></FaShoePrints>
                    </i>
                    {detail.distance}公里
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-end">
                  <div
                    className="d-flex align-items-center heartbtn"
                    onClick={(e) => {
                      if (heartHandle) {
                        deletHeart(e);
                      } else {
                        addHeart(e);
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <BsHeartFill className="bi recommend-bi-heart-fill mr-1 mt-1"></BsHeartFill>
                    <div className="recommend-body-content mr-2">加入收藏</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi recommend-bi-flag-fill mr-1">
                      <BsFlagFill size={25}></BsFlagFill>
                    </i>
                    <div className="mr-2">加入去過路線</div>
                  </div>
                  {/* =========about-membership-bubble start========= */}
                  <div className="recommend-about-membership">
                    <div to="" id="seeMember" className="recommend-see-member">
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
          <div
            className="recommend-detailBg"
            style={{
              backgroundImage: `url("${IMAGE_URL}/img/article-img/${detail.pic}")`,
              borderRadius: 10,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
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
                        {Math.floor(detail.time / 60 / 24) === 0
                          ? ''
                          : Math.floor(detail.time / 60 / 24) + '天'}
                        {Math.floor((detail.time / 60) % 24) === 0
                          ? ''
                          : Math.floor((detail.time / 60) % 24) + '小時'}
                        {Math.floor(detail.time % 60) === 0
                          ? ''
                          : Math.floor(detail.time % 60) + '分鐘'}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex recommend-table table">
                      <div className="recommend-tableHead col">最適季節</div>
                      <div className="recommend-tableBody col">
                        {detail.season}
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
          {/* <GoogleMap></GoogleMap> */}
          {/* googlemap */}
          <ProductTag></ProductTag>
        </div>
      </div>
      <Comment detail={detail}></Comment>
      <RecommendCard levelCard={levelCard}></RecommendCard>
    </div>
  );
}

export default withRouter(DetailContent);
