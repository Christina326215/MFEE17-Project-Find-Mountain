import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import '../../styles/HomePage/HomeArticle.scss';
import { Link } from 'react-router-dom'; //a標籤要變成link

//images
import sliderBanner from '../../img/contentMountain/jinmianshan.jpeg';
import sliderItem from '../../img/contentMountain/jinmianshan.jpeg';
import lowLevel from '../../img/contentMountain/low_icon.svg';
import km from '../../img/contentMountain/footprints 1.svg';
import user from '../../img/contentMountain/Tapachien.jpeg';
//icon
import { FaRegUserCircle, FaStar, FaRegStar } from 'react-icons/fa';

function HomeArticle(props) {
  useEffect(() => {
    //slider
    $('.homepage-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.homepage-slider-nav',
    });
    $('.homepage-slider-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      asNavFor: '.homepage-slider-for',
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
    $(function () {
      var len = 120; // 超過50個字以"..."取代
      $('.homepage-ov-hidden').each(function (i) {
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
  }, []);
  return (
    <>
      {/* <!-- =========推薦攻略 star========= --> */}
      <div className="homepage-contentMountain">
        <div className="container homepage-container">
          <h2 className="text-center pb-5">推薦攻略</h2>
          <div className="homepage-wrapper">
            <section className="homepage-banner-section">
              <div className="container homepage-container">
                <div className="homepage-vehicle-detail-banner homepage-banner-content clearfix">
                  <div className="banner-slider row">
                    <div className="homepage-slider homepage-slider-for col-lg-8">
                      <div className="homepage-slider-banner-image position-relative">
                        <img
                          class="cover-fit bgImg"
                          src={sliderBanner}
                          alt=""
                        />
                        <div className="position-absolute p-4 homepage-word">
                          <h2>陽明山東西大縱走</h2>
                          <p className="mt-4 homepage-ov-hidden">
                            陽明山東西大縱走是一條位於陽明山國家公園的長程縱走，在將近11個小時的路程中，可登頂十座山，分別為頂山、石梯嶺、竹篙山、七星東峰、七星主峰、大屯主峰、大屯南峰、大屯西峰、面天山、向天山。
                            陽明山東西大縱走一次走完連峰需10～12小時以上，十分考驗體力，因此也成為許多山友磨練體能、挑戰自己的超級健腳路線。
                          </p>
                          <div className="homepage-memory d-flex mt-3">
                            <div className="homepage-new">最新留言</div>
                            <div className="homepage-memoryLine"></div>
                            <div className="homepage-memoryUser">
                              <img class="cover-fit" src={user} alt="" />
                            </div>

                            <div className="homepage-memoryMember mx-4">
                              <small className="homepage-memoryDate">
                                2021-08-18
                              </small>
                              <div className="homepage-memoryName">
                                臺灣黑熊
                              </div>
                            </div>
                            <div className="homepage-memoryContent">
                              這裡風景好美呀～～～
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="homepage-slider-banner-image">
                        <img
                          src="./img/contentMountain/jinmianshan.jpeg"
                          alt=""
                        />
                        <div className="position-absolute p-4 homepage-word">
                          <h2>金面山親山步道</h2>
                          <p className="mt-4 homepage-ov-hidden">
                            金面山為五指山系之西南稜，分金面山與小金面山，這座山地質中的安山砂岩含有石英，因此當太陽照射石遠望山頂閃閃發光，當地人便稱之為金面山。
                            金面山位於內湖金龍產業道路西邊，因從碧山巖方向看過來，山頂巨石形貌有如鳥嘴般尖銳，因此又名剪刀石山，海拔雖僅258公尺卻獨具高山氣勢，山谷曾是清代時期臺北建城時，所用石材的大石之地，巨岩錯落起伏、崢嶸並立，登上半山腰，有一處清代採石場的石堡瞭望台，如今仍留有開採痕跡，置身山頂可以遠眺內湖大埤及台北街景，視野開闊、景致優美。
                          </p>
                          <div className="homepage-memory d-flex mt-3">
                            <div className="homepage-new">最新留言</div>
                            <div className="homepage-memoryLine"></div>
                            <i className="bi bi-person-circle"></i>
                            <div className="homepage-memoryMember mx-4">
                              <small className="homepage-memoryDate">
                                2021-08-18
                              </small>
                              <div className="homepage-memoryName">
                                臺灣黑熊
                              </div>
                            </div>
                            <div className="homepage-memoryContent">
                              這裡風景好美呀～～～
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="homepage-slider-banner-image">
                        <img src="./img/contentMountain/matcha.jpeg" alt="" />
                        <div className="position-absolute p-4 word">
                          <h2>聖母登山步道(抹茶山)</h2>
                          <p className="mt-4 homepage-ov-hidden">
                            聖母登山步道位於宜蘭縣礁溪鄉五峰旗瀑布風景區上方，為天主教徒的朝聖之路，亦是前往蘭陽五岳之一的三角崙山之中繼站。
                            終點的觀景平台是宜蘭與台北行政疆界，東臨蘭陽平原、西枕雪山山脈層巒疊翠；而稜線迎風面箭竹綠海隨風飄動、沙沙歌聲，美得讓人駐足忘返。
                          </p>
                          <div className="homepage-memory d-flex mt-3">
                            <div className="homepage-new">最新留言</div>
                            <div className="homepage-memoryLine"></div>
                            <i className="bi bi-person-circle"></i>
                            <div className="memoryMember mx-4">
                              <small className="memoryDate">2021-08-18</small>
                              <div className="memoryName">臺灣黑熊</div>
                            </div>
                            <div className="memoryContent">
                              這裡風景好美呀～～～
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="homepage-slider homepage-slider-nav homepage-thumb-image col-lg-4">
                      <div className="homepage-thumbnail-image homepage-box">
                        <div className="homepage-thumbImg">
                          <img class="cover-fit" src={sliderItem} alt="" />
                        </div>
                        <div className="px-3 py-2 bg-white mb-3">
                          <Link to="/" className="homepage-unstyle">
                            <h4 className="text-left">陽明山東西大縱走</h4>
                            <div className="homepage-starIcon text-left">
                              <FaStar fontSize="24" />
                              <FaStar fontSize="24" />
                              <FaStar fontSize="24" />
                              <FaRegStar fontSize="24" />
                              <FaRegStar fontSize="24" />
                            </div>
                            <div className="d-flex ">
                              <button className="btn d-flex align-items-center">
                                <img src={lowLevel} className="mr-2" />
                                <span className=" text-primary homepage-levelLow">
                                  難度低
                                </span>
                              </button>
                              <button className="btn d-flex align-items-center">
                                <img src={km} className="mr-2" />
                                <span className=" text-primary">2.3公里</span>
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* <div className="homepage-thumbnail-image box">
                        <div className="homepage-thumbImg">
                          <img src={SliderItem} alt="" />
                        </div>
                        <div className="px-3 py-2 bg-white mb-3">
                          <a href="" className="unstyle">
                            <h4 className="text-left">金面山親山步道</h4>
                            <div className="starIcon text-left">
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star"></i>
                              <i className="bi bi-star"></i>
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
                                <img
                                  src="./img/contentMountain/footprints 1.svg"
                                  className="mr-2"
                                />
                                <span className=" text-primary">2.3公里</span>
                              </button>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="thumbnail-image">
                        <div className="thumbImg">
                          <img src={SliderItem} alt="" />
                        </div>
                        <div className="px-3 py-2 bg-white mb-3">
                          <a href="" className="unstyle">
                            <h4 className="text-left">聖母登山步道(抹茶山)</h4>
                            <div className="starIcon text-left">
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star"></i>
                              <i className="bi bi-star"></i>
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
                                <img
                                  src="./img/contentMountain/footprints 1.svg"
                                  className="mr-2"
                                />
                                <span className=" text-primary">2.3公里</span>
                              </button>
                            </div>
                          </a>
                        </div>
                      </div> */}
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
