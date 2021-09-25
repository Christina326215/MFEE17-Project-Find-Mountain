import React from 'react';
import '../../styles/article.css';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/config';
import levelLow from '../../img/article-img/level_low.svg';
import levelMiddle from '../../img/article-img/level_medium.svg';
import levelHigh from '../../img/article-img/level_high.svg';
import { FaShoePrints } from 'react-icons/fa';
import { BsHeartFill } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';

function Card(props) {
  const { result } = props;

  return (
    <div>
      {result.map((article, i) => {
        return (
          <div key={i} className="row-cols-1 mt-3 mb-3">
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
                          2人收藏
                        </small>
                        <Link to={'/recommend/detail/' + article.id}>
                          <button className="btn btn-primary">查看更多</button>
                        </Link>
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
