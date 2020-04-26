import React from "react";
import { connect } from "react-redux";
//import { actions } from "../../Login/store/duck";
import { actions } from "../../../store/Login";

import { Logo } from "loft-taxi-mui-theme";
import { NavLink } from "react-router-dom";
import { Button, Typography, Toolbar, AppBar } from "@material-ui/core";

const urls = [
	{ text: "профиль", link: "/dashboard/profile" },
	{ text: "карта", link: "/dashboard/map" },
];

const mapDispatchToProps = (dispatch) => ({
	logOut: (value) => dispatch(actions.logOut(value)),
});

 

class Header extends React.Component {
	handleClick = () => {
		const { logOut } = this.props;
		logOut(this.state);
	};
	render() {
		return (
			<AppBar
				position="static"
				style={{
					backgroundColor: "#ffffff",
				}}
			>
				<Toolbar>
					<Typography
						variant="body1"
						style={{
							flexGrow: "1",
						}}
					>
						<Logo animated />
					</Typography>

					{urls.map((item) => (
						<Button key={item.link} component={NavLink} to={item.link}>
							{item.text}
						</Button>
					))}
					<Button onClick={this.handleClick}>Выйти</Button>
				</Toolbar>
			</AppBar>
		);
	}
}

const connectedHeader = connect(null, mapDispatchToProps)(Header);
export { connectedHeader as Header };
