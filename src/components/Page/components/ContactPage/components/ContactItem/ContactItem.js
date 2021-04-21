import React from "react";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactItem = ({ items }) => (
	<span>
		{items.map(({ key, fa, media, desc }) => (
			<div className="contact__info" key={key}>
				<span>
					<button
						type="button"
						className={`btn btn-light theme--color profile__media${media}`}
					>
						<FontAwesomeIcon icon={fa} />
					</button>
				</span>
				<span className="contact__info--des">{desc}</span>
			</div>
		))}
	</span>
);

export default ContactItem;
