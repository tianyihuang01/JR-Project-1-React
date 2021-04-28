import React from "react";
// import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import ProfileMedia from "../ProfileMedia/ProfileMedia";

import "./ProfileTitle.scss";

const ProfileTitle = () => (
	<div className="card-img-overlay text-white text-center" id="home__overlay">
		<h2 className="card-title page__name">Tianyi Huang</h2>
		<p className="card-text profile__title">Full-Stack Web Developer</p>
		<ProfileMedia foo="page__media--fb" bar={faFacebookF} />
		<ProfileMedia foo="page__media--tw" bar={faTwitter} />
		<ProfileMedia foo="page__media--tw" bar={faInstagram} />
	</div>
);

export default ProfileTitle;
