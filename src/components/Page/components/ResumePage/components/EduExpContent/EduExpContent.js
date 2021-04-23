import React from "react";
// import ReactDOM from "react-dom";

const EduExpContent = ({items}) => (
	<>
	{items.map(({title, year, org, body})=>(
		<div className="resume__card--inner">
			<h4 className="resume__card--title">{title}</h4>
			<span className="theme--color resume__card--year">{year}</span>
			<span className="resume__card--subtitle">{org}</span>
			<p className="resume__card--body">{body}</p>
		</div>
	))}
	</>
);

export default EduExpContent;
