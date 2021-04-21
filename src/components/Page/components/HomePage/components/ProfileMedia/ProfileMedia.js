import React from "react";
// import ReactDOM from "react-dom";

// const ProfileMedia = ({ foo }) => (
// 	<span>
// 		<button
// 			type="button"
// 			className={["btn", "btn-light", "fa", foo].join(" ")}
// 		></button>
// 	</span>
// );

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ProfileMedia = ({ foo, bar }) => (
	<span>
		<button type="button" className={["btn", "btn-light", foo].join(" ")}>
			<FontAwesomeIcon icon={bar} />
		</button>
	</span>
);

export default ProfileMedia;
