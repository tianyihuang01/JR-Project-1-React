import React from "react";
// import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone, faCheck } from "@fortawesome/free-solid-svg-icons";

import GoogleMap from "../GoogleMap/GoogleMap";
import ContactItem from "../ContactItem/ContactItem";

const GetInTouch = () => (
	<div className="col-lg-6 col-md-6 col-sm-12">
		<h3 className="resume__title">
			Get in
			<span className="theme--color">&nbsp;Touch</span>
		</h3>

		<div className="contact__map">
			<GoogleMap />
		</div>

		<ContactItem
			items={[
				{
					key: "contact-city",
					fa: faMapMarkerAlt,
					media: "--fb",
					desc: "Melbourne, Australia",
				},
				{
					key: "contact-email",
					fa: faEnvelope,
					media: "",
					desc: (
						<a href="mailto:t.huang.061@gmail.com" className="theme--color">
							t.huang.061@gmail.com
						</a>
					),
				},
				{
					key: "contact-phone",
					fa: faPhone,
					media: "",
					desc: "+0123 123 456 789",
				},
				{
					key: "contact-option",
					fa: faCheck,
					media: "",
					desc: "Freelance Available",
				},
			]}
		/>
	</div>
);

export default GetInTouch;
