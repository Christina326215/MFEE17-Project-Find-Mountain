import { useState, useEffect } from 'react';
import Geocode from 'react-geocode';

// 申請的google api key
import { apiKey } from '../../utils/config';

function GeocodeSearch(props) {
  const [address, setAddress] = useState('');
  // 回送lat與lng的父母層callback函式
  const { setLng, setLat, detail, setSearchAddress } = props;

  useEffect(() => {
    if (!detail) {
      return;
    } else {
      // console.log('detail', detail);
      setAddress(detail.name);
      ////// 重新搜尋預設文章地址
      // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
      Geocode.setApiKey(apiKey);

      // set response language. Defaults to english.
      Geocode.setLanguage('zh-TW');

      // set response region. Its optional.
      // A Geocoding request with region=es (Spain) will return the Spanish city.
      Geocode.setRegion('tw');

      // Enable or disable logs. Its optional.
      Geocode.enableDebug();
      // console.log('address', address);
      // console.log('detail.name', detail.name);
      // Get latitude & longitude from address.
      Geocode.fromAddress(detail.name).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(
            'response.results[0].formatted_address',
            response.results[0].formatted_address
          );
          setSearchAddress(response.results[0].formatted_address);
          console.log('lat, lng', lat, lng);
          setLat(lat);
          setLng(lng);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [detail]);

  // 點擊後搜尋文章地址
  const handleGetGeocode = () => {
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey(apiKey);

    // set response language. Defaults to english.
    Geocode.setLanguage('zh-TW');

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion('tw');

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    // Get latitude & longitude from address.
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        // console.log('lat, lng', lat, lng);
        setLat(lat);
        setLng(lng);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3">
        <div className="navbar-brand">景點地圖搜尋</div>
        <form className="form-inline">
          {/* <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <input
            type="text"
            placeholder="輸入住址"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control mr-2"
          />
          <button
            onClick={handleGetGeocode}
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
          >
            搜尋地圖
          </button>
        </form>
      </nav>
    </>
  );
}

export default GeocodeSearch;
