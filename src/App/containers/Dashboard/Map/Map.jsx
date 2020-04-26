import React from "react";
import mapboxgl from "mapbox-gl";

export class Map extends React.Component {
	componentDidMount() {
		mapboxgl.accessToken =
			"pk.eyJ1Ijoic2tpcHBlcnUiLCJhIjoiY2s4c3NoNDk0MDJoYzNubmRwNmRkd29maCJ9.UeNSNHUBNRtev-eTiY4x2A";
		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			center: [30.248998403385492, 59.950940940256835],
			zoom: 15,
			style: "mapbox://styles/mapbox/streets-v9",
		});
	}

	componentWillUnmount() {
		this.map.remove();
	}

	render() {
		const style = {
			position: "absolute",
			top: "0",
			left: 0,
			right: 0,
			bottom: 0,
			width: "100%",
			height: `${window.innerHeight - 100}px`

		};

		return (
			<div style={{ position: "relative", zIndex: "-10" }}>
				<div style={style} ref={(el) => (this.mapContainer = el)} />
			</div>
		);
	}
}
