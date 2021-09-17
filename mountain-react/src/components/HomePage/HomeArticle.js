import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import '../../styles/HomePage/HomeArticle.scss';
import { Link } from 'react-router-dom'; //a標籤要變成link
//===api start===
import { homeURL, commentURL } from '../../utils/config';
import axios from 'axios';
//===api end===
//===images===
import sliderBanner from '../../img/contentMountain/jinmianshan.jpeg';
import sliderBanner2 from '../../img/contentMountain/Tapachien.jpeg';
import sliderBanner3 from '../../img/contentMountain/matcha.jpeg';
import sliderItem from '../../img/contentMountain/jinmianshan.jpeg';
import lowLevel from '../../img/contentMountain/low_icon.svg';
import user from '../../img/contentMountain/Tapachien.jpeg';
//===icon start===
import { FaStar, FaRegStar, FaShoePrints } from 'react-icons/fa';

function HomeArticle(props) {
  const [articleData, setArticleData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    async function homeData() {
      try {
        const homeData = await axios.get(homeURL, commentURL);
        console.log(homeData.data); //for check
        setArticleData(homeData.data);

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
          var len = 120; // 超過50個字以"..."取代
          $('.ov-hidden').each(function (i) {
            if ($(this).text().length > len) {
              $(this).attr('title', $(this).text());
              var text =
                $(this)
                  .text()
                  .substring(0, len - 1) + '...';
              $(this).text(text);
            }
          });
        });
      } catch (e) {
        console.log(e);
      }
    }
    homeData();

    // let starIcon = document.querySelectorAll('.commentStar i');
    // for (let i = 0; i < starIcon.length; i++) {
    //   starIcon[i].addEventListener(
    //     'click',
    //     function (event) {
    //       event.preventDefault();
    //       console.log(
    //         'preventDefault will stop you from checking this checkbox!'
    //       );
    //       console.log(this);
    //       for (let j = 0; j <= i; j++) {
    //         starIcon[j].classList.add('bg-danger');
    //         console.log('第 ' + j + ' 號星 加上紅色');
    //       }
    //       for (let k = 4; k > i; k--) {
    //         starIcon[k].classList.remove('bg-danger');
    //         console.log('第 ' + k + ' 號星 去除紅色');
    //       }
    //       var starNumber = i + 1; // starNumber = 傳到資料庫的星數
    //       console.log('評論星數為 ' + starNumber);
    //     },
    //     false
    //   );
    // }
  }, []);
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
                                <img src={sliderBanner} alt="" />
                                <div className="position-absolute p-4 word">
                                  <h2>{article.name}</h2>
                                  <p className="mt-4 ov-hidden">
                                    {article.content}
                                  </p>

                                  <div className="memory d-flex mt-3">
                                    <div className="new">最新留言</div>
                                    <div className="memoryLine"></div>
                                    <div className="memoryUser">
                                      <img className="cover-fit" src={user} />
                                    </div>
                                    <div className="memoryMember mx-4">
                                      <small className="memoryDate">
                                        2021-08-18
                                      </small>
                                      <div className="memoryName">臺灣黑熊</div>
                                    </div>
                                    <div className="memoryContent">
                                      這裡風景好美呀～～～
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="slider-banner-image">
                                <img src={sliderBanner2} alt="" />
                                <div className="position-absolute p-4 word">
                                  <h2>{article.name}</h2>
                                  <p className="mt-4 ov-hidden">
                                    {article.content}
                                  </p>
                                  <div className="memory d-flex mt-3">
                                    <div className="new">最新留言</div>
                                    <div className="memoryLine"></div>
                                    <div className="memoryUser">
                                      <img className="cover-fit" src={user} />
                                    </div>
                                    <div className="memoryMember mx-4">
                                      <small className="memoryDate">
                                        2021-08-18
                                      </small>
                                      <div className="memoryName">臺灣黑熊</div>
                                    </div>
                                    <div className="memoryContent">
                                      這裡風景好美呀～～～
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="slider-banner-image">
                                <img src={sliderBanner3} alt="" />
                                <div className="position-absolute p-4 word">
                                  <h2>{article.name}</h2>
                                  <p className="mt-4 ov-hidden">
                                    {article.content}
                                  </p>
                                  <div className="memory d-flex mt-3">
                                    <div className="new">最新留言</div>
                                    <div className="memoryLine"></div>
                                    <div className="memoryUser">
                                      <img className="cover-fit" src={user} />
                                    </div>
                                    <div className="memoryMember mx-4">
                                      <small className="memoryDate">
                                        2021-08-18
                                      </small>
                                      <div className="memoryName">臺灣黑熊</div>
                                    </div>
                                    <div className="memoryContent">
                                      這裡風景好美呀～～～
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                    <div className="slider slider-nav thumb-image">
                      <div className="thumbnail-image box">
                        <div className="thumbImg">
                          <img src={sliderBanner} alt="" />
                        </div>
                        <div className="px-3 py-2 bg-white mb-3">
                          <Link to="#/" className="unstyle">
                            <h4 className="text-left">陽明山東西大縱走</h4>
                            <div className="starIcon text-left">
                              <FaStar size="24" />
                              <FaStar size="24" />
                              <FaStar size="24" />
                              <FaRegStar size="24" />
                              <FaRegStar size="24" />
                            </div>
                            <div className="d-flex ">
                              <button className="btn d-flex align-items-center">
                                <img
                                  src="./img/contentMountain/low_icon.svg"
                                  className="mr-2"
                                />
                                <span className=" text-primary levelLow">
                                  難度低
                                </span>
                              </button>
                              <button className="btn d-flex align-items-center">
                                <FaShoePrints
                                  size="24"
                                  className="mr-2"
                                  color="#6da77f"
                                />
                                <span className=" text-primary">2.3公里</span>
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="thumbnail-image box">
                        <div className="thumbImg">
                          <img src={sliderBanner2} alt="" />
                        </div>
                        <div className="px-3 py-2 bg-white mb-3">
                          <Link to="#/" className="unstyle">
                            <h4 className="text-left">金面山親山步道</h4>
                            <div className="starIcon text-left">
                              <FaStar size="24" />
                              <FaStar size="24" />
                              <FaStar size="24" />
                              <FaRegStar size="24" />
                              <FaRegStar size="24" />
                            </div>
                            <div className="d-flex ">
                              <button className="btn d-flex align-items-center">
                                <img src={lowLevel} className="mr-2" />
                                <span className=" text-primary levelLow">
                                  難度低
                                </span>
                              </button>
                              <button className="btn d-flex align-items-center">
                                <FaShoePrints
                                  size="24"
                                  className="mr-2"
                                  color="#6da77f"
                                />
                                <span className=" text-primary">2.3公里</span>
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="thumbnail-image">
                        <div className="thumbImg">
                          <img src={sliderBanner3} alt="" />
                        </div>
                        <div className="px-3 py-2 bg-white mb-3">
                          <Link to="#/" className="unstyle">
                            <h4 className="text-left">聖母登山步道(抹茶山)</h4>
                            <div className="starIcon text-left">
                              <FaStar size="24" />
                              <FaStar size="24" />
                              <FaStar size="24" />
                              <FaRegStar size="24" />
                              <FaRegStar size="24" />
                            </div>
                            <div className="d-flex ">
                              <button className="btn d-flex align-items-center">
                                <img
                                  src="./img/contentMountain/low_icon.svg"
                                  className="mr-2"
                                />
                                <span className=" text-primary levelLow">
                                  難度低
                                </span>
                              </button>
                              <button className="btn d-flex align-items-center">
                                <FaShoePrints
                                  size="24"
                                  className="mr-2"
                                  color="#6da77f"
                                />
                                <span className=" text-primary">2.3公里</span>
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
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
