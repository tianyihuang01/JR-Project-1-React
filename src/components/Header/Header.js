import React from "react";
// import ReactDOM from "react-dom";

import NavList from "./components/NavList/NavList";

const Header = ({ currentPage, changePage }) => (
	<nav
		className="navbar fixed-top navbar-expand-sm bg-light navbar-light"
		id="mainNav"
	>
		<div className="container">
			<a className="navbar-brand" href="#">
				Tianyi <span className="theme--color">Huang</span>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse align-items-center"
				id="navbarResponsive"
			>
				<NavList currentPage={currentPage} changePage={changePage} />
			</div>
		</div>
	</nav>
);

export default Header;
