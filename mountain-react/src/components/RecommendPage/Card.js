import React from 'react';
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import levelLow from '../../img/article-img/level_low.svg';
import levelMiddle from '../../img/article-img/level_medium.svg';
import levelHigh from '../../img/article-img/level_high.svg';
import { FaShoePrints } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { IMAGE_URL } from '../../utils/config';
// import PagesBtn from '../PagesBtn'; //分頁按鈕
// import { useAuth } from '../../context/auth'; // 取得會員資料

//====== below catch member info star ======//
// import { useAuth } from '../../context/auth';
//====== below catch member info end ======//

function Card(props) {
  // const { page, setPage, totalPage, setTotalPage } = useAuth(); // 取得會員資料
  // 篩選結果
  const { result } = props;
  const length = result.length;

  return (
    <div>
      <h2 className="recommend-body-content-big-bold recommend-inline">
        推薦路線
      </h2>
      <p className="recommend-inline ml-2">共 {length} 筆資料</p>
      {result.map((detail, i) => {
        return (
          <div className="row-cols-1 mt-3 mb-3" key={i}>
            <div className="recommend-card card">
              <div className="row no-gutters">
                <div className="col-md-4 recommend-pic-box">
                  <div className="recommend-pic-box-wrap">
                    <img
                      className="recommend-cardimg img-fluid"
                      src={`${IMAGE_URL}/img/article-img/${detail.pic}`}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="recommend-card-body card-body">
                    <div className="row">
                      <div className="recommend-cardFirstLine col-12">
                        <h5 className="recommend-cardTitle mr-3 recommend-h3 h3">
                          {detail.name}
                        </h5>
                        <p className="text-primary recommend-body-content mr-3 ">
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
                        </p>
                        <p className="text-primary recommend-body-content mr-3 ">
                          <i className="fas recommend-fa-shoe-prints mr-2">
                            <FaShoePrints size={20}></FaShoePrints>
                          </i>
                          {detail.distance}公里
                        </p>
                      </div>
                      <div className="recommend-cardSecondLine col-12">
                        <div className="recommend-starGroup mr-3">
                          {!detail.average || detail.average === 0 ? (
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
                          {detail.average === 1 ? (
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
                          {detail.average === 2 ? (
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
                          {detail.average === 3 ? (
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
                          {detail.average === 4 ? (
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
                          {detail.average === 5 ? (
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
                        <p className="recommend-body-content text-muted pt-2 m-0">
                          {detail.city}
                        </p>
                      </div>
                      <div className="recommend-textBox col-12">
                        <p className="recommend-card-text recommend-body-content">
                          {detail.content}
                        </p>
                      </div>
                      <div className="recommend-cardLastLine col-12 mt-3 mb-0">
                        <small className="recommend-body-content-small text-muted align-self-end">
                          最高海拔 {detail.height} 公尺
                        </small>
                        <Link
                          to={'/recommend/detail/' + detail.id}
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
      {/* <!-- 分頁 start  --> */}
      {/* <PagesBtn /> */}
      {/* <!-- 分頁 end  --> */}
    </div>
  );
}

export default Card;
