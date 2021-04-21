import React from "react";
// import ReactDOM from "react-dom";

import GetInTouch from "./components/GetInTouch/GetInTouch";
import ContactForm from "./components/ContactForm/ContactForm";
import PageTitle from "../PageTitle/PageTitle";
import Page from "../../Page";

const ContactPage = ({ active }) => (
	<Page id="contact" active={active}>
		<PageTitle foo="Contact" />
		<div className="card-body profile__content">
			<div className="row">
				<GetInTouch />
				<ContactForm />
			</div>
		</div>
	</Page>
);

export default ContactPage;
