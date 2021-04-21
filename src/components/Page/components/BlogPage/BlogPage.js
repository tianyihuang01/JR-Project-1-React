import React from "react";
// import ReactDOM from "react-dom";

import Page from "../../Page";
import PageTitle from "../PageTitle/PageTitle";
import BlogContent from "./components/BlogContent/BlogContent";

const BlogPage = ({ active }) => (
	<Page id="blog" active={active}>
		<PageTitle foo="Blog" />

		<div className="card-body profile__content">
			<div className="row">
				<BlogContent />
				<BlogContent />
				<BlogContent />
				<BlogContent />
			</div>
		</div>
	</Page>
);

export default BlogPage;
