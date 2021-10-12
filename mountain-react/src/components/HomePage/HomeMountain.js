import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //a標籤要變成link
import '../../styles/HomePage/HomeMountain.scss';
//api start
import { authURL } from '../../utils/config';
import { openWeatherKey } from '../../utils/config';
import $ from 'jquery';
import axios from 'axios';
import { mapURL, weatherURL, IMAGE_URL } from '../../utils/config';
//weather
import { weather } from '../../utils/weather';
//===api end===

//====== below modal star ======//
import Swal from 'sweetalert2';
//====== below modal end ======//

//===images start===
import Blobs from '../../img/contentTop/blobsAll.svg';
import Taiwan from '../../img/contentTop/taiwanAll.png';
import Low from '../../img/contentTop/low/low1.png';
import Low2 from '../../img/contentTop/low/low2.png';
import Low3 from '../../img/contentTop/low//low3.png';
import TaiwanBearL from '../../img/contentTop/low/taiwanBearL.png';
import CloudMove from '../../img/contentTop/cloud.png';
import CloudMove2 from '../../img/contentTop/cloud2.png';
import CloudMove3 from '../../img/contentTop//cloud3.png';
import Medium from '../../img/contentTop/medium/medium1.png';
import Medium2 from '../../img/contentTop/medium/medium2.png';
import Medium3 from '../../img/contentTop/medium/medium3.png';
import TaiwanBearM from '../../img/contentTop/medium/taiwanBearM.png';
import High from '../../img/contentTop/high/high1.png';
import High2 from '../../img/contentTop/high/high2.png';
import TaiwanBearH from '../../img/contentTop/high/taiwanBearH.png';
import HomeOutfit from './HomeOutfit';
import HomeArticle from './HomeArticle';
import HomeShop from './HomeShop';
import { spinner } from '../../utils/spinner'; //bootstrap spinner
// import $ from 'jquery';
//===icon start===
import { GeoAlt, LightbulbFill } from 'react-bootstrap-icons';

function HomeMountain(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [listData, setListData] = useState([]);
  // 天氣api
  // const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState('');
  const [weatherText, setWeatherText] = useState('');
  const [weatherTemp, setWeatherTemp] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  // const [showWeather, setShowWeather] = useState(false);

  const [userLocationBtn, setUserLocationBtn] = useState(false); //10/6 歐陽add

  useEffect(() => {
    // geolocation
    if (navigator.geolocation) {
      // 10/6 歐陽add 有拿到位置就return start //
      if (userLocation !== null) {
        return;
      }
      // 10/6 歐陽add 有拿到位置就return end //
      // 執行要權限的function
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。');
    }
  }, [userLocation, userLocationBtn]);

  function success(pos) {
    /// 抓 geolocation
    var crd = pos.coords;
    // console.log('Your current position is:');
    // console.log('Latitude : ' + crd.latitude);
    const geoLat = crd.latitude;
    // console.log('Longitude: ' + crd.longitude);
    const geoLon = crd.longitude;
    // console.log('More or less ' + crd.accuracy + ' meters.');
    // console.log('geoLat', geoLat);
    // console.log('geoLon', geoLon);
    setUserLocation(geoLat); //10/6 歐陽add 把 lat 放進usestate讓useeffect判斷有沒有值

    /// openweather API
    async function weatherData() {
      try {
        // console.log('openWeatherKey', openWeatherKey);
        const weatherData = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${geoLat}&lon=${geoLon}&appid=${openWeatherKey}&lang=zh_tw&units=metric`
        );
        // console.log('weatherData.data', weatherData.data);
        setCityName(weatherData.data.name);
        setWeatherText(weatherData.data.weather[0].description);
        setWeatherTemp(weatherData.data.main.temp);
        setWeatherIcon(weatherData.data.weather[0].icon);
      } catch (e) {
        console.log(e);
      }
    }
    weatherData();
  }

  function error(err) {
    // 10/6 歐陽add 設開關每過 1 sec 跑出彈跳視窗直到使用者開啟位置給追蹤 start //
    setTimeout(() => {
      // console.log('in'); //for check
      if (userLocationBtn === false) {
        setUserLocationBtn(true);
      } else {
        setUserLocationBtn(false);
      }
    }, 10000);
    // 10/6 歐陽add 設開關每過 1 sec 跑出彈跳視窗直到使用者開啟位置給追蹤 end //

    Swal.fire({
      icon: 'error',
      title: '裝置抓取地理位置錯誤',
      text: '請檢查是否已啟用位置資訊存取功能',
      footer:
        '<a href="https://support.google.com/chrome/answer/142065?hl=zh-Hant&co=GENIE.Platform%3DDesktop">如何啟用分享您的位置資訊?</a>',
    });
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 4000,
    maximumAge: 0,
  };

  ////// 天氣api
  //初中高階切換by abby 有在各個homepage-wrapper-Taiwan增加classname wrapper-Taiwan0之類的
  const changeLevel = (e) => {
    let i = $(e.currentTarget).data('btn');
    // console.log('i', $(e.currentTarget).data('btn'));
    //btn
    $(e.currentTarget).parent().addClass('active');
    $(e.currentTarget).parent().siblings().removeClass('active');
    //center
    $(e.currentTarget).parent().find('.homepage-center').addClass('active');
    $(e.currentTarget)
      .parent()
      .siblings()
      .find('.homepage-center')
      .removeClass('active');
    //homepage-wrapper-Taiwan
    $(`.wrapper-Taiwan${i}`).addClass('active');
    $(`.wrapper-Taiwan${i}`)
      .siblings('.homepage-wrapper-Taiwan')
      .removeClass('active');
  };

  return (
    <>
      {/* =========content star=========  */}
      <div className="homepage-all">
        <div className="homepage-contentTop position-relative">
          <div className="d-flex">
            <div>
              <h1
                className="homepage-title mt-md-3"
                data-spotlight="和山一起森呼吸"
              >
                和山一起森呼吸
              </h1>
            </div>
            <div className="homepage-weather position-absolute">
              {weatherIcon ? (
                <div>
                  <div className="homepage-weatherTop d-flex align-items-center mb-1">
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100,
                        background: `rgba(255,255,255,0.3)`,
                      }}
                      className="mr-3 mb-2"
                    >
                      <img
                        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                        // src={`http://openweathermap.org/img/wn/01d@2x.png`}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div style={{ fontSize: 20, fontFamily: 'sans-serif' }}>
                        <GeoAlt size="24" className=" mr-2" />
                        {/* API城市為英文先寫死 */}
                        {/* {cityName} */}
                        桃園市
                      </div>
                      <div
                        className="text-right mt-2"
                        style={{ fontSize: 28, fontFamily: 'sans-serif' }}
                      >
                        {weatherTemp}°C
                      </div>
                    </div>
                  </div>
                  <div className="homepage-notice d-flex justify-content-center align-items-center">
                    <LightbulbFill size="20" className="mr-2" />
                    <div style={{ fontSize: 18, fontFamily: 'sans-serif' }}>
                      {weatherText}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{
                    height: '610px',
                    transform: `translate(45px, -250px)`,
                  }}
                >
                  <div
                    className="spinner-border text-success"
                    role="status"
                  ></div>
                  <div className="h5 mt-4">抓取裝置位置</div>
                </div>
              )}
            </div>
            <div className="align-content-start homepage-blobs animate__animated animate__fadeInLeft">
              <img className="cover-fit" src={Blobs} alt="" />
            </div>
            <div className="homepage-banner position-absolute">
              <div className="homepage-wave"></div>
              <div className="homepage-wave"></div>
              <div className="homepage-wave"></div>
            </div>
            <div id="homepage-pagination">
              <div className="active homepage-sliderBtn" data-slide="0">
                <button onClick={changeLevel} data-btn="0">
                  <div className="homepage-center active"></div>
                  <div className="homepage-level">初級</div>
                </button>
              </div>
              <div className="homepage-sliderBtn homepage-med" data-slide="1">
                <button onClick={changeLevel} data-btn="1">
                  <div className="homepage-center"></div>
                  <div className="homepage-level">中級</div>
                </button>
              </div>
              <div className="homepage-sliderBtn" data-slide="2">
                <button onClick={changeLevel} data-btn="2">
                  <div className="homepage-center"></div>
                  <div className="homepage-level">高級</div>
                </button>
              </div>
            </div>

            {/*  ========= 初級 star=========  */}
            <div
              className="homepage-wrapper-Taiwan cover-fit position-absolute active wrapper-Taiwan0"
              id="low"
            >
              <figure className="position-absolute homepage-taiwan">
                <img src={Taiwan} alt="台灣" />
              </figure>
              <figure className="position-absolute homepage-low animate__animated animate__shakeX">
                <img src={Low} alt="" />
              </figure>
              <figure className="position-absolute homepage-low2 animate__animated animate__shakeX">
                <img src={Low2} alt="" />
              </figure>
              <figure className="position-absolute homepage-low3 animate__animated animate__shakeX">
                <img src={Low3} alt="" />
              </figure>
              <div
                className="position-absolute homepage-bear animate__animated animate__rubberBand"
                id="bear"
              >
                <img src={TaiwanBearL} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudTop position-absolute">
                <img src={CloudMove} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudM position-absolute">
                <img src={CloudMove2} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudBottom  position-absolute">
                <img src={CloudMove3} alt="" />
              </div>
            </div>
            {/* <!-- ========= 初級 end========= --> */}
            {/* <!-- ========= 中級 star========= --> */}
            <div
              className="homepage-wrapper-Taiwan cover-fit position-absolute wrapper-Taiwan1"
              id="medium"
            >
              <figure className="position-absolute homepage-taiwan">
                <img src={Taiwan} alt="" />
              </figure>
              <figure className="position-absolute homepage-medium animate__animated animate__shakeX">
                <img src={Medium} alt="" />
              </figure>
              <figure className="position-absolute homepage-medium2 animate__animated animate__shakeX">
                <img src={Medium2} alt="" />
              </figure>
              <figure className="position-absolute homepage-medium3 animate__animated animate__shakeX">
                <img src={Medium3} alt="" />
              </figure>
              <div
                className="position-absolute homepage-bearM animate__animated animate__rubberBand"
                id="bear"
              >
                <img src={TaiwanBearM} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudTop position-absolute">
                <img src={CloudMove} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudM position-absolute">
                <img src={CloudMove2} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudBottom position-absolute">
                <img src={CloudMove3} alt="" />
              </div>
            </div>
            {/* <!-- ========= 中級 end========= --> */}
            {/* <!-- ========= 高級 star========= --> */}
            <div
              className="homepage-wrapper-Taiwan cover-fit position-absolute wrapper-Taiwan2"
              id="high"
            >
              <figure className="position-absolute homepage-taiwan">
                <img src={Taiwan} alt="" />
              </figure>
              <figure className="position-absolute homepage-high animate__animated animate__shakeX">
                <img src={High} alt="" />
              </figure>
              <figure className="position-absolute homepage-high2 animate__animated animate__shakeX">
                <img src={High2} alt="" />
              </figure>

              <div
                className="position-absolute homepage-bearH animate__animated animate__rubberBand"
                id="bear"
              >
                <img src={TaiwanBearH} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudTop position-absolute">
                <img src={CloudMove} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudM position-absolute">
                <img src={CloudMove2} alt="" />
              </div>
              <div className="homepage-cloud homepage-cloudBottom  position-absolute">
                <img src={CloudMove3} alt="" />
              </div>
            </div>
            {/* <!-- ========= 高級 end========= --> */}
          </div>
        </div>
        <HomeArticle />
        <HomeShop />
        <HomeOutfit />
      </div>
    </>
  );
}

export default HomeMountain;
