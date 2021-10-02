import React from 'react';
import { IMAGE_URL } from '../../utils/config';
import { Link } from 'react-router-dom';

function RecommendCard(props) {
  const { levelCard } = props;

  return (
    <div>
      <div className="container recommend-body">
        <div className="recommend-wrapper">
          <h2 className="recommend-body-content-big-bold">其他適合景點</h2>
          <div>
            <div className="row my-4">
              {levelCard.map((article, i) => {
                return (
                  <div className="col-lg-4 px-0" key={i}>
                    <div className="recommend-article-card">
                      <div className="recommend-article-img-box">
                        <Link to={'/recommend/detail/' + article.id}>
                          <img
                            className="recommend-cover-fit"
                            src={`${IMAGE_URL}/img/article-img/${article.pic}`}
                            alt=""
                          />
                        </Link>
                      </div>
                      <Link
                        to={'/recommend/detail/' + article.id}
                        className="recommend-article-name"
                      >
                        {article.name}
                      </Link>
                      <br />
                      <p className="text-right">
                        <Link
                          to={'/recommend/detail/' + article.id}
                          //   to={`/recommend/detail/${article.id}`}
                          className="recommend-see-more-btn"
                        >
                          查看更多
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendCard;
