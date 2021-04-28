import React from "react";
// import ReactDOM from "react-dom";

import "./BlogContent.scss";

const BlogContent = () => (
	<div className="col-lg-6 col-md-12 col-sm-12">
		<div className="blog__card">
			<div className="blog__card--container">
				<img
					className="blog__card--img"
					src="assets/images/blog/blog_post_1.jpg"
				/>
				<div className="blog__card--middle">
					<div>Tianyi Huang</div>
				</div>
			</div>
			<div className="blog__card--label text-center">
				<div className="theme--color day">16</div>
				<span className="theme--color month">Nov</span>
			</div>
			<div className="blog__card--body text-center">
				<p className="servicesItem__desc">Travel</p>
				<p>
					<b>Bootstrap is the most popular framework</b>
				</p>
			</div>
		</div>
	</div>
);

export default BlogContent;
