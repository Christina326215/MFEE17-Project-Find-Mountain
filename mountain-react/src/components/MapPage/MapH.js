import React, { useState, useEffect } from 'react';
import '../../styles/MapStyle/mountain_index_H.css'; //高階Map樣式
import { Link } from 'react-router-dom'; //a標籤要變成link

//====== below modal start ======//
import Swal from 'sweetalert2';
//====== below modal end ======//

//====== below utils start ======//
import { weather } from '../../utils/weather';
//====== below utils end ======//

//====== below api connect tool start ======//
import axios from 'axios';
import { mapURL, weatherURL, IMAGE_URL } from '../../utils/config';
//====== below api connect tool end ======//

//====== below pages components start ======//
import MapHigh from './pages/Map_H';
import { map_btn } from './pages/MapBtn_H';
import { pages_btn } from './pages/PagesBtn';
import ProductRecH from './pages/ProductRec_H';
//====== below pages components end ======//

//====== below icon start ======//
import {
  StarFill,
  Cloud,
  Clouds,
  CloudLightning,
  CloudLightningRain,
  CloudDrizzle,
  BrightnessHigh,
  ThermometerHigh,
  ThermometerHalf,
  ThermometerLow,
} from 'react-bootstrap-icons';
import { FaShoePrints } from 'react-icons/fa';
//====== below icon end ======//

function MapH() {
  const [listData, setListData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [userLocationBtn, setUserLocationBtn] = useState(false);

  //=== 計算兩點距離 start ===//
  function distance(lat1, lon1, lat2, lon2, unit) {
    // console.log('lat1', lat1);
    // console.log('lat1', lon1);
    // console.log('lat2', lat2);
    // console.log('lat2', lon2);
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == 'K') {
        //K: 公里
        dist = Math.floor(dist * 1.609344);
      }
      return dist;
    }
  }
  //=== 計算兩點距離 end ===//

  useEffect(() => {
    //=== weather variable start ===//
    const locations = weather.map((location) => location.locationName);
    // console.log(locations); //for check
    const elements = weather.map((element) => element.elementName);
    // console.log(elements); //for check
    const parameters = weather.map((parameter) => parameter.parameterName);
    // console.log(parameters); //for check
    //=== weather variable end ===//

    //=== Api start ===//
    async function mapLData() {
      try {
        // map api start //
        const mapData = await axios.get(mapURL + '3');
        console.log(mapData.data); //for check
        setListData(mapData.data);
        // map api end //

        // product api start //
        const productData = await axios.get(mapURL + 'product/3');
        console.log('productData:', productData.data); //for check
        setProductData(productData.data);
        // product api end //

        // weather api start //
        const weatherData = await axios.get(
          `${weatherURL}&locationName=${locations}&elementName=${elements}&parameterName=${parameters}`
        );
        let location = weatherData.data.records.location;
        console.log('weatherData:', location); //for check
        setWeatherData(location);
        // weather api end //
      } catch (e) {
        console.log(e);
      }
    }
    mapLData();
    //=== Api end ===//
  }, []);

  useEffect(() => {
    //=== user geolocation start ===//
    // 先確認使用者裝置能不能抓地點
    if (navigator.geolocation) {
      // 使用者不提供權限，或是發生其它錯誤
      function error() {
        //設開關每過 1 sec 跑出彈跳視窗直到使用者開啟位置給追蹤
        setTimeout(() => {
          // console.log('in'); //for check
          if (userLocationBtn === false) {
            setUserLocationBtn(true);
          } else {
            setUserLocationBtn(false);
          }
        }, 10000);
        //彈出視窗
        Swal.fire({
          icon: 'error',
          title: '裝置抓取地理位置錯誤',
          text: '請檢查是否已啟用位置資訊存取功能',
          footer:
            '<a href="https://support.google.com/chrome/answer/142065?hl=zh-Hant&co=GENIE.Platform%3DDesktop">如何啟用分享您的位置資訊?</a>',
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
      // 有拿到位置就return
      if (userLocation.Lat !== undefined) {
        // console.log('in in'); //for check
        return;
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
    //=== user geolocation  end ===//
  }, [userLocationBtn, userLocation]);

  //====== weather 所代表的icon start ======//
  let weatherMap = {};
  weatherMap['晴'] = <BrightnessHigh className="mr-1 mb-1" />;
  weatherMap['陰'] = <Cloud className="mr-1 mb-1" />;
  weatherMap['多雲'] = <Clouds className="mr-1 mb-1" />;
  weatherMap['多雲有雷'] = <CloudLightning className="mr-1 mb-1" />;
  weatherMap['陰有雷'] = <CloudLightning className="mr-1 mb-1" />;
  weatherMap['多雲有雷雨'] = <CloudLightningRain className="mr-1 mb-1" />;
  weatherMap['陰有雷雨'] = <CloudLightningRain className="mr-1 mb-1" />;
  weatherMap['多雲有雨'] = <CloudDrizzle className="mr-1 mb-1" />;
  weatherMap['陰有雨'] = <CloudDrizzle className="mr-1 mb-1" />;

  // console.log('weatherMap:', weatherMap); //for check
  //====== weather 所代表的icon end ======//

  return (
    <>
      {/* <!-- =========content start========= --> */}
      <div>
        <div className="mountain_bg"></div>
        {/* <!-- =========part1 map start========= --> */}
        <MapHigh listData={listData} />
        {/* <!-- =========part1 map end========= --> */}

        <div className="container mountain_container">
          {/* <!-- =========map_btn start========= --> */}
          {map_btn}
          {/* <!-- =========map_btn end========= --> */}

          {/* <!-- =========map list start========= --> */}
          <div className="mountain_content_list">
            <h2>高階列表</h2>
            {/* 大霸北稜線 list star */}
            {listData.map((list) => (
              <div key={list.id} className="mountain_H_list">
                <div className="mountain_H_Xiangshan_list">
                  <img
                    className="mountain_H_Xiangshan_pic"
                    src={`${IMAGE_URL}/img/mountain-img/${list.pic}`}
                    alt="Xiangshan"
                  />
                </div>
                <div className="mountain_H_list_detail">
                  <div>
                    <div className="mountain_H_list_detail_box align-items-center justify-content-between">
                      <div className="mountain_H_list_font_box">
                        <p className="mountain_H_list_title mr-2">
                          {list.name}
                        </p>
                        <p className="mountain_H_list_star text-warning">
                          {list.starAverage === 0 ? (
                            <span className="text-dark mr-1">暫無星級評分</span>
                          ) : (
                            <span className="text-dark mr-1">
                              {list.starAverage}
                            </span>
                          )}
                          <StarFill className="mb-1" />
                        </p>
                      </div>

                      <div className="mountain_H_list_distance_title">
                        <p className="mountain_H_list_title mr-2">您距離此地</p>
                        <p className="mountain_H_list_distance text-primary">
                          <FaShoePrints className="mr-1 mb-1" />
                          {/* count distance */}
                          <span className="mr-3">
                            {distance(
                              userLocation.Lat,
                              userLocation.Lon,
                              `${list.lat}`,
                              `${list.lon}`,
                              'K'
                            )}
                            公里
                          </span>
                        </p>

                        <p className="mountain_H_list_title mr-2">天氣</p>
                        <p className="mountain_H_list_distance text-primary">
                          {/* <BrightnessHigh className="mr-1 mb-1" />
                          <span className="mr-3">晴天</span> */}
                          {/* 判斷氣象的城市名等於資料庫城市名時，帶入該城市的天氣icon */}
                          {weatherData.map((item, i) =>
                            item.parameter[0].parameterValue ===
                            `${list.city}` ? (
                              item.weatherElement[1].elementValue ? (
                                weatherMap[item.weatherElement[1].elementValue]
                              ) : (
                                <Cloud key={i} className="mr-1 mb-1" />
                              )
                            ) : (
                              ''
                            )
                          )}
                          {/* 判斷氣象的城市名等於資料庫城市名時，帶入該城市的天氣 */}
                          {weatherData.map((item, i) =>
                            item.parameter[0].parameterValue ===
                            `${list.city}` ? (
                              item.weatherElement[1].elementValue === '-99' ? (
                                <span key={i} className="mr-3">
                                  無天氣資料
                                </span>
                              ) : (
                                <span key={i} className="mr-3">
                                  {item.weatherElement[1].elementValue}
                                </span>
                              )
                            ) : (
                              ''
                            )
                          )}
                        </p>

                        <p className="mountain_H_list_title mr-2">溫度</p>
                        <p className="mountain_H_list_distance text-primary">
                          {/* <ThermometerHalf className="mr-1 mb-1" />
                          <span>30度</span> */}
                          {/* 判斷氣象的城市名等於資料庫城市名時，帶入該城市的溫度icon */}
                          {weatherData.map((item, i) =>
                            item.parameter[0].parameterValue ===
                            `${list.city}` ? (
                              item.weatherElement[0].elementValue >= 30 ? (
                                <ThermometerHigh
                                  key={i}
                                  className="mr-1 mb-1"
                                />
                              ) : item.weatherElement[0].elementValue <= 15 ? (
                                <ThermometerLow key={i} className="mr-1 mb-1" />
                              ) : (
                                <ThermometerHalf
                                  key={i}
                                  className="mr-1 mb-1"
                                />
                              )
                            ) : (
                              ''
                            )
                          )}
                          {/* 判斷氣象的城市名等於資料庫城市名時，帶入該城市的溫度 */}
                          {weatherData.map((item, i) =>
                            item.parameter[0].parameterValue ===
                            `${list.city}` ? (
                              item.weatherElement[0].elementValue === '-99' ? (
                                <span key={i}>無溫度資料</span>
                              ) : (
                                <span key={i}>
                                  {Math.floor(
                                    item.weatherElement[0].elementValue
                                  )}
                                  度
                                </span>
                              )
                            ) : (
                              ''
                            )
                          )}
                        </p>
                      </div>
                    </div>

                    {/* <!-- Level bar start --> */}
                    <div className="mountain_H_bar_list align-items-center">
                      <p className="mountain_H_list_title mr-2 mb-0">難度</p>
                      <div className="mountain_H_progress-bg">
                        <div className="mountain_H_progress-bar-L-Xiangshan">
                          <p className="raised">Low</p>
                        </div>
                        <div className="mountain_H_progress-bar-M-Xiangshan">
                          <p className="raised">Middle</p>
                        </div>
                        <div className="mountain_H_progress-bar-H-Xiangshan">
                          <p className="raised">High</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Level bar end --> */}

                    {/* <!-- Distance bar start --> */}
                    <div className="mountain_H_bar_list align-items-center">
                      <p className="mountain_H_list_title mr-2 mb-0">公里</p>
                      <div className="mountain_H_progress-bg">
                        <span className="mountain_H_progress-bg-font-Xiangshan">
                          {list.distance} km
                        </span>
                        <div
                          style={{ width: `${list.distance}%` }}
                          className="mountain_H_progress_distance-bar"
                        ></div>
                      </div>
                    </div>
                    {/* <!-- Distance bar end --> */}

                    {/* <!-- Time bar start --> */}
                    <div className="mountain_H_bar_list align-items-center">
                      <p className="mountain_H_list_title mr-2 mb-0">時間</p>
                      <div className="mountain_H_progress-bg">
                        {list.time / 60 === 37 ? (
                          <span
                            style={{ color: '#414141' }}
                            className="mountain_H_progress-bg-font-Xiangshan mountain_H_progress-bg-font-Xiangshan_day"
                          >
                            {Math.floor(list.time / 60 / 24) + ' day '}
                            {Math.floor((list.time / 60) % 24) === 0
                              ? ''
                              : Math.floor((list.time / 60) % 24) + ' hr'}
                            {Math.floor(list.time % 60) === 0
                              ? ''
                              : Math.floor(list.time % 60) + ' m'}
                          </span>
                        ) : (
                          <span
                            style={{ color: 'white' }}
                            className="mountain_H_progress-bg-font-Xiangshan mountain_H_progress-bg-font-Xiangshan_day"
                          >
                            {Math.floor(list.time / 60 / 24) + ' days '}
                            {Math.floor((list.time / 60) % 24) === 0
                              ? ''
                              : Math.floor((list.time / 60) % 24) + ' hr'}
                            {Math.floor(list.time % 60) === 0
                              ? ''
                              : Math.floor(list.time % 60) + ' m'}
                          </span>
                        )}
                        <div
                          style={{ width: `${list.time / 60}%` }}
                          className="mountain_H_progress_time-bar"
                        ></div>
                      </div>
                    </div>
                    {/* <!-- Time bar end --> */}
                  </div>
                  {/* 要連到山的文章 */}
                  <Link
                    to={`/recommend/detail/${list.id}`}
                    className="mountain_H_article_button btn btn-primary btn-lg"
                  >
                    查看文章
                  </Link>
                </div>
              </div>
            ))}
            {/* 大霸北稜線 list end */}
          </div>
          {/* <!-- =========map list end========= --> */}

          {/* <!-- =========pages_btn start========= --> */}
          {pages_btn}
          {/* <!-- =========pages_btn end========= --> */}
          <div className="ountain_content_line"></div>
          {/* <!-- =========推薦商品 start========= --> */}
          <div className="mountain_product_box">
            <div className="mountain_product_title">
              <h3 className="h2">推薦商品</h3>
            </div>
            <div className="mountain_product-list my-4">
              {productData.map((item) => {
                return (
                  <ProductRecH
                    productId={item.id}
                    brand={item.product_brand}
                    name={item.product_name}
                    price={item.price}
                    picture={item.pic}
                    type={item.type}
                    key={item.id}
                  />
                );
              })}
              <div className="mountain_H_downLowBear"></div>
              <div className="mountain_H_bearSpeak"></div>
            </div>
          </div>
          {/* <!-- =========推薦商品 end========= --> */}
        </div>
      </div>
      {/* <!-- =========content end========= --> */}
    </>
  );
}

export default MapH;
