import React from "react";
// import ReactDOM from "react-dom";
import {faUser, faEnvelope, faComment} from "@fortawesome/free-solid-svg-icons"

import FormItem from "../FormItem/FormItem";

const ContactForm = () => (
	<div className="col-lg-6 col-md-6 col-sm-12">
		<h3 className="resume__title">
			Contact
			<span className="theme--color">&nbsp;Form</span>
		</h3>

		<form className="needs-validation" noValidate>
			<FormItem
				id="inlineFormInputName2"
				desc="Full Name"
				fa={faUser}
				pattern=""
				invalid="please provide your full name."
			/>

			<FormItem
				id="inlineFormInputEmail2"
				desc="Email Address"
				fa={faEnvelope}
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
				invalid="please provide your valid Email address."
			/>

			<FormItem
				id="inlineFormInputMessage2"
				desc="Message for me"
				fa={faComment}
				pattern=""
				invalid="please provide your feedback."
			/>

			<br />
			<div
				className="g-recaptcha brochure__form__captcha"
				data-sitekey="6LfULykaAAAAAFTB505w9yfsOVDVuULltLLUlv1C"
			></div>

			<button type="submit" className="btn btn-custom mb-2">
				<span className="btn--text">SEND MESSAGE</span>
			</button>
		</form>
	</div>
);

export default ContactForm;
