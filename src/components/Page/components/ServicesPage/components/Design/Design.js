import React from "react";
// import ReactDOM from "react-dom";

const Design = ({ items }) => (
	<div className="row">
		{items.map(({ key, src, title, desc }) => (
			<div className="col-lg-4 col-md-6 col-sm-12" key={key}>
				<div className="servicesItem">
					<div className="servicesItem__imgContainer">
						<img className="servicesItem__img" src={src} />
					</div>
					<h4 className="servicesItem__title">{title}</h4>
					<div className="servicesItem__desc">{desc}</div>
				</div>
			</div>
		))}
	</div>
);

export default Design;
