import React from "react";
// import ReactDOM from "react-dom";

import EduExpContent from "../EduExpContent/EduExpContent";

import "./EduExp.scss";

const EduExp = ({ foo }) => (
	<div className="col-lg-6 col-md-6 col-sm-12">
		<h3 className="resume__title">{foo}</h3>
		<div className="resume__card--outer">
			{(() => {
				switch (foo) {
					case "Education":
						return (
							<EduExpContent
								items={[
									{
										key: "1",
										title: "Full-Stack Web Development",
										year: "2021",
										org: "JR Academy",
										body:
											"Reactjs, Nodejs, .Net Core, Spring Boot, Redux, AWS, Agile project practice. Two personal projects, one Agile group project, three months internship.",
									},
									{
										key: "2",
										title: "Enterprise application development for the web",
										year: "2020",
										org: "Monash University",
										body:
											"Build a Web application on the Java EE technology, including JSF, ManagedBean, EJB, ORM, JAAS, RESTful API.",
									},
									{
										key: "3",
										title: "User interface design and usability",
										year: "2020",
										org: "Monash University",
										body:
											"Effective design during systems development; tools and techniques for understanding users better.",
									},
								]}
							/>
						);
					case "Experience":
						return (
							<EduExpContent
								items={[
									{
										key: "3",
										title: "Web App - Personal Introduction",
										year: "2021",
										org: "Web developer",
										body:
											"A Single Page Application based on React.js. Webpack is used to generate bundles. SASS, Flexbox, Bootstrap library, Font Awesome library.",
									},
									{
										key: "4",
										title: "Web App - Customer Management System",
										year: "2020",
										org: "Web developer",
										body:
											"a Web app on the Java EE technology. EJB to implement business logic, JFS to generate web pages, ORM to do Java Persistence, JAAS to do user auth.",
									},
									{
										key: "5",
										title: "Android Native App - Movie Memoir",
										year: "2020",
										org: "Android developer",
										body:
											"JPQL, RESTful API, NamedQuery. Multi-Activity, Fragments, AsyncTask, OKHttp, Room Persistence, SharedPreferences, OMDB API, Map API",
									},
								]}
							/>
						);
				}
			})()}
		</div>
	</div>
);

export default EduExp;
