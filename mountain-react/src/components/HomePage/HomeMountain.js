import React, { useEffect, useState } from 'react';
import '../../styles/HomePage/HomeMountain.scss';
//api start
import { authURL } from '../../utils/config';
import { openWeatherKey } from '../../utils/config';

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

  useEffect(() => {
    // geolocation
    if (navigator.geolocation) {
      // 執行要權限的function
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。');
    }
  }, []);

  useEffect(() => {
    //=== weather variable star ===//
    const locations = weather.map((location) => location.locationName);
    // console.log(locations); //for check
    const elements = weather.map((element) => element.elementName);
    // console.log(elements); //for check
    const parameters = weather.map((parameter) => parameter.parameterName);
    // console.log(parameters); //for check
    //=== weather variable end ===//

    async function homeData() {
      try {
        const homeData = await axios.get(authURL);
        // console.log(homeData.data); //for check
        setListData(homeData.data);

        //=== weather API + location
        const weatherData = await axios.get(
          `${weatherURL}&locationName=${locations}&elementName=${elements}&parameterName=${parameters}`
        );
        let location = weatherData.data.records.location;
        // console.log('weatherData:', location); //for check
        setWeatherData(location);
        //確認使用者裝置是否抓到地點位置
        if (navigator.geolocation) {
          // 使用者不提供權限，或是發生其它錯誤
          function error() {
            Swal.fire({
              icon: 'error',
              title: '無法取得您的位置，請提供權限！利於計算您到景點距離。',
              showConfirmButton: true,
            });
          }
          // 使用者允許抓目前位置，回傳經緯度
          function success(position) {
            let Lat = position.coords.latitude;
            let Lon = position.coords.longitude;
            let LatLon = { Lat, Lon };
            setUserLocation(LatLon);
            // console.log(userLocation);
          }
          // 跟使用者拿所在位置的權限
          navigator.geolocation.getCurrentPosition(success, error);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Sorry, 你的裝置不支援地理位置功能。',
            showConfirmButton: true,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    homeData();
  }, [listData]);

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

  const changeLevel = () => {
    let btn = document.querySelectorAll('.homepage-sliderBtn');
    let content = document.querySelectorAll('.homepage-wrapper-Taiwan');
    let center = document.querySelectorAll('.homepage-center');
    let level = document.querySelectorAll('.homepage-level');
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function () {
        for (let j = 0; j < btn.length; j++) {
          btn[j].classList.remove('active');
          content[j].classList.remove('active');
          center[j].classList.remove('active');
          level[j].classList.remove('active');
        }
        this.classList.add('active');
        content[i].classList.add('active');
        center[i].classList.add('active');
        level[i].classList.remove('active');
      });
    }
  };

  return (
    <>
      {/* =========content star=========  */}
      <div className="homepage-all">
        <div className="homepage-contentTop position-relative">
          <div className="d-flex">
            <div>
              <h1 className="homepage-title" data-spotlight="和山一起森呼吸">
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
                <a href="#/" onClick={changeLevel}>
                  <div className="homepage-center active"></div>
                  <div className="homepage-level">初級</div>
                </a>
              </div>
              <div className="homepage-sliderBtn homepage-med" data-slide="1">
                <a href="#/" onClick={changeLevel}>
                  <div className="homepage-center"></div>
                  <div className="homepage-level">中級</div>
                </a>
              </div>
              <div className="homepage-sliderBtn" data-slide="2">
                <a href="#/" onClick={changeLevel}>
                  <div className="homepage-center"></div>
                  <div className="homepage-level">高級</div>
                </a>
              </div>
            </div>

            {/*  ========= 初級 star=========  */}
            <div
              className="homepage-wrapper-Taiwan cover-fit position-absolute active"
              id="low"
            >
              <figure className="position-absolute homepage-taiwan">
                <img src={Taiwan} alt="台灣" />
              </figure>
              <figure className="position-absolute homepage-low">
                <img src={Low} alt="" />
              </figure>
              <figure className="position-absolute homepage-low2">
                <img src={Low2} alt="" />
              </figure>
              <figure className="position-absolute homepage-low3">
                <img src={Low3} alt="" />
              </figure>
              <div
                className="position-absolute homepage-bear animate__animated animate__zoomIn"
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
              className="homepage-wrapper-Taiwan cover-fit position-absolute"
              id="medium"
            >
              <figure className="position-absolute homepage-taiwan">
                <img src={Taiwan} alt="" />
              </figure>
              <figure className="position-absolute homepage-medium">
                <img src={Medium} alt="" />
              </figure>
              <figure className="position-absolute homepage-medium2">
                <img src={Medium2} alt="" />
              </figure>
              <figure className="position-absolute homepage-medium3">
                <img src={Medium3} alt="" />
              </figure>
              <figure className="position-absolute homepage-bearM" id="bear">
                <img src={TaiwanBearM} alt="" />
              </figure>
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
              className="homepage-wrapper-Taiwan cover-fit position-absolute"
              id="high"
            >
              <figure className="position-absolute homepage-taiwan">
                <img src={Taiwan} alt="" />
              </figure>
              <figure className="position-absolute homepage-high">
                <img src={High} alt="" />
              </figure>
              <figure className="position-absolute homepage-high2">
                <img src={High2} alt="" />
              </figure>

              <figure className="position-absolute homepage-bearH" id="bear">
                <img src={TaiwanBearH} alt="" />
              </figure>
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
