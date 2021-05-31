import React from "react";
// import ReactDOM from "react-dom";

import ProfileTitle from "./components/ProfileTitle/ProfileTitle";
import ProfileBody from "./components/ProfileBody/ProfileBody";
import Page from "../../Page";

import "./HomePage.scss";

const HomePage = ({ active }) => (
	<Page id="home" active={active}>
		<img
			className="card-img-top"
			id="home__top"
			src="../public/assets/images/main_bg.png"
		/>
		<img className="profile__avatar" src="../public/assets/images/photo.png" />
		<ProfileTitle />
		<ProfileBody />
	</Page>
);

export default HomePage;
