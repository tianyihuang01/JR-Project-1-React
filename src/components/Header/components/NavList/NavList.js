import NavItem from "../NavItem/NavItem";
import {PAGE} from '../../../../constants'

const NavList = ({ currentPage, changePage }) => (
	<ul className="navbar-nav ml-auto align-items-center">
		{[{
			key:PAGE.HOME
		},{
			key:PAGE.RESUME
		},{
			key:PAGE.SERVICES
		},{
			key:PAGE.BLOG
		},{
			key:PAGE.CONTACT
		}].map((item) => (
			<NavItem
				key={item.key}
				active={currentPage == item.key}
				onClick={() => changePage(item.key)}
				foo={`#${item.foo}`}
			>
				{item.key}
			</NavItem>
		))}

		{/* <NavItem
			active={currentPage == PAGE.HOME}
			// pageName={PAGE.HOME}
			// changePage={changePage}
			onClick={() => changePage(PAGE.HOME)}
			foo="#home"
		>
			Home
		</NavItem>
		<NavItem
			active={currentPage == PAGE.RESUME}
			// pageName={PAGE.RESUME}
			// currentPage={currentPage}
			// changePage={changePage}
			onClick={() => changePage(PAGE.RESUME)}
			foo="#resume"
		>
			Resume
		</NavItem>
		<NavItem
			active={currentPage == PAGE.SERVICES}
			// pageName={PAGE.SERVICES}
			// currentPage={currentPage}
			// changePage={changePage}
			onClick={() => changePage(PAGE.SERVICES)}
			foo="#services"
		>
			Serivces
		</NavItem>
		<NavItem
			active={currentPage == PAGE.BLOG}
			// pageName={PAGE.BLOG}
			// currentPage={currentPage}
			// changePage={changePage}
			onClick={() => changePage(PAGE.BLOG)}
			foo="#blog"
		>
			Blog
		</NavItem>
		<NavItem
			active={currentPage == PAGE.CONTACT}
			// pageName={PAGE.CONTACT}
			// currentPage={currentPage}
			// changePage={changePage}
			onClick={() => changePage(PAGE.CONTACT)}
			foo="#contact"
		>
			Contact
		</NavItem> */}
	</ul>
);

export default NavList;
