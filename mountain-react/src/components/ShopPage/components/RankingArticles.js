import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { recommendURL, IMAGE_URL } from '../../../utils/config';
import { BsStarFill } from 'react-icons/bs';

function RankingArticles(props) {
  const [rankingA, setRankingA] = useState([]);
  useEffect(() => {
    async function getRankingArticlesData() {
      try {
        let rankingArticlesData = await axios.get(`${recommendURL}/`);
        rankingArticlesData.data.sort(function (a, b) {
          return b.average - a.average;
        });
        let firstThree = rankingArticlesData.data.slice(0, 3);
        console.log('firstThree', firstThree);
        setRankingA(firstThree);
      } catch (e) {
        console.log(e);
      }
    }
    getRankingArticlesData();
  }, []);
  const articleStars = (average) => {
    let content = [];
    for (let i = 0; i < average; i++) {
      content.push(
        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
      );
    }
    for (let j = 0; j < 5 - average; j++) {
      content.push(
        <BsStarFill
          className="bi recommend-bi-star-fill mr-1"
          style={{ color: '#e2e3e1' }}
        ></BsStarFill>
      );
    }
    return content;
  };
  return (
    <>
      <div>
        <div className="position-relative shopmain-title-box">
          <h3 className="shopmain-selected-title text-center">熱門登山攻略</h3>
          <div className="shopmain-title-underline position-absolute"></div>
        </div>
        <div className="row my-4">
          {rankingA.map((article, index) => {
            return (
              <div className="col-lg-4 px-0" key={article.id}>
                <div className="shopmain-article-card">
                  <div className="shopmain-article-img-box">
                    <Link to={`/recommend/detail/${article.id}`}>
                      <img
                        className="shopmain-cover-fit"
                        src={`${IMAGE_URL}/img/article-img/${article.pic}`}
                        alt={article.name}
                        title={article.name}
                      />
                    </Link>
                  </div>
                  <Link
                    to={`/recommend/detail/${article.id}`}
                    className="shopmain-article-name"
                  >
                    {article.name}
                  </Link>
                  <>{articleStars(`${article.average}`)}</>
                  <br />
                  <p className="text-right mt-2">
                    <Link
                      to={`/recommend/detail/${article.id}`}
                      className="shopmain-see-more-btn"
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
    </>
  );
}
export default RankingArticles;
