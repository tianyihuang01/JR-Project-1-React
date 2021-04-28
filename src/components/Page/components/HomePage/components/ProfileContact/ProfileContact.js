import React from "react";
// import ReactDOM from "react-dom";

import "./ProfileContact.scss";

const ProfileContact = () => (
	<div className="col-lg-6 col-md-6 col-sm-12">
		<dl>
			<br/>
			<dt>Age</dt>
			<dd>26</dd>
			<dt>Residence</dt>
			<dd>Australia</dd>
			<dt>Address</dt>
			<dd>Caulfield East, 3145</dd>
			<dt>E-mail</dt>
			<dd>
				<a href="mailto:t.huang.061@gmail.com" className="theme--color">
					t.huang.061@gmail.com
				</a>
			</dd>
			<dt>Phone</dt>
			<dd>+0123 123 456 789</dd>
		</dl>
	</div>
);

export default ProfileContact;
