import React from "react";
// import ReactDOM from "react-dom";

import Design from "./components/Design/Design";
import Clients from "./components/Clients/Clients";
import PageTitle from "../PageTitle/PageTitle";
import Page from "../../Page";

const ServicesPage = ({ active }) => (
	<Page id="services" active={active}>
		<PageTitle foo="Services" />

		<div className="card-body page__content">
			<h3 className="block__title">
				Design
				<span className="theme--color">&nbsp;Skills</span>
			</h3>

			<Design
				items={[
					{
						key: "html5",
						src: "assets/images/html5.png",
						title: "HTML5",
						desc:
							"Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.",
					},
					{
						key: "css3",
						src: "assets/images/css3.png",
						title: "CSS3",
						desc:
							"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
					},
					{
						key: "JS",
						src: "assets/images/js.png",
						title: "JavaScript",
						desc:
							"JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
					},
				]}
			/>

			<h3 className="block__title">Clients</h3>

			<Clients
				items={[
					{
						key: "rea",
						src: "assets/images/rea.png",
					},
					{
						key: "seek",
						src: "assets/images/seek.png",
					},
					{
						key: "rea2",
						src: "assets/images/rea.png",
					},
				]}
			/>
		</div>
	</Page>
);

export default ServicesPage;
