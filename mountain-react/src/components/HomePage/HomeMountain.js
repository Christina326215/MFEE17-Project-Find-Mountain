import React, { useEffect, useState } from 'react';
import '../../styles/HomePage/HomeMountain.scss';
//api start
import { authURL } from '../../utils/config';
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
//===icon start===
import {
  BrightnessHigh,
  ThermometerHalf,
  GeoAlt,
  LightbulbFill,
  Cloud,
  Clouds,
  CloudLightning,
  CloudLightningRain,
  CloudDrizzle,
} from 'react-bootstrap-icons';

function HomeMountain(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [listData, setListData] = useState([]);
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
        console.log(homeData.data); //for check
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
              <div className="homepage-weatherTop d-flex align-items-center mb-3">
                <BrightnessHigh size="40" className="mx-3" />
                <div className="homepage-location">
                  <GeoAlt size="20" className=" mr-2" />
                  桃園市
                </div>
              </div>
              <div className="homepage-notice">
                <LightbulbFill size="20" className="mr-2" />
                請注意防曬!!
              </div>
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
