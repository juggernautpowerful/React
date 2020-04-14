import React from 'react'
import mapboxgl from "mapbox-gl";

export class MapPage extends React.Component {
    componentDidMount() {
      mapboxgl.accessToken=
        'pk.eyJ1Ijoic2tpcHBlcnUiLCJhIjoiY2s4c3NoNDk0MDJoYzNubmRwNmRkd29maCJ9.UeNSNHUBNRtev-eTiY4x2A';
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        center: [30.233319, 59.942138],
        zoom:10,
        style: 'mapbox://styles/mapbox/streets-v9'
      });
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
      const style = {
        position: 'absolute',
        top: '70px',
        bottom: 0,
        width: '100%'
      };
  
      return <div style={style} ref={el => this.mapContainer = el} />;
    }
  }
 