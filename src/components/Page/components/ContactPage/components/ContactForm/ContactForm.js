import React from "react";
// import ReactDOM from "react-dom";
import {faUser, faEnvelope, faComment} from "@fortawesome/free-solid-svg-icons"
// import { loadReCaptcha } from "react-recaptcha-google";
import ReCAPTCHA from "react-google-recaptcha";

import FormItem from "../FormItem/FormItem";
import "./ContactForm.scss";

const ContactForm = () => {
	(function () {
		"use strict";
		window.addEventListener(
			"load",
			function () {
				// Fetch all the forms we want to apply custom Bootstrap validation styles to
				var forms = document.getElementsByClassName("needs-validation");
				// Loop over them and prevent submission
				var validation = Array.prototype.filter.call(forms, function (form) {
					form.addEventListener(
						"submit",
						function (event) {
							if (form.checkValidity() === false) {
								event.preventDefault();
								event.stopPropagation();
							}
							form.classList.add("was-validated");
						},
						false
					);
				});
			},
			false
		);
	})();

	return(
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
			{/* <div
				className="g-recaptcha brochure__form__captcha"
				data-sitekey="6LfULykaAAAAAFTB505w9yfsOVDVuULltLLUlv1C"
			></div> */}
			<ReCAPTCHA
				sitekey="6LfULykaAAAAAFTB505w9yfsOVDVuULltLLUlv1C"
			/>

			<button type="submit" className="btn btn-custom mb-2">
				<span className="btn--text">SEND MESSAGE</span>
			</button>
		</form>
	</div>)
};

export default ContactForm;
