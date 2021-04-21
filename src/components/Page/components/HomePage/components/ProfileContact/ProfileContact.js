import React from "react";
// import ReactDOM from "react-dom";

const ProfileContact = () => (
	<div className="col-lg-6 col-md-6 col-sm-12">
		<dl>
			<dt>Age</dt>
			<dd>29</dd>
			<dt>Residence</dt>
			<dd>Australia</dd>
			<dt>Address</dt>
			<dd>Level 3 / 57 Coronation Drive, Brisbane</dd>
			<dt>e-mail</dt>
			<dd>
				<a href="mailto:email@example.com" className="theme--color">
					info@jiangren.com
				</a>
			</dd>
			<dt>Phone</dt>
			<dd>+0123 123 456 789</dd>
		</dl>
	</div>
);

export default ProfileContact;
