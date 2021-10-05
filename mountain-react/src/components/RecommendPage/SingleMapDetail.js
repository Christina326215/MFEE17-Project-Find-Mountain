import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import levelLow from '../../img/article-img/level_low.svg';

// 申請的google api key
import { apiKey } from '../../utils/config';
import { FileX } from 'react-bootstrap-icons';

// const mapStyles = {
//   width: '90%',
//   height: '100vh',
// };

// const mapStyle = [
//   {
//     featureType: 'all',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         weight: '2.00',
//       },
//     ],
//   },
//   {
//     featureType: 'all',
//     elementType: 'geometry.stroke',
//     stylers: [
//       {
//         color: '#9c9c9c',
//       },
//     ],
//   },
//   {
//     featureType: 'all',
//     elementType: 'labels.text',
//     stylers: [
//       {
//         visibility: 'on',
//       },
//     ],
//   },
//   {
//     featureType: 'landscape',
//     elementType: 'all',
//     stylers: [
//       {
//         color: '#f2f2f2',
//       },
//     ],
//   },
//   {
//     featureType: 'landscape',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#ffffff',
//       },
//     ],
//   },
//   {
//     featureType: 'landscape.man_made',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#ffffff',
//       },
//     ],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'all',
//     stylers: [
//       {
//         visibility: 'off',
//       },
//     ],
//   },
//   {
//     featureType: 'road',
//     elementType: 'all',
//     stylers: [
//       {
//         saturation: -100,
//       },
//       {
//         lightness: 45,
//       },
//     ],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#eeeeee',
//       },
//     ],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#7b7b7b',
//       },
//     ],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#ffffff',
//       },
//     ],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'all',
//     stylers: [
//       {
//         visibility: 'simplified',
//       },
//     ],
//   },
//   {
//     featureType: 'road.arterial',
//     elementType: 'labels.icon',
//     stylers: [
//       {
//         visibility: 'off',
//       },
//     ],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'all',
//     stylers: [
//       {
//         visibility: 'off',
//       },
//     ],
//   },
//   {
//     featureType: 'water',
//     elementType: 'all',
//     stylers: [
//       {
//         color: '#46bcec',
//       },
//       {
//         visibility: 'on',
//       },
//     ],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#c8d7d4',
//       },
//     ],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#070707',
//       },
//     ],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#ffffff',
//       },
//     ],
//   },
// ];

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
    this.map = map;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate',
      prevProps.lat,
      this.props.lat,
      prevProps.lng,
      this.props.lng
    );

    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }

    if (prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng) {
      this.recenterMap();
    }
  }

  recenterMap = () => {
    const map = this.map;
    const curr = { lat: this.props.lat, lng: this.props.lng };

    const google = this.props.google;
    const maps = google.maps;

    console.log(this.props, this.map);

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
