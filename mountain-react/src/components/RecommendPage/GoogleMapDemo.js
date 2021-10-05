import SingleMapDetail from './SingleMapDetail';
import GeocodeSearch from './GeocodeSearch';
import { useState, useEffect } from 'react';

function GoogleMapDemo(props) {
  const { detail, setDetail, id } = props;
  // 給一個預設的中心點
  const [lat, setLat] = useState(25.02766458451496);
  const [lng, setLng] = useState(121.57075289536297);
  // 景點地址
  const [searchAddress, setSearchAddress] = useState('');
  useEffect(() => {
    console.log(lat);
  }, [lat]);

  useEffect(() => {
    console.log(lng);
  }, [lng]);

  return (
    <>
      {/* <div style={{ height: 500, background: 'red' }}> */}
      <GeocodeSearch
        setSearchAddress={setSearchAddress}
        detail={detail}
        setLat={setLat}
        setLng={setLng}
      />
      <SingleMapDetail
        lat={lat}
        lng={lng}
        infoTitle={detail.name}
        infoContent={searchAddress}
        // style={{ mapStyle }}
        // options={{
        //   styles: mapStyle,
        // }}
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
