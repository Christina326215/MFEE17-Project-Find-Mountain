import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useEffect } from 'react';
// import levelLow from '../../img/article-img/level_low.svg';

// 申請的google api key
import { apiKey } from '../../utils/config';
import { FileX } from 'react-bootstrap-icons';

// const mapStyles = {
//   width: '90%',
//   height: '100vh',
// };

export class SingleMapDetail extends Component {
  static defaultProps = {
    lat: 25.0259029,
    lng: 121.5703875,
  };

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  onMapReady = (mapProps, map) => {
    // console.log('好了');
    this.map = map;
  };

  // constructor(props) {
  //   console.log('hihih');
  //   super(props);
  //   this.state = {
  //     lat: 25.0259029,
  //     lng: 121.5703875,
  //   };
  // }

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   'componentDidUpdate',
    //   prevProps.lat,
    //   this.props.lat,
    //   prevProps.lng,
    //   this.props.lng
    // );
    ////////
    // console.log('prevProps.google', prevProps.google);
    // console.log('this.props.google', this.props.google);
    if (prevProps.google !== this.props.google) {
      // console.log('沒進來1');
      this.loadMap();
    }
    // console.log('不知道為什麼這邊卡住？？要重整才會出現？');

    if (prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng) {
      // console.log('沒進來2');
      this.recenterMap();
    }
    // this.recenterMap();
    // console.log('prevProps.lat ', prevProps.lat);
    // console.log('this.props.lat ', this.props.lat);
    // console.log('prevProps.lng', prevProps.lng);
    // console.log('this.props.lng', this.props.lng);
    // console.log('卡住2');
    // return;
  }

  recenterMap = () => {
    const map = this.map;
    const curr = { lat: this.props.lat, lng: this.props.lng };
    // console.log('this.props.lat', this.props.lat);
    // console.log('this.props.lng', this.props.lng);

    const google = this.props.google;
    const maps = google.maps;

    // console.log(this.props, this.map);

    if (map) {
      //console.log(this.markerOne.current.marker)
      let center = new maps.LatLng(curr.lat, curr.lng);
      map.panTo(center);
      map.setZoom(12);

      //console.log(this.infoWindowOne.current.infowindow)
      // let markerCurrent = this.markerOne.current.marker
      // let infowindowCurrent = this.infoWindowOne.current.infowindow
      // infowindowCurrent.open(map, markerCurrent)
    }
  };

  render() {
    //console.log(this.props)
    return (
      <Map
        google={this.props.google}
        containerStyle={{
          width: '100%',
          height: '400px',
          position: 'relative',
        }}
        zoom={18}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        // style={mapStyles}
        // style={mapStyle}
        // options={{
        //   styles: mapStyle,
        // }}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng,
        }}
        onClick={this.onMapClicked}
        onReady={this.onMapReady}
      >
        <Marker
          // icon={{
          //   url: levelLow,
          //   scale: 4,
          //   // scaledSize: this.props.google.maps.Size(15, 25),
          //   // scaledSize: this.props.google.maps.Size(500, 500),
          //   // anchor: new google.maps.Point(17, 46),
          //   // scaledSize: new google.maps.Size(37, 37),
          // }}
          onClick={this.onMarkerClick}
          name={'物件位置'}
          position={{ lat: this.props.lat, lng: this.props.lng }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h5 className="mr-5">{this.props.infoTitle}</h5>
            <p className="mr-3">{this.props.infoContent}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
  language: 'zh-TW',
})(SingleMapDetail);
