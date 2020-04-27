import React from "react";
import mapboxgl from "mapbox-gl";

import { connect } from "react-redux";
import { OrderForm } from "../OrderForm";
import { NewOrder } from "../NewOrder";
import { actions, IsAddressesSelector } from "../../../store/AddressList";
import { drawRoute } from "./RouteUtils";
import { actions as routeActions, isRouteSelector } from "../../../store/Route";

class Map extends React.Component {
	componentDidMount() {
		mapboxgl.accessToken =
			"pk.eyJ1Ijoic2tpcHBlcnUiLCJhIjoiY2s4c3NoNDk0MDJoYzNubmRwNmRkd29maCJ9.UeNSNHUBNRtev-eTiY4x2A";
		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			center: [30.248998403385492, 59.950940940256835],
			zoom: 15,
			style: "mapbox://styles/mapbox/streets-v9",
		});

		//if (!this.props.isAddresses) {
			this.props.fetchAddressList();
		//}
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
			height: `${window.innerHeight - 100}px`,
		};
		///console.log(this.props.isRoute, this.props.route);

		if (this.props.isRoute) {
			drawRoute(this.map, this.props.route);
		}
		return (
			<>
				<div style={{ position: "relative", zIndex: "-10" }}>
					<div style={style} ref={(el) => (this.mapContainer = el)} />
				</div>
				{this.props.isRoute ? (
					<NewOrder flushRoute={this.props.routeClear} />
				) : (
					<OrderForm />
				)}
			</>
		);
	}
}
const mapStateToProps = (state) => ({
	isAddresses: IsAddressesSelector(state),
	isRoute: isRouteSelector(state),
	route: state.routeReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
	fetchAddressList: () => dispatch(actions.fetchAddressList()),
	routeClear: () => dispatch(routeActions.routeClear()),
});

const connectedMap = connect(mapStateToProps, mapDispatchToProps)(Map);
export { connectedMap as Map };
