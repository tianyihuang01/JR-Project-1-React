import React from "react";
// import ReactDOM from "react-dom";
import "./PageTitle.scss";

const PageTitle = ({ foo }) => (
	<span>
		<img
			className="card-img-top"
			id="card__top"
			src="../public/assets/images/main_bg.png"
		/>
		<div className="card-img-overlay text-white text-center" id="card__overlay">
			<h2 className="card-title page__name">{foo}</h2>
		</div>
	</span>
);

export default PageTitle;
