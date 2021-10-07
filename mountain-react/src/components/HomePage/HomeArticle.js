import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import '../../styles/HomePage/HomeArticle.scss';
import { Link } from 'react-router-dom'; //a標籤要變成link
//===api start===
import { homeURL, IMAGE_URL } from '../../utils/config';
import axios from 'axios';
//===api end===
//===images===
import lowLevel from '../../img/contentMountain/low_icon.svg';
//===icon start===
import { FaStar, FaRegStar, FaShoePrints } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';

function HomeArticle(props) {
  const [articleData, setArticleData] = useState([]);
  // const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    async function homeData() {
      try {
        const homeData = await axios.get(homeURL);
        // const commentData = await axios.get(commentURL);
        console.log(homeData.data); //for check
        setArticleData(homeData.data);
        // setCommentData(commentData.data);

        //===slider===
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav',
        });
        $('.slider-nav').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: true,
          asNavFor: '.slider-for',
          dots: false,
          focusOnSelect: true,
          verticalSwiping: true,
          autoplay: true,
          autoplaySpeed: 5000,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                vertical: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                vertical: false,
              },
            },
            {
              breakpoint: 580,
              settings: {
                vertical: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 380,
              settings: {
                vertical: false,
                slidesToShow: 2,
              },
            },
          ],
        });
        //===字數限制===
        $(function () {
          var len = 100; // 超過50個字以"..."取代
          $('.ov-hidden').each(function (i) {
            if ($('.ov-hidden').text().length > len) {
              $('.ov-hidden').attr('title', $(this).text());
              var text =
                $('.ov-hidden')
                  .text()
                  .substring(0, len - 1) + '...';
              $('.ov-hidden').text(text);
            }
          });
        });
      } catch (e) {
        console.log(e);
      }
    }
    homeData();
  }, []);

  // 星星平均分數
  const articleStars = (average) => {
    // 給一個空陣列
    let content = [];
    for (let i = 0; i < average; i++) {
      // 推入獲得的星星數
      content.push(
        <BsStarFill className="bi recommend-bi-star-fill mr-1"></BsStarFill>
      );
    }
    for (let j = 0; j < 5 - average; j++) {
      // 推入少的星星數
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
      <div className="homepage-contentMountain">
        <div className="container">
          <h2 className="text-center pb-5">推薦攻略</h2>
          <div className="wrapper">
            <section className="banner-section">
              <div className="container">
                <div className="vehicle-detail-banner banner-content clearfix">
                  <div className="banner-slider row">
                    <div className="slider slider-for">
                      {articleData &&
                        articleData.map((article) => {
                          return (
                            <>
                              <div
                                className="slider-banner-image position-relative bgImg"
                                key={article.id}
                              >
                                <img
                                  src={`${IMAGE_URL}/img/article-img/${article.pic}`}
                                  alt=""
                                />
                                <div className="position-absolute p-4 word col-lg-12">
                                  <h2>{article.name}</h2>
                                  <div className="mt-4 ov-hidden">
                                    {article.content}
                                  </div>

                                  <div className="memory d-flex mt-3">
                                    <div className="new">最新留言</div>
                                    <div className="memoryLine"></div>
                                    {/* <div className="memoryUser">
                                      <img
                                        className="cover-fit"
                                        src={article.user_name}
                                      />
                                    </div> */}
                                    <div className="memoryMember mx-4">
                                      <small className="memoryDate">
                                        {article.comments_time}
                                      </small>
                                      <div className="memoryName">
                                        {article.user_name}
                                      </div>
                                    </div>
                                    <div className="memoryContent">
                                      {article.comments_content}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                    <div className="slider slider-nav thumb-image">
                      {articleData &&
                        articleData.map((article, i) => {
                          return (
                            <>
                              <div className="thumbnail-image box" key={i}>
                                <div className="thumbImg">
                                  <img
                                    src={`${IMAGE_URL}/img/article-img/${article.pic}`}
                                    alt=""
                                  />
                                </div>
                                <div className="px-3 py-2 mb-3 articleContent">
                                  <Link
                                    to={'/recommend/detail/' + article.id}
                                    className="unstyle"
                                  >
                                    <h4 className="text-left">
                                      {article.name}
                                    </h4>
                                    <div className="starIcon text-left">
                                      {articleStars(articleData.average)}
                                    </div>
                                    <div className="d-flex ">
                                      <button className="btn d-flex align-items-center">
                                        <img src={lowLevel} className="mr-2" />
                                        <span className=" text-primary levelLow">
                                          難易度{article.level_name}
                                        </span>
                                      </button>
                                      <button className="btn d-flex align-items-center">
                                        <FaShoePrints
                                          size="24"
                                          className="mr-2"
                                          color="#6da77f"
                                        />
                                        <span className=" text-primary">
                                          {article.distance}公里
                                        </span>
                                      </button>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              ;
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeArticle;
