import React from "react";
// import ReactDOM from "react-dom";

const Clients = ({ items }) => (
	<div className="row">
		{items.map(({ key, src }) => (
			<div
				className="col-lg-4 col-md-6 col-sm-12 servicesItem__imgContainer--2"
				key={key}
			>
				<img className="servicesItem__img--2" src={src} />
			</div>
		))}
	</div>
);

export default Clients;
