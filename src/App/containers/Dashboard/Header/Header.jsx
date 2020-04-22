import React from "react";
import { Logo } from "loft-taxi-mui-theme";
import { NavLink } from "react-router-dom";

const urls = [
	{ text: "профиль", link: "/dashboard/profile" },
	{ text: "карта", link: "/dashboard/map" },
];

export class Header extends React.Component {
	render() {
		return (
			<header>
				<Logo animated />
				<ul>
					{urls.map((el) => (
						<li key={el.text}>
							<NavLink to={el.link}>{el.text}</NavLink>
						</li>
					))}
				</ul>
			</header>
		);
	}
}
