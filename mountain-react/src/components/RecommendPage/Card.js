import React from 'react';
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import levelLow from '../../img/article-img/level_low.svg';
import levelMiddle from '../../img/article-img/level_medium.svg';
import levelHigh from '../../img/article-img/level_high.svg';
import { FaShoePrints } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { useEffect } from 'react';
import axios from 'axios';
import { recommendURL } from '../../utils/config';
import { IMAGE_URL } from '../../utils/config';
import DetailContent from './DetailContent';

//====== below 星星評分 star ======//
import ReactStars from 'react-rating-stars-component';
//====== above 星星評分 star ======//

//====== below catch member info star ======//
// import { useAuth } from '../../context/auth';
//====== below catch member info end ======//

function Card(props) {
  const { star, setStar } = props;
  // 篩選結果
  const { result } = props;
  const length = result.length;

  // useEffect(() => {
  //   async function cardData() {
  //     // 全部文章資料
  //     // const recommendData = await axios.get(recommendURL);
  //     // const totalDetail = recommendData.data;

  //     // 網址id判斷此篇文章資料
  //     const id = Number(props.match.params.id);
  //     // const newDetail = totalDetail.find((v) => {
  //     //   return v.id === id;
  //     // });
  //     // if (newDetail) setDetail(newDetail);

  //     // 推薦同等級文章
  //     // const RecommentCard = totalDetail.filter((v) => {
  //     //   return v.level === newDetail.level;
  //     // });
  //     // if (RecommentCard) setLevelCard(RecommentCard);

  //     // 全部文章星星資料
  //     const totalStarData = await axios.get(`${recommendURL}/star`);
  //     const starData = totalStarData.data;
  //     // 當篇文章星星資料
  //     //計算星星平均分數
  //     let stararray = [];
  //     starData.filter((e) => {
  //       if (e.article_id === id) {
  //         stararray.push(e.star_grade);
  //       }
  //       return null;
  //     });
  //     // console.log('stararray', stararray);
  //     const total = stararray.reduce((acc, cur) => {
  //       return acc + cur;
  //     });

  //     // console.log('tota/l', total);
  //     // 分數四捨五入
  //     let starResult = Math.round(total / stararray.length);
  //     console.log('starResult', starResult);
  //     setStar(starResult);
  //   }
  //   cardData();
  //   console.log('star', star);
  // }, []);

  return (
    <div>
      <h2 className="recommend-body-content-big-bold recommend-inline">
        推薦路線
      </h2>
      <p className="recommend-inline ml-2">共 {length} 筆資料</p>
      {result.map((article, i) => {
        return (
          <div className="row-cols-1 mt-3 mb-3" key={i}>
            <div className="recommend-card card">
              <div className="row no-gutters">
                <div className="col-md-4 recommend-pic-box">
                  <div className="recommend-pic-box-wrap">
                    <img
                      className="recommend-cardimg img-fluid"
                      src={`${IMAGE_URL}/img/article-img/${article.pic}`}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="recommend-card-body card-body">
                    <div className="row">
                      <div className="recommend-cardFirstLine col-12">
                        <h5 className="recommend-cardTitle mr-3 recommend-h3 h3">
                          {article.name}
                        </h5>
                        <p className="text-primary recommend-body-content mr-3 ">
                          {article.level_name === '低' ? (
                            <img className="mr-1" src={levelLow} alt="..." />
                          ) : (
                            ''
                          )}
                          {article.level_name === '中' ? (
                            <img className="mr-1" src={levelMiddle} alt="..." />
                          ) : (
                            ''
                          )}
                          {article.level_name === '高' ? (
                            <img className="mr-1" src={levelHigh} alt="..." />
                          ) : (
                            ''
                          )}
                          難度{article.level_name}
                        </p>
                        <p className="text-primary recommend-body-content mr-3 ">
                          <i className="fas recommend-fa-shoe-prints mr-2">
                            <FaShoePrints size={20}></FaShoePrints>
                          </i>
                          {article.distance}公里
                        </p>
                        {/* <i className="bi recommend-bi-heart-fill mr-2 ml-auto">
                          <BsHeartFill></BsHeartFill>
                        </i>
                        <p className="recommend-body-content">加入收藏</p> */}
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
                          {article.city}
                        </p>
                      </div>
                      <div className="recommend-textBox col-12">
                        <p className="recommend-card-text recommend-body-content">
                          {article.content}
                        </p>
                      </div>
                      <div className="recommend-cardLastLine col-12 mt-3 mb-0">
                        <small className="recommend-body-content-small text-muted align-self-end">
                          最高海拔 {article.height} 公尺
                        </small>
                        <Link
                          to={'/recommend/detail/' + article.id}
                          // star={star}
                          // setStar={setStar}
                        >
                          <button className="btn btn-primary">查看更多</button>
                        </Link>
                        {/* <DetailContent></DetailContent> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
