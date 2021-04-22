import React from 'react';
// import ReactDOM from 'react-dom';

import Header from "../Header/Header.js";
import HomePage from "../Page/components/HomePage/HomePage";
import ResumePage from "../Page/components/ResumePage/ResumePage";
import ServicesPage from "../Page/components/ServicesPage/ServicesPage";
import BlogPage from "../Page/components/BlogPage/BlogPage";
import ContactPage from "../Page/components/ContactPage/ContactPage";
import Footer from "../Footer/footer";
import { PAGE } from "../../constants";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: PAGE.HOME,
		};

		this.changePage = this.changePage.bind(this);
	}

	changePage(pageName) {
		this.setState({
			currentPage: pageName,
		});
	}

	render() {
		const { currentPage } = this.state;

		return (
			<>
				<header>
					<Header currentPage={currentPage} changePage={this.changePage}></Header>
				</header>
				<main>
					<HomePage active={currentPage == PAGE.HOME} />
					<ResumePage active={currentPage == PAGE.RESUME} />
					<ServicesPage active={currentPage == PAGE.SERVICES} />
					<BlogPage active={currentPage == PAGE.BLOG} />
					<ContactPage active={currentPage == PAGE.CONTACT} />
				</main>
				<Footer />
			</>
		);
	}
}

export default App;
