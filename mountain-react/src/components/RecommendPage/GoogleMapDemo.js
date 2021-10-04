import SingleMapDetail from './SingleMapDetail';
import GeocodeSearch from './GeocodeSearch';
import { useState, useEffect } from 'react';

function GoogleMapDemo() {
  // 給一個預設的中心點
  const [lat, setLat] = useState(25.02766458451496);
  const [lng, setLng] = useState(121.57075289536297);

  useEffect(() => {
    console.log(lat);
  }, [lat]);

  useEffect(() => {
    console.log(lng);
  }, [lng]);

  return (
    <>
      {/* <div style={{ height: 500, background: 'red' }}> */}
      {/* <GeocodeSearch setLat={setLat} setLng={setLng} /> */}
      <SingleMapDetail
        lat={lat}
        lng={lng}
        infoTitle="象山親山步道"
        infoContent="110台北市信義區信義路五段150巷342弄"
      />

      {/* <h2>捷運科技大樓站</h2>
      <SingleMapDetail
        lat={25.026312}
        lng={121.543439}
        infoTitle="捷運科技大樓站"
        infoContent="this is a sample string"
      /> */}
      {/* </div> */}
    </>
  );
}

export default GoogleMapDemo;
