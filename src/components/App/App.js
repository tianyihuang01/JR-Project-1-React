// import React from 'react';
// import ReactDOM from 'react';

import Header from "../Header/Header.js";
import HomePage from "../Page/components/HomePage/HomePage";
import ResumePage from "../Page/components/ResumePage/ResumePage";
import ServicesPage from "../Page/components/ServicesPage/ServicesPage";
import BlogPage from "../Page/components/BlogPage/BlogPage";
import ContactPage from "../Page/components/ContactPage/ContactPage";
import Footer from "../Footer/footer";
import { PAGE } from "../../constants";

let currentPage = PAGE.HOME;

const obj = {
	currentPage: PAGE.HOME
};

const App = ({render,}) => {

	const changePage = (pageName) => {
		console.log('changePage');
		obj.currentPage = pageName;
		render();
	}

	return (
		<div>
			<header>
				<Header currentPage={obj.currentPage} changePage={changePage}></Header>
			</header>
			<main>
				<HomePage active={obj.currentPage == PAGE.HOME} />
				<ResumePage active={obj.currentPage == PAGE.RESUME} />
				<ServicesPage active={obj.currentPage == PAGE.SERVICES} />
				<BlogPage active={obj.currentPage == PAGE.BLOG} />
				<ContactPage active={obj.currentPage == PAGE.CONTACT} />
			</main>
			<Footer />
		</div>
	);
};

export default App;
