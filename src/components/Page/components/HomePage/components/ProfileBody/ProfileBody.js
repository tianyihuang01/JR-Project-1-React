import React from "react";
// import ReactDOM from "react-dom";

import ProfileMe from "../ProfileMe/ProfileMe";
import ProfileContact from "../ProfileContact/ProfileContact";

const ProfileBody = () => (
	<div className="card-body">
		<div className="row page__content">
			<ProfileMe />
			<ProfileContact />
		</div>
	</div>
);

export default ProfileBody;
