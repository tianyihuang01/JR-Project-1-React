import React from "react";
// import ReactDOM from "react-dom";

import SkillsBar from "../SkillsBar/SkillsBar";

const Skills = ({ foo }) => (
	<div className="col-lg-6 col-md-6 col-sm-12">
		<h3 className="resume__title">
			{foo}
			<span className="theme--color">&nbsp;Skills</span>
		</h3>
		<div>
			{(() => {
				switch (foo) {
					case "Design":
						return (
							<SkillsBar
								items={[
									{
										key: "Web Design",
										foo: "Web Design",
										bar: "skill--1",
									},
									{
										key: "Graphic Design",
										foo: "Graphic Design",
										bar: "skill--2",
									},
									{
										key: "Print Design",
										foo: "Print Design",
										bar: "skill--3",
									},
								]}
							/>
						);
					case "Coding":
						return (
							<SkillsBar
								items={[
									{
										key: "HTML5",
										foo: "HTML5",
										bar: "skill--4",
									},
									{
										key: "CSS3/LESS/SASS",
										foo: "CSS3/LESS/SASS",
										bar: "skill--2",
									},
									{
										key: "jQuery",
										foo: "jQuery",
										bar: "skill--5",
									},
								]}
							/>
						);
				}
			})()}
		</div>
	</div>
);

export default Skills;
