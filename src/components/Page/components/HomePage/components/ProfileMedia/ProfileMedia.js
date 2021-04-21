import React from "react";
// import ReactDOM from "react-dom";

const ProfileMedia = ({ foo }) => (
	<span>
		<button
			type="button"
			className={["btn", "btn-light", "fa", foo].join(" ")}
		></button>
	</span>
);

export default ProfileMedia;
