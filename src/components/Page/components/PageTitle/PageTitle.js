import React from "react";
// import ReactDOM from "react-dom";
import "./PageTitle.scss";

const PageTitle = ({ foo }) => (
	<span>
		<img
			className="card-img-top"
			id="resume__top"
			src="assets/images/main_bg.png"
		/>
		<div
			className="card-img-overlay text-white text-center"
			id="resume__overlay"
		>
			<h2 className="card-title profile__name">{foo}</h2>
		</div>
	</span>
);

export default PageTitle;
